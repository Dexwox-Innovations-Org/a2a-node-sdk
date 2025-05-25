import { Router, Request, Response, NextFunction } from 'express';
import { MessagePart, Task, AgentCard, A2AError } from '@dexwox/a2a-core';
import { z } from 'zod';

export interface Middleware {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface BaseRequestHandler {
  readonly router: Router;
  
  // Middleware support
  use(middleware: Middleware): void;
  validateRequest(schema: z.ZodSchema): Middleware;
  handleErrors(): Middleware;
  formatResponse(): Middleware;

  // Message handling
  handleSendMessage(parts: MessagePart[], agentId: string): Promise<string>;
  handleStreamMessage(parts: MessagePart[], agentId: string): AsyncGenerator<MessagePart, void, unknown>;

  // Task management  
  handleGetTaskStatus(taskId: string): Promise<Task>;
  handleCancelTask(taskId: string): Promise<void>;
  handleTaskResubscription(taskId: string): AsyncGenerator<MessagePart, void, unknown>;

  // Error handling
  normalizeError(err: unknown): A2AError;
}
