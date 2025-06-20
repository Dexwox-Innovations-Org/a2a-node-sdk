/**
 * @module A2AAuth
 * @description Main entry point for the A2A authentication framework
 */

// Export core types (avoiding conflicts by being selective)
export type {
  AuthScheme,
  AuthConfig,
  AuthResult,
  UserContext,
  TokenInfo,
  BasicAuthConfig,
  BearerAuthConfig,
  ApiKeyAuthConfig,
  OAuth2Config,
  CustomAuthConfig,
  AuthSchemeType,
  PKCEData,
  OAuth2TokenResponse,
  JWTPayload,
  AuthMiddlewareOptions,
  SessionData
} from './types/auth-types';

// Export OAuth2 specific types
export type {
  OAuth2TokenRequest,
  OAuth2AuthorizationRequest,
  OAuth2AuthorizationResponse,
  OAuth2ErrorResponse,
  OAuth2ClientConfig,
  OAuth2ServerConfig,
  OAuth2AuthorizationCodeFlow,
  OAuth2ClientCredentialsFlow,
  OAuth2ImplicitFlow,
  OAuth2PasswordFlow,
  OAuth2TokenIntrospection
} from './types/oauth2-types';

// Export JWT specific types
export type {
  JWTHandler,
  JWTSigningOptions,
  JWTVerificationOptions,
  JWTValidationResult,
  JWTHeader,
  JWTTokenInfo,
  JWTConfig,
  JWTClaims,
  JWKS
} from './types/jwt-types';

// Export JWT error type from jwt-types (not from auth-errors to avoid duplicate)
export { JWTErrorType } from './types/jwt-types';

// Export authentication schemes
export { BasicAuthScheme, createBasicAuth } from './schemes/basic-auth';
export { BearerAuthScheme, createBearerAuth } from './schemes/bearer-auth';
export { ApiKeyAuthScheme, createApiKeyAuth } from './schemes/api-key-auth';

// Export OAuth2 flows
export { OAuth2AuthorizationCodeFlowImpl } from './schemes/oauth2/authorization-code';
export { OAuth2ClientCredentialsFlowImpl } from './schemes/oauth2/client-credentials';
export { OAuth2ImplicitFlowImpl } from './schemes/oauth2/implicit';
export { OAuth2PasswordFlowImpl } from './schemes/oauth2/password';

// Export JWT utilities
export { JWTHandlerImpl, createJWTHandler } from './jwt/jwt-handler';
export { JWKSManager, createJWKSManager } from './jwt/jwks-manager';
export { JWTValidatorImpl, createJWTValidator } from './jwt/jwt-validator';

// Export authentication factory
export {
  AuthFactory,
  createAuthFactory,
  defaultAuthFactory,
  authFactoryHelpers
} from './auth-factory';
export type { AuthFactoryConfig } from './auth-factory';

// Export error classes
export { AuthenticationError, OAuth2Error, JWTError } from './errors/auth-errors';

// Export configuration helpers (if they exist)
// export { createAuthConfig, validateAuthConfig } from './config/auth-config';

// Export validation schemas
export {
  AuthSchemeTypeSchema,
  OAuth2GrantTypeSchema,
  JWTAlgorithmSchema,
  BaseAuthConfigSchema,
  BasicAuthConfigSchema,
  BearerAuthConfigSchema,
  ApiKeyAuthConfigSchema,
  OAuth2ConfigSchema,
  CustomAuthConfigSchema,
  AuthConfigSchema,
  JWTConfigSchema,
  TokenInfoSchema,
  UserContextSchema,
  AuthResultSchema
} from './types/auth-types';

// Export OAuth2 validation schemas
export {
  OAuth2TokenRequestSchema,
  OAuth2TokenResponseSchema,
  OAuth2ErrorResponseSchema,
  OAuth2AuthorizationRequestSchema,
  OAuth2AuthorizationResponseSchema,
  OAuth2ClientConfigSchema,
  OAuth2ServerConfigSchema
} from './types/oauth2-types';

// Export JWT validation schemas
export {
  JWTHeaderSchema,
  JWTPayloadSchema,
  JWTVerificationOptionsSchema,
  JWTSigningOptionsSchema,
  JWKSSchema,
  JWTValidationResultSchema
} from './types/jwt-types';