import type { AgentCard } from '@dexwox/a2a-core';
import { CircuitBreaker } from './utils/circuit-breaker';

export interface AgentCardResolverOptions {
  /**
   * Path to agent card (default: '/.well-known/agent.json')
   */
  agentCardPath?: string;
  /**
   * Cache TTL in milliseconds (default: 300000 - 5 minutes)
   */
  cacheTtl?: number;
  /**
   * Request timeout in milliseconds (default: 5000)
   */
  timeout?: number;
}

interface CachedAgentCard {
  card: AgentCard;
  expiresAt: number;
}

export class AgentCardResolver {
  private readonly baseUrl: string;
  private readonly agentCardPath: string;
  private readonly cacheTtl: number;
  private readonly timeout: number;
  private readonly circuitBreaker: CircuitBreaker;
  private cache: CachedAgentCard | null = null;

  constructor(baseUrl: string, options: AgentCardResolverOptions = {}) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.agentCardPath = options.agentCardPath || '/.well-known/agent.json';
    this.cacheTtl = options.cacheTtl || 300000; // 5 minutes
    this.timeout = options.timeout || 5000;
    
    this.circuitBreaker = new CircuitBreaker({
      failureThreshold: 3,
      successThreshold: 2,
      timeout: 10000
    });
  }

  /**
   * Resolves agent card, using cache if available and not expired
   */
  async resolve(): Promise<AgentCard> {
    if (this.cache && this.cache.expiresAt > Date.now()) {
      return this.cache.card;
    }

    const card = await this.fetchAgentCard();
    this.cache = {
      card,
      expiresAt: Date.now() + this.cacheTtl
    };
    return card;
  }

  /**
   * Force fresh fetch of agent card, bypassing cache
   */
  async refresh(): Promise<AgentCard> {
    const card = await this.fetchAgentCard();
    this.cache = {
      card,
      expiresAt: Date.now() + this.cacheTtl
    };
    return card;
  }

  private async fetchAgentCard(): Promise<AgentCard> {
    const url = `${this.baseUrl}${this.agentCardPath}`;
    
    return this.circuitBreaker.execute(async () => {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(this.timeout)
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch agent card: ${response.status}`);
      }

      return response.json();
    });
  }
}
