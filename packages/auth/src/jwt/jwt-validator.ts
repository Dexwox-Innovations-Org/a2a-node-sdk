/**
 * @module JWTValidator
 * @description JWT token validation implementation for the A2A authentication framework
 */

import { jwtVerify, createRemoteJWKSet, JWTPayload, JWTVerifyResult } from 'jose';
import { JWTConfig, JWTValidationResult, JWTClaims, JWTErrorType } from '../types/jwt-types';
import { UserContext } from '../types/auth-types';
import { JWTError } from '../errors/auth-errors';

/**
 * JWT token validator implementation
 * 
 * Provides comprehensive JWT token validation including:
 * - Signature verification using JWKS or static keys
 * - Standard claims validation (exp, nbf, iat, aud, iss)
 * - Custom claims validation
 * - Clock skew tolerance
 */
export class JWTValidatorImpl {
  private readonly config: JWTConfig;
  private jwksCache?: ReturnType<typeof createRemoteJWKSet>;

  constructor(config: JWTConfig) {
    this.config = config;
    this.validateConfig();
    this.initializeJWKS();
  }

  /**
   * Validate JWT configuration
   * @throws JWTError if configuration is invalid
   */
  private validateConfig(): void {
    if (!this.config.issuer && !this.config.secret && !this.config.jwksUri) {
      throw new JWTError(JWTErrorType.INVALID_TOKEN, 'At least one of issuer, secret, or jwksUri must be provided');
    }

    if (this.config.jwksUri && this.config.secret) {
      throw new JWTError(JWTErrorType.INVALID_TOKEN, 'Cannot use both JWKS URI and static secret');
    }

    if (this.config.clockTolerance && this.config.clockTolerance < 0) {
      throw new JWTError(JWTErrorType.INVALID_TOKEN, 'Clock tolerance must be non-negative');
    }
  }

  /**
   * Initialize JWKS if configured
   */
  private initializeJWKS(): void {
    if (this.config.jwksUri) {
      this.jwksCache = createRemoteJWKSet(new URL(this.config.jwksUri));
    }
  }

  /**
   * Validate JWT token
   * @param token - JWT token to validate
   * @returns Validation result with payload and user context
   */
  async validateToken(token: string): Promise<JWTValidationResult> {
    try {
      // Remove Bearer prefix if present
      const cleanToken = token.replace(/^Bearer\s+/i, '');

      let verifyResult: JWTVerifyResult;

      if (this.jwksCache) {
        // Verify using JWKS
        verifyResult = await jwtVerify(cleanToken, this.jwksCache, {
          issuer: this.config.issuer,
          audience: this.config.audience,
          clockTolerance: this.config.clockTolerance || 30
        });
      } else if (this.config.secret) {
        // Verify using static secret
        const secret = new TextEncoder().encode(this.config.secret);
        verifyResult = await jwtVerify(cleanToken, secret, {
          issuer: this.config.issuer,
          audience: this.config.audience,
          clockTolerance: this.config.clockTolerance || 30
        });
      } else {
        throw new JWTError(JWTErrorType.INVALID_TOKEN, 'No verification method configured');
      }

      const payload = verifyResult.payload;
      
      // Validate custom claims if configured
      this.validateCustomClaims(payload);

      // Create user context from JWT payload
      const userContext = this.createUserContextFromPayload(payload);

      return {
        isValid: true,
        payload,
        userContext,
        header: verifyResult.protectedHeader
      };

    } catch (error) {
      if (error instanceof JWTError) {
        throw error;
      }

      // Handle jose library errors
      let errorMessage = 'Token validation failed';
      let errorCode: JWTErrorType = JWTErrorType.INVALID_TOKEN;

      if (error instanceof Error) {
        if (error.message.includes('expired')) {
          errorCode = JWTErrorType.INVALID_TOKEN;
          errorMessage = 'Token has expired';
        } else if (error.message.includes('signature')) {
          errorCode = JWTErrorType.INVALID_TOKEN;
          errorMessage = 'Invalid token signature';
        } else if (error.message.includes('audience')) {
          errorCode = JWTErrorType.INVALID_TOKEN;
          errorMessage = 'Invalid token audience';
        } else if (error.message.includes('issuer')) {
          errorCode = JWTErrorType.INVALID_TOKEN;
          errorMessage = 'Invalid token issuer';
        } else if (error.message.includes('not active')) {
          errorCode = JWTErrorType.INVALID_TOKEN;
          errorMessage = 'Token is not yet active';
        }
      }

      throw new JWTError(errorCode, errorMessage, { originalError: error });
    }
  }

  /**
   * Validate custom claims
   * @param payload - JWT payload
   * @throws JWTError if custom claims validation fails
   */
  private validateCustomClaims(payload: JWTPayload): void {
    if (!this.config.requiredClaims) {
      return;
    }

    for (const claim of this.config.requiredClaims) {
      if (!(claim in payload)) {
        throw new JWTError(JWTErrorType.INVALID_TOKEN, `Required claim '${claim}' is missing`);
      }
    }
  }

  /**
   * Create user context from JWT payload
   * @param payload - JWT payload
   * @returns User context
   */
  private createUserContextFromPayload(payload: JWTPayload): UserContext {
    const now = new Date().toISOString();
    const expiresAt = payload.exp ? new Date(payload.exp * 1000).toISOString() : undefined;

    // Extract roles and permissions from common claim names
    const roles = this.extractArrayClaim(payload, ['roles', 'role', 'groups', 'group']);
    const permissions = this.extractArrayClaim(payload, ['permissions', 'scope', 'scopes']);

    return {
      id: String(payload.sub || payload.user_id || payload.uid || 'unknown'),
      roles,
      permissions,
      authenticatedAt: now,
      expiresAt,
      metadata: {
        authScheme: 'jwt',
        issuer: payload.iss,
        audience: payload.aud,
        issuedAt: payload.iat ? new Date(payload.iat * 1000).toISOString() : undefined,
        notBefore: payload.nbf ? new Date(payload.nbf * 1000).toISOString() : undefined,
        jwtId: payload.jti,
        ...this.extractCustomClaims(payload)
      }
    };
  }

  /**
   * Extract array claim from payload using multiple possible claim names
   * @param payload - JWT payload
   * @param claimNames - Possible claim names to check
   * @returns Array of strings
   */
  private extractArrayClaim(payload: JWTPayload, claimNames: string[]): string[] {
    for (const claimName of claimNames) {
      const claim = payload[claimName];
      if (claim) {
        if (Array.isArray(claim)) {
          return claim.map(String);
        } else if (typeof claim === 'string') {
          // Handle space-separated strings (common for scopes)
          return claim.split(' ').filter(Boolean);
        } else {
          return [String(claim)];
        }
      }
    }
    return [];
  }

  /**
   * Extract custom claims from payload
   * @param payload - JWT payload
   * @returns Custom claims object
   */
  private extractCustomClaims(payload: JWTPayload): Record<string, any> {
    const standardClaims = new Set([
      'iss', 'sub', 'aud', 'exp', 'nbf', 'iat', 'jti',
      'roles', 'role', 'groups', 'group', 'permissions', 'scope', 'scopes',
      'user_id', 'uid'
    ]);

    const customClaims: Record<string, any> = {};
    for (const [key, value] of Object.entries(payload)) {
      if (!standardClaims.has(key)) {
        customClaims[key] = value;
      }
    }

    return customClaims;
  }

  /**
   * Check if token is expired
   * @param payload - JWT payload
   * @param clockTolerance - Clock tolerance in seconds
   * @returns Whether token is expired
   */
  isTokenExpired(payload: JWTPayload, clockTolerance?: number): boolean {
    if (!payload.exp) {
      return false; // No expiration claim
    }

    const tolerance = clockTolerance ?? this.config.clockTolerance ?? 30;
    const now = Math.floor(Date.now() / 1000);
    return now > (payload.exp + tolerance);
  }

  /**
   * Check if token is active (not before validation)
   * @param payload - JWT payload
   * @param clockTolerance - Clock tolerance in seconds
   * @returns Whether token is active
   */
  isTokenActive(payload: JWTPayload, clockTolerance?: number): boolean {
    if (!payload.nbf) {
      return true; // No not-before claim
    }

    const tolerance = clockTolerance ?? this.config.clockTolerance ?? 30;
    const now = Math.floor(Date.now() / 1000);
    return now >= (payload.nbf - tolerance);
  }

  /**
   * Extract claims from token without full validation
   * @param token - JWT token
   * @returns JWT claims
   */
  extractClaims(token: string): JWTClaims {
    try {
      // Remove Bearer prefix if present
      const cleanToken = token.replace(/^Bearer\s+/i, '');
      
      // Split token into parts
      const parts = cleanToken.split('.');
      if (parts.length !== 3) {
        throw new JWTError(JWTErrorType.INVALID_TOKEN, 'Invalid JWT format');
      }

      // Decode header and payload (without verification)
      const header = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
      const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString());

      return {
        header,
        payload,
        signature: parts[2]
      };
    } catch (error) {
      if (error instanceof JWTError) {
        throw error;
      }
      throw new JWTError(JWTErrorType.INVALID_TOKEN, `Failed to extract claims: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Create JWT validator instance
   * @param config - JWT configuration
   * @returns JWTValidator instance
   */
  static create(config: JWTConfig): JWTValidatorImpl {
    return new JWTValidatorImpl(config);
  }
}

/**
 * Factory function to create JWT validator
 * @param config - JWT configuration
 * @returns JWTValidator instance
 */
export function createJWTValidator(config: JWTConfig): JWTValidatorImpl {
  return JWTValidatorImpl.create(config);
}

/**
 * Utility function to create JWT configuration for JWKS-based validation
 * @param jwksUri - JWKS endpoint URI
 * @param issuer - Expected issuer
 * @param audience - Expected audience
 * @param options - Additional options
 * @returns JWT configuration
 */
export function createJWKSConfig(
  jwksUri: string,
  issuer: string,
  audience?: string,
  options?: {
    clockTolerance?: number;
    requiredClaims?: string[];
  }
): JWTConfig {
  return {
    jwksUri,
    issuer,
    audience,
    clockTolerance: options?.clockTolerance,
    requiredClaims: options?.requiredClaims,
    enabled: true
  };
}

/**
 * Utility function to create JWT configuration for secret-based validation
 * @param secret - JWT secret
 * @param issuer - Expected issuer
 * @param audience - Expected audience
 * @param options - Additional options
 * @returns JWT configuration
 */
export function createSecretConfig(
  secret: string,
  issuer: string,
  audience?: string,
  options?: {
    clockTolerance?: number;
    requiredClaims?: string[];
  }
): JWTConfig {
  return {
    secret,
    issuer,
    audience,
    clockTolerance: options?.clockTolerance,
    requiredClaims: options?.requiredClaims,
    enabled: true
  };
}