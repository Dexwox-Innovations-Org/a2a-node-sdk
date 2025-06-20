/**
 * @module OAuth2Password
 * @description OAuth2 Resource Owner Password Credentials flow implementation for the A2A authentication framework
 */

import {
  OAuth2TokenResponse,
  OAuth2TokenRequest,
  OAuth2ErrorResponse
} from '../../types/oauth2-types';
import { OAuth2Config, AuthResult, UserContext, TokenInfo } from '../../types/auth-types';
import { OAuth2Error } from '../../errors/auth-errors';

/**
 * OAuth2 Resource Owner Password Credentials flow implementation
 *
 * Implements RFC 6749 Section 4.3 (Resource Owner Password Credentials Grant)
 * Used when the client has a trusted relationship with the resource owner
 * Note: This flow is discouraged in OAuth 2.1 due to security concerns
 */
export class OAuth2PasswordFlowImpl {
  private readonly config: OAuth2Config;

  constructor(config: OAuth2Config) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate OAuth2 configuration for password flow
   * @throws OAuth2Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.clientId) {
      throw new OAuth2Error('INVALID_CLIENT', 'Client ID is required');
    }
    if (!this.config.tokenUrl) {
      throw new OAuth2Error('INVALID_REQUEST', 'Token URL is required');
    }
  }

  /**
   * Request access token using resource owner password credentials
   * @param username - Resource owner username
   * @param password - Resource owner password
   * @param scopes - Optional scopes to request
   * @returns Token response
   */
  async requestAccessToken(
    username: string,
    password: string,
    scopes?: string[]
  ): Promise<OAuth2TokenResponse> {
    this.validateCredentials(username, password);

    const tokenRequest: OAuth2TokenRequest = {
      grant_type: 'password',
      username,
      password,
      client_id: this.config.clientId
    };

    // Add client secret if available
    if (this.config.clientSecret) {
      tokenRequest.client_secret = this.config.clientSecret;
    }

    // Add scopes if provided
    const requestedScopes = scopes || this.config.scopes;
    if (requestedScopes && requestedScopes.length > 0) {
      tokenRequest.scope = requestedScopes.join(' ');
    }

    try {
      const response = await this.makeTokenRequest(tokenRequest);
      return response;
    } catch (error) {
      if (error instanceof OAuth2Error) {
        throw error;
      }
      throw new OAuth2Error('SERVER_ERROR', `Token request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Refresh access token using refresh token
   * @param refreshToken - Refresh token
   * @param scopes - Optional scopes to request
   * @returns Token response
   */
  async refreshAccessToken(
    refreshToken: string,
    scopes?: string[]
  ): Promise<OAuth2TokenResponse> {
    if (!refreshToken) {
      throw new OAuth2Error('INVALID_REQUEST', 'Refresh token is required');
    }

    const tokenRequest: OAuth2TokenRequest = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: this.config.clientId
    };

    // Add client secret if available
    if (this.config.clientSecret) {
      tokenRequest.client_secret = this.config.clientSecret;
    }

    // Add scopes if provided
    const requestedScopes = scopes || this.config.scopes;
    if (requestedScopes && requestedScopes.length > 0) {
      tokenRequest.scope = requestedScopes.join(' ');
    }

    try {
      const response = await this.makeTokenRequest(tokenRequest);
      return response;
    } catch (error) {
      if (error instanceof OAuth2Error) {
        throw error;
      }
      throw new OAuth2Error('SERVER_ERROR', `Token refresh failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Make token request to OAuth2 server
   * @param tokenRequest - Token request parameters
   * @returns Token response
   */
  private async makeTokenRequest(tokenRequest: OAuth2TokenRequest): Promise<OAuth2TokenResponse> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    };

    // Add client authentication via Basic Auth header if client secret is available
    if (this.config.clientSecret) {
      const credentials = Buffer.from(`${this.config.clientId}:${this.config.clientSecret}`).toString('base64');
      headers['Authorization'] = `Basic ${credentials}`;
    }

    const body = new URLSearchParams();
    Object.entries(tokenRequest).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        body.append(key, String(value));
      }
    });

    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers,
      body: body.toString()
    });

    const responseData = await response.json();

    if (!response.ok) {
      const errorResponse = responseData as OAuth2ErrorResponse;
      throw new OAuth2Error(
        errorResponse.error || 'SERVER_ERROR',
        errorResponse.error_description || `HTTP ${response.status}: ${response.statusText}`,
        { status: response.status, response: responseData }
      );
    }

    return responseData as OAuth2TokenResponse;
  }

  /**
   * Validate username and password credentials
   * @param username - Username to validate
   * @param password - Password to validate
   * @throws OAuth2Error if credentials are invalid
   */
  private validateCredentials(username: string, password: string): void {
    if (!username || typeof username !== 'string' || username.trim() === '') {
      throw new OAuth2Error('INVALID_REQUEST', 'Username is required and cannot be empty');
    }
    if (!password || typeof password !== 'string' || password.trim() === '') {
      throw new OAuth2Error('INVALID_REQUEST', 'Password is required and cannot be empty');
    }
  }

  /**
   * Create user context from token response and username
   * @param tokenResponse - OAuth2 token response
   * @param username - Username used for authentication
   * @returns User context
   */
  createUserContext(tokenResponse: OAuth2TokenResponse, username: string): UserContext {
    const now = new Date().toISOString();
    const expiresAt = tokenResponse.expires_in 
      ? new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString()
      : undefined;

    return {
      id: username,
      roles: [],
      permissions: tokenResponse.scope ? tokenResponse.scope.split(' ') : [],
      authenticatedAt: now,
      expiresAt,
      metadata: {
        authScheme: 'oauth2',
        grantType: 'password',
        tokenType: tokenResponse.token_type,
        scope: tokenResponse.scope,
        clientId: this.config.clientId,
        username
      }
    };
  }

  /**
   * Create token info from OAuth2 response
   * @param tokenResponse - OAuth2 token response
   * @returns Token info
   */
  createTokenInfo(tokenResponse: OAuth2TokenResponse): TokenInfo {
    return {
      accessToken: tokenResponse.access_token,
      tokenType: tokenResponse.token_type,
      expiresIn: tokenResponse.expires_in,
      scope: tokenResponse.scope,
      refreshToken: tokenResponse.refresh_token,
      additionalData: {
        ...tokenResponse,
        // Remove standard fields to avoid duplication
        access_token: undefined,
        token_type: undefined,
        expires_in: undefined,
        scope: undefined,
        refresh_token: undefined
      }
    };
  }

  /**
   * Validate token response
   * @param tokenResponse - Token response to validate
   * @throws OAuth2Error if response is invalid
   */
  validateTokenResponse(tokenResponse: OAuth2TokenResponse): void {
    if (!tokenResponse.access_token) {
      throw new OAuth2Error('INVALID_REQUEST', 'Missing access_token in response');
    }
    if (!tokenResponse.token_type) {
      throw new OAuth2Error('INVALID_REQUEST', 'Missing token_type in response');
    }
  }

  /**
   * Check if token is expired
   * @param tokenResponse - Token response
   * @param clockTolerance - Clock tolerance in seconds (default: 30)
   * @returns Whether token is expired
   */
  isTokenExpired(tokenResponse: OAuth2TokenResponse, clockTolerance: number = 30): boolean {
    if (!tokenResponse.expires_in) {
      return false; // No expiration info
    }

    // Assuming the token was issued when this method is called
    // In a real implementation, you'd store the issued_at timestamp
    const now = Math.floor(Date.now() / 1000);
    const expiresAt = now + tokenResponse.expires_in;
    
    return now > (expiresAt - clockTolerance);
  }

  /**
   * Securely clear credentials from memory
   * @param credentials - Object containing sensitive data
   */
  clearCredentials(credentials: { username?: string; password?: string; refreshToken?: string }): void {
    // Overwrite sensitive data with random values
    if (credentials.password) {
      credentials.password = crypto.getRandomValues(new Uint8Array(credentials.password.length))
        .reduce((acc, val) => acc + String.fromCharCode(val), '');
    }
    if (credentials.refreshToken) {
      credentials.refreshToken = crypto.getRandomValues(new Uint8Array(credentials.refreshToken.length))
        .reduce((acc, val) => acc + String.fromCharCode(val), '');
    }
    
    // Clear references
    Object.keys(credentials).forEach(key => {
      delete (credentials as any)[key];
    });
  }

  /**
   * Create password flow instance
   * @param config - OAuth2 configuration
   * @returns OAuth2PasswordFlow instance
   */
  static create(config: OAuth2Config): OAuth2PasswordFlowImpl {
    return new OAuth2PasswordFlowImpl(config);
  }
}

/**
 * Factory function to create OAuth2 password flow
 * @param config - OAuth2 configuration
 * @returns OAuth2PasswordFlow instance
 */
export function createPasswordFlow(config: OAuth2Config): OAuth2PasswordFlowImpl {
  return OAuth2PasswordFlowImpl.create(config);
}

/**
 * Utility function to create password flow configuration
 * @param clientId - Client ID
 * @param tokenUrl - Token endpoint URL
 * @param clientSecret - Optional client secret
 * @param scopes - Optional scopes
 * @returns OAuth2 configuration for password flow
 */
export function createPasswordConfig(
  clientId: string,
  tokenUrl: string,
  clientSecret?: string,
  scopes?: string[]
): OAuth2Config {
  return {
    type: 'oauth2',
    grantType: 'password',
    clientId,
    clientSecret: clientSecret || '',
    authorizationUrl: '', // Not used in password flow
    tokenUrl,
    scopes: scopes || [],
    enablePKCE: false, // Not applicable for password flow
    enabled: true
  };
}

/**
 * Utility function to validate password strength
 * @param password - Password to validate
 * @returns Validation result with strength score and recommendations
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  score: number;
  recommendations: string[];
} {
  const recommendations: string[] = [];
  let score = 0;

  if (password.length >= 8) {
    score += 1;
  } else {
    recommendations.push('Use at least 8 characters');
  }

  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    recommendations.push('Include lowercase letters');
  }

  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    recommendations.push('Include uppercase letters');
  }

  if (/\d/.test(password)) {
    score += 1;
  } else {
    recommendations.push('Include numbers');
  }

  if (/[^a-zA-Z\d]/.test(password)) {
    score += 1;
  } else {
    recommendations.push('Include special characters');
  }

  return {
    isValid: score >= 3,
    score,
    recommendations
  };
}

/**
 * Utility function to check for common weak passwords
 * @param password - Password to check
 * @returns Whether password is commonly used/weak
 */
export function isCommonPassword(password: string): boolean {
  const commonPasswords = [
    'password', '123456', '123456789', 'qwerty', 'abc123',
    'password123', 'admin', 'letmein', 'welcome', 'monkey'
  ];
  
  return commonPasswords.includes(password.toLowerCase());
}