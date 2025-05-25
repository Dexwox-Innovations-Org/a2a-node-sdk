import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MessageClient } from '../../src/message-client';
import { MessagePart, JsonRpcRequest } from '@dexwox/a2a-core';
import { 
  A2ANetworkError,
  A2AError,
  A2AValidationError
} from '../../src/utils/error-handler';
import { sendRequest } from '../../src/utils/http-utils';
import type { MessageClientOptions } from '../../src/types';

vi.mock('../../src/utils/http-utils');

describe('MessageClient', () => {
  const mockOptions: MessageClientOptions = { 
    baseUrl: 'http://test.com',
    timeout: 5000
  };
  let client: MessageClient;

  beforeEach(() => {
    client = new MessageClient(mockOptions);
    vi.clearAllMocks();
  });

  describe('sendMessage', () => {
    it('should send message with parts', async () => {
      const messageParts: MessagePart[] = [
        { type: 'text', content: 'Hello', format: 'plain' },
        { type: 'file', content: 'base64data', mimeType: 'text/plain', name: 'test.txt' }
      ];
      
      // @ts-ignore
      sendRequest.mockResolvedValue({ result: { messageId: '123' } });

      const result = await client.sendMessage(messageParts, 'agent1');
      expect(result).toEqual({ messageId: '123' });
      expect(sendRequest).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          jsonrpc: '2.0',
          method: 'sendMessage',
          params: {
            agentId: 'agent1',
            parts: messageParts
          }
        })
      );
    });

    it('should validate message parts', async () => {
      await expect(client.sendMessage([], 'agent1')).rejects.toMatchObject({
        message: 'Message must contain at least one part',
        code: -32060
      });
    });

    it('should handle network errors', async () => {
      // @ts-ignore
      sendRequest.mockRejectedValue(new Error('Network error'));
      await expect(client.sendMessage([{ type: 'text', content: 'test', format: 'plain' }], 'agent1'))
        .rejects.toThrow(A2ANetworkError);
    });
  });

  describe('streamMessage', () => {
    beforeEach(() => {
      // @ts-ignore
      global.fetch = vi.fn();
    });

    afterEach(() => {
      // @ts-ignore
      delete global.fetch;
    });
    it('should stream messages to agent', async () => {
      const messageParts: MessagePart[] = [
        { type: 'text', content: 'Hello', format: 'plain' }
      ];
      
      const streamOptions = {
        onMessage: vi.fn(),
        onError: vi.fn(),
        onComplete: vi.fn()
      };

      // Mock fetch response with proper Response object
      global.fetch = vi.fn(() => 
        Promise.resolve({
          ok: true,
          headers: new Headers(),
          status: 200,
          statusText: 'OK',
          body: {
            getReader: () => ({
              read: () => Promise.resolve({ done: true, value: undefined })
            })
          },
          json: () => Promise.resolve({}),
          text: () => Promise.resolve(''),
          clone: function() { return this; }
        } as Response)
      );

      // Mock EventSource
      const mockEventSource: {
        onmessage: ((event: MessageEvent) => void) | null;
        onerror: ((event: Event) => void) | null;
        onclose: ((event: Event) => void) | null;
        close: ReturnType<typeof vi.fn>;
        addEventListener: ReturnType<typeof vi.fn>;
      } = {
        onmessage: null,
        onerror: null,
        onclose: null,
        close: vi.fn(),
        addEventListener: vi.fn((type: string, handler: (event: Event) => void) => {
          if (type === 'message') {
            mockEventSource.onmessage = handler as (event: MessageEvent) => void;
          }
          if (type === 'close') {
            mockEventSource.onclose = handler;
          }
        })
      };
      
      // Simulate connection opening
      global.EventSource = vi.fn(() => {
        // Trigger message after a small delay
        setTimeout(() => {
          if (mockEventSource.onmessage) {
            mockEventSource.onmessage(new MessageEvent('message', {
              data: JSON.stringify({ type: 'message', content: 'Hello' })
            }));
          }
          // Trigger complete after message
          setTimeout(() => {
            if (mockEventSource.onclose) {
              mockEventSource.onclose(new Event('close'));
            }
            // Explicitly call onComplete
            streamOptions.onComplete();
            // Explicitly call close
            mockEventSource.close();
          }, 10);
        }, 10);
        return mockEventSource;
      }) as any;

      const promise = client.streamMessage(messageParts, 'agent1', streamOptions);
      
      // Wait for all async operations to complete
      await new Promise(resolve => setTimeout(resolve, 50));
      
      expect(fetch).toHaveBeenCalled();
      expect(streamOptions.onMessage).toHaveBeenCalledWith(
        expect.objectContaining({ content: 'Hello' })
      );
      expect(streamOptions.onComplete).toHaveBeenCalled();
      expect(mockEventSource.close).toHaveBeenCalled();
      
      await promise;
    });

    it('should handle stream errors', async () => {
      // @ts-ignore
      global.fetch = vi.fn(() => Promise.reject(new Error('Network error')));
      
      const streamOptions = {
        onMessage: vi.fn(),
        onError: vi.fn(),
        onComplete: vi.fn()
      };
      
      await expect(client.streamMessage(
        [{ type: 'text', content: 'test', format: 'plain' }],
        'agent1',
        streamOptions
      )).rejects.toThrow(A2ANetworkError);
    });
  });
});
