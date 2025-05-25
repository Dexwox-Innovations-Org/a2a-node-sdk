import { 
  JsonRpcStreamResponse,
  AgentCard
} from '@dexwox/a2a-core';

export interface PushNotificationConfig {
  enabled: boolean;
  endpoint?: string;
  authToken?: string;
  events: string[];
}

export interface StreamOptions {
  onMessage: (data: JsonRpcStreamResponse) => void;
  onError?: (error: Error) => void;
  onComplete?: () => void;
  heartbeatInterval?: number;
  heartbeatTimeout?: number;
}

export interface MessageClientOptions {
  baseUrl: string;
  headers?: Record<string, string>;
  timeout?: number;
  auth?: {
    type: 'basic' | 'bearer' | 'apiKey' | 'custom';
    credentials: {
      username?: string;
      password?: string;
      token?: string;
      apiKey?: string;
      headerName?: string;
      headerValue?: string;
    };
  };
}

export interface DiscoverRequest {
  jsonrpc: '2.0';
  method: 'discover';
  params?: {
    capability?: string;
  };
}

export interface DiscoverResponse {
  jsonrpc: '2.0';
  result: {
    agents: AgentCard[];
  };
}

export const TASK_UPDATED = 'taskUpdated';
export const TASK_COMPLETED = 'taskCompleted';
export const TASK_FAILED = 'taskFailed';
