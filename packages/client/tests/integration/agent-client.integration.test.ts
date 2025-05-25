import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AgentClient } from '../../src/agent-client';
import { MessageClientOptions } from '../../src/types';
import { 
  A2ANetworkError,
  A2AValidationError,
  A2ATimeoutError
} from '../../src/utils/error-handler';

describe('AgentClient Integration', () => {
  const mockOptions: MessageClientOptions = {
    baseUrl: 'http://localhost:3000',
    timeout: 5000
  };
  let client: AgentClient;

  beforeEach(() => {
    client = new AgentClient(mockOptions);
  });

  describe('resolveAgents', () => {
    it('should retrieve list of agents', async () => {
      const agents = await client.resolveAgents();
      expect(Array.isArray(agents)).toBe(true);
      agents.forEach(agent => {
        expect(agent).toHaveProperty('id');
        expect(agent).toHaveProperty('capabilities');
      });
    });

    it('should filter by capability', async () => {
      const agents = await client.resolveAgents('test-capability');
      expect(agents.every(a => a.capabilities.includes('test-capability'))).toBe(true);
    });
  });

  describe('getAgentCard', () => {
    it('should retrieve specific agent details', async () => {
      const agents = await client.resolveAgents();
      if (agents.length > 0) {
        const agent = await client.getAgentCard(agents[0].id);
        expect(agent.id).toBe(agents[0].id);
      }
    });

    it('should throw for unknown agent', async () => {
      await expect(client.getAgentCard('unknown-agent-id'))
        .rejects.toThrow(A2AValidationError);
    });
  });

  describe('error handling', () => {
    it('should handle network errors', async () => {
      const invalidClient = new AgentClient({
        baseUrl: 'http://invalid-url',
        timeout: 100
      });
      await expect(invalidClient.resolveAgents())
        .rejects.toThrow(A2ANetworkError);
    });

    it('should handle timeouts', async () => {
      const timeoutClient = new AgentClient({
        baseUrl: 'http://localhost:3000',
        timeout: 1 // 1ms timeout to force failure
      });
      await expect(timeoutClient.getAgentCard('test-agent'))
        .rejects.toThrow(A2ATimeoutError);
    });
  });
});
