import { JsonRpcRequest, JsonRpcResponse } from '@dexwox/a2a-core';
import { MessageClientOptions } from '../types';

export interface AuthOptions {
  type: 'basic' | 'bearer' | 'apiKey' | 'custom';
  credentials: {
    username?: string;
    password?: string;
    token?: string;
    apiKey?: string;
    headerName?: string;
    headerValue?: string;
  };
}

export async function sendRequest<T = unknown>(
  options: MessageClientOptions & { auth?: AuthOptions },
  request: JsonRpcRequest
): Promise<JsonRpcResponse<T>> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  // Handle authentication
  if (options.auth) {
    switch (options.auth.type) {
      case 'basic':
        if (options.auth.credentials.username && options.auth.credentials.password) {
          const encoded = Buffer.from(
            `${options.auth.credentials.username}:${options.auth.credentials.password}`
          ).toString('base64');
          headers['Authorization'] = `Basic ${encoded}`;
        }
        break;
      case 'bearer':
        if (options.auth.credentials.token) {
          headers['Authorization'] = `Bearer ${options.auth.credentials.token}`;
        }
        break;
      case 'apiKey':
        if (options.auth.credentials.apiKey) {
          headers['X-API-Key'] = options.auth.credentials.apiKey;
        }
        break;
      case 'custom':
        if (options.auth.credentials.headerName && options.auth.credentials.headerValue) {
          headers[options.auth.credentials.headerName] = options.auth.credentials.headerValue;
        }
        break;
    }
  }

  const response = await fetch(options.baseUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(options.timeout!)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}
