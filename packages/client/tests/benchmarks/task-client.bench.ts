import { describe, bench, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { TaskClient } from '../../src/task-client';
import type { Task } from '@dexwox-labs/a2a-core';

describe('Task Client Benchmarks', () => {
  const getClient = () => new TaskClient({ baseUrl: 'http://test-api' });
  
  beforeEach(() => {
    vi.resetAllMocks();
  });
  
  const testTask: Task = {
    id: 'task123',
    name: 'test-task',
    status: 'submitted',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Task status checking
  bench('get task status - cold start', async () => {
    const client = getClient();
    await client.getTaskStatus('task123');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: testTask })
      } as Response);
    },
    iterations: 50
  });

  bench('get task status - warmed up', async () => {
    const client = getClient();
    await client.getTaskStatus('task123');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: testTask })
      } as Response);
    },
    warmupIterations: 10,
    iterations: 100
  });

  // Task status updates
  bench('update task status', async () => {
    const client = getClient();
    await client.updateTaskStatus('task123', { 
      from: 'submitted', 
      to: 'completed' 
    });
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: testTask })
      } as Response);
    },
    warmupIterations: 5,
    iterations: 50
  });

  // Task listing
  bench('list tasks', async () => {
    const client = getClient();
    await client.listTasks();
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: testTask })
      } as Response);
    },
    warmupIterations: 3,
    iterations: 20
  });

  // Push config operations
  bench('get push config', async () => {
    const client = getClient();
    await client.getPushConfig('task123');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: testTask })
      } as Response);
    },
    warmupIterations: 5,
    iterations: 50
  });
});
