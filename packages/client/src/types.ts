/**
 * @module ClientTypes
 * @description Type definitions for the A2A client package
 */

import {
  JsonRpcStreamResponse,
  AgentCard
} from '@dexwox-labs/a2a-core';
import type {
  AuthConfig,
  AuthSchemeType
} from '@dexwox-labs/a2a-auth';

/**
 * Configuration for push notifications
 * 
 * This interface defines how push notifications should be configured,
 * including which events to listen for and authentication details.
 * 
 * @example
 * ```typescript
 * const pushConfig: PushNotificationConfig = {
 *   enabled: true,
 *   endpoint: 'https://notifications.example.com/webhook',
 *   authToken: 'your-auth-token',
 *   events: ['taskCompleted', 'taskFailed']
 * };
 * ```
 */
export interface PushNotificationConfig {
  /** Whether push notifications are enabled */
  enabled: boolean;
  
  /** Endpoint URL where notifications should be sent */
  endpoint?: string;
  
  /** Authentication token for the push endpoint */
  authToken?: string;
  
  /** List of event types to receive notifications for */
  events: string[];
}

/**
 * Options for streaming operations
 * 
 * This interface defines callbacks and configuration for streaming
 * connections, including handling messages, errors, and connection lifecycle.
 * 
 * @example
 * ```typescript
 * const streamOptions: StreamOptions = {
 *   onMessage: (data) => console.log('Received:', data),
 *   onError: (error) => console.error('Stream error:', error),
 *   onComplete: () => console.log('Stream completed'),
 *   heartbeatInterval: 30000,  // 30 seconds
 *   heartbeatTimeout: 10000     // 10 seconds
 * };
 * ```
 */
export interface StreamOptions {
  /** Callback function for received messages */
  onMessage: (data: JsonRpcStreamResponse) => void;
  
  /** Optional callback function for stream errors */
  onError?: (error: Error) => void;
  
  /** Optional callback function when stream completes */
  onComplete?: () => void;
  
  /** Interval in milliseconds between heartbeat messages (default: 30000) */
  heartbeatInterval?: number;
  
  /** Timeout in milliseconds to wait for heartbeat response (default: 10000) */
  heartbeatTimeout?: number;
}

/**
 * Configuration options for the MessageClient
 * 
 * This interface defines how the MessageClient should connect to and
 * authenticate with an A2A server, including base URL, headers, timeout,
 * and authentication details.
 * 
 * @example
 * ```typescript
 * // Basic configuration
 * const basicOptions: MessageClientOptions = {
 *   baseUrl: 'https://a2a-server.example.com'
 * };
 * 
 * // With bearer token authentication
 * const authOptions: MessageClientOptions = {
 *   baseUrl: 'https://a2a-server.example.com',
 *   timeout: 10000,
 *   auth: {
 *     type: 'bearer',
 *     credentials: {
 *       token: 'your-bearer-token'
 *     }
 *   }
 * };
 * ```
 */
export interface MessageClientOptions {
  /** Base URL for the A2A server */
  baseUrl: string;
  
  /** Additional HTTP headers to include with every request */
  headers?: Record<string, string>;
  
  /** Request timeout in milliseconds (default: 5000) */
  timeout?: number;
  
  /** Authentication configuration using comprehensive auth framework */
  auth?: {
    /** Authentication scheme type */
    scheme: AuthSchemeType;
    
    /** Authentication configuration for the selected scheme */
    config: AuthConfig;
  };
}

/**
 * JSON-RPC request for agent discovery
 * 
 * This interface defines the structure of a JSON-RPC request for discovering
 * available agents, optionally filtered by capability.
 * 
 * @internal This is primarily used internally by the SDK
 */
export interface DiscoverRequest {
  /** JSON-RPC version, always '2.0' */
  jsonrpc: '2.0';
  
  /** Method name for discovery */
  method: 'discover';
  
  /** Optional parameters for the discovery request */
  params?: {
    /** Optional capability to filter agents by */
    capability?: string;
  };
}

/**
 * JSON-RPC response from agent discovery
 * 
 * This interface defines the structure of a JSON-RPC response from a discovery
 * request, containing a list of available agent cards.
 * 
 * @internal This is primarily used internally by the SDK
 */
export interface DiscoverResponse {
  /** JSON-RPC version, always '2.0' */
  jsonrpc: '2.0';
  
  /** Result of the discovery request */
  result: {
    /** List of available agent cards */
    agents: AgentCard[];
  };
}

/**
 * Event emitted when a task is updated with new status or progress
 * @constant {string}
 */
export const TASK_UPDATED = 'taskUpdated';

/**
 * Event emitted when a task is successfully completed
 * @constant {string}
 */
export const TASK_COMPLETED = 'taskCompleted';

/**
 * Event emitted when a task fails with an error
 * @constant {string}
 */
export const TASK_FAILED = 'taskFailed';
