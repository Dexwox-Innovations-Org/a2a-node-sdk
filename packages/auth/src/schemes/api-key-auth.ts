/**
 * @module ApiKeyAuth
 * @description API Key authentication implementation for the A2A authentication framework
 */

import { AuthScheme, ApiKeyAuthConfig, AuthResult, UserContext } from '../types/auth-types';

/**
 * API Key authentication scheme implementation
 * 
 * Implements API key-based authentication using custom headers
 * Supports various header formats and validation patterns
 */
export class ApiKeyAuthScheme implements AuthScheme {
  public readonly type = 'apiKey' as const;
  public readonly config: ApiKeyAuthConfig;

  constructor(config: ApiKeyAuthConfig) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate the API key auth configuration
   * @throws Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.apiKey || this.config.apiKey.trim() === '') {
      throw new Error('API key is required for API key authentication');
    }
    if (!this.config.headerName || this.config.headerName.trim() === '') {
      throw new Error('Header name is required for API key authentication');
    }
  }

  /**
   * Generate authentication headers for API key auth
   * @returns Promise resolving to authentication headers
   */
  async generateHeaders(): Promise<Record<string, string>> {
    return {
      [this.config.headerName]: this.config.apiKey
    };
  }

  /**
   * Validate API key authentication credentials
   * @param credentials - Credentials to validate (should contain the API key header)
   * @returns Promise resolving to authentication result
   */
  async validate(credentials: Record<string, string>): Promise<AuthResult> {
    try {
      const headerName = this.config.headerName.toLowerCase();
      const providedKey = this.findHeaderValue(credentials, headerName);

      if (!providedKey) {
        return {
          success: false,
          error: `Missing ${this.config.headerName} header`,
          errorCode: 'MISSING_API_KEY'
        };
      }

      // Use constant-time comparison to prevent timing attacks
      const isValidKey = this.constantTimeCompare(providedKey, this.config.apiKey);

      if (!isValidKey) {
        return {
          success: false,
          error: 'Invalid API key',
          errorCode: 'INVALID_API_KEY'
        };
      }

      // Create user context
      const user: UserContext = {
        id: `apikey_${this.hashApiKey(this.config.apiKey)}`,
        roles: [],
        permissions: [],
        authenticatedAt: new Date().toISOString(),
        metadata: {
          authScheme: 'apiKey',
          headerName: this.config.headerName,
          keyPrefix: this.config.apiKey.substring(0, 8),
          ...this.config.metadata
        }
      };

      return {
        success: true,
        user,
        metadata: {
          authScheme: 'apiKey',
          headerName: this.config.headerName,
          authenticatedAt: user.authenticatedAt
        }
      };

    } catch (error) {
      return {
        success: false,
        error: `Authentication error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        errorCode: 'AUTHENTICATION_ERROR'
      };
    }
  }

  /**
   * Find header value with case-insensitive lookup
   * @param headers - Headers object
   * @param headerName - Header name to find (lowercase)
   * @returns Header value or undefined
   */
  private findHeaderValue(headers: Record<string, string>, headerName: string): string | undefined {
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === headerName) {
        return value;
      }
    }
    return undefined;
  }

  /**
   * Constant-time string comparison to prevent timing attacks
   * @param a - First string
   * @param b - Second string
   * @returns Whether strings are equal
   */
  private constantTimeCompare(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }

    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return result === 0;
  }

  /**
   * Create a hash of the API key for identification purposes
   * @param apiKey - API key to hash
   * @returns Hash of the API key
   */
  private hashApiKey(apiKey: string): string {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(apiKey).digest('hex').substring(0, 16);
  }

  /**
   * Create API key auth scheme from API key and header name
   * @param apiKey - API key
   * @param headerName - Header name (default: 'X-API-Key')
   * @param metadata - Optional metadata
   * @returns ApiKeyAuthScheme instance
   */
  static create(apiKey: string, headerName?: string, metadata?: Record<string, any>): ApiKeyAuthScheme {
    return new ApiKeyAuthScheme({
      type: 'apiKey',
      apiKey,
      headerName: headerName || 'X-API-Key',
      enabled: true,
      metadata
    });
  }

  /**
   * Parse API key from headers
   * @param headers - Headers object
   * @param headerName - Header name to look for
   * @returns API key or null if not found
   */
  static parseApiKey(headers: Record<string, string>, headerName: string = 'X-API-Key'): string | null {
    const lowerHeaderName = headerName.toLowerCase();
    
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === lowerHeaderName) {
        return value || null;
      }
    }
    
    return null;
  }

  /**
   * Validate API key format
   * @param apiKey - API key to validate
   * @param options - Validation options
   * @returns Whether API key format is valid
   */
  static validateApiKeyFormat(
    apiKey: string, 
    options?: {
      minLength?: number;
      maxLength?: number;
      allowedChars?: RegExp;
      requiredPrefix?: string;
    }
  ): boolean {
    if (!apiKey || typeof apiKey !== 'string') {
      return false;
    }

    const opts = {
      minLength: 16,
      maxLength: 128,
      allowedChars: /^[a-zA-Z0-9_-]+$/,
      ...options
    };

    // Check length
    if (apiKey.length < opts.minLength || apiKey.length > opts.maxLength) {
      return false;
    }

    // Check character set
    if (opts.allowedChars && !opts.allowedChars.test(apiKey)) {
      return false;
    }

    // Check required prefix
    if (opts.requiredPrefix && !apiKey.startsWith(opts.requiredPrefix)) {
      return false;
    }

    return true;
  }

  /**
   * Generate secure API key
   * @param length - Key length (default: 32)
   * @param prefix - Optional prefix
   * @returns Generated API key
   */
  static generateApiKey(length: number = 32, prefix?: string): string {
    const crypto = require('crypto');
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(0, charset.length);
      key += charset[randomIndex];
    }
    
    return prefix ? `${prefix}${key}` : key;
  }

  /**
   * Create multiple API key configurations for different purposes
   * @param keys - Array of API key configurations
   * @returns Array of ApiKeyAuthScheme instances
   */
  static createMultiple(keys: Array<{
    apiKey: string;
    headerName?: string;
    metadata?: Record<string, any>;
  }>): ApiKeyAuthScheme[] {
    return keys.map(key => ApiKeyAuthScheme.create(
      key.apiKey,
      key.headerName,
      key.metadata
    ));
  }
}

/**
 * Factory function to create API key auth scheme
 * @param apiKey - API key
 * @param options - Additional options
 * @returns ApiKeyAuthScheme instance
 */
export function createApiKeyAuth(
  apiKey: string, 
  options?: { 
    headerName?: string; 
    metadata?: Record<string, any> 
  }
): ApiKeyAuthScheme {
  return ApiKeyAuthScheme.create(apiKey, options?.headerName, options?.metadata);
}

/**
 * Utility function to create API key header
 * @param apiKey - API key
 * @param headerName - Header name (default: 'X-API-Key')
 * @returns Header object
 */
export function createApiKeyHeader(apiKey: string, headerName: string = 'X-API-Key'): Record<string, string> {
  return {
    [headerName]: apiKey
  };
}

/**
 * Utility function to extract API key from request headers
 * @param headers - Request headers
 * @param headerName - Header name to look for (default: 'X-API-Key')
 * @returns Extracted API key or null
 */
export function extractApiKey(headers: Record<string, string>, headerName: string = 'X-API-Key'): string | null {
  return ApiKeyAuthScheme.parseApiKey(headers, headerName);
}

/**
 * Common API key header names
 */
export const API_KEY_HEADERS = {
  X_API_KEY: 'X-API-Key',
  AUTHORIZATION: 'Authorization',
  API_KEY: 'Api-Key',
  ACCESS_TOKEN: 'Access-Token',
  X_ACCESS_TOKEN: 'X-Access-Token',
  X_AUTH_TOKEN: 'X-Auth-Token'
} as const;

/**
 * API key validation patterns
 */
export const API_KEY_PATTERNS = {
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  ALPHANUMERIC_DASH: /^[a-zA-Z0-9_-]+$/,
  BASE64: /^[a-zA-Z0-9+/]+=*$/,
  HEX: /^[a-fA-F0-9]+$/,
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
} as const;