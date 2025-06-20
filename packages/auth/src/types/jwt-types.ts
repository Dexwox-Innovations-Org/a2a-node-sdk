/**
 * @module JWTTypes
 * @description JWT-specific types and interfaces for the A2A authentication framework
 */

import { z } from 'zod';

/**
 * JWT header schema
 */
export const JWTHeaderSchema = z.object({
  /** Algorithm used to sign the JWT */
  alg: z.string(),
  /** Token type (should be 'JWT') */
  typ: z.string().default('JWT'),
  /** Content type */
  cty: z.string().optional(),
  /** Key ID */
  kid: z.string().optional(),
  /** X.509 certificate chain */
  x5c: z.array(z.string()).optional(),
  /** X.509 certificate SHA-1 thumbprint */
  x5t: z.string().optional(),
  /** X.509 certificate SHA-256 thumbprint */
  'x5t#S256': z.string().optional()
}).and(z.record(z.string(), z.any()));

/**
 * JWT payload schema
 */
export const JWTPayloadSchema = z.object({
  /** Issuer */
  iss: z.string().optional(),
  /** Subject */
  sub: z.string().optional(),
  /** Audience */
  aud: z.union([z.string(), z.array(z.string())]).optional(),
  /** Expiration time */
  exp: z.number().optional(),
  /** Not before */
  nbf: z.number().optional(),
  /** Issued at */
  iat: z.number().optional(),
  /** JWT ID */
  jti: z.string().optional()
}).and(z.record(z.string(), z.any()));

/**
 * JWT verification options schema
 */
export const JWTVerificationOptionsSchema = z.object({
  /** Algorithms to allow */
  algorithms: z.array(z.string()).optional(),
  /** Audience to verify */
  audience: z.union([z.string(), z.array(z.string())]).optional(),
  /** Issuer to verify */
  issuer: z.string().optional(),
  /** Subject to verify */
  subject: z.string().optional(),
  /** Clock tolerance in seconds */
  clockTolerance: z.number().default(0),
  /** Maximum age in seconds */
  maxAge: z.number().optional(),
  /** Whether to ignore expiration */
  ignoreExpiration: z.boolean().default(false),
  /** Whether to ignore not before */
  ignoreNotBefore: z.boolean().default(false),
  /** Complete verification (verify all claims) */
  complete: z.boolean().default(false)
});

/**
 * JWT signing options schema
 */
export const JWTSigningOptionsSchema = z.object({
  /** Algorithm to use */
  algorithm: z.string().default('HS256'),
  /** Expiration time */
  expiresIn: z.union([z.string(), z.number()]).optional(),
  /** Not before */
  notBefore: z.union([z.string(), z.number()]).optional(),
  /** Audience */
  audience: z.union([z.string(), z.array(z.string())]).optional(),
  /** Issuer */
  issuer: z.string().optional(),
  /** Subject */
  subject: z.string().optional(),
  /** JWT ID */
  jwtid: z.string().optional(),
  /** No timestamp */
  noTimestamp: z.boolean().default(false),
  /** Header */
  header: z.record(z.any()).optional(),
  /** Key ID */
  keyid: z.string().optional()
});

/**
 * JWKS (JSON Web Key Set) schema
 */
export const JWKSSchema = z.object({
  /** Array of JWK objects */
  keys: z.array(z.object({
    /** Key type */
    kty: z.string(),
    /** Key use */
    use: z.string().optional(),
    /** Key operations */
    key_ops: z.array(z.string()).optional(),
    /** Algorithm */
    alg: z.string().optional(),
    /** Key ID */
    kid: z.string().optional(),
    /** X.509 certificate chain */
    x5c: z.array(z.string()).optional(),
    /** X.509 certificate SHA-1 thumbprint */
    x5t: z.string().optional(),
    /** X.509 certificate SHA-256 thumbprint */
    'x5t#S256': z.string().optional()
  }).and(z.record(z.string(), z.any())))
});

/**
 * JWT validation result schema
 */
export const JWTValidationResultSchema = z.object({
  /** Whether the token is valid */
  valid: z.boolean(),
  /** Decoded payload (if valid) */
  payload: JWTPayloadSchema.optional(),
  /** Decoded header (if valid) */
  header: JWTHeaderSchema.optional(),
  /** Error message (if invalid) */
  error: z.string().optional(),
  /** Error code (if invalid) */
  errorCode: z.string().optional(),
  /** Expiration timestamp */
  exp: z.number().optional(),
  /** Issued at timestamp */
  iat: z.number().optional(),
  /** Not before timestamp */
  nbf: z.number().optional()
});

// Type exports derived from schemas

/** Type representing JWT header */
export type JWTHeader = z.infer<typeof JWTHeaderSchema>;

/** Type representing JWT payload */
export type JWTPayload = z.infer<typeof JWTPayloadSchema>;

/** Type representing JWT verification options */
export type JWTVerificationOptions = z.infer<typeof JWTVerificationOptionsSchema>;

/** Type representing JWT signing options */
export type JWTSigningOptions = z.infer<typeof JWTSigningOptionsSchema>;

/** Type representing JWKS */
export type JWKS = z.infer<typeof JWKSSchema>;

/** Type representing JWT validation result (from schema) */
export type JWTValidationResultFromSchema = z.infer<typeof JWTValidationResultSchema>;

/**
 * Interface for JWT handler
 */
export interface JWTHandler {
  /**
   * Create a JWT token
   * @param payload - Token payload
   * @param options - Signing options
   * @returns Promise resolving to JWT token
   */
  createToken(payload: Record<string, any>, options?: JWTSigningOptions): Promise<string>;

  /**
   * Verify a JWT token
   * @param token - JWT token to verify
   * @param options - Verification options
   * @returns Promise resolving to validation result
   */
  verifyToken(token: string, options?: JWTVerificationOptions): Promise<JWTValidationResult>;

  /**
   * Decode a JWT token without verification
   * @param token - JWT token to decode
   * @returns Decoded token parts
   */
  decodeToken(token: string): {
    header: JWTHeader;
    payload: JWTPayload;
    signature: string;
  };

  /**
   * Get token expiration time
   * @param token - JWT token
   * @returns Expiration timestamp or null
   */
  getTokenExpiration(token: string): number | null;

  /**
   * Check if token is expired
   * @param token - JWT token
   * @param clockTolerance - Clock tolerance in seconds
   * @returns Whether token is expired
   */
  isTokenExpired(token: string, clockTolerance?: number): boolean;
}

/**
 * Interface for JWKS manager
 */
export interface JWKSManager {
  /**
   * Get JWKS from URL
   * @param url - JWKS URL
   * @returns Promise resolving to JWKS
   */
  getJWKS(url: string): Promise<JWKS>;

  /**
   * Get key by ID
   * @param keyId - Key ID
   * @returns Promise resolving to JWK or null
   */
  getKey(keyId: string): Promise<any | null>;

  /**
   * Refresh JWKS cache
   * @param url - JWKS URL
   * @returns Promise resolving when cache is refreshed
   */
  refreshCache(url?: string): Promise<void>;

  /**
   * Clear JWKS cache
   * @returns Promise resolving when cache is cleared
   */
  clearCache(): Promise<void>;
}

/**
 * Interface for JWT validator
 */
export interface JWTValidator {
  /**
   * Validate JWT token
   * @param token - JWT token
   * @param options - Validation options
   * @returns Promise resolving to validation result
   */
  validate(token: string, options?: JWTVerificationOptions): Promise<JWTValidationResult>;

  /**
   * Validate token signature
   * @param token - JWT token
   * @param secret - Secret or public key
   * @returns Promise resolving to whether signature is valid
   */
  validateSignature(token: string, secret: string | Buffer): Promise<boolean>;

  /**
   * Validate token claims
   * @param payload - Token payload
   * @param options - Validation options
   * @returns Validation result
   */
  validateClaims(payload: JWTPayload, options?: JWTVerificationOptions): {
    valid: boolean;
    errors: string[];
  };

  /**
   * Validate token expiration
   * @param payload - Token payload
   * @param clockTolerance - Clock tolerance in seconds
   * @returns Whether token is not expired
   */
  validateExpiration(payload: JWTPayload, clockTolerance?: number): boolean;

  /**
   * Validate token not before
   * @param payload - Token payload
   * @param clockTolerance - Clock tolerance in seconds
   * @returns Whether token is valid (not before)
   */
  validateNotBefore(payload: JWTPayload, clockTolerance?: number): boolean;
}

/**
 * JWT error types
 */
export enum JWTErrorType {
  INVALID_TOKEN = 'INVALID_TOKEN',
  EXPIRED_TOKEN = 'EXPIRED_TOKEN',
  NOT_BEFORE = 'NOT_BEFORE',
  INVALID_SIGNATURE = 'INVALID_SIGNATURE',
  INVALID_AUDIENCE = 'INVALID_AUDIENCE',
  INVALID_ISSUER = 'INVALID_ISSUER',
  INVALID_SUBJECT = 'INVALID_SUBJECT',
  MISSING_CLAIMS = 'MISSING_CLAIMS',
  ALGORITHM_MISMATCH = 'ALGORITHM_MISMATCH',
  KEY_NOT_FOUND = 'KEY_NOT_FOUND',
  JWKS_ERROR = 'JWKS_ERROR'
}

/**
 * JWT error class
 */
export class JWTError extends Error {
  constructor(
    public readonly type: JWTErrorType,
    message: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'JWTError';
  }
}

/**
 * JWT token info interface
 */
export interface JWTTokenInfo {
  /** Raw token */
  token: string;
  /** Decoded header */
  header: JWTHeader;
  /** Decoded payload */
  payload: JWTPayload;
  /** Token signature */
  signature: string;
  /** Whether token is valid */
  valid: boolean;
  /** Expiration timestamp */
  expiresAt?: number;
  /** Issued at timestamp */
  issuedAt?: number;
  /** Not before timestamp */
  notBefore?: number;
  /** Time until expiration in seconds */
  timeToExpiry?: number;
}

/**
 * JWT refresh configuration
 */
export interface JWTRefreshConfig {
  /** Refresh threshold in seconds before expiration */
  refreshThreshold: number;
  /** Maximum refresh attempts */
  maxRefreshAttempts: number;
  /** Refresh retry delay in milliseconds */
  refreshRetryDelay: number;
  /** Whether to auto-refresh tokens */
  autoRefresh: boolean;
}

/**
 * JWT configuration interface
 */
export interface JWTConfig {
  /** JWT secret for HMAC algorithms */
  secret?: string;
  /** JWKS URI for RSA/ECDSA algorithms */
  jwksUri?: string;
  /** Expected issuer */
  issuer?: string;
  /** Expected audience */
  audience?: string | string[];
  /** Clock tolerance in seconds */
  clockTolerance?: number;
  /** Required claims that must be present */
  requiredClaims?: string[];
  /** Whether JWT validation is enabled */
  enabled: boolean;
}

/**
 * JWT claims interface (simplified version for compatibility)
 */
export interface JWTClaims {
  /** JWT header */
  header: JWTHeader;
  /** JWT payload */
  payload: JWTPayload;
  /** JWT signature */
  signature: string;
}

/**
 * Enhanced JWT validation result interface
 */
export interface JWTValidationResult {
  /** Whether the token is valid */
  isValid: boolean;
  /** Decoded payload (if valid) */
  payload?: JWTPayload;
  /** Decoded header (if valid) */
  header?: any;
  /** User context created from token */
  userContext?: any;
  /** Error message (if invalid) */
  error?: string;
  /** Error code (if invalid) */
  errorCode?: JWTErrorType;
  /** Expiration timestamp */
  exp?: number;
  /** Issued at timestamp */
  iat?: number;
  /** Not before timestamp */
  nbf?: number;
}