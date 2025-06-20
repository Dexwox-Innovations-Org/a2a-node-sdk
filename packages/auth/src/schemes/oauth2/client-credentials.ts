/**
 * @module OAuth2ClientCredentials
 * @description OAuth2 Client Credentials flow implementation for the A2A authentication framework
 */

import {
  OAuth2TokenResponse,
  OAuth2TokenRequest,
  OAuth2ErrorResponse
} from '../../types/oauth2-types';
import { OAuth2Config, AuthResult, UserContext, TokenInfo } from '../../types/auth-types';
import { OAuth2Error } from '../../errors/auth-errors';

/**
 * OAuth2 Client Credentials flow implementation
 *
 * Implements RFC 6749 Section 4.4 (Client Credentials Grant)
 * Used for machine-to-machine authentication where no user interaction is required
 */
export class OAuth2ClientCredentialsFlowImpl {
  private readonly config: OAuth2Config;

  constructor(config: OAuth2Config) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate OAuth2 configuration for client credentials flow
   * @throws OAuth2Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.clientId) {
      throw new OAuth2Error('INVALID_CLIENT', 'Client ID is required');
    }
    if (!this.config.clientSecret) {
      throw new OAuth2Error('INVALID_CLIENT', 'Client secret is required for client credentials flow');
    }
    if (!this.config.tokenUrl) {
      throw new OAuth2Error('INVALID_REQUEST', 'Token URL is required');
    }
  }

  /**
   * Request access token using client credentials
   * @param scopes - Optional scopes to request
   * @returns Token response
   */
  async requestAccessToken(scopes?: string[]): Promise<OAuth2TokenResponse> {
    const tokenRequest: OAuth2TokenRequest = {
      grant_type: 'client_credentials',
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret
    };

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
   * Make token request to OAuth2 server
   * @param tokenRequest - Token request parameters
   * @returns Token response
   */
  private async makeTokenRequest(tokenRequest: OAuth2TokenRequest): Promise<OAuth2TokenResponse> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    };

    // Add client authentication via Basic Auth header
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
   * Create user context from token response
   * @param tokenResponse - OAuth2 token response
   * @returns User context
   */
  createUserContext(tokenResponse: OAuth2TokenResponse): UserContext {
    const now = new Date().toISOString();
    const expiresAt = tokenResponse.expires_in 
      ? new Date(Date.now() + tokenResponse.expires_in * 1000).toISOString()
      : undefined;

    return {
      id: `client_${this.config.clientId}`,
      roles: [],
      permissions: tokenResponse.scope ? tokenResponse.scope.split(' ') : [],
      authenticatedAt: now,
      expiresAt,
      metadata: {
        authScheme: 'oauth2',
        grantType: 'client_credentials',
        tokenType: tokenResponse.token_type,
        scope: tokenResponse.scope,
        clientId: this.config.clientId
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
      additionalData: {
        ...tokenResponse,
        // Remove standard fields to avoid duplication
        access_token: undefined,
        token_type: undefined,
        expires_in: undefined,
        scope: undefined
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
   * Create client credentials flow instance
   * @param config - OAuth2 configuration
   * @returns OAuth2ClientCredentialsFlow instance
   */
  static create(config: OAuth2Config): OAuth2ClientCredentialsFlowImpl {
    return new OAuth2ClientCredentialsFlowImpl(config);
  }
}

/**
 * Factory function to create OAuth2 client credentials flow
 * @param config - OAuth2 configuration
 * @returns OAuth2ClientCredentialsFlow instance
 */
export function createClientCredentialsFlow(config: OAuth2Config): OAuth2ClientCredentialsFlowImpl {
  return OAuth2ClientCredentialsFlowImpl.create(config);
}

/**
 * Utility function to create client credentials configuration
 * @param clientId - Client ID
 * @param clientSecret - Client secret
 * @param tokenUrl - Token endpoint URL
 * @param scopes - Optional scopes
 * @returns OAuth2 configuration for client credentials flow
 */
export function createClientCredentialsConfig(
  clientId: string,
  clientSecret: string,
  tokenUrl: string,
  scopes?: string[]
): OAuth2Config {
  return {
    type: 'oauth2',
    grantType: 'client_credentials',
    clientId,
    clientSecret,
    authorizationUrl: '', // Not used in client credentials flow
    tokenUrl,
    scopes: scopes || [],
    enablePKCE: false, // Not applicable for client credentials
    enabled: true
  };
}

/**
 * Utility function to validate client credentials
 * @param clientId - Client ID
 * @param clientSecret - Client secret
 * @returns Whether credentials are valid format
 */
export function validateClientCredentials(clientId: string, clientSecret: string): boolean {
  if (!clientId || typeof clientId !== 'string' || clientId.trim() === '') {
    return false;
  }
  if (!clientSecret || typeof clientSecret !== 'string' || clientSecret.trim() === '') {
    return false;
  }
  return true;
}