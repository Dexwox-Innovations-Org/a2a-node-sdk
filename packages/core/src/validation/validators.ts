import { z } from 'zod';
import {
  TaskStateSchema,
  MessagePartSchema,
  ArtifactSchema,
  A2AErrorSchema,
  type TaskTransition,
  type Message,
  type MessageSendConfiguration,
  type Task,
  type AgentCard,
  type PushNotificationConfig,
  type DiscoverRequest,
  type DiscoverResponse,
} from '../types/a2a-protocol';

// Extended schemas with additional validation
const TaskTransitionSchema: z.ZodType<TaskTransition> = z.object({
  from: TaskStateSchema,
  to: TaskStateSchema,
  timestamp: z.string().datetime(),
  reason: z.string().optional(),
});

// Define the message part schemas individually
const TextMessagePartSchema = z.object({
  type: z.literal('text'),
  content: z.string(),
  format: z.enum(['plain', 'markdown'] as const).default('plain'),
});

const FileMessagePartSchema = z.object({
  type: z.literal('file'),
  content: z.union([z.string(), z.instanceof(Uint8Array)]),
  mimeType: z.string(),
  name: z.string(),
  size: z.number().optional(),
});

const DataMessagePartSchema = z.object({
  type: z.literal('data'),
  content: z.record(z.any()),
  schema: z.string().optional(),
});

const HeartbeatMessagePartSchema = z.object({
  type: z.literal('heartbeat'),
  content: z.string(),
  format: z.literal('plain').default('plain'),
});

// Create the union type
const StrictMessagePartSchema = z.union([
  TextMessagePartSchema,
  FileMessagePartSchema,
  DataMessagePartSchema,
  HeartbeatMessagePartSchema,
]);

const MessageSchema = z.object({
  parts: z.array(StrictMessagePartSchema).min(1, 'At least one message part is required'),
  taskId: z.string().uuid().optional(),
  contextId: z.string().uuid().optional(),
}) as z.ZodType<Message>;

const MessageSendConfigurationSchema: z.ZodType<MessageSendConfiguration> = z.object({
  priority: z.number().int().min(0).max(100).optional(),
  timeout: z.number().int().positive().optional(),
  metadata: z.record(z.unknown()).optional(),
});

const TaskSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Task name is required'),
  description: z.string().optional(),
  status: TaskStateSchema,
  agentId: z.string().optional(),
  parts: z.array(StrictMessagePartSchema).optional(),
  expectedParts: z.number().int().positive().optional(),
  artifacts: z.array(ArtifactSchema).optional(),
  transitions: z.array(TaskTransitionSchema).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  error: A2AErrorSchema.optional(),
  metadata: z.record(z.unknown()).optional(),
  contextId: z.string().uuid().optional(),
  inputSchema: z.record(z.any()).optional(),
  outputSchema: z.record(z.any()).optional(),
  input: z.record(z.any()).optional(),
  output: z.record(z.any()).optional(),
}) as z.ZodType<Task>;

const AgentCardSchema: z.ZodType<AgentCard> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Agent name is required'),
  capabilities: z.array(z.string().min(1, 'Capability cannot be empty')),
  endpoint: z.string().url('Endpoint must be a valid URL'),
  metadata: z.record(z.unknown()).optional(),
});

const PushNotificationConfigSchema: z.ZodType<PushNotificationConfig> = z.object({
  enabled: z.boolean(),
  endpoint: z.string().url('Endpoint must be a valid URL').optional(),
  authToken: z.string().optional(),
  events: z.array(z.string().min(1, 'Event name cannot be empty')),
  metadata: z.record(z.unknown()).optional(),
});

const DiscoverRequestSchema: z.ZodType<DiscoverRequest> = z.object({
  id: z.string().min(1, 'ID is required'),
  method: z.literal('discover'),
  params: z.record(z.unknown()).optional(),
  jsonrpc: z.literal('2.0').optional(),
});

const DiscoverResponseSchema: z.ZodType<DiscoverResponse> = z.object({
  id: z.string(),
  result: z.array(AgentCardSchema),
  error: A2AErrorSchema.optional(),
});

// Validation functions
export const validateMessage = (data: unknown): z.SafeParseReturnType<unknown, Message> => 
  MessageSchema.safeParse(data);

export const validateTask = (data: unknown): z.SafeParseReturnType<unknown, Task> => 
  TaskSchema.safeParse(data);

export const validateAgentCard = (data: unknown): z.SafeParseReturnType<unknown, AgentCard> => 
  AgentCardSchema.safeParse(data);

export const validatePushNotificationConfig = (data: unknown): z.SafeParseReturnType<unknown, PushNotificationConfig> => 
  PushNotificationConfigSchema.safeParse(data);

export const validateDiscoverRequest = (data: unknown): z.SafeParseReturnType<unknown, DiscoverRequest> => 
  DiscoverRequestSchema.safeParse(data);

export const validateDiscoverResponse = (data: unknown): z.SafeParseReturnType<unknown, DiscoverResponse> => 
  DiscoverResponseSchema.safeParse(data);

// Type guards
export const isMessage = (data: unknown): data is Message => 
  MessageSchema.safeParse(data).success;

export const isTask = (data: unknown): data is Task => 
  TaskSchema.safeParse(data).success;

export const isAgentCard = (data: unknown): data is AgentCard =>
  AgentCardSchema.safeParse(data).success;

export const isPushNotificationConfig = (data: unknown): data is PushNotificationConfig =>
  PushNotificationConfigSchema.safeParse(data).success;

// Validation error formatter
export function formatValidationError(error: z.ZodError): string {
  return error.issues
    .map(issue => {
      const path = issue.path.join('.');
      return path ? `${path}: ${issue.message}` : issue.message;
    })
    .join('; ');
}

// Runtime validation decorator
export function validate<T extends z.ZodTypeAny>(schema: T) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = schema.safeParse(args[0]);
      if (!result.success) {
        throw new Error(`Validation failed: ${formatValidationError(result.error)}`);
      }
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

// Schema exports
export const schemas = {
  Message: MessageSchema,
  Task: TaskSchema,
  AgentCard: AgentCardSchema,
  PushNotificationConfig: PushNotificationConfigSchema,
  DiscoverRequest: DiscoverRequestSchema,
  DiscoverResponse: DiscoverResponseSchema,
  MessagePart: MessagePartSchema,
  Artifact: ArtifactSchema,
  A2AError: A2AErrorSchema,
  TaskTransition: TaskTransitionSchema,
  MessageSendConfiguration: MessageSendConfigurationSchema,
};
