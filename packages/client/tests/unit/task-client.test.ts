import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TaskClient } from '../../src/task-client';
import { Task, TaskState } from '@dexwox/a2a-core';
import { 
  A2ANetworkError,
  A2ATimeoutError
} from '../../src/utils/error-handler';
import { sendRequest } from '../../src/utils/http-utils';

vi.mock('../../src/utils/http-utils');

describe('TaskClient', () => {
  const mockOptions = { baseUrl: 'http://test.com' };
  let client: TaskClient;

  beforeEach(() => {
    client = new TaskClient(mockOptions);
    vi.clearAllMocks();
  });

  describe('getTaskStatus', () => {
    it('should return task status', async () => {
      const mockTask = { 
        id: '1',
        name: 'Test Task',
        status: 'working',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as Task;
      // @ts-ignore
      sendRequest.mockResolvedValue({ result: { task: mockTask } });

      const result = await client.getTaskStatus('1');
      expect(result).toEqual(mockTask);
    });

    it('should throw network error on failure', async () => {
      // @ts-ignore
      sendRequest.mockRejectedValue(new Error('Network error'));
      await expect(client.getTaskStatus('1')).rejects.toThrow(A2ANetworkError);
    });
  });

  describe('cancelTask', () => {
    it('should successfully cancel task', async () => {
      // @ts-ignore
      sendRequest.mockResolvedValue({});
      await expect(client.cancelTask('1')).resolves.not.toThrow();
    });

    it('should throw on cancellation failure', async () => {
      // @ts-ignore
      sendRequest.mockRejectedValue(new Error('Failed'));
      await expect(client.cancelTask('1')).rejects.toThrow();
    });
  });

  describe('push notification config', () => {
    it('should set push config', async () => {
      const config = { 
        url: 'http://callback.com',
        authToken: 'token',
        enabled: true,
        events: ['completed']
      };
      // @ts-ignore
      sendRequest.mockResolvedValue({});
      
      await client.setPushConfig('1', config);
      expect(sendRequest).toHaveBeenCalled();
    });

    it('should get push config', async () => {
      const config = { url: 'http://callback.com' };
      // @ts-ignore
      sendRequest.mockResolvedValue({ result: { config } });
      
      const result = await client.getPushConfig('1');
      expect(result).toEqual(config);
    });
  });

  describe('task updates', () => {
    it('should handle task updates', () => {
      const mockTask = { 
        id: '1',
        name: 'Test Task',
        status: 'completed',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      } as Task;
      const callback = vi.fn();
      
      client.onTaskUpdate('1', callback);
      client.handleTaskUpdate(mockTask);
      
      expect(callback).toHaveBeenCalledWith(mockTask);
    });

    it('should emit completion events', () => {
      const mockTask = { id: '1', status: 'completed' } as Task;
      const listener = vi.fn();
      
      client.on('TASK_COMPLETED', listener);
      client.handleTaskUpdate(mockTask);
      
      expect(listener).toHaveBeenCalledWith(mockTask);
    });
  });

  describe('updateTaskStatus', () => {
    it('should validate state transitions', async () => {
      const status = { from: 'submitted', to: 'working' } as { from: TaskState, to: TaskState };
      // @ts-ignore
      sendRequest.mockResolvedValue({});
      
      await client.updateTaskStatus('1', status);
      expect(sendRequest).toHaveBeenCalled();
    });

    it('should reject invalid transitions', async () => {
      const status = { from: 'completed', to: 'working' } as { from: TaskState, to: TaskState };
      await expect(client.updateTaskStatus('1', status)).rejects.toThrow();
    });
  });

  describe('listTasks', () => {
    it('should return task list', async () => {
      const tasks = [{ id: '1' }, { id: '2' }] as Task[];
      // @ts-ignore
      sendRequest.mockResolvedValue({ result: { tasks } });
      
      const result = await client.listTasks();
      expect(result).toEqual(tasks);
    });

    it('should apply filters', async () => {
      // @ts-ignore
      sendRequest.mockResolvedValue({ result: { tasks: [] } });
      
      await client.listTasks({ status: 'completed' });
      expect(sendRequest).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          params: { status: 'completed' }
        })
      );
    });
  });
});
