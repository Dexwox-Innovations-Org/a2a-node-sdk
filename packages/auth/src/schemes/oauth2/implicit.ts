/**
 * @module OAuth2Implicit
 * @description OAuth2 Implicit flow implementation for the A2A authentication framework
 */

import {
  OAuth2TokenResponse,
  OAuth2ErrorResponse,
  OAuth2AuthorizationRequest
} from '../../types/oauth2-types';
import { OAuth2Config, AuthResult, UserContext, TokenInfo } from '../../types/auth-types';
import { OAuth2Error } from '../../errors/auth-errors';

/**
 * OAuth2 Implicit flow implementation
 *
 * Implements RFC 6749 Section 4.2 (Implicit Grant)
 * Used for client-side applications where client secret cannot be securely stored
 * Note: This flow is deprecated in OAuth 2.1 in favor of Authorization Code with PKCE
 */
export class OAuth2ImplicitFlowImpl {
  private readonly config: OAuth2Config;

  constructor(config: OAuth2Config) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate OAuth2 configuration for implicit flow
   * @throws OAuth2Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.clientId) {
      throw new OAuth2Error('INVALID_CLIENT', 'Client ID is required');
    }
    if (!this.config.authorizationUrl) {
      throw new OAuth2Error('INVALID_REQUEST', 'Authorization URL is required');
    }
    if (!this.config.redirectUri) {
      throw new OAuth2Error('INVALID_REQUEST', 'Redirect URI is required for implicit flow');
    }
  }

  /**
   * Generate authorization URL for implicit flow
   * @param state - Optional state parameter for CSRF protection
   * @param scopes - Optional scopes to request
   * @returns Authorization URL
   */
  generateAuthorizationUrl(state?: string, scopes?: string[]): string {
    const authRequest: OAuth2AuthorizationRequest = {
      response_type: 'token',
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri!,
      state: state || this.generateState(),
      scope: this.buildScopeString(scopes)
    };

    const url = new URL(this.config.authorizationUrl);
    Object.entries(authRequest).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });

    return url.toString();
  }

  /**
   * Parse token from redirect URL fragment
   * @param redirectUrl - The redirect URL containing the token in fragment
   * @returns Token response
   */
  parseTokenFromRedirect(redirectUrl: string): OAuth2TokenResponse {
    try {
      const url = new URL(redirectUrl);
      const fragment = url.hash.substring(1); // Remove the '#'
      
      if (!fragment) {
        throw new OAuth2Error('INVALID_REQUEST', 'No fragment found in redirect URL');
      }

      const params = new URLSearchParams(fragment);
      
      // Check for error first
      const error = params.get('error');
      if (error) {
        const errorDescription = params.get('error_description');
        const errorUri = params.get('error_uri');
        throw new OAuth2Error(
          error as any,
          errorDescription || `Authorization failed: ${error}`,
          { error_uri: errorUri }
        );
      }

      // Extract token information
      const accessToken = params.get('access_token');
      const tokenType = params.get('token_type');
      const expiresIn = params.get('expires_in');
      const scope = params.get('scope');
      const state = params.get('state');

      if (!accessToken) {
        throw new OAuth2Error('INVALID_REQUEST', 'Missing access_token in redirect URL');
      }

      const tokenResponse: OAuth2TokenResponse = {
        access_token: accessToken,
        token_type: tokenType || 'Bearer',
        expires_in: expiresIn ? parseInt(expiresIn, 10) : undefined,
        scope: scope || undefined,
        state: state || undefined
      };

      this.validateTokenResponse(tokenResponse);
      return tokenResponse;
    } catch (error) {
      if (error instanceof OAuth2Error) {
        throw error;
      }
      throw new OAuth2Error('INVALID_REQUEST', `Failed to parse redirect URL: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Validate state parameter to prevent CSRF attacks
   * @param receivedState - State received from authorization server
   * @param expectedState - Expected state value
   * @throws OAuth2Error if state validation fails
   */
  validateState(receivedState: string | null, expectedState: string): void {
    if (!receivedState) {
      throw new OAuth2Error('INVALID_REQUEST', 'Missing state parameter in response');
    }
    if (receivedState !== expectedState) {
      throw new OAuth2Error('INVALID_REQUEST', 'State parameter mismatch - possible CSRF attack');
    }
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
      id: `implicit_${this.config.clientId}`,
      roles: [],
      permissions: tokenResponse.scope ? tokenResponse.scope.split(' ') : [],
      authenticatedAt: now,
      expiresAt,
      metadata: {
        authScheme: 'oauth2',
        grantType: 'implicit',
        tokenType: tokenResponse.token_type,
        scope: tokenResponse.scope,
        clientId: this.config.clientId,
        state: tokenResponse.state
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
        state: tokenResponse.state,
        // Remove standard fields to avoid duplication
        access_token: undefined,
        token_type: undefined,
        expires_in: undefined,
        scope: undefined
      }
    };
  }

  /**
   * Generate a cryptographically secure state parameter
   * @returns Random state string
   */
  private generateState(): string {
    // Generate 32 random bytes and encode as base64url
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Buffer.from(array)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }

  /**
   * Build scope string from array
   * @param scopes - Scopes array
   * @returns Scope string
   */
  private buildScopeString(scopes?: string[]): string | undefined {
    const requestedScopes = scopes || this.config.scopes;
    return requestedScopes && requestedScopes.length > 0 
      ? requestedScopes.join(' ') 
      : undefined;
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
   * Create implicit flow instance
   * @param config - OAuth2 configuration
   * @returns OAuth2ImplicitFlow instance
   */
  static create(config: OAuth2Config): OAuth2ImplicitFlowImpl {
    return new OAuth2ImplicitFlowImpl(config);
  }
}

/**
 * Factory function to create OAuth2 implicit flow
 * @param config - OAuth2 configuration
 * @returns OAuth2ImplicitFlow instance
 */
export function createImplicitFlow(config: OAuth2Config): OAuth2ImplicitFlowImpl {
  return OAuth2ImplicitFlowImpl.create(config);
}

/**
 * Utility function to create implicit flow configuration
 * @param clientId - Client ID
 * @param authorizationUrl - Authorization endpoint URL
 * @param redirectUri - Redirect URI
 * @param scopes - Optional scopes
 * @returns OAuth2 configuration for implicit flow
 */
export function createImplicitConfig(
  clientId: string,
  authorizationUrl: string,
  redirectUri: string,
  scopes?: string[]
): OAuth2Config {
  return {
    type: 'oauth2',
    grantType: 'implicit',
    clientId,
    clientSecret: '', // Not used in implicit flow
    authorizationUrl,
    tokenUrl: '', // Not used in implicit flow
    redirectUri,
    scopes: scopes || [],
    enablePKCE: false, // Can be enabled for implicit flow but not required
    enabled: true
  };
}

/**
 * Utility function to extract token from current window location (browser only)
 * @returns Token response if found in current URL fragment
 */
export function extractTokenFromCurrentUrl(): OAuth2TokenResponse | null {
  if (typeof window === 'undefined') {
    return null; // Not in browser environment
  }

  try {
    const fragment = window.location.hash.substring(1);
    if (!fragment) {
      return null;
    }

    const params = new URLSearchParams(fragment);
    const accessToken = params.get('access_token');
    
    if (!accessToken) {
      return null;
    }

    return {
      access_token: accessToken,
      token_type: params.get('token_type') || 'Bearer',
      expires_in: params.get('expires_in') ? parseInt(params.get('expires_in')!, 10) : undefined,
      scope: params.get('scope') || undefined,
      state: params.get('state') || undefined
    };
  } catch (error) {
    return null;
  }
}

/**
 * Utility function to clear token from URL fragment (browser only)
 */
export function clearTokenFromUrl(): void {
  if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
    // Remove the fragment from URL without reloading the page
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}