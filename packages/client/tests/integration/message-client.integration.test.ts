import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MessageClient } from '../../src/message-client';
import { MessageClientOptions } from '../../src/types';
import { 
  A2ANetworkError,
  A2AValidationError
} from '../../src/utils/error-handler';

describe('MessageClient Integration', () => {
  const mockOptions: MessageClientOptions = {
    baseUrl: 'http://localhost:3000',
    timeout: 5000
  };
  let client: MessageClient;

  beforeEach(() => {
    client = new MessageClient(mockOptions);
  });

  describe('sendMessage', () => {
    it('should send message to agent', async () => {
      const messageId = await client.sendMessage(
        [{ type: 'text', content: 'Test message', format: 'plain' }],
        'test-agent-id'
      );
      expect(typeof messageId).toBe('string');
    });

    it('should validate message parts', async () => {
      await expect(client.sendMessage(
        // @ts-expect-error Testing invalid input
        [{ type: 'invalid', content: 'Test' }],
        'test-agent-id'
      )).rejects.toThrow(A2AValidationError);
    });
  });

  describe('streamMessage', () => {
    it('should establish stream connection', async () => {
      const mockHandlers = {
        onMessage: vi.fn(),
        onComplete: vi.fn(),
        onError: vi.fn()
      };

      await expect(client.streamMessage(
        [{ type: 'text', content: 'Stream test', format: 'plain' }],
        'test-agent-id',
        mockHandlers
      )).resolves.not.toThrow();

      expect(mockHandlers.onComplete).toHaveBeenCalled();
    });

    it('should handle stream errors', async () => {
      const mockHandlers = {
        onMessage: vi.fn(),
        onComplete: vi.fn(),
        onError: vi.fn()
      };

      const invalidClient = new MessageClient({
        baseUrl: 'http://invalid-url',
        timeout: 100
      });

      await expect(invalidClient.streamMessage(
        [{ type: 'text', content: 'Stream test', format: 'plain' }],
        'test-agent-id',
        mockHandlers
      )).rejects.toThrow(A2ANetworkError);
    });
  });

  describe('subclients', () => {
    it('should initialize task client', () => {
      expect(client.tasks).toBeDefined();
    });

    it('should initialize agent client', () => {
      expect(client.agents).toBeDefined();
    });
  });
});
