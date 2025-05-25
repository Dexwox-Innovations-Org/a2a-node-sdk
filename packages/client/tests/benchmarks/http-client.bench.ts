import { describe, bench, beforeEach } from 'vitest';
import { vi } from 'vitest';
import { A2AHttpClient } from '../../src/http-client';
import type { MessagePart } from '@dexwox/a2a-core';

describe('HTTP Client Benchmarks', () => {
  // Create a factory function to get a fresh client
  const getClient = () => new A2AHttpClient({ baseUrl: 'http://test-api' });
  
  // Reset mocks before each benchmark
  beforeEach(() => {
    vi.resetAllMocks();
  });
  
  const smallMessage: MessagePart = { 
    type: 'text', 
    content: 'test', 
    format: 'plain' 
  };
  
  const largeMessage: MessagePart = {
    type: 'file',
    content: 'a'.repeat(1024 * 1024), // 1MB payload
    mimeType: 'text/plain',
    name: 'large.txt'
  };

  // Basic request benchmarks
  bench('small request - cold start', async () => {
    const client = getClient();
    await client.sendMessage([smallMessage], 'agent1');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    teardown: () => {
      vi.resetAllMocks();
    },
    iterations: 50
  });

  bench('small request - warmed up', async () => {
    const client = getClient();
    await client.sendMessage([smallMessage], 'agent1');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    teardown: () => {
      vi.resetAllMocks();
    },
    warmupIterations: 10,
    iterations: 100
  });

  // Large payload benchmarks
  bench('large request - cold start', async () => {
    const client = getClient();
    await client.sendMessage([largeMessage], 'agent1');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    teardown: () => {
      vi.resetAllMocks();
    },
    iterations: 20
  });

  bench('large request - warmed up', async () => {
    const client = getClient();
    await client.sendMessage([largeMessage], 'agent1');
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    teardown: () => {
      vi.resetAllMocks();
    },
    warmupIterations: 5,
    iterations: 50
  });

  // Parallel request benchmarks
  bench('parallel small requests (10)', async () => {
    const client = getClient();
    await Promise.all(
      Array(10).fill(0).map(() => 
        client.sendMessage([smallMessage], 'agent1')
      )
    );
  }, {
    setup: () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ result: 'success' })
      } as Response);
    },
    teardown: () => {
      vi.resetAllMocks();
    },
    warmupIterations: 3,
    iterations: 20
  });

  // Error handling benchmarks
  bench('error response handling', async () => {
    const client = getClient();
    try {
      await client.sendMessage([smallMessage], 'agent1');
    } catch {
      // Expected error
    }
  }, {
    setup: () => {
      global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    },
    teardown: () => {
      vi.resetAllMocks();
    },
    iterations: 30
  });

  // Connection reuse benchmarks
  describe('connection reuse', () => {
    bench('with connection reuse', async () => {
      const client = getClient();
      for (let i = 0; i < 10; i++) {
        await client.sendMessage([smallMessage], `agent${i}`);
      }
    }, {
      setup: () => {
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve({ result: 'success' })
        } as Response);
      },
      teardown: () => {
        vi.resetAllMocks();
      },
      warmupIterations: 3,
      iterations: 20
    });

    bench('without connection reuse', async () => {
      for (let i = 0; i < 10; i++) {
        const client = getClient();
        await client.sendMessage([smallMessage], `agent${i}`);
      }
    }, {
      setup: () => {
        global.fetch = vi.fn().mockResolvedValue({
          ok: true,
          json: () => Promise.resolve({ result: 'success' })
        } as Response);
      },
      teardown: () => {
        vi.resetAllMocks();
      },
      warmupIterations: 3,
      iterations: 20
    });
  });
});
