import { z } from 'zod';

/**
 * Base JSON-RPC 2.0 message schema
 * @see https://www.jsonrpc.org/specification
 * @example
 * {
 *   jsonrpc: '2.0',
 *   id: 1
 * }
 */
export const JsonRpcMessageSchema = z.object({
  jsonrpc: z.literal('2.0'),
  id: z.union([z.string(), z.number()]).optional(),
});

/**
 * JSON-RPC request schema
 * @property method - The method to be invoked
 * @property params - Optional parameters
 * @example
 * {
 *   jsonrpc: '2.0',
 *   id: 1,
 *   method: 'subtract',
 *   params: { minuend: 42, subtrahend: 23 }
 * }
 */
export const JsonRpcRequestSchema = JsonRpcMessageSchema.extend({
  method: z.string(),
  params: z.record(z.any()).optional(),
});

/**
 * JSON-RPC response schema
 * @property result - Successful response data
 * @property error - Error response object
 * @example
 * {
 *   jsonrpc: '2.0',
 *   id: 1,
 *   result: 19
 * }
 */
export const JsonRpcResponseSchema = JsonRpcMessageSchema.extend({
  result: z.any().optional(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    data: z.any().optional(),
  }).optional(),
});

/**
 * JSON-RPC streaming response schema
 * @property event - Event type for streaming
 * @property data - Streaming data payload
 * @example
 * {
 *   jsonrpc: '2.0',
 *   event: 'update',
 *   data: { progress: 50 }
 * }
 */
export const JsonRpcStreamResponseSchema = JsonRpcMessageSchema.extend({
  result: z.any().optional(),
  event: z.string().optional(),
  data: z.any().optional()
});

/**
 * Base JSON-RPC message type
 */
export type JsonRpcMessage = z.infer<typeof JsonRpcMessageSchema>;

/**
 * JSON-RPC request type
 */
export type JsonRpcRequest = z.infer<typeof JsonRpcRequestSchema>;

/**
 * Base interface for JSON-RPC responses
 * @template T Response result type
 */
export interface JsonRpcResponseBase<T = any> {
  jsonrpc: '2.0';
  result?: T;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
  id?: string | number;
}

/**
 * JSON-RPC response type
 * @template T Response result type
 */
export type JsonRpcResponse<T = any> = z.infer<typeof JsonRpcResponseSchema> & JsonRpcResponseBase<T>;

/**
 * JSON-RPC streaming response type
 * @template T Response data type
 */
export type JsonRpcStreamResponse<T = any> = z.infer<typeof JsonRpcStreamResponseSchema> & JsonRpcResponseBase<T>;
