import { 
  type TaskState,
  type Artifact, 
  type TaskTransition,
  type A2AError,
  MessageSendConfiguration, 
  type MessagePart 
} from '@dexwox/a2a-core';
import { AsyncLocalStorage } from 'async_hooks';

const contextStorage = new AsyncLocalStorage<RequestContext>();

export interface Message {
  parts: MessagePart[];
  taskId?: string;
  contextId?: string;
}

export interface Task {
  id: string;
  name: string;
  status: TaskState;
  agentId?: string;
  parts?: MessagePart[];
  expectedParts?: number;
  artifacts?: Artifact[];
  transitions?: TaskTransition[];
  createdAt: string;
  updatedAt: string;
  error?: {
    code: number;
    message: string;
    data?: Record<string, any>;
  };
  metadata?: Record<string, unknown>;
  contextId?: string;
}

export interface RequestContext {
  /**
   * The task being processed
   */
  task: Task;

  /**
   * The agent ID handling this request
   */
  agentId: string;

  /**
   * Unique request ID
   */
  requestId: string;

  /**
   * Context ID for grouping related requests
   */
  contextId: string;

  /**
   * Timestamp when request was received
   */
  timestamp: number;

  /**
   * Original message (for message requests)
   */
  message?: Message;

  /**
   * Message configuration
   */
  configuration?: MessageSendConfiguration;

  /**
   * Related tasks in this context
   */
  relatedTasks: Task[];

  /**
   * Additional context data
   */
  metadata?: Record<string, any>;
}

export function createRequestContext(
  task: Task,
  agentId: string,
  message?: Message,
  configuration?: MessageSendConfiguration,
  metadata?: Record<string, any>
): RequestContext {
  return {
    task,
    agentId,
    requestId: crypto.randomUUID(),
    contextId: task.contextId || crypto.randomUUID(),
    timestamp: Date.now(),
    message,
    configuration,
    relatedTasks: [],
    metadata
  };
}

export function getCurrentContext(): RequestContext | undefined {
  return contextStorage.getStore();
}

export function runInContext<T>(context: RequestContext, fn: () => T): T {
  return contextStorage.run(context, fn);
}

export function attachRelatedTask(task: Task): void {
  const ctx = getCurrentContext();
  if (ctx) {
    ctx.relatedTasks.push(task);
  }
}

export function getMessageText(delimiter = '\n'): string {
  const ctx = getCurrentContext();
  if (!ctx?.message?.parts) return '';
  
  return ctx.message.parts
    .filter((p: MessagePart) => p.type === 'text')
    .map((p: MessagePart) => p.content as string)
    .join(delimiter);
}
