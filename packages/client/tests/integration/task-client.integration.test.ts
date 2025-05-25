import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TaskClient } from '../../src/task-client';
import { MessageClientOptions } from '../../src/types';
import { A2ANetworkError } from '../../src/utils/error-handler';
describe('TaskClient Integration', () => {
  const mockOptions: MessageClientOptions = {
    baseUrl: 'http://localhost:3000',
    timeout: 5000
  };
  let client: TaskClient;

  beforeEach(() => {
    client = new TaskClient(mockOptions);
  });

  describe('getTaskStatus', () => {
    it('should retrieve task status', async () => {
      const task = await client.getTaskStatus('test-task-id');
      expect(task).toHaveProperty('id');
      expect(task).toHaveProperty('status');
    });
  });

  describe('listTasks', () => {
    it('should list available tasks', async () => {
      const tasks = await client.listTasks();
      expect(Array.isArray(tasks)).toBe(true);
    });
  });

  describe('updateTaskStatus', () => {
    it('should update task state', async () => {
      await expect(client.updateTaskStatus('test-task-id', {
        from: 'submitted' as const,
        to: 'working' as const
      })).resolves.not.toThrow();
    });
  });

  describe('cancelTask', () => {
    it('should cancel running task', async () => {
      await expect(client.cancelTask('test-task-id')).resolves.not.toThrow();
    });
  });

  describe('error handling', () => {
    it('should handle server errors', async () => {
      const invalidClient = new TaskClient({
        baseUrl: 'http://invalid-url',
        timeout: 100
      });
      await expect(invalidClient.getTaskStatus('123')).rejects.toThrow(A2ANetworkError);
    });
  });
});
