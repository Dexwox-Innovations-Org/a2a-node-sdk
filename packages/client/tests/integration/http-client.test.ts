import { describe, it, expect, vi, beforeEach } from 'vitest';
import { A2AHttpClient } from '../../src/http-client';
import type { A2AError, AgentCard, Task, PushNotificationConfig } from '@dexwox-labs/a2a-core';

// Mock fetch
global.fetch = vi.fn();

const TEST_BASE_URL = 'http://test-api';

describe('A2AHttpClient Integration Tests', () => {
  let client: A2AHttpClient;

  beforeEach(() => {
    vi.resetAllMocks();
    client = new A2AHttpClient({ baseUrl: TEST_BASE_URL });
  });

  describe('Circuit Breaker', () => {
    it('should open circuit after failure threshold', async () => {
      // Mock 3 consecutive failures
      vi.mocked(fetch).mockRejectedValue(new Error('Network error'));
      
      for (let i = 0; i < 3; i++) {
        await expect(client.sendMessage([], 'agent1'))
          .rejects.toThrow('Network error');
      }

      // Next request should fail with circuit open error
      await expect(client.sendMessage([], 'agent1'))
        .rejects.toMatchObject({
          code: -32050,
          message: 'Circuit breaker is open'
        });
    });

    it('should recover after timeout period', async () => {
      // Mock initial failures to open circuit
      vi.mocked(fetch).mockRejectedValue(new Error('Network error'));
      for (let i = 0; i < 3; i++) {
        await client.sendMessage([], 'agent1').catch(() => {});
      }

      // Fast-forward timeout period
      vi.useFakeTimers();
      vi.advanceTimersByTime(10000);
      vi.useRealTimers();

      // Mock success response
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);

      // Should attempt recovery
      await expect(client.sendMessage([], 'agent1'))
        .resolves.toBe('success');
    });
  });

  describe('Message Handling', () => {
    it('should handle API errors', async () => {
      const errorResponse = {
        error: {
          code: -32000,
          message: 'Internal error',
          data: { details: 'Something went wrong' }
        }
      };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(errorResponse)
      } as Response);

      await expect(client.sendMessage([], 'agent1'))
        .rejects.toMatchObject({
          code: -32000,
          message: 'Internal error'
        });
    });

    it('should handle network errors', async () => {
      vi.mocked(fetch).mockRejectedValue(new Error('Network failed'));
      await expect(client.sendMessage([], 'agent1'))
        .rejects.toThrow('Network failed');
    });

    it('should successfully send message', async () => {
      const mockResponse = { result: 'msg123' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      } as Response);

      const result = await client.sendMessage([], 'agent1');
      expect(result).toBe('msg123');
      expect(fetch).toHaveBeenCalledWith(
        TEST_BASE_URL,
        expect.objectContaining({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
      );
    });
  });

  describe('Agent Card Resolution', () => {
    it('should resolve agent card', async () => {
      const mockCard = {
        url: 'http://agent-service',
        name: 'Test Agent',
        capabilities: ['text-generation']
      };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockCard)
      } as Response);

      const client = new A2AHttpClient({
        baseUrl: TEST_BASE_URL,
        agentCard: { path: '/custom-agent.json' }
      });

      const card = await client.getAgentCard();
      expect(card).toEqual(mockCard);
      expect(fetch).toHaveBeenCalledWith(
        `${TEST_BASE_URL}/custom-agent.json`,
        expect.anything()
      );
    });

    it('should refresh agent card', async () => {
      const mockCard = {
        url: 'http://agent-service',
        name: 'Test Agent',
        capabilities: ['text-generation']
      };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockCard)
      } as Response);

      const card = await client.refreshAgentCard();
      expect(card).toEqual(mockCard);
    });
  });

  describe('Task Management', () => {
    it('should get task details', async () => {
      const mockTask = { id: 'task123', status: 'completed' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: mockTask })
      } as Response);

      const task = await client.getTask('task123');
      expect(task).toEqual(mockTask);
    });

    it('should cancel task', async () => {
      const mockTask = { id: 'task123', status: 'canceled' };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: mockTask })
      } as Response);

      const task = await client.cancelTask('task123');
      expect(task).toEqual(mockTask);
    });
  });

  describe('Push Notifications', () => {
    it('should include auth token in streaming requests', async () => {
      const mockToken = 'test-auth-token';
      const client = new A2AHttpClient({
        baseUrl: TEST_BASE_URL,
        pushAuth: { token: mockToken }
      });

      const mockResponse = new Response(JSON.stringify({ result: {} }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      vi.mocked(fetch).mockResolvedValue(mockResponse);

      await client.streamTask({
        id: 'task123',
        name: 'Test Task',
        status: 'submitted',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, () => {});
      
      const requestBody = JSON.parse(vi.mocked(fetch).mock.calls[0][1]?.body as string);
      expect(requestBody).toMatchObject({
        params: {
          task: { id: 'task123' },
          authToken: mockToken
        }
      });
    });

    it('should get push notification config', async () => {
      const mockConfig = { 
        enabled: true,
        callbackUrl: 'http://callback',
        events: ['completed', 'failed']
      };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: mockConfig })
      } as Response);

      const config = await client.getPushNotificationConfig('task123');
      expect(config).toEqual(mockConfig);
    });

    it('should set push notification config', async () => {
      const mockConfig = { 
        enabled: true,
        callbackUrl: 'http://callback',
        events: ['completed']
      };
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: mockConfig })
      } as Response);

      const config = await client.setPushNotificationConfig('task123', mockConfig);
      expect(config).toEqual(mockConfig);
    });
  });

  describe('Resubscription', () => {
    it('should include Last-Event-ID header when provided', async () => {
      const mockTask: Task = {
        id: 'task123',
        name: 'Test Task',
        status: 'working',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        input: {},
        output: {}
      };
      
      vi.mocked(fetch).mockResolvedValue({
        ok: true,
        body: new ReadableStream()
      } as Response);

      await client.streamTask(mockTask, () => {}, {
        lastEventId: 'event456'
      });

      expect(fetch).toHaveBeenCalledWith(
        TEST_BASE_URL,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Last-Event-ID': 'event456'
          })
        })
      );
    });

    it('should resubscribe on connection error', async () => {
      const mockTask: Task = {
        id: 'task123',
        name: 'Test Task',
        status: 'working',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        input: {},
        output: {}
      };
      const newTask: Task = {
        ...mockTask,
        id: 'task456', // Simulate new task assignment
        name: 'New Test Task'
      };

      // First call fails with connection error
      vi.mocked(fetch)
        .mockRejectedValueOnce(new Error('Connection failed'))
        .mockResolvedValueOnce(new Response(JSON.stringify({ result: newTask }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }))
        .mockResolvedValueOnce({
          ok: true,
          body: new ReadableStream()
        } as Response);

      const onResubscribe = vi.fn();
      await client.streamTask(mockTask, () => {}, {
        onResubscribe
      });

      expect(onResubscribe).toHaveBeenCalledWith(newTask);
      expect(fetch).toHaveBeenCalledTimes(3); // Initial + resubscribe task + new stream
    });

    it('should not resubscribe on non-recoverable errors', async () => {
      const mockTask: Task = {
        id: 'task123',
        name: 'Test Task',
        status: 'working',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        input: {},
        output: {}
      };

      vi.mocked(fetch).mockRejectedValue(new Error('Invalid request'));

      const onResubscribe = vi.fn();
      await expect(client.streamTask(mockTask, () => {}, {
        onResubscribe
      })).rejects.toThrow('Invalid request');

      expect(onResubscribe).not.toHaveBeenCalled();
    });
  });
});
