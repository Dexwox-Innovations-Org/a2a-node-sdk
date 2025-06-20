/**
 * @module BasicAuth
 * @description Basic HTTP authentication implementation for the A2A authentication framework
 */

import { AuthScheme, BasicAuthConfig, AuthResult, UserContext } from '../types/auth-types';
import * as crypto from 'crypto';

/**
 * Basic HTTP authentication scheme implementation
 * 
 * Implements RFC 7617 Basic HTTP Authentication Scheme
 * Uses base64 encoding of username:password credentials
 */
export class BasicAuthScheme implements AuthScheme {
  public readonly type = 'basic' as const;
  public readonly config: BasicAuthConfig;

  constructor(config: BasicAuthConfig) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate the basic auth configuration
   * @throws Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.username || this.config.username.trim() === '') {
      throw new Error('Username is required for basic authentication');
    }
    if (!this.config.password || this.config.password.trim() === '') {
      throw new Error('Password is required for basic authentication');
    }
    if (this.config.username.includes(':')) {
      throw new Error('Username cannot contain colon character');
    }
  }

  /**
   * Generate authentication headers for basic auth
   * @returns Promise resolving to authentication headers
   */
  async generateHeaders(): Promise<Record<string, string>> {
    const credentials = `${this.config.username}:${this.config.password}`;
    const encoded = Buffer.from(credentials, 'utf8').toString('base64');
    
    return {
      'Authorization': `Basic ${encoded}`
    };
  }

  /**
   * Validate basic authentication credentials
   * @param credentials - Credentials to validate (should contain Authorization header)
   * @returns Promise resolving to authentication result
   */
  async validate(credentials: { authorization?: string }): Promise<AuthResult> {
    try {
      if (!credentials.authorization) {
        return {
          success: false,
          error: 'Missing Authorization header',
          errorCode: 'MISSING_AUTHORIZATION'
        };
      }

      const authHeader = credentials.authorization;
      if (!authHeader.startsWith('Basic ')) {
        return {
          success: false,
          error: 'Invalid authorization scheme, expected Basic',
          errorCode: 'INVALID_SCHEME'
        };
      }

      const encodedCredentials = authHeader.substring(6); // Remove 'Basic '
      let decodedCredentials: string;
      
      try {
        decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf8');
      } catch (error) {
        return {
          success: false,
          error: 'Invalid base64 encoding in credentials',
          errorCode: 'INVALID_ENCODING'
        };
      }

      const colonIndex = decodedCredentials.indexOf(':');
      if (colonIndex === -1) {
        return {
          success: false,
          error: 'Invalid credentials format, missing colon separator',
          errorCode: 'INVALID_FORMAT'
        };
      }

      const username = decodedCredentials.substring(0, colonIndex);
      const password = decodedCredentials.substring(colonIndex + 1);

      // Use constant-time comparison to prevent timing attacks
      const isValidUsername = this.constantTimeCompare(username, this.config.username);
      const isValidPassword = this.constantTimeCompare(password, this.config.password);

      if (!isValidUsername || !isValidPassword) {
        return {
          success: false,
          error: 'Invalid username or password',
          errorCode: 'INVALID_CREDENTIALS'
        };
      }

      // Create user context
      const user: UserContext = {
        id: username,
        username: username,
        roles: [],
        permissions: [],
        authenticatedAt: new Date().toISOString(),
        metadata: {
          authScheme: 'basic',
          ...this.config.metadata
        }
      };

      return {
        success: true,
        user,
        metadata: {
          authScheme: 'basic',
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
   * Hash password using bcrypt (for storage)
   * @param password - Plain text password
   * @param saltRounds - Number of salt rounds (default: 12)
   * @returns Promise resolving to hashed password
   */
  static async hashPassword(password: string, saltRounds: number = 12): Promise<string> {
    const bcrypt = await import('bcryptjs');
    return bcrypt.hash(password, saltRounds);
  }

  /**
   * Verify password against hash
   * @param password - Plain text password
   * @param hash - Hashed password
   * @returns Promise resolving to whether password is valid
   */
  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    const bcrypt = await import('bcryptjs');
    return bcrypt.compare(password, hash);
  }

  /**
   * Generate secure random password
   * @param length - Password length (default: 16)
   * @returns Generated password
   */
  static generatePassword(length: number = 16): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(0, charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }

  /**
   * Create basic auth scheme from username and password
   * @param username - Username
   * @param password - Password
   * @param metadata - Optional metadata
   * @returns BasicAuthScheme instance
   */
  static create(username: string, password: string, metadata?: Record<string, any>): BasicAuthScheme {
    return new BasicAuthScheme({
      type: 'basic',
      username,
      password,
      enabled: true,
      metadata
    });
  }

  /**
   * Parse Authorization header and extract credentials
   * @param authHeader - Authorization header value
   * @returns Parsed credentials or null if invalid
   */
  static parseAuthHeader(authHeader: string): { username: string; password: string } | null {
    if (!authHeader.startsWith('Basic ')) {
      return null;
    }

    try {
      const encodedCredentials = authHeader.substring(6);
      const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf8');
      const colonIndex = decodedCredentials.indexOf(':');
      
      if (colonIndex === -1) {
        return null;
      }

      return {
        username: decodedCredentials.substring(0, colonIndex),
        password: decodedCredentials.substring(colonIndex + 1)
      };
    } catch {
      return null;
    }
  }
}

/**
 * Factory function to create basic auth scheme
 * @param username - Username
 * @param password - Password
 * @param options - Additional options
 * @returns BasicAuthScheme instance
 */
export function createBasicAuth(
  username: string, 
  password: string, 
  options?: { metadata?: Record<string, any> }
): BasicAuthScheme {
  return BasicAuthScheme.create(username, password, options?.metadata);
}

/**
 * Utility function to encode credentials for basic auth
 * @param username - Username
 * @param password - Password
 * @returns Base64 encoded credentials
 */
export function encodeBasicCredentials(username: string, password: string): string {
  const credentials = `${username}:${password}`;
  return Buffer.from(credentials, 'utf8').toString('base64');
}

/**
 * Utility function to decode basic auth credentials
 * @param encoded - Base64 encoded credentials
 * @returns Decoded credentials or null if invalid
 */
export function decodeBasicCredentials(encoded: string): { username: string; password: string } | null {
  try {
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const colonIndex = decoded.indexOf(':');
    
    if (colonIndex === -1) {
      return null;
    }

    return {
      username: decoded.substring(0, colonIndex),
      password: decoded.substring(colonIndex + 1)
    };
  } catch {
    return null;
  }
}