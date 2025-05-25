import { Router } from 'express';
import { JsonRpcResponse } from '@dexwox/a2a-core';
import { BaseRequestHandler } from './base-handler';

export interface JsonRpcRequestHandler extends BaseRequestHandler {
  // JSON-RPC specific methods
  buildSuccessResponse(id?: string | number, result?: any): JsonRpcResponse;
  buildErrorResponse(id?: string | number, error?: any): JsonRpcResponse;
  
  // JSON-RPC specific route handlers
  handleJsonRpcSendMessage(req: any, res: any): Promise<void>;
  handleJsonRpcStreamMessage(req: any, res: any): Promise<void>;
  handleJsonRpcGetTaskStatus(req: any, res: any): Promise<void>;
  handleJsonRpcCancelTask(req: any, res: any): Promise<void>;
  handleJsonRpcDiscoverAgents(req: any, res: any): Promise<void>;
}
