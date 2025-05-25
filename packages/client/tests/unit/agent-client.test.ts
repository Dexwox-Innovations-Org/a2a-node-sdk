import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AgentClient } from '../../src/agent-client';
import { A2ANetworkError, A2AValidationError } from '../../src/utils/error-handler';
import { sendRequest } from '../../src/utils/http-utils';

vi.mock('../../src/utils/http-utils');

describe('AgentClient', () => {
  const mockOptions = { baseUrl: 'http://test.com' };
  let client: AgentClient;

  beforeEach(() => {
    client = new AgentClient(mockOptions);
    vi.clearAllMocks();
  });

  describe('resolveAgents', () => {
    it('should return cached agents if available and not expired', async () => {
      // @ts-ignore
      client.agentCache = {
        agents: [{ id: '1', name: 'Test Agent', endpoint: 'http://test.com', capabilities: ['test'] }],
        expiresAt: Date.now() + 10000,
        lastUpdated: Date.now()
      };

      const result = await client.resolveAgents();
      expect(result).toEqual([{ id: '1', capabilities: ['test'] }]);
      expect(sendRequest).not.toHaveBeenCalled();
    });

    it('should filter by capability when provided', async () => {
      // @ts-ignore
      client.agentCache = {
        agents: [
          { id: '1', name: 'Test Agent', endpoint: 'http://test.com', capabilities: ['test'] },
          { id: '2', name: 'Other Agent', endpoint: 'http://other.com', capabilities: ['other'] }
        ],
        expiresAt: Date.now() + 10000,
        lastUpdated: Date.now()
      };

      const result = await client.resolveAgents('test');
      expect(result).toEqual([{ id: '1', capabilities: ['test'] }]);
    });

    it('should make network request when cache expired', async () => {
      // @ts-ignore
      client.agentCache = {
        agents: [],
        expiresAt: Date.now() - 1000,
        lastUpdated: Date.now() - 1000
      };

      // @ts-ignore
      sendRequest.mockResolvedValue({
        result: { agents: [{ id: 'new', name: 'New Agent', endpoint: 'http://new.com', capabilities: [] }] }
      });

      const result = await client.resolveAgents();
      expect(result).toEqual([{ id: 'new', capabilities: [] }]);
      expect(sendRequest).toHaveBeenCalled();
    });

    it('should return stale cache on network error', async () => {
      // @ts-ignore
      client.agentCache = {
        agents: [{ id: 'stale', name: 'Stale Agent', endpoint: 'http://stale.com', capabilities: [] }],
        expiresAt: Date.now() - 1000,
        lastUpdated: Date.now() - 1000
      };

      // @ts-ignore
      sendRequest.mockRejectedValue(new Error('Network error'));

      const result = await client.resolveAgents();
      expect(result).toEqual([{ id: 'stale', capabilities: [] }]);
    });

    it('should throw network error when no cache available', async () => {
      // @ts-ignore
      sendRequest.mockRejectedValue(new Error('Network error'));

      await expect(client.resolveAgents()).rejects.toThrow(A2ANetworkError);
    });
  });

  describe('getAgentCard', () => {
    it('should return agent card when found', async () => {
      // @ts-ignore
      client.resolveAgents = vi.fn().mockResolvedValue([
        { id: '1', name: 'Test Agent' },
        { id: '2', name: 'Other Agent' }
      ]);

      const result = await client.getAgentCard('1');
      expect(result).toEqual({ id: '1', name: 'Test Agent' });
    });

    it('should throw validation error when agent not found', async () => {
      // @ts-ignore
      client.resolveAgents = vi.fn().mockResolvedValue([
        { id: '1', name: 'Test Agent' }
      ]);

      await expect(client.getAgentCard('2')).rejects.toThrow(A2AValidationError);
    });

    it('should force refresh when requested', async () => {
      const mockResolve = vi.fn().mockResolvedValue([{ id: '1' }]);
      // @ts-ignore
      client.resolveAgents = mockResolve;

      await client.getAgentCard('1', true);
      expect(mockResolve).toHaveBeenCalledWith(undefined, true);
    });
  });
});
