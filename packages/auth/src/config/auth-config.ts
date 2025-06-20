/**
 * @module AuthConfig
 * @description Configuration utilities for the A2A authentication framework
 */

import { z } from 'zod';
import { 
  AuthConfig, 
  AuthConfigSchema,
  BasicAuthConfig,
  BearerAuthConfig,
  ApiKeyAuthConfig,
  OAuth2Config,
  CustomAuthConfig,
  JWTConfig,
  JWTConfigSchema
} from '../types/auth-types';
import { AuthenticationError } from '../errors/auth-errors';

/**
 * Create authentication configuration with validation
 * @param config - Raw authentication configuration
 * @returns Validated authentication configuration
 */
export function createAuthConfig(config: unknown): AuthConfig {
  try {
    return AuthConfigSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      ).join(', ');
      throw new AuthenticationError(
        `Invalid authentication configuration: ${errorMessages}`,
        'INVALID_CONFIG'
      );
    }
    throw new AuthenticationError(
      'Failed to create authentication configuration',
      'CONFIG_ERROR'
    );
  }
}

/**
 * Validate authentication configuration
 * @param config - Authentication configuration to validate
 * @returns Validation result
 */
export function validateAuthConfig(config: unknown): { 
  valid: boolean; 
  errors: string[]; 
  config?: AuthConfig 
} {
  try {
    const validConfig = AuthConfigSchema.parse(config);
    return {
      valid: true,
      errors: [],
      config: validConfig
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      );
      return {
        valid: false,
        errors
      };
    }
    return {
      valid: false,
      errors: ['Unknown validation error']
    };
  }
}

/**
 * Create basic authentication configuration
 * @param username - Username
 * @param password - Password
 * @param options - Additional options
 * @returns Basic authentication configuration
 */
export function createBasicAuthConfig(
  username: string,
  password: string,
  options?: {
    enabled?: boolean;
    metadata?: Record<string, any>;
  }
): BasicAuthConfig {
  return {
    type: 'basic',
    username,
    password,
    enabled: options?.enabled ?? true,
    metadata: options?.metadata
  };
}

/**
 * Create bearer authentication configuration
 * @param token - Bearer token
 * @param options - Additional options
 * @returns Bearer authentication configuration
 */
export function createBearerAuthConfig(
  token: string,
  options?: {
    tokenType?: string;
    enabled?: boolean;
    metadata?: Record<string, any>;
  }
): BearerAuthConfig {
  return {
    type: 'bearer',
    token,
    tokenType: options?.tokenType ?? 'Bearer',
    enabled: options?.enabled ?? true,
    metadata: options?.metadata
  };
}

/**
 * Create API key authentication configuration
 * @param apiKey - API key
 * @param options - Additional options
 * @returns API key authentication configuration
 */
export function createApiKeyAuthConfig(
  apiKey: string,
  options?: {
    headerName?: string;
    enabled?: boolean;
    metadata?: Record<string, any>;
  }
): ApiKeyAuthConfig {
  return {
    type: 'apiKey',
    apiKey,
    headerName: options?.headerName ?? 'X-API-Key',
    enabled: options?.enabled ?? true,
    metadata: options?.metadata
  };
}

/**
 * Create OAuth2 authentication configuration
 * @param clientId - OAuth2 client ID
 * @param clientSecret - OAuth2 client secret
 * @param authorizationUrl - Authorization endpoint URL
 * @param tokenUrl - Token endpoint URL
 * @param options - Additional options
 * @returns OAuth2 authentication configuration
 */
export function createOAuth2AuthConfig(
  clientId: string,
  clientSecret: string,
  authorizationUrl: string,
  tokenUrl: string,
  options?: {
    redirectUri?: string;
    scopes?: string[];
    grantType?: 'authorization_code' | 'client_credentials' | 'implicit' | 'password';
    enablePKCE?: boolean;
    enabled?: boolean;
    metadata?: Record<string, any>;
    additionalParams?: Record<string, string>;
  }
): OAuth2Config {
  return {
    type: 'oauth2',
    clientId,
    clientSecret,
    authorizationUrl,
    tokenUrl,
    redirectUri: options?.redirectUri,
    scopes: options?.scopes ?? [],
    grantType: options?.grantType ?? 'authorization_code',
    enablePKCE: options?.enablePKCE ?? true,
    enabled: options?.enabled ?? true,
    metadata: options?.metadata,
    additionalParams: options?.additionalParams
  };
}

/**
 * Create custom authentication configuration
 * @param headerName - Custom header name
 * @param headerValue - Custom header value
 * @param options - Additional options
 * @returns Custom authentication configuration
 */
export function createCustomAuthConfig(
  headerName: string,
  headerValue: string,
  options?: {
    customLogic?: (credentials: any) => any;
    enabled?: boolean;
    metadata?: Record<string, any>;
  }
): CustomAuthConfig {
  return {
    type: 'custom',
    headerName,
    headerValue,
    customLogic: options?.customLogic,
    enabled: options?.enabled ?? true,
    metadata: options?.metadata
  };
}

/**
 * Create JWT configuration with validation
 * @param config - Raw JWT configuration
 * @returns Validated JWT configuration
 */
export function createJWTConfig(config: unknown): JWTConfig {
  try {
    return JWTConfigSchema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => 
        `${err.path.join('.')}: ${err.message}`
      ).join(', ');
      throw new AuthenticationError(
        `Invalid JWT configuration: ${errorMessages}`,
        'INVALID_JWT_CONFIG'
      );
    }
    throw new AuthenticationError(
      'Failed to create JWT configuration',
      'JWT_CONFIG_ERROR'
    );
  }
}

/**
 * Create JWT configuration from parameters
 * @param secret - JWT secret
 * @param options - Additional options
 * @returns JWT configuration
 */
export function createJWTConfigFromParams(
  secret: string,
  options?: {
    algorithm?: 'HS256' | 'HS384' | 'HS512' | 'RS256' | 'RS384' | 'RS512' | 'ES256' | 'ES384' | 'ES512' | 'PS256' | 'PS384' | 'PS512';
    expiresIn?: string;
    issuer?: string;
    audience?: string;
    includeIssuedAt?: boolean;
    includeJwtId?: boolean;
  }
): JWTConfig {
  return {
    secret,
    algorithm: options?.algorithm ?? 'HS256',
    expiresIn: options?.expiresIn ?? '1h',
    issuer: options?.issuer,
    audience: options?.audience,
    includeIssuedAt: options?.includeIssuedAt ?? true,
    includeJwtId: options?.includeJwtId ?? false
  };
}

/**
 * Merge authentication configurations
 * @param baseConfig - Base configuration
 * @param overrideConfig - Override configuration
 * @returns Merged configuration
 */
export function mergeAuthConfigs(
  baseConfig: AuthConfig,
  overrideConfig: Partial<AuthConfig>
): AuthConfig {
  if (baseConfig.type !== overrideConfig.type && overrideConfig.type) {
    throw new AuthenticationError(
      'Cannot merge configurations of different types',
      'CONFIG_TYPE_MISMATCH'
    );
  }

  return {
    ...baseConfig,
    ...overrideConfig,
    metadata: {
      ...baseConfig.metadata,
      ...overrideConfig.metadata
    }
  } as AuthConfig;
}

/**
 * Clone authentication configuration
 * @param config - Configuration to clone
 * @returns Cloned configuration
 */
export function cloneAuthConfig(config: AuthConfig): AuthConfig {
  return JSON.parse(JSON.stringify(config));
}

/**
 * Get configuration summary for logging/debugging
 * @param config - Authentication configuration
 * @returns Configuration summary (without sensitive data)
 */
export function getConfigSummary(config: AuthConfig): Record<string, any> {
  const summary: Record<string, any> = {
    type: config.type,
    enabled: config.enabled
  };

  switch (config.type) {
    case 'basic':
      summary.username = config.username;
      summary.hasPassword = !!config.password;
      break;
    
    case 'bearer':
      summary.tokenType = config.tokenType;
      summary.hasToken = !!config.token;
      summary.tokenLength = config.token?.length;
      break;
    
    case 'apiKey':
      summary.headerName = config.headerName;
      summary.hasApiKey = !!config.apiKey;
      summary.keyLength = config.apiKey?.length;
      break;
    
    case 'oauth2':
      summary.clientId = config.clientId;
      summary.hasClientSecret = !!config.clientSecret;
      summary.grantType = config.grantType;
      summary.enablePKCE = config.enablePKCE;
      summary.scopes = config.scopes;
      summary.authorizationUrl = config.authorizationUrl;
      summary.tokenUrl = config.tokenUrl;
      summary.redirectUri = config.redirectUri;
      break;
    
    case 'custom':
      summary.headerName = config.headerName;
      summary.hasHeaderValue = !!config.headerValue;
      summary.hasCustomLogic = !!config.customLogic;
      break;
  }

  if (config.metadata) {
    summary.metadataKeys = Object.keys(config.metadata);
  }

  return summary;
}

/**
 * Validate configuration compatibility with environment
 * @param config - Authentication configuration
 * @param environment - Environment constraints
 * @returns Compatibility check result
 */
export function validateConfigCompatibility(
  config: AuthConfig,
  environment?: {
    supportedSchemes?: string[];
    requireHttps?: boolean;
    allowedDomains?: string[];
  }
): { compatible: boolean; warnings: string[]; errors: string[] } {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Check supported schemes
  if (environment?.supportedSchemes && !environment.supportedSchemes.includes(config.type)) {
    errors.push(`Authentication scheme '${config.type}' is not supported in this environment`);
  }

  // Check HTTPS requirement
  if (environment?.requireHttps && config.type === 'basic') {
    warnings.push('Basic authentication should only be used over HTTPS');
  }

  // OAuth2 specific checks
  if (config.type === 'oauth2') {
    const oauth2Config = config as OAuth2Config;
    
    if (environment?.allowedDomains) {
      const authUrl = new URL(oauth2Config.authorizationUrl);
      const tokenUrl = new URL(oauth2Config.tokenUrl);
      
      if (!environment.allowedDomains.includes(authUrl.hostname)) {
        errors.push(`Authorization URL domain '${authUrl.hostname}' is not allowed`);
      }
      
      if (!environment.allowedDomains.includes(tokenUrl.hostname)) {
        errors.push(`Token URL domain '${tokenUrl.hostname}' is not allowed`);
      }
    }
    
    if (oauth2Config.grantType === 'implicit') {
      warnings.push('Implicit flow is deprecated and should be avoided');
    }
    
    if (oauth2Config.grantType === 'password') {
      warnings.push('Password flow is deprecated and should be avoided');
    }
  }

  return {
    compatible: errors.length === 0,
    warnings,
    errors
  };
}

/**
 * Default authentication configurations for common scenarios
 */
export const DEFAULT_AUTH_CONFIGS = {
  /**
   * Development basic auth configuration
   */
  development: {
    basic: createBasicAuthConfig('dev', 'dev123', {
      metadata: { environment: 'development' }
    }),
    
    apiKey: createApiKeyAuthConfig('dev-api-key-123', {
      metadata: { environment: 'development' }
    })
  },

  /**
   * Production-ready configurations (templates)
   */
  production: {
    oauth2Google: (clientId: string, clientSecret: string, redirectUri: string) =>
      createOAuth2AuthConfig(
        clientId,
        clientSecret,
        'https://accounts.google.com/o/oauth2/v2/auth',
        'https://oauth2.googleapis.com/token',
        {
          redirectUri,
          scopes: ['openid', 'email', 'profile'],
          enablePKCE: true,
          metadata: { provider: 'google' }
        }
      ),

    oauth2GitHub: (clientId: string, clientSecret: string, redirectUri: string) =>
      createOAuth2AuthConfig(
        clientId,
        clientSecret,
        'https://github.com/login/oauth/authorize',
        'https://github.com/login/oauth/access_token',
        {
          redirectUri,
          scopes: ['user:email'],
          enablePKCE: false,
          metadata: { provider: 'github' }
        }
      )
  }
} as const;