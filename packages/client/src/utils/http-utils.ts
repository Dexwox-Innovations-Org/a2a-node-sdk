/**
 * @module HttpUtils
 * @description Utility functions for HTTP communication with A2A protocol servers
 */

import { JsonRpcRequest, JsonRpcResponse } from '@dexwox-labs/a2a-core';
import { AuthFactory, createAuthFactory } from '@dexwox-labs/a2a-auth';
import { MessageClientOptions } from '../types';

/**
 * Authentication options for HTTP requests
 * 
 * This interface defines how authentication should be handled for HTTP requests,
 * supporting various authentication methods including basic auth, bearer tokens,
 * API keys, and custom headers.
 * 
 * @example
 * ```typescript
 * // Basic authentication
 * const basicAuth: AuthOptions = {
 *   type: 'basic',
 *   credentials: {
 *     username: 'user',
 *     password: 'pass'
 *   }
 * };
 * 
 * // Bearer token authentication
 * const tokenAuth: AuthOptions = {
 *   type: 'bearer',
 *   credentials: {
 *     token: 'your-jwt-token'
 *   }
 * };
 * ```
 */
// Legacy AuthOptions interface for backward compatibility
export interface AuthOptions {
  /** Authentication type to use */
  type: 'basic' | 'bearer' | 'apiKey' | 'custom';
  
  /** Credentials for the selected authentication type */
  credentials: {
    /** Username for basic authentication */
    username?: string;
    
    /** Password for basic authentication */
    password?: string;
    
    /** Token for bearer authentication */
    token?: string;
    
    /** API key for apiKey authentication */
    apiKey?: string;
    
    /** Custom header name for custom authentication */
    headerName?: string;
    
    /** Custom header value for custom authentication */
    headerValue?: string;
  };
}

/**
 * Sends a JSON-RPC request to an A2A protocol server
 * 
 * This function handles the details of making authenticated HTTP requests
 * to A2A protocol servers, including setting up the proper headers,
 * handling authentication, and processing the response.
 * 
 * @param options - Client options including base URL, headers, timeout, and authentication
 * @param request - JSON-RPC request object to send
 * @returns Promise resolving to the JSON-RPC response
 * @throws Error if the HTTP request fails or times out
 * 
 * @example
 * ```typescript
 * // Send a simple JSON-RPC request
 * const response = await sendRequest<AgentCard[]>(
 *   {
 *     baseUrl: 'https://a2a-server.example.com',
 *     timeout: 5000,
 *     auth: {
 *       type: 'bearer',
 *       credentials: { token: 'your-token' }
 *     }
 *   },
 *   {
 *     jsonrpc: '2.0',
 *     method: 'discover',
 *     params: { capability: 'chat' },
 *     id: '1'
 *   }
 * );
 * 
 * console.log('Response:', response.result);
 * ```
 */
export async function sendRequest<T = unknown>(
  options: MessageClientOptions,
  request: JsonRpcRequest
): Promise<JsonRpcResponse<T>> {
  // Set up default headers and add any custom headers
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  // Handle authentication - support both new comprehensive auth and legacy auth
  if (options.auth) {
    // Check if using new comprehensive auth system
    if ('scheme' in options.auth && 'config' in options.auth) {
      try {
        const authFactory = createAuthFactory();
        const scheme = authFactory.getScheme(options.auth.scheme);
        const authHeaders = await scheme.generateHeaders();
        Object.assign(headers, authHeaders);
      } catch (error) {
        console.warn('Authentication failed:', error);
        // Continue without auth headers if authentication fails
      }
    } else {
      // Legacy authentication support for backward compatibility
      const legacyAuth = options.auth as AuthOptions;
      switch (legacyAuth.type) {
        case 'basic':
          // Basic authentication (username:password encoded in base64)
          if (legacyAuth.credentials.username && legacyAuth.credentials.password) {
            const encoded = Buffer.from(
              `${legacyAuth.credentials.username}:${legacyAuth.credentials.password}`
            ).toString('base64');
            headers['Authorization'] = `Basic ${encoded}`;
          }
          break;
        case 'bearer':
          // Bearer token authentication (typically JWT)
          if (legacyAuth.credentials.token) {
            headers['Authorization'] = `Bearer ${legacyAuth.credentials.token}`;
          }
          break;
        case 'apiKey':
          // API key authentication
          if (legacyAuth.credentials.apiKey) {
            headers['X-API-Key'] = legacyAuth.credentials.apiKey;
          }
          break;
        case 'custom':
          // Custom header-based authentication
          if (legacyAuth.credentials.headerName && legacyAuth.credentials.headerValue) {
            headers[legacyAuth.credentials.headerName] = legacyAuth.credentials.headerValue;
          }
          break;
      }
    }
  }

  // Send the request with appropriate timeout
  const response = await fetch(options.baseUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(options.timeout!)
  });

  // Handle non-2xx responses
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  // Parse and return the JSON-RPC response
  return response.json();
}
