import {
  type AgentCard,
  type Task,
  type MessagePart,
  type PushNotificationConfig,
  type Artifact,
  JsonRpcRequest,
  JsonRpcResponse,
  JsonRpcStreamResponse,
  A2AError,
  validateArtifact,
  TraceClass,
  TraceMethod
} from '@dexwox/a2a-core';

interface DiscoverRequest extends JsonRpcRequest {
  method: 'discover';
  params: { capability?: string };
}

interface DiscoverResponse extends JsonRpcResponse<{ agents: AgentCard[] }> {}
import { CircuitBreaker } from './utils/circuit-breaker';
import { AgentCardResolver } from './agent-card-resolver';

interface StreamOptions {
  onMessage: (data: JsonRpcStreamResponse) => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
}

/**
 * Configuration options for HTTP client
 */
export interface HttpClientOptions {
  /** 
   * Base URL for API endpoints (e.g. 'https://api.example.com/v1')
   */
  baseUrl: string;
  /**
   * Request timeout in milliseconds (default: 5000)
   */
  timeout?: number;
  /** 
   * Additional HTTP headers to include
   */
  headers?: Record<string, string>;
  /**
   * Options for agent card resolution
   */
  agentCard?: {
    /** Path to agent card (default: '/.well-known/agent.json') */
    path?: string;
    /** Cache TTL in milliseconds (default: 300000 - 5 minutes) */
    cacheTtl?: number;
  };
  /**
   * Push notification authentication configuration
   */
  pushAuth?: {
    /** Auth token for push notifications */
    token?: string;
    /** Auth token refresh callback */
    refresh?: () => Promise<string>;
  };
}

@TraceClass('A2AHttpClient')
export class A2AHttpClient {
  private readonly options: HttpClientOptions;
  private readonly circuitBreaker: CircuitBreaker;
  private readonly agentCardResolver: AgentCardResolver;

  private static readonly DEFAULT_CIRCUIT_BREAKER_OPTIONS = {
    failureThreshold: 3,
    successThreshold: 2,
    timeout: 10000
  };

  /**
   * Creates a new A2A HTTP client instance
   * @param options Configuration options
   */
  constructor(options: HttpClientOptions) {
    this.options = {
      timeout: 5000,
      ...options
    };
    this.circuitBreaker = new CircuitBreaker(
      A2AHttpClient.DEFAULT_CIRCUIT_BREAKER_OPTIONS
    );
    this.agentCardResolver = new AgentCardResolver(this.options.baseUrl, {
      agentCardPath: this.options.agentCard?.path,
      cacheTtl: this.options.agentCard?.cacheTtl,
      timeout: this.options.timeout
    });
  }

  /**
   * Gets the resolved agent card
   */
  async getAgentCard(): Promise<AgentCard> {
    return this.agentCardResolver.resolve();
  }

  /**
   * Refreshes the agent card cache
   */
  async refreshAgentCard(): Promise<AgentCard> {
    return this.agentCardResolver.refresh();
  }

  /**
   * Discovers available agents matching optional capability filter
   * @param capability Optional capability filter (e.g. 'text-generation')
   * @returns Promise resolving to array of AgentCards
   * @throws A2AError if discovery fails
   */
  async discover(capability?: string): Promise<AgentCard[]> {
    const request: DiscoverRequest = {
      jsonrpc: '2.0',
      method: 'discover',
      params: capability ? { capability } : {}
    };

    const response = await this.sendRequest(request);
    return response.result.agents;
  }

  /**
   * Gets task details by ID
   * @param taskId Task ID to retrieve
   * @returns Promise resolving to Task
   * @throws A2AError if task not found
   */
  async getTask(taskId: string): Promise<Task> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'getTask',
      params: { taskId }
    };

    const response = await this.sendRequest<JsonRpcResponse<Task>>(request);
    return response.result;
  }

  /**
   * Sends a task for execution
   * @param task Task to execute
   * @returns Promise resolving to updated Task
   * @throws A2AError if task submission fails
   */
  async sendTask(task: Task): Promise<Task> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'executeTask',
      params: { task }
    };

    const response = await this.sendRequest<JsonRpcResponse<Task>>(request);
    return response.result;
  }

  /**
   * Cancels a running task
   * @param taskId Task ID to cancel
   * @returns Promise resolving to updated Task
   * @throws A2AError if cancellation fails
   */
  async cancelTask(taskId: string): Promise<Task> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'cancelTask',
      params: { taskId }
    };

    const response = await this.sendRequest<JsonRpcResponse<Task>>(request);
    return response.result;
  }

  /**
   * Gets push notification configuration for a task
   * @param taskId Task ID to get config for
   * @returns Promise resolving to PushNotificationConfig
   * @throws A2AError if config retrieval fails
   */
  async getPushNotificationConfig(taskId: string): Promise<PushNotificationConfig> {
    const params: Record<string, unknown> = { taskId };
    
    // Add auth token if configured
    if (this.options.pushAuth?.token) {
      params.authToken = this.options.pushAuth.token;
    }

    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'getPushNotificationConfig',
      params
    };

    const response = await this.sendRequest<JsonRpcResponse<PushNotificationConfig>>(request);
    return response.result;
  }

  /**
   * Sets push notification configuration for a task
   * @param taskId Task ID to configure
   * @param config Push notification configuration
   * @returns Promise resolving to updated PushNotificationConfig
   * @throws A2AError if configuration fails
   */
  async setPushNotificationConfig(
    taskId: string,
    config: PushNotificationConfig
  ): Promise<PushNotificationConfig> {
    const params: Record<string, unknown> = { taskId, config };
    
    // Add auth token if configured
    if (this.options.pushAuth?.token) {
      params.authToken = this.options.pushAuth.token;
    }

    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'setPushNotificationConfig',
      params
    };

    const response = await this.sendRequest<JsonRpcResponse<PushNotificationConfig>>(request);
    return response.result;
  }

  /**
   * Refreshes the push notification auth token
   * @returns Promise resolving to new token
   * @throws A2AError if refresh fails
   */
  async refreshPushAuthToken(): Promise<string> {
    if (!this.options.pushAuth?.refresh) {
      throw {
        code: -32003,
        message: 'Push notification auth refresh not configured'
      };
    }

    try {
      const newToken = await this.options.pushAuth.refresh();
      this.options.pushAuth = {
        ...this.options.pushAuth,
        token: newToken
      };
      return newToken;
    } catch (err) {
      throw this.normalizeError(err);
    }
  }

  private async createStreamRequest(task: Task): Promise<Response> {
    const params: Record<string, unknown> = { task };
    
    // Add push auth token if configured
    if (this.options.pushAuth?.token) {
      params.authToken = this.options.pushAuth.token;
    }

    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'executeTask',
      params
    };

    const headers = {
      'Content-Type': 'application/json',
      ...this.options.headers
    };

    const response = await fetch(this.options.baseUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(request),
      signal: AbortSignal.timeout(this.options.timeout!)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!response.body) {
      throw new Error('No response body for streaming');
    }
    return response;
  }

  private async processStream(
    reader: ReadableStreamDefaultReader<Uint8Array>,
    onEvent: (event: JsonRpcStreamResponse) => void
  ): Promise<void> {
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      buffer = this.processBuffer(buffer, onEvent);
    }
  }

  private processBuffer(buffer: string, onEvent: (event: JsonRpcStreamResponse) => void): string {
    const lines = buffer.split('\n');
    const remainingBuffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        this.processEventLine(line.substring(6).trim(), onEvent);
      }
    }

    return remainingBuffer;
  }

  private processEventLine(data: string, onEvent: (event: JsonRpcStreamResponse) => void): void {
    if (!data) return;
    
    try {
      const event = JSON.parse(data) as JsonRpcStreamResponse;
      onEvent(event);
    } catch (err) {
      console.error('Error parsing SSE event:', err);
    }
  }

  /**
   * Streams task execution events via Server-Sent Events (SSE)
   * @param task Task to execute
   * @param onEvent Callback for processing stream events
   * @returns Promise that resolves when stream completes
   * @throws A2AError if streaming fails to start
   */
  async streamTask(
    task: Task, 
    onEvent: (event: JsonRpcStreamResponse) => void,
    options?: {
      lastEventId?: string;
      onResubscribe?: (newTask: Task) => void;
    }
  ): Promise<void> {
    try {
      const params: Record<string, unknown> = { task };
      
      // Add push auth token if configured
      if (this.options.pushAuth?.token) {
        params.authToken = this.options.pushAuth.token;
      }
      
      // Add resubscription info if provided
      if (options?.lastEventId) {
        params.lastEventId = options.lastEventId;
      }

      const response = await fetch(this.options.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.options.headers,
          ...(options?.lastEventId && {
            'Last-Event-ID': options.lastEventId
          })
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'executeTask',
          params
        }),
        signal: AbortSignal.timeout(this.options.timeout!)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      if (!response.body) {
        throw new Error('No response body for streaming');
      }

      const reader = response.body.getReader();
      await this.processStream(reader, onEvent);
    } catch (error) {
      if (options?.onResubscribe && this.isRecoverableError(error)) {
        const newTask = await this.resubscribeTask(task);
        options.onResubscribe(newTask);
        return this.streamTask(newTask, onEvent, options);
      }
      throw error;
    }
  }

  private isRecoverableError(error: unknown): boolean {
    return error instanceof Error && 
      (error.message.includes('connection') || 
       error.message.includes('timeout'));
  }

  private async resubscribeTask(task: Task): Promise<Task> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'resubscribeTask',
      params: { taskId: task.id }
    };
    const response = await this.sendRequest<JsonRpcResponse<Task>>(request);
    return response.result;
  }

  /**
   * Sends a message to an agent
   * @param parts Array of message parts (text/file/data)
   * @param agentId Target agent ID
   * @returns Promise resolving to message ID
   * @throws A2AError if message fails to send
   */
  /**
   * Uploads an artifact to the server
   * @param artifact Artifact data to upload
   * @returns Promise resolving to artifact ID
   * @throws A2AError if upload fails
   */
  async uploadArtifact(artifact: Artifact): Promise<string> {
    try {
      validateArtifact(artifact);
    } catch (err) {
      throw new A2AError(
        'Invalid artifact: ' + (err as Error).message,
        (err as A2AError).code || -32000
      );
    }

    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'uploadArtifact',
      params: { artifact }
    };

    try {
      const response = await this.sendRequest(request);
      return response.result as string;
    } catch (err) {
      throw this.normalizeError(err);
    }
  }

  /**
   * Downloads an artifact from the server
   * @param artifactId ID of artifact to download
   * @returns Promise resolving to artifact data
   * @throws A2AError if download fails
   */
  async downloadArtifact(artifactId: string): Promise<Artifact> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'downloadArtifact',
      params: { artifactId }
    };

    try {
      const response = await this.sendRequest<JsonRpcResponse<Artifact>>(request);
      return response.result;
    } catch (err) {
      throw this.normalizeError(err);
    }
  }

  /**
   * Sends a message to an agent
   * @param parts Array of message parts (text/file/data)
   * @param agentId Target agent ID
   * @returns Promise resolving to message ID
   * @throws A2AError if message fails to send
   */
  async sendMessage(parts: MessagePart[], agentId: string): Promise<string> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'sendMessage',
      params: { parts, agentId }
    };

    try {
      const response = await this.sendRequest(request);
      return response.result as string;
    } catch (err) {
      throw this.normalizeError(err);
    }
  }

  private normalizeError(err: unknown): A2AError {
    if (err instanceof Error) {
      return new A2AError(
        err.message,
        -32000,
        { stack: err.stack }
      );
    }
    return new A2AError(
      'Unknown error occurred',
      -32000,
      { originalError: err }
    );
  }

  /**
   * Sends a JSON-RPC request
   * @param request JSON-RPC request object
   * @returns Promise resolving to JSON-RPC response
   * @throws Error if HTTP request fails
   * @template T Expected response result type
   */
  private async sendRequest<T = unknown>(request: JsonRpcRequest): Promise<JsonRpcResponse<T>> {
    return this.circuitBreaker.execute(async () => {
      const response = await fetch(this.options.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.options.headers
        },
        body: JSON.stringify(request),
        signal: AbortSignal.timeout(this.options.timeout!)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    });
  }
}
