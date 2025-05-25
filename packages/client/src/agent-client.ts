import { AgentCard } from '@dexwox/a2a-core';
import { DiscoverRequest, DiscoverResponse } from './types';
import { MessageClientOptions } from './types';
import { 
  normalizeError,
  A2ANetworkError,
  A2AValidationError,
  A2ATimeoutError
} from './utils/error-handler';
import { sendRequest } from './utils/http-utils';

interface AgentResolutionCache {
  agents: AgentCard[];
  expiresAt: number;
  lastUpdated: number;
}

export class AgentClient {
  private agentCache: AgentResolutionCache | null = null;
  private cacheTTL = 300000; // 5 minutes

  constructor(private options: MessageClientOptions) {}

  /**
   * Resolves agent cards with caching
   * @param capability Optional capability filter
   * @param forceRefresh Bypass cache
   * @returns Promise with array of matching AgentCards
   * @throws A2AError if resolution fails
   */
  async resolveAgents(capability?: string, forceRefresh = false): Promise<AgentCard[]> {
    // Return cached results if valid and not forcing refresh
    if (!forceRefresh && this.agentCache && Date.now() < this.agentCache.expiresAt) {
      return capability 
        ? this.agentCache.agents.filter(a => a.capabilities.includes(capability))
        : this.agentCache.agents;
    }

    const request: DiscoverRequest = {
      jsonrpc: '2.0',
      method: 'discover',
      params: capability ? { capability } : undefined
    };

    try {
      const response = await sendRequest<DiscoverResponse>(this.options, request);
      this.agentCache = {
        agents: response.result.agents,
        expiresAt: Date.now() + this.cacheTTL,
        lastUpdated: Date.now()
      };
      return response.result.agents;
    } catch (err) {
      if (err instanceof Error && err.message.includes('Network')) {
        // Return stale cache if available when network fails
        if (this.agentCache) {
          return capability
            ? this.agentCache.agents.filter(a => a.capabilities.includes(capability))
            : this.agentCache.agents;
        }
        throw new A2ANetworkError('Failed to resolve agents', {
          originalError: err,
          capability
        });
      }
      throw normalizeError(err);
    }
  }

  /**
   * Gets a specific agent's card
   * @param agentId Agent ID to look up
   * @param forceRefresh Bypass cache
   * @returns Promise with AgentCard
   * @throws A2AError if agent not found
   */
  async getAgentCard(agentId: string, forceRefresh = false): Promise<AgentCard> {
    try {
      const agents = await this.resolveAgents(undefined, forceRefresh);
      const agent = agents.find(a => a.id === agentId);
      if (!agent) {
        throw new A2AValidationError('Agent not found', {
          agentId,
          availableAgents: agents.map(a => a.id)
        });
      }
      return agent;
    } catch (err) {
      if (err instanceof Error && err.message.includes('timeout')) {
        throw new A2ATimeoutError('Agent resolution timed out', {
          originalError: err,
          agentId
        });
      }
      throw normalizeError(err);
    }
  }
}
