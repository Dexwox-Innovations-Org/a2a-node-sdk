import { EventEmitter } from 'events';
import {
  MessagePart,
  JsonRpcRequest,
  TraceClass,
} from '@dexwox/a2a-core';
import { validateMessageParts } from '@dexwox/a2a-core';
import { MessageClientOptions, StreamOptions } from './types';
import {
  normalizeError,
  A2ANetworkError,
} from './utils/error-handler';
import { sendRequest } from './utils/http-utils';
import { TaskClient } from './task-client';
import { AgentClient } from './agent-client';

@TraceClass()
export class MessageClient extends EventEmitter {
  private readonly options: MessageClientOptions;
  public readonly tasks: TaskClient;
  public readonly agents: AgentClient;

  constructor(options: MessageClientOptions) {
    super();
    this.options = {
      timeout: 5000,
      ...options
    };
    this.tasks = new TaskClient(this.options);
    this.agents = new AgentClient(this.options);
  }

  /**
   * Sends a message synchronously to an agent
   * @param parts Message parts to send
   * @param agentId Target agent ID
   * @returns Promise resolving to message ID
   * @throws A2AError if message fails to send
   */
  async sendMessage(parts: MessagePart[], agentId: string): Promise<string> {
    validateMessageParts(parts);

    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'sendMessage',
      params: { parts, agentId }
    };

    try {
      const response = await sendRequest(this.options, request);
      return response.result as string;
    } catch (err) {
      if (err instanceof Error && err.message.includes('Network')) {
        throw new A2ANetworkError('Failed to send message', {
          originalError: err,
          agentId
        });
      }
      throw normalizeError(err);
    }
  }

  /**
   * Streams messages to an agent using Server-Sent Events with robust error handling
   * @param parts Initial message parts
   * @param agentId Target agent ID
   * @param options Stream event handlers and configuration
   * @returns Promise that resolves when stream completes
   * @throws A2AError if streaming fails to start
   */
  async streamMessage(
    parts: MessagePart[],
    agentId: string,
    options: StreamOptions & {
      maxRetries?: number;
      retryDelay?: number;
      backoffFactor?: number;
      maxRetryDelay?: number;
      heartbeatInterval?: number;
      heartbeatTimeout?: number;
    }
  ): Promise<void> {
    const {
      maxRetries = 5,
      retryDelay = 1000,
      backoffFactor = 2,
      maxRetryDelay = 30000,
      heartbeatInterval = 10000,
      heartbeatTimeout = 30000,
      onMessage,
      onError,
      onComplete
    } = options;
    let retryCount = 0;
    let isStreaming = true;
    let lastHeartbeat = Date.now();

    const calculateDelay = (attempt: number): number => {
      const delay = retryDelay * Math.pow(backoffFactor, attempt);
      return Math.min(delay, maxRetryDelay);
    };

    const handleEvent = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'heartbeat') {
          lastHeartbeat = Date.now();
        } else {
          if (data.type === 'taskUpdate' && this.tasks) {
            this.tasks.handleTaskUpdate(data.task);
          }
          onMessage(data);
        }
      } catch (err) {
        onError?.(new Error('Failed to parse SSE event'));
      }
    };

    const setupEventSource = (): EventSource => {
      const streamUrl = `${this.options.baseUrl}/stream?agentId=${agentId}`;
      const eventSource = new EventSource(streamUrl);

      eventSource.onmessage = handleEvent;

      eventSource.onerror = (error) => {
        eventSource.close();
        isStreaming = false;
        if (retryCount < maxRetries) {
          const delay = calculateDelay(retryCount);
          retryCount++;
          setTimeout(doStream, delay);
        } else {
          onError?.(new Error('Stream connection failed after retries'));
        }
      };

      eventSource.addEventListener('close', () => {
        isStreaming = false;
        onComplete?.();
      });

      return eventSource;
    };

    const doStream = async (): Promise<void> => {
      const request: JsonRpcRequest = {
        jsonrpc: '2.0',
        method: 'streamMessage',
        params: { parts, agentId }
      };

      try {
        const response = await fetch(this.options.baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...this.options.headers
          },
          body: JSON.stringify(request)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        if (!response.body) throw new Error('No response body for streaming');

        const eventSource = setupEventSource();

        // Heartbeat monitoring
        const heartbeatMonitor = setInterval(() => {
          if (isStreaming && Date.now() - lastHeartbeat > heartbeatTimeout) {
            eventSource.close();
            onError?.(new Error('Heartbeat timeout exceeded'));
          }
        }, heartbeatInterval);

        // Cleanup on completion
        return new Promise<void>((resolve) => {
          eventSource.addEventListener('close', () => {
            clearInterval(heartbeatMonitor);
            resolve();
          });
        });
      } catch (err) {
        if (err instanceof Error && err.message.includes('Network')) {
          throw new A2ANetworkError('Streaming connection failed', {
            originalError: err,
            agentId,
            retryCount
          });
        }
        throw normalizeError(err);
      }
    };

    return doStream();
  }
}
