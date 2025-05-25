import { 
  JsonRpcResponse,
  A2AError,
  MessagePart,
  Task
} from '@dexwox/a2a-core';

type SuccessResponseTypes = 
  | Task
  | MessagePart
  | string
  | Record<string, unknown>;

export function buildSuccessResponse<T extends SuccessResponseTypes>(
  id: string | number | undefined,
  result: T
): JsonRpcResponse<T> {
  return {
    jsonrpc: '2.0',
    id: id ?? undefined,
    result
  };
}

export function buildErrorResponse(
  id: string | number | undefined,
  error: A2AError
): JsonRpcResponse<null> {
  return {
    jsonrpc: '2.0',
    id: id ?? undefined,
    error
  };
}

export function validateResponseType(
  response: unknown,
  expectedTypes: string[]
): boolean {
  if (!response) {
    return false;
  }
  
  if (typeof response === 'string') {
    return expectedTypes.includes('string');
  }

  if (typeof response === 'object') {
    const type = (response as any).type;
    return expectedTypes.includes(type);
  }

  return false;
}

export function prepareResponse<T extends Exclude<SuccessResponseTypes, string>>(
  id: string | number | undefined,
  response: T | A2AError,
  expectedTypes: string[]
): JsonRpcResponse<T> {
  if (response instanceof A2AError) {
    return buildErrorResponse(id, response);
  }

  if (!validateResponseType(response, expectedTypes)) {
    return buildErrorResponse(id, new A2AError(
      'Invalid response type from agent',
      -32602,
      { 
        receivedType: typeof response === 'object' ? (response as any).type : typeof response 
      }
    ));
  }

  return buildSuccessResponse(id, response as T);
}
