import { describe, it } from 'vitest';
import { MessageClient } from '../../src/message-client';
import { vi } from 'vitest';

describe('Stream Load Tests', () => {
  const client = new MessageClient({ baseUrl: 'http://test-api' });
  const CONCURRENT_STREAMS = 100;
  const TEST_DURATION_MS = 10000;

  it(`should handle ${CONCURRENT_STREAMS} concurrent streams`, async () => {
    const streams = Array(CONCURRENT_STREAMS).fill(0).map(async (_, i) => {
      const messages: string[] = [];
      
      await client.streamMessage(
        [{ type: 'text', content: `test-${i}`, format: 'plain' }],
        `agent-${i}`,
        {
          onMessage: (data) => messages.push(JSON.stringify(data)),
          onError: vi.fn(),
          onComplete: vi.fn()
        }
      );

      return messages;
    });

    const results = await Promise.allSettled(streams);
    const successes = results.filter(r => r.status === 'fulfilled');
    console.log(`Successful streams: ${successes.length}/${CONCURRENT_STREAMS}`);
  }, TEST_DURATION_MS);
});
