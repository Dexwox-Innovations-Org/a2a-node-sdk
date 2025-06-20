/**
 * @module OAuth2AuthorizationCode
 * @description OAuth2 Authorization Code flow with PKCE support for the A2A authentication framework
 */

import { randomBytes, createHash } from 'crypto';
import {
  OAuth2TokenResponse,
  OAuth2AuthorizationRequest,
  OAuth2AuthorizationResponse,
  OAuth2TokenRequest,
  OAuth2ErrorResponse
} from '../../types/oauth2-types';
import { OAuth2Config, AuthResult, UserContext, TokenInfo } from '../../types/auth-types';
import { PKCEData } from '../../types/auth-types';
import { OAuth2Error } from '../../errors/auth-errors';

/**
 * OAuth2 Authorization Code flow implementation with PKCE support
 *
 * Implements RFC 6749 (OAuth 2.0) and RFC 7636 (PKCE)
 * Provides secure authorization code exchange with proof key for code exchange
 */
export class OAuth2AuthorizationCodeFlowImpl {
  private readonly config: OAuth2Config;
  private readonly pkceStore = new Map<string, PKCEData>();

  constructor(config: OAuth2Config) {
    this.config = config;
    this.validateConfig();
  }

  /**
   * Validate OAuth2 configuration
   * @throws OAuth2Error if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.clientId) {
      throw new OAuth2Error('INVALID_CLIENT', 'Client ID is required');
    }
    if (!this.config.authorizationUrl) {
      throw new OAuth2Error('INVALID_REQUEST', 'Authorization URL is required');
    }
    if (!this.config.tokenUrl) {
      throw new OAuth2Error('INVALID_REQUEST', 'Token URL is required');
    }
    if (!this.config.redirectUri) {
      throw new OAuth2Error('INVALID_REQUEST', 'Redirect URI is required for authorization code flow');
    }
  }

  /**
   * Generate authorization URL with optional PKCE
   * @param state - Optional state parameter for CSRF protection
   * @param scopes - Optional scopes to request
   * @param additionalParams - Additional parameters
   * @returns Authorization URL
   */
  async getAuthorizationUrl(
    state?: string,
    scopes?: string[],
    additionalParams?: Record<string, string>
  ): Promise<string> {
    const url = new URL(this.config.authorizationUrl);
    
    // Required parameters
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('client_id', this.config.clientId);
    url.searchParams.set('redirect_uri', this.config.redirectUri!);

    // Optional parameters
    if (state) {
      url.searchParams.set('state', state);
    }

    const requestedScopes = scopes || this.config.scopes;
    if (requestedScopes && requestedScopes.length > 0) {
      url.searchParams.set('scope', requestedScopes.join(' '));
    }

    // PKCE support
    if (this.config.enablePKCE) {
      const pkceData = this.generatePKCE();
      const pkceKey = state || 'default';
      this.pkceStore.set(pkceKey, pkceData);
      
      url.searchParams.set('code_challenge', pkceData.codeChallenge);
      url.searchParams.set('code_challenge_method', pkceData.codeChallengeMethod);
    }

    // Additional parameters
    if (additionalParams) {
      Object.entries(additionalParams).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      });
    }

    // Additional config parameters
    if (this.config.additionalParams) {
      Object.entries(this.config.additionalParams).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      });
    }

    return url.toString();
  }

  /**
   * Exchange authorization code for tokens
   * @param code - Authorization code from callback
   * @param state - State parameter for PKCE lookup
   * @param codeVerifier - Optional explicit code verifier
   * @returns Token response
   */
  async exchangeCodeForTokens(
    code: string,
    state?: string,
    codeVerifier?: string
  ): Promise<OAuth2TokenResponse> {
    if (!code) {
      throw new OAuth2Error('INVALID_REQUEST', 'Authorization code is required');
    }

    const tokenRequest: OAuth2TokenRequest = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: this.config.redirectUri!,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret
    };

    // Add PKCE code verifier if enabled
    if (this.config.enablePKCE) {
      const pkceKey = state || 'default';
      const pkceData = this.pkceStore.get(pkceKey);
      
      if (codeVerifier) {
        tokenRequest.code_verifier = codeVerifier;
      } else if (pkceData) {
        tokenRequest.code_verifier = pkceData.codeVerifier;
        // Clean up stored PKCE data
        this.pkceStore.delete(pkceKey);
      } else {
        throw new OAuth2Error('INVALID_REQUEST', 'PKCE code verifier not found');
      }
    }

    try {
      const response = await this.makeTokenRequest(tokenRequest);
      return response;
    } catch (error) {
      if (error instanceof OAuth2Error) {
        throw error;
      }
      throw new OAuth2Error('SERVER_ERROR', `Token exchange failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Parse authorization response from callback URL
   * @param callbackUrl - Full callback URL with parameters
   * @returns Parsed authorization response
   */
  parseAuthorizationResponse(callbackUrl: string): OAuth2AuthorizationResponse {
    const url = new URL(callbackUrl);
    const params = url.searchParams;

    const response: OAuth2AuthorizationResponse = {};

    // Success parameters
    if (params.has('code')) {
      response.code = params.get('code')!;
    }
    if (params.has('state')) {
      response.state = params.get('state')!;
    }

    // Error parameters
    if (params.has('error')) {
      response.error = params.get('error') as any;
      response.error_description = params.get('error_description') || undefined;
      response.error_uri = params.get('error_uri') || undefined;
    }

    return response;
  }

  /**
   * Validate authorization response
   * @param response - Authorization response
   * @param expectedState - Expected state parameter
   * @throws OAuth2Error if response is invalid
   */
  validateAuthorizationResponse(response: OAuth2AuthorizationResponse, expectedState?: string): void {
    // Check for errors
    if (response.error) {
      throw new OAuth2Error(
        response.error,
        response.error_description || `Authorization failed: ${response.error}`,
        { error_uri: response.error_uri }
      );
    }

    // Validate state parameter
    if (expectedState && response.state !== expectedState) {
      throw new OAuth2Error('INVALID_REQUEST', 'State parameter mismatch - possible CSRF attack');
    }

    // Ensure code is present
    if (!response.code) {
      throw new OAuth2Error('INVALID_REQUEST', 'Authorization code not found in response');
    }
  }

  /**
   * Generate PKCE (Proof Key for Code Exchange) data
   * @returns PKCE data with code verifier and challenge
   */
  private generatePKCE(): PKCEData {
    // Generate code verifier (43-128 characters, URL-safe)
    const codeVerifier = randomBytes(32).toString('base64url');
    
    // Generate code challenge using S256 method
    const codeChallenge = createHash('sha256')
      .update(codeVerifier)
      .digest('base64url');

    return {
      codeVerifier,
      codeChallenge,
      codeChallengeMethod: 'S256'
    };
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

    // Add client authentication
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
   * Refresh access token using refresh token
   * @param refreshToken - Refresh token
   * @param scopes - Optional scopes to request
   * @returns New token response
   */
  async refreshAccessToken(refreshToken: string, scopes?: string[]): Promise<OAuth2TokenResponse> {
    const tokenRequest: OAuth2TokenRequest = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret
    };

    if (scopes && scopes.length > 0) {
      tokenRequest.scope = scopes.join(' ');
    }

    return this.makeTokenRequest(tokenRequest);
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
      id: 'oauth2_user', // Will be updated when JWT is decoded
      roles: [],
      permissions: tokenResponse.scope ? tokenResponse.scope.split(' ') : [],
      authenticatedAt: now,
      expiresAt,
      metadata: {
        authScheme: 'oauth2',
        grantType: 'authorization_code',
        tokenType: tokenResponse.token_type,
        scope: tokenResponse.scope
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
      refreshToken: tokenResponse.refresh_token,
      scope: tokenResponse.scope,
      additionalData: {
        ...tokenResponse,
        // Remove standard fields to avoid duplication
        access_token: undefined,
        token_type: undefined,
        expires_in: undefined,
        refresh_token: undefined,
        scope: undefined
      }
    };
  }

  /**
   * Get stored PKCE data
   * @param key - PKCE storage key (usually state parameter)
   * @returns PKCE data or undefined
   */
  getPKCEData(key: string): PKCEData | undefined {
    return this.pkceStore.get(key);
  }

  /**
   * Clear stored PKCE data
   * @param key - PKCE storage key to clear, or undefined to clear all
   */
  clearPKCEData(key?: string): void {
    if (key) {
      this.pkceStore.delete(key);
    } else {
      this.pkceStore.clear();
    }
  }

  /**
   * Create authorization code flow instance
   * @param config - OAuth2 configuration
   * @returns OAuth2AuthorizationCodeFlow instance
   */
  static create(config: OAuth2Config): OAuth2AuthorizationCodeFlowImpl {
    return new OAuth2AuthorizationCodeFlowImpl(config);
  }
}

/**
 * Factory function to create OAuth2 authorization code flow
 * @param config - OAuth2 configuration
 * @returns OAuth2AuthorizationCodeFlow instance
 */
export function createAuthorizationCodeFlow(config: OAuth2Config): OAuth2AuthorizationCodeFlowImpl {
  return OAuth2AuthorizationCodeFlowImpl.create(config);
}

/**
 * Utility function to generate secure state parameter
 * @param length - Length of state parameter (default: 32)
 * @returns Random state string
 */
export function generateState(length: number = 32): string {
  return randomBytes(length).toString('base64url');
}

/**
 * Utility function to validate redirect URI
 * @param redirectUri - Redirect URI to validate
 * @param allowedUris - List of allowed redirect URIs
 * @returns Whether redirect URI is valid
 */
export function validateRedirectUri(redirectUri: string, allowedUris: string[]): boolean {
  return allowedUris.includes(redirectUri);
}