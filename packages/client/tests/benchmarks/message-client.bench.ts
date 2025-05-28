import { describe, bench, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { MessageClient } from '../../src/message-client';
import type { MessagePart } from '@dexwox-labs/a2a-core';

describe('Message Client Benchmarks', () => {
  const getClient = () => new MessageClient({ baseUrl: 'http://test-api' });
  
  beforeEach(() => {
    vi.resetAllMocks();
  });
  
  const testMessage: MessagePart = { 
    type: 'text', 
    content: 'test', 
    format: 'plain' 
  };

  // Basic message sending
  bench('send message - cold start', async () => {
    const client = getClient();
    await client.sendMessage([testMessage], 'agent1');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    iterations: 50
  });

  bench('send message - warmed up', async () => {
    const client = getClient();
    await client.sendMessage([testMessage], 'agent1');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    warmupIterations: 10,
    iterations: 100
  });

  // Batch message operations
  bench('batch send (10 messages)', async () => {
    const client = getClient();
    await Promise.all(
      Array(10).fill(0).map(() => 
        client.sendMessage([testMessage], 'agent1')
      )
    );
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    warmupIterations: 3,
    iterations: 20
  });

  // Message retrieval
  // Streaming benchmark
  bench('stream message', async () => {
    const client = getClient();
    await client.streamMessage([testMessage], 'agent1', {
      onMessage: () => {},
      onError: () => {},
      onComplete: () => {}
    });
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: testMessage })
      } as Response);
    },
    warmupIterations: 5,
    iterations: 50
  });
});
