/**
 * @module AuthTypes
 * @description Core authentication types and interfaces for the A2A authentication framework
 */

import { z } from 'zod';

/**
 * Schema for authentication scheme types
 */
export const AuthSchemeTypeSchema = z.enum([
  'basic',
  'bearer',
  'apiKey',
  'oauth2',
  'custom'
]);

/**
 * Schema for OAuth2 grant types
 */
export const OAuth2GrantTypeSchema = z.enum([
  'authorization_code',
  'client_credentials',
  'implicit',
  'password',
  'refresh_token'
]);

/**
 * Schema for JWT algorithms
 */
export const JWTAlgorithmSchema = z.enum([
  'HS256', 'HS384', 'HS512',
  'RS256', 'RS384', 'RS512',
  'ES256', 'ES384', 'ES512',
  'PS256', 'PS384', 'PS512'
]);

/**
 * Base authentication configuration schema
 */
export const BaseAuthConfigSchema = z.object({
  /** Authentication scheme type */
  type: AuthSchemeTypeSchema,
  /** Whether this auth scheme is enabled */
  enabled: z.boolean().default(true),
  /** Optional metadata for the auth scheme */
  metadata: z.record(z.any()).optional()
});

/**
 * Basic authentication configuration schema
 */
export const BasicAuthConfigSchema = BaseAuthConfigSchema.extend({
  type: z.literal('basic'),
  /** Username for basic authentication */
  username: z.string(),
  /** Password for basic authentication */
  password: z.string()
});

/**
 * Bearer token authentication configuration schema
 */
export const BearerAuthConfigSchema = BaseAuthConfigSchema.extend({
  type: z.literal('bearer'),
  /** Bearer token */
  token: z.string(),
  /** Optional token type (defaults to 'Bearer') */
  tokenType: z.string().default('Bearer')
});

/**
 * API Key authentication configuration schema
 */
export const ApiKeyAuthConfigSchema = BaseAuthConfigSchema.extend({
  type: z.literal('apiKey'),
  /** API key value */
  apiKey: z.string(),
  /** Header name for the API key (defaults to 'X-API-Key') */
  headerName: z.string().default('X-API-Key')
});

/**
 * OAuth2 configuration schema
 */
export const OAuth2ConfigSchema = BaseAuthConfigSchema.extend({
  type: z.literal('oauth2'),
  /** OAuth2 client ID */
  clientId: z.string(),
  /** OAuth2 client secret */
  clientSecret: z.string(),
  /** Authorization server URL */
  authorizationUrl: z.string().url(),
  /** Token endpoint URL */
  tokenUrl: z.string().url(),
  /** Redirect URI for authorization code flow */
  redirectUri: z.string().url().optional(),
  /** OAuth2 scopes */
  scopes: z.array(z.string()).default([]),
  /** Grant type to use */
  grantType: OAuth2GrantTypeSchema.default('authorization_code'),
  /** Whether to use PKCE (Proof Key for Code Exchange) */
  enablePKCE: z.boolean().default(true),
  /** Additional OAuth2 parameters */
  additionalParams: z.record(z.string()).optional()
});

/**
 * Custom authentication configuration schema
 */
export const CustomAuthConfigSchema = BaseAuthConfigSchema.extend({
  type: z.literal('custom'),
  /** Custom header name */
  headerName: z.string(),
  /** Custom header value */
  headerValue: z.string(),
  /** Optional custom authentication logic */
  customLogic: z.function().optional()
});

/**
 * Union schema for all authentication configurations
 */
export const AuthConfigSchema = z.discriminatedUnion('type', [
  BasicAuthConfigSchema,
  BearerAuthConfigSchema,
  ApiKeyAuthConfigSchema,
  OAuth2ConfigSchema,
  CustomAuthConfigSchema
]);

/**
 * JWT configuration schema
 */
export const JWTConfigSchema = z.object({
  /** JWT secret key */
  secret: z.string(),
  /** JWT algorithm */
  algorithm: JWTAlgorithmSchema.default('HS256'),
  /** Token expiration time */
  expiresIn: z.string().default('1h'),
  /** Token issuer */
  issuer: z.string().optional(),
  /** Token audience */
  audience: z.string().optional(),
  /** Whether to include 'iat' (issued at) claim */
  includeIssuedAt: z.boolean().default(true),
  /** Whether to include 'jti' (JWT ID) claim */
  includeJwtId: z.boolean().default(false)
});

/**
 * Token information schema
 */
export const TokenInfoSchema = z.object({
  /** Access token */
  accessToken: z.string(),
  /** Token type (usually 'Bearer') */
  tokenType: z.string().default('Bearer'),
  /** Token expiration time in seconds */
  expiresIn: z.number().optional(),
  /** Refresh token */
  refreshToken: z.string().optional(),
  /** Token scope */
  scope: z.string().optional(),
  /** Additional token data */
  additionalData: z.record(z.any()).optional()
});

/**
 * User context schema
 */
export const UserContextSchema = z.object({
  /** User ID */
  id: z.string(),
  /** Username */
  username: z.string().optional(),
  /** User email */
  email: z.string().email().optional(),
  /** User roles */
  roles: z.array(z.string()).default([]),
  /** User permissions */
  permissions: z.array(z.string()).default([]),
  /** Additional user metadata */
  metadata: z.record(z.any()).optional(),
  /** Authentication timestamp */
  authenticatedAt: z.string().datetime(),
  /** Token expiration timestamp */
  expiresAt: z.string().datetime().optional()
});

/**
 * Authentication result schema
 */
export const AuthResultSchema = z.object({
  /** Whether authentication was successful */
  success: z.boolean(),
  /** User context (if authentication was successful) */
  user: UserContextSchema.optional(),
  /** Token information (if authentication was successful) */
  tokens: TokenInfoSchema.optional(),
  /** Error message (if authentication failed) */
  error: z.string().optional(),
  /** Error code (if authentication failed) */
  errorCode: z.string().optional(),
  /** Additional result metadata */
  metadata: z.record(z.any()).optional()
});

// Type exports derived from schemas

/** Type representing authentication scheme types */
export type AuthSchemeType = z.infer<typeof AuthSchemeTypeSchema>;

/** Type representing OAuth2 grant types */
export type OAuth2GrantType = z.infer<typeof OAuth2GrantTypeSchema>;

/** Type representing JWT algorithms */
export type JWTAlgorithm = z.infer<typeof JWTAlgorithmSchema>;

/** Type representing base authentication configuration */
export type BaseAuthConfig = z.infer<typeof BaseAuthConfigSchema>;

/** Type representing basic authentication configuration */
export type BasicAuthConfig = z.infer<typeof BasicAuthConfigSchema>;

/** Type representing bearer token authentication configuration */
export type BearerAuthConfig = z.infer<typeof BearerAuthConfigSchema>;

/** Type representing API key authentication configuration */
export type ApiKeyAuthConfig = z.infer<typeof ApiKeyAuthConfigSchema>;

/** Type representing OAuth2 configuration */
export type OAuth2Config = z.infer<typeof OAuth2ConfigSchema>;

/** Type representing custom authentication configuration */
export type CustomAuthConfig = z.infer<typeof CustomAuthConfigSchema>;

/** Type representing any authentication configuration */
export type AuthConfig = z.infer<typeof AuthConfigSchema>;

/** Type representing JWT configuration */
export type JWTConfig = z.infer<typeof JWTConfigSchema>;

/** Type representing token information */
export type TokenInfo = z.infer<typeof TokenInfoSchema>;

/** Type representing user context */
export type UserContext = z.infer<typeof UserContextSchema>;

/** Type representing authentication result */
export type AuthResult = z.infer<typeof AuthResultSchema>;

/**
 * Interface for authentication scheme implementations
 */
export interface AuthScheme {
  /** The type of authentication scheme */
  readonly type: AuthSchemeType;
  
  /** Configuration for this auth scheme */
  readonly config: AuthConfig;
  
  /**
   * Generate authentication headers
   * @returns Promise resolving to authentication headers
   */
  generateHeaders(): Promise<Record<string, string>>;
  
  /**
   * Validate authentication credentials
   * @param credentials - Credentials to validate
   * @returns Promise resolving to authentication result
   */
  validate(credentials: any): Promise<AuthResult>;
  
  /**
   * Refresh authentication tokens if supported
   * @returns Promise resolving to new token information
   */
  refresh?(): Promise<TokenInfo>;
}

/**
 * Interface for OAuth2 token response
 */
export interface OAuth2TokenResponse {
  /** Access token */
  access_token: string;
  /** Token type */
  token_type: string;
  /** Expires in seconds */
  expires_in?: number;
  /** Refresh token */
  refresh_token?: string;
  /** Scope */
  scope?: string;
  /** Additional response data */
  [key: string]: any;
}

/**
 * Interface for PKCE (Proof Key for Code Exchange) data
 */
export interface PKCEData {
  /** Code verifier */
  codeVerifier: string;
  /** Code challenge */
  codeChallenge: string;
  /** Code challenge method */
  codeChallengeMethod: 'S256' | 'plain';
}

/**
 * Interface for JWT payload
 */
export interface JWTPayload {
  /** Subject (user ID) */
  sub?: string;
  /** Issuer */
  iss?: string;
  /** Audience */
  aud?: string;
  /** Expiration time */
  exp?: number;
  /** Not before */
  nbf?: number;
  /** Issued at */
  iat?: number;
  /** JWT ID */
  jti?: string;
  /** Additional claims */
  [key: string]: any;
}

/**
 * Interface for authentication middleware options
 */
export interface AuthMiddlewareOptions {
  /** Authentication scheme to use */
  scheme: AuthSchemeType;
  /** Authentication configuration */
  config: AuthConfig;
  /** Whether authentication is required */
  required: boolean;
  /** Custom error handler */
  errorHandler?: (error: Error) => void;
  /** Custom success handler */
  successHandler?: (user: UserContext) => void;
}

/**
 * Interface for session data
 */
export interface SessionData {
  /** Session ID */
  id: string;
  /** User context */
  user: UserContext;
  /** Session creation timestamp */
  createdAt: string;
  /** Session last access timestamp */
  lastAccessedAt: string;
  /** Session expiration timestamp */
  expiresAt: string;
  /** Additional session metadata */
  metadata: Record<string, any>;
}