import { Router, Request, Response, NextFunction } from 'express';
import { JsonRpcRequestHandler } from './jsonrpc-handler';
import { JsonRpcResponse, A2AError } from '@dexwox/a2a-core';
import { z } from 'zod';
import { Middleware } from './base-handler';

export class DefaultJsonRpcRequestHandler implements JsonRpcRequestHandler {
  readonly router = Router();
  private middlewares: Middleware[] = [];

  use(middleware: Middleware): void {
    this.middlewares.push(middleware);
  }

  validateRequest(schema: z.ZodSchema): Middleware {
    return async (req, res, next) => {
      try {
        schema.parse(req.body);
        next();
      } catch (err) {
        res.status(400).json(this.buildErrorResponse(req.body?.id, err));
      }
    };
  }

  handleErrors(): Middleware {
    return async (req, res, next) => {
      try {
        await next();
      } catch (err) {
        res.status(500).json(this.buildErrorResponse(req.body?.id, err));
      }
    };
  }

  formatResponse(): Middleware {
    return async (req, res, next) => {
      const originalJson = res.json;
      res.json = (body: any) => {
        if (body?.jsonrpc === '2.0') {
          return originalJson.call(res, body);
        }
        return originalJson.call(res, this.buildSuccessResponse(req.body?.id, body));
      };
      next();
    };
  }

  buildSuccessResponse(id?: string | number, result?: any): JsonRpcResponse {
    return {
      jsonrpc: '2.0',
      id,
      result
    };
  }

  buildErrorResponse(id?: string | number, error?: any): JsonRpcResponse {
    return {
      jsonrpc: '2.0',
      id,
      error: this.normalizeError(error)
    };
  }

  async handleJsonRpcSendMessage(req: Request, res: Response): Promise<void> {
    try {
      const { parts, agentId } = req.body;
      const messageId = await this.handleSendMessage(parts, agentId);
      res.json(this.buildSuccessResponse(req.body.id, messageId));
    } catch (err) {
      res.status(400).json(this.buildErrorResponse(req.body.id, err));
    }
  }

  async handleJsonRpcStreamMessage(req: Request, res: Response): Promise<void> {
    try {
      const { parts, agentId } = req.body;
      const stream = this.handleStreamMessage(parts, agentId);
      // Start consuming the stream in background
      (async () => {
        for await (const _ of stream) {}
      })();
      res.json(this.buildSuccessResponse(req.body.id, 'Stream started'));
    } catch (err) {
      res.status(400).json(this.buildErrorResponse(req.body.id, err));
    }
  }

  async handleJsonRpcGetTaskStatus(req: Request, res: Response): Promise<void> {
    try {
      const task = await this.handleGetTaskStatus(req.params.taskId);
      res.json(this.buildSuccessResponse(undefined, { task }));
    } catch (err) {
      res.status(400).json(this.buildErrorResponse(undefined, err));
    }
  }

  async handleJsonRpcCancelTask(req: Request, res: Response): Promise<void> {
    try {
      await this.handleCancelTask(req.params.taskId);
      res.json(this.buildSuccessResponse(undefined, 'Cancellation requested'));
    } catch (err) {
      res.status(400).json(this.buildErrorResponse(undefined, err));
    }
  }

  async handleJsonRpcDiscoverAgents(req: Request, res: Response): Promise<void> {
    try {
      const { capability } = req.query;
      const agents = await this.handleDiscoverAgents(capability);
      res.json(this.buildSuccessResponse(undefined, { agents }));
    } catch (err) {
      res.status(400).json(this.buildErrorResponse(undefined, err));
    }
  }

  // Implement BaseRequestHandler methods
  handleSendMessage(parts: any[], agentId: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  handleStreamMessage(parts: any[], agentId: string): AsyncGenerator<any, void, unknown> {
    throw new Error('Method not implemented.');
  }

  handleGetTaskStatus(taskId: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  handleCancelTask(taskId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  handleTaskResubscription(taskId: string): AsyncGenerator<any, void, unknown> {
    throw new Error('Method not implemented.');
  }

  async handleDiscoverAgents(capability?: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  normalizeError(err: unknown): any {
    throw new Error('Method not implemented.');
  }
}
