import { z } from 'zod';

// First define all Zod schemas
export const TaskStateSchema = z.enum([
  'submitted',
  'working',
  'input_required',
  'completed',
  'failed',
  'canceled'
]);

export const MessagePartSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('text'),
    content: z.string(),
    format: z.enum(['plain', 'markdown']).default('plain')
  }),
  z.object({
    type: z.literal('file'),
    content: z.union([z.string(), z.instanceof(Uint8Array)]),
    mimeType: z.string(),
    name: z.string(),
    size: z.number().optional()
  }),
  z.object({
    type: z.literal('data'),
    content: z.record(z.any()),
    schema: z.string().optional()
  }),
  z.object({
    type: z.literal('heartbeat'),
    content: z.string(),
    format: z.literal('plain').default('plain')
  })
]);

export const ArtifactSchema = z.object({
  id: z.string(),
  type: z.enum(['text', 'file', 'data']),
  content: z.record(z.any()),
  createdAt: z.string(),
  updatedAt: z.string()
});

export const A2AErrorSchema = z.object({
  code: z.number().min(-32099).max(-32000),
  message: z.string(),
  data: z.record(z.any()).optional()
});

// Then define interfaces that reference them
export interface TaskTransition {
  from: z.infer<typeof TaskStateSchema>;
  to: z.infer<typeof TaskStateSchema>;
  timestamp: string;
  reason?: string;
}

export interface Message {
  parts: z.infer<typeof MessagePartSchema>[];
  taskId?: string;
  contextId?: string;
}

export interface MessageSendConfiguration {
  priority?: number;
  timeout?: number;
  metadata?: Record<string, unknown>;
}

export interface Task {
  id: string;
  name: string;
  description?: string;
  status: z.infer<typeof TaskStateSchema>;
  agentId?: string;
  parts?: z.infer<typeof MessagePartSchema>[];
  expectedParts?: number;
  artifacts?: z.infer<typeof ArtifactSchema>[];
  transitions?: TaskTransition[];
  createdAt: string;
  updatedAt: string;
  error?: z.infer<typeof A2AErrorSchema>;
  metadata?: Record<string, unknown>;
  contextId?: string;
  inputSchema?: Record<string, any>;
  outputSchema?: Record<string, any>;
  input?: Record<string, any>;
  output?: Record<string, any>;
}

// Export type aliases for convenience
export type TaskState = z.infer<typeof TaskStateSchema>;
export type MessagePart = z.infer<typeof MessagePartSchema>;
export type Artifact = z.infer<typeof ArtifactSchema>;
export type A2AError = z.infer<typeof A2AErrorSchema>;

export interface AgentCard {
  id: string;
  name: string;
  capabilities: string[];
  endpoint: string;
  metadata?: Record<string, unknown>;
  description?: string;
  version?: string;
}

export interface PushNotificationConfig {
  enabled: boolean;
  endpoint?: string;
  authToken?: string;
  events: string[];
  metadata?: Record<string, unknown>;
}

export interface DiscoverRequest {
  id: string;
  method: string;
  params?: Record<string, unknown>;
  jsonrpc?: string;
}

export interface DiscoverResponse {
  id: string;
  result: AgentCard[];
  error?: A2AError;
}
