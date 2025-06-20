/**
 * @module BearerAuth
 * @description Bearer token authentication implementation for the A2A authentication framework
 */

import { AuthScheme, BearerAuthConfig, AuthResult, UserContext, TokenInfo } from '../types/auth-types';

/**
 * Bearer token authentication scheme implementation
 * 
 * Implements RFC 6750 Bearer Token Usage
 * Supports JWT and opaque tokens
 */
export class BearerAuthScheme implements AuthScheme {
  public readonly type = 'bearer' as const;
  public readonly config: BearerAuthConfig;

  constructor(config: BearerAuthConfig) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate the bearer auth configuration
   * @throws Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.token || this.config.token.trim() === '') {
      throw new Error('Token is required for bearer authentication');
    }
    
    // Basic token format validation
    if (this.config.token.includes(' ')) {
      throw new Error('Bearer token cannot contain spaces');
    }
  }

  /**
   * Generate authentication headers for bearer auth
   * @returns Promise resolving to authentication headers
   */
  async generateHeaders(): Promise<Record<string, string>> {
    const tokenType = this.config.tokenType || 'Bearer';
    
    return {
      'Authorization': `${tokenType} ${this.config.token}`
    };
  }

  /**
   * Validate bearer authentication credentials
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
      const expectedPrefix = `${this.config.tokenType || 'Bearer'} `;
      
      if (!authHeader.startsWith(expectedPrefix)) {
        return {
          success: false,
          error: `Invalid authorization scheme, expected ${this.config.tokenType || 'Bearer'}`,
          errorCode: 'INVALID_SCHEME'
        };
      }

      const providedToken = authHeader.substring(expectedPrefix.length);
      
      if (!providedToken) {
        return {
          success: false,
          error: 'Missing token in Authorization header',
          errorCode: 'MISSING_TOKEN'
        };
      }

      // Use constant-time comparison to prevent timing attacks
      const isValidToken = this.constantTimeCompare(providedToken, this.config.token);

      if (!isValidToken) {
        return {
          success: false,
          error: 'Invalid bearer token',
          errorCode: 'INVALID_TOKEN'
        };
      }

      // Extract user information from token if it's a JWT
      let user: UserContext;
      let tokenInfo: TokenInfo | undefined;

      if (this.isJWT(providedToken)) {
        try {
          const jwtPayload = this.decodeJWT(providedToken);
          user = this.createUserFromJWT(jwtPayload);
          tokenInfo = this.createTokenInfo(providedToken, jwtPayload);
        } catch (error) {
          // If JWT parsing fails, treat as opaque token
          user = this.createDefaultUser(providedToken);
        }
      } else {
        // Opaque token
        user = this.createDefaultUser(providedToken);
      }

      return {
        success: true,
        user,
        tokens: tokenInfo,
        metadata: {
          authScheme: 'bearer',
          tokenType: this.config.tokenType || 'Bearer',
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
   * Check if token is a JWT
   * @param token - Token to check
   * @returns Whether token is a JWT
   */
  private isJWT(token: string): boolean {
    const parts = token.split('.');
    return parts.length === 3;
  }

  /**
   * Decode JWT payload (without verification)
   * @param token - JWT token
   * @returns Decoded payload
   */
  private decodeJWT(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format');
    }

    try {
      const payload = parts[1];
      // Add padding if needed
      const paddedPayload = payload + '='.repeat((4 - payload.length % 4) % 4);
      const decoded = Buffer.from(paddedPayload, 'base64url').toString('utf8');
      return JSON.parse(decoded);
    } catch (error) {
      throw new Error('Failed to decode JWT payload');
    }
  }

  /**
   * Create user context from JWT payload
   * @param payload - JWT payload
   * @returns User context
   */
  private createUserFromJWT(payload: any): UserContext {
    const now = new Date().toISOString();
    
    return {
      id: payload.sub || payload.user_id || payload.id || 'unknown',
      username: payload.preferred_username || payload.username || payload.name,
      email: payload.email,
      roles: payload.roles || payload.groups || [],
      permissions: payload.permissions || payload.scope?.split(' ') || [],
      authenticatedAt: now,
      expiresAt: payload.exp ? new Date(payload.exp * 1000).toISOString() : undefined,
      metadata: {
        authScheme: 'bearer',
        tokenType: this.config.tokenType || 'Bearer',
        jwtClaims: payload,
        ...this.config.metadata
      }
    };
  }

  /**
   * Create default user context for opaque tokens
   * @param token - Bearer token
   * @returns User context
   */
  private createDefaultUser(token: string): UserContext {
    const now = new Date().toISOString();
    
    return {
      id: `bearer_${token.substring(0, 8)}`, // Use first 8 chars as ID
      roles: [],
      permissions: [],
      authenticatedAt: now,
      metadata: {
        authScheme: 'bearer',
        tokenType: this.config.tokenType || 'Bearer',
        tokenPrefix: token.substring(0, 8),
        ...this.config.metadata
      }
    };
  }

  /**
   * Create token info from JWT
   * @param token - JWT token
   * @param payload - JWT payload
   * @returns Token info
   */
  private createTokenInfo(token: string, payload: any): TokenInfo {
    return {
      accessToken: token,
      tokenType: this.config.tokenType || 'Bearer',
      expiresIn: payload.exp ? payload.exp - Math.floor(Date.now() / 1000) : undefined,
      scope: payload.scope,
      additionalData: {
        iat: payload.iat,
        exp: payload.exp,
        iss: payload.iss,
        aud: payload.aud
      }
    };
  }

  /**
   * Create bearer auth scheme from token
   * @param token - Bearer token
   * @param tokenType - Token type (default: 'Bearer')
   * @param metadata - Optional metadata
   * @returns BearerAuthScheme instance
   */
  static create(token: string, tokenType?: string, metadata?: Record<string, any>): BearerAuthScheme {
    return new BearerAuthScheme({
      type: 'bearer',
      token,
      tokenType: tokenType || 'Bearer',
      enabled: true,
      metadata
    });
  }

  /**
   * Parse Authorization header and extract token
   * @param authHeader - Authorization header value
   * @param expectedTokenType - Expected token type (default: 'Bearer')
   * @returns Extracted token or null if invalid
   */
  static parseAuthHeader(authHeader: string, expectedTokenType: string = 'Bearer'): string | null {
    const prefix = `${expectedTokenType} `;
    
    if (!authHeader.startsWith(prefix)) {
      return null;
    }

    const token = authHeader.substring(prefix.length);
    return token || null;
  }

  /**
   * Validate JWT format (basic structure check)
   * @param token - Token to validate
   * @returns Whether token has valid JWT format
   */
  static isValidJWTFormat(token: string): boolean {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }

    // Check if each part is valid base64url
    try {
      for (const part of parts) {
        if (part === '') return false;
        // Try to decode each part
        Buffer.from(part + '='.repeat((4 - part.length % 4) % 4), 'base64url');
      }
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Extract JWT payload without verification
   * @param token - JWT token
   * @returns Decoded payload or null if invalid
   */
  static extractJWTPayload(token: string): any | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        return null;
      }

      const payload = parts[1];
      const paddedPayload = payload + '='.repeat((4 - payload.length % 4) % 4);
      const decoded = Buffer.from(paddedPayload, 'base64url').toString('utf8');
      return JSON.parse(decoded);
    } catch {
      return null;
    }
  }

  /**
   * Check if JWT is expired
   * @param token - JWT token
   * @param clockTolerance - Clock tolerance in seconds (default: 0)
   * @returns Whether token is expired
   */
  static isJWTExpired(token: string, clockTolerance: number = 0): boolean {
    const payload = BearerAuthScheme.extractJWTPayload(token);
    if (!payload || !payload.exp) {
      return false; // No expiration claim
    }

    const now = Math.floor(Date.now() / 1000);
    return now > (payload.exp + clockTolerance);
  }

  /**
   * Get JWT expiration time
   * @param token - JWT token
   * @returns Expiration timestamp or null if no expiration
   */
  static getJWTExpiration(token: string): number | null {
    const payload = BearerAuthScheme.extractJWTPayload(token);
    return payload?.exp || null;
  }
}

/**
 * Factory function to create bearer auth scheme
 * @param token - Bearer token
 * @param options - Additional options
 * @returns BearerAuthScheme instance
 */
export function createBearerAuth(
  token: string, 
  options?: { 
    tokenType?: string; 
    metadata?: Record<string, any> 
  }
): BearerAuthScheme {
  return BearerAuthScheme.create(token, options?.tokenType, options?.metadata);
}

/**
 * Utility function to create Authorization header
 * @param token - Bearer token
 * @param tokenType - Token type (default: 'Bearer')
 * @returns Authorization header value
 */
export function createBearerHeader(token: string, tokenType: string = 'Bearer'): string {
  return `${tokenType} ${token}`;
}

/**
 * Utility function to extract token from Authorization header
 * @param authHeader - Authorization header value
 * @param tokenType - Expected token type (default: 'Bearer')
 * @returns Extracted token or null
 */
export function extractBearerToken(authHeader: string, tokenType: string = 'Bearer'): string | null {
  return BearerAuthScheme.parseAuthHeader(authHeader, tokenType);
}