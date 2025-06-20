/**
 * @module OAuth2Types
 * @description OAuth2-specific types and interfaces for the A2A authentication framework
 */

import { z } from 'zod';

/**
 * OAuth2 error types as defined in RFC 6749
 */
export const OAuth2ErrorTypeSchema = z.enum([
  'invalid_request',
  'invalid_client',
  'invalid_grant',
  'unauthorized_client',
  'unsupported_grant_type',
  'invalid_scope',
  'access_denied',
  'unsupported_response_type',
  'server_error',
  'temporarily_unavailable'
]);

/**
 * OAuth2 response types
 */
export const OAuth2ResponseTypeSchema = z.enum([
  'code',
  'token',
  'id_token',
  'code token',
  'code id_token',
  'token id_token',
  'code token id_token'
]);

/**
 * OAuth2 code challenge methods for PKCE
 */
export const OAuth2CodeChallengeMethodSchema = z.enum([
  'plain',
  'S256'
]);

/**
 * OAuth2 error response schema
 */
export const OAuth2ErrorResponseSchema = z.object({
  /** Error type */
  error: OAuth2ErrorTypeSchema,
  /** Human-readable error description */
  error_description: z.string().optional(),
  /** URI identifying a human-readable web page with error information */
  error_uri: z.string().url().optional(),
  /** State parameter if provided in the request */
  state: z.string().optional()
});

/**
 * OAuth2 authorization request parameters schema
 */
export const OAuth2AuthorizationRequestSchema = z.object({
  /** Response type */
  response_type: OAuth2ResponseTypeSchema,
  /** Client identifier */
  client_id: z.string(),
  /** Redirection URI */
  redirect_uri: z.string().url().optional(),
  /** Scope of the access request */
  scope: z.string().optional(),
  /** Opaque value to maintain state */
  state: z.string().optional(),
  /** Code challenge for PKCE */
  code_challenge: z.string().optional(),
  /** Code challenge method for PKCE */
  code_challenge_method: OAuth2CodeChallengeMethodSchema.optional(),
}).and(z.record(z.string(), z.any()));

/**
 * OAuth2 authorization response schema
 */
export const OAuth2AuthorizationResponseSchema = z.object({
  /** Authorization code */
  code: z.string().optional(),
  /** Access token (for implicit flow) */
  access_token: z.string().optional(),
  /** Token type (for implicit flow) */
  token_type: z.string().optional(),
  /** Token expiration (for implicit flow) */
  expires_in: z.number().optional(),
  /** Scope (for implicit flow) */
  scope: z.string().optional(),
  /** State parameter */
  state: z.string().optional(),
  /** Error information */
  error: OAuth2ErrorTypeSchema.optional(),
  /** Error description */
  error_description: z.string().optional(),
  /** Error URI */
  error_uri: z.string().url().optional()
});

/**
 * OAuth2 token request schema
 */
export const OAuth2TokenRequestSchema = z.object({
  /** Grant type */
  grant_type: z.string(),
  /** Authorization code (for authorization code flow) */
  code: z.string().optional(),
  /** Redirect URI (for authorization code flow) */
  redirect_uri: z.string().url().optional(),
  /** Client identifier */
  client_id: z.string(),
  /** Client secret */
  client_secret: z.string().optional(),
  /** Code verifier (for PKCE) */
  code_verifier: z.string().optional(),
  /** Username (for password flow) */
  username: z.string().optional(),
  /** Password (for password flow) */
  password: z.string().optional(),
  /** Scope */
  scope: z.string().optional(),
  /** Refresh token (for refresh token flow) */
  refresh_token: z.string().optional()
});

/**
 * OAuth2 token response schema
 */
export const OAuth2TokenResponseSchema = z.object({
  /** Access token */
  access_token: z.string(),
  /** Token type */
  token_type: z.string(),
  /** Token expiration in seconds */
  expires_in: z.number().optional(),
  /** Refresh token */
  refresh_token: z.string().optional(),
  /** Scope */
  scope: z.string().optional(),
  /** State parameter for CSRF protection */
  state: z.string().optional(),
}).and(z.record(z.string(), z.any()));

/**
 * OAuth2 client configuration schema
 */
export const OAuth2ClientConfigSchema = z.object({
  /** Client identifier */
  clientId: z.string(),
  /** Client secret */
  clientSecret: z.string().optional(),
  /** Client type (public or confidential) */
  clientType: z.enum(['public', 'confidential']).default('confidential'),
  /** Allowed redirect URIs */
  redirectUris: z.array(z.string().url()),
  /** Allowed scopes */
  allowedScopes: z.array(z.string()),
  /** Allowed grant types */
  allowedGrantTypes: z.array(z.string()),
  /** Token endpoint authentication method */
  tokenEndpointAuthMethod: z.enum([
    'client_secret_basic',
    'client_secret_post',
    'client_secret_jwt',
    'private_key_jwt',
    'none'
  ]).default('client_secret_basic'),
  /** Whether PKCE is required */
  requirePkce: z.boolean().default(false),
  /** Additional client metadata */
  metadata: z.record(z.any()).optional()
});

/**
 * OAuth2 server configuration schema
 */
export const OAuth2ServerConfigSchema = z.object({
  /** Authorization endpoint URL */
  authorizationEndpoint: z.string().url(),
  /** Token endpoint URL */
  tokenEndpoint: z.string().url(),
  /** Token introspection endpoint URL */
  introspectionEndpoint: z.string().url().optional(),
  /** Token revocation endpoint URL */
  revocationEndpoint: z.string().url().optional(),
  /** JWKS endpoint URL */
  jwksUri: z.string().url().optional(),
  /** Issuer identifier */
  issuer: z.string().url(),
  /** Supported scopes */
  scopesSupported: z.array(z.string()),
  /** Supported response types */
  responseTypesSupported: z.array(OAuth2ResponseTypeSchema),
  /** Supported grant types */
  grantTypesSupported: z.array(z.string()),
  /** Supported token endpoint authentication methods */
  tokenEndpointAuthMethodsSupported: z.array(z.string()),
  /** Supported code challenge methods */
  codeChallengeMethodsSupported: z.array(OAuth2CodeChallengeMethodSchema).optional(),
  /** Additional server metadata */
  metadata: z.record(z.any()).optional()
});

// Type exports derived from schemas

/** Type representing OAuth2 error types */
export type OAuth2ErrorType = z.infer<typeof OAuth2ErrorTypeSchema>;

/** Type representing OAuth2 response types */
export type OAuth2ResponseType = z.infer<typeof OAuth2ResponseTypeSchema>;

/** Type representing OAuth2 code challenge methods */
export type OAuth2CodeChallengeMethod = z.infer<typeof OAuth2CodeChallengeMethodSchema>;

/** Type representing OAuth2 error response */
export type OAuth2ErrorResponse = z.infer<typeof OAuth2ErrorResponseSchema>;

/** Type representing OAuth2 authorization request */
export type OAuth2AuthorizationRequest = z.infer<typeof OAuth2AuthorizationRequestSchema>;

/** Type representing OAuth2 authorization response */
export type OAuth2AuthorizationResponse = z.infer<typeof OAuth2AuthorizationResponseSchema>;

/** Type representing OAuth2 token request */
export type OAuth2TokenRequest = z.infer<typeof OAuth2TokenRequestSchema>;

/** Type representing OAuth2 token response */
export type OAuth2TokenResponse = z.infer<typeof OAuth2TokenResponseSchema>;

/** Type representing OAuth2 client configuration */
export type OAuth2ClientConfig = z.infer<typeof OAuth2ClientConfigSchema>;

/** Type representing OAuth2 server configuration */
export type OAuth2ServerConfig = z.infer<typeof OAuth2ServerConfigSchema>;

/**
 * Interface for OAuth2 authorization code flow
 */
export interface OAuth2AuthorizationCodeFlow {
  /**
   * Generate authorization URL
   * @param state - Optional state parameter
   * @param scopes - Optional scopes to request
   * @param additionalParams - Additional parameters
   * @returns Authorization URL
   */
  getAuthorizationUrl(
    state?: string,
    scopes?: string[],
    additionalParams?: Record<string, string>
  ): Promise<string>;

  /**
   * Exchange authorization code for tokens
   * @param code - Authorization code
   * @param state - State parameter
   * @param codeVerifier - PKCE code verifier
   * @returns Token response
   */
  exchangeCodeForTokens(
    code: string,
    state?: string,
    codeVerifier?: string
  ): Promise<OAuth2TokenResponse>;
}

/**
 * Interface for OAuth2 client credentials flow
 */
export interface OAuth2ClientCredentialsFlow {
  /**
   * Get access token using client credentials
   * @param scopes - Optional scopes to request
   * @returns Token response
   */
  getAccessToken(scopes?: string[]): Promise<OAuth2TokenResponse>;
}

/**
 * Interface for OAuth2 password flow
 */
export interface OAuth2PasswordFlow {
  /**
   * Get access token using username and password
   * @param username - Username
   * @param password - Password
   * @param scopes - Optional scopes to request
   * @returns Token response
   */
  getAccessToken(
    username: string,
    password: string,
    scopes?: string[]
  ): Promise<OAuth2TokenResponse>;
}

/**
 * Interface for OAuth2 implicit flow
 */
export interface OAuth2ImplicitFlow {
  /**
   * Generate authorization URL for implicit flow
   * @param state - Optional state parameter
   * @param scopes - Optional scopes to request
   * @param additionalParams - Additional parameters
   * @returns Authorization URL
   */
  getAuthorizationUrl(
    state?: string,
    scopes?: string[],
    additionalParams?: Record<string, string>
  ): Promise<string>;

  /**
   * Parse token from redirect URL
   * @param redirectUrl - Redirect URL containing token
   * @returns Token response
   */
  parseTokenFromUrl(redirectUrl: string): OAuth2TokenResponse;
}

/**
 * Interface for OAuth2 refresh token flow
 */
export interface OAuth2RefreshTokenFlow {
  /**
   * Refresh access token
   * @param refreshToken - Refresh token
   * @param scopes - Optional scopes to request
   * @returns Token response
   */
  refreshAccessToken(
    refreshToken: string,
    scopes?: string[]
  ): Promise<OAuth2TokenResponse>;
}

/**
 * Interface for OAuth2 token introspection
 */
export interface OAuth2TokenIntrospection {
  /**
   * Introspect token
   * @param token - Token to introspect
   * @param tokenTypeHint - Optional token type hint
   * @returns Introspection response
   */
  introspectToken(
    token: string,
    tokenTypeHint?: 'access_token' | 'refresh_token'
  ): Promise<{
    active: boolean;
    scope?: string;
    client_id?: string;
    username?: string;
    token_type?: string;
    exp?: number;
    iat?: number;
    nbf?: number;
    sub?: string;
    aud?: string;
    iss?: string;
    jti?: string;
    [key: string]: any;
  }>;
}

/**
 * Interface for OAuth2 token revocation
 */
export interface OAuth2TokenRevocation {
  /**
   * Revoke token
   * @param token - Token to revoke
   * @param tokenTypeHint - Optional token type hint
   * @returns Promise resolving when token is revoked
   */
  revokeToken(
    token: string,
    tokenTypeHint?: 'access_token' | 'refresh_token'
  ): Promise<void>;
}