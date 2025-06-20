/**
 * @module JWTHandler
 * @description JWT token creation, verification, and management for the A2A authentication framework
 */

import { 
  JWTHandler, 
  JWTSigningOptions, 
  JWTVerificationOptions, 
  JWTValidationResult,
  JWTHeader,
  JWTPayload,
  JWTTokenInfo
} from '../types/jwt-types';
import { JWTError, JWTErrorType } from '../types/jwt-types';
import * as jose from 'jose';

/**
 * JWT handler implementation using the jose library
 * 
 * Provides comprehensive JWT token management including:
 * - Token creation and signing
 * - Token verification and validation
 * - Token decoding and inspection
 * - Expiration and claim validation
 */
export class JWTHandlerImpl implements JWTHandler {
  private readonly secret: string | Uint8Array;
  private readonly algorithm: string;
  private readonly defaultOptions: Partial<JWTSigningOptions>;

  constructor(
    secret: string | Uint8Array,
    algorithm: string = 'HS256',
    defaultOptions?: Partial<JWTSigningOptions>
  ) {
    this.secret = secret;
    this.algorithm = algorithm;
    this.defaultOptions = defaultOptions || {};
    this.validateConfiguration();
  }

  /**
   * Validate JWT handler configuration
   * @throws JWTError if configuration is invalid
   */
  private validateConfiguration(): void {
    if (!this.secret) {
      throw new JWTError(JWTErrorType.INVALID_TOKEN, 'JWT secret is required');
    }

    const supportedAlgorithms = ['HS256', 'HS384', 'HS512', 'RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512'];
    if (!supportedAlgorithms.includes(this.algorithm)) {
      throw new JWTError(JWTErrorType.ALGORITHM_MISMATCH, `Unsupported algorithm: ${this.algorithm}`);
    }
  }

  /**
   * Create a JWT token
   * @param payload - Token payload
   * @param options - Signing options
   * @returns Promise resolving to JWT token
   */
  async createToken(payload: Record<string, any>, options?: JWTSigningOptions): Promise<string> {
    try {
      const signingOptions = { ...this.defaultOptions, ...options };
      
      // Prepare the secret key
      const secretKey = await this.prepareSecretKey();
      
      // Create JWT builder
      const jwt = new jose.SignJWT(payload)
        .setProtectedHeader({ alg: this.algorithm });

      // Set standard claims
      if (signingOptions.issuer) {
        jwt.setIssuer(signingOptions.issuer);
      }
      
      if (signingOptions.audience) {
        if (Array.isArray(signingOptions.audience)) {
          jwt.setAudience(signingOptions.audience);
        } else {
          jwt.setAudience(signingOptions.audience);
        }
      }
      
      if (signingOptions.subject) {
        jwt.setSubject(signingOptions.subject);
      }
      
      if (signingOptions.jwtid) {
        jwt.setJti(signingOptions.jwtid);
      }
      
      if (!signingOptions.noTimestamp) {
        jwt.setIssuedAt();
      }
      
      if (signingOptions.expiresIn) {
        if (typeof signingOptions.expiresIn === 'string') {
          jwt.setExpirationTime(signingOptions.expiresIn);
        } else {
          jwt.setExpirationTime(Math.floor(Date.now() / 1000) + signingOptions.expiresIn);
        }
      }
      
      if (signingOptions.notBefore) {
        if (typeof signingOptions.notBefore === 'string') {
          jwt.setNotBefore(signingOptions.notBefore);
        } else {
          jwt.setNotBefore(Math.floor(Date.now() / 1000) + signingOptions.notBefore);
        }
      }

      // Sign and return the token
      return await jwt.sign(secretKey);
    } catch (error) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        `Failed to create JWT token: ${error instanceof Error ? error.message : 'Unknown error'}`,
        { originalError: error }
      );
    }
  }

  /**
   * Verify a JWT token
   * @param token - JWT token to verify
   * @param options - Verification options
   * @returns Promise resolving to validation result
   */
  async verifyToken(token: string, options?: JWTVerificationOptions): Promise<JWTValidationResult> {
    try {
      const secretKey = await this.prepareSecretKey();
      
      // Verify the token
      const { payload, protectedHeader } = await jose.jwtVerify(token, secretKey, {
        algorithms: options?.algorithms || [this.algorithm],
        audience: options?.audience,
        issuer: options?.issuer,
        subject: options?.subject,
        clockTolerance: options?.clockTolerance || 0,
        maxTokenAge: options?.maxAge
      });

      return {
        isValid: true,
        payload: payload as JWTPayload,
        header: protectedHeader as JWTHeader,
        exp: payload.exp,
        iat: payload.iat,
        nbf: payload.nbf
      };
    } catch (error) {
      let errorType = JWTErrorType.INVALID_TOKEN;
      let errorMessage = 'Token verification failed';

      if (error instanceof jose.errors.JWTExpired) {
        errorType = JWTErrorType.EXPIRED_TOKEN;
        errorMessage = 'Token has expired';
      } else if (error instanceof jose.errors.JWTClaimValidationFailed) {
        errorType = JWTErrorType.INVALID_AUDIENCE;
        errorMessage = 'Token claim validation failed';
      } else if (error instanceof jose.errors.JOSEAlgNotAllowed) {
        errorType = JWTErrorType.ALGORITHM_MISMATCH;
        errorMessage = 'Algorithm not allowed';
      } else if (error instanceof jose.errors.JWSSignatureVerificationFailed) {
        errorType = JWTErrorType.INVALID_SIGNATURE;
        errorMessage = 'Invalid token signature';
      }

      return {
        isValid: false,
        error: errorMessage,
        errorCode: errorType
      };
    }
  }

  /**
   * Decode a JWT token without verification
   * @param token - JWT token to decode
   * @returns Decoded token parts
   */
  decodeToken(token: string): { header: JWTHeader; payload: JWTPayload; signature: string } {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new JWTError(JWTErrorType.INVALID_TOKEN, 'Invalid JWT format');
      }

      const header = JSON.parse(Buffer.from(parts[0], 'base64url').toString());
      const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString());
      const signature = parts[2];

      return { header, payload, signature };
    } catch (error) {
      throw new JWTError(
        JWTErrorType.INVALID_TOKEN,
        `Failed to decode JWT token: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  }

  /**
   * Get token expiration time
   * @param token - JWT token
   * @returns Expiration timestamp or null
   */
  getTokenExpiration(token: string): number | null {
    try {
      const { payload } = this.decodeToken(token);
      return payload.exp || null;
    } catch {
      return null;
    }
  }

  /**
   * Check if token is expired
   * @param token - JWT token
   * @param clockTolerance - Clock tolerance in seconds
   * @returns Whether token is expired
   */
  isTokenExpired(token: string, clockTolerance: number = 0): boolean {
    const exp = this.getTokenExpiration(token);
    if (!exp) {
      return false; // No expiration claim
    }

    const now = Math.floor(Date.now() / 1000);
    return now > (exp + clockTolerance);
  }

  /**
   * Get comprehensive token information
   * @param token - JWT token
   * @returns Token information
   */
  getTokenInfo(token: string): JWTTokenInfo {
    const { header, payload, signature } = this.decodeToken(token);
    const now = Math.floor(Date.now() / 1000);

    return {
      token,
      header,
      payload,
      signature,
      valid: true, // Note: This doesn't verify signature
      expiresAt: payload.exp,
      issuedAt: payload.iat,
      notBefore: payload.nbf,
      timeToExpiry: payload.exp ? Math.max(0, payload.exp - now) : undefined
    };
  }

  /**
   * Prepare secret key for jose library
   * @returns Promise resolving to secret key
   */
  private async prepareSecretKey(): Promise<jose.KeyLike | Uint8Array> {
    if (this.algorithm.startsWith('HS')) {
      // HMAC algorithms use the secret directly
      return typeof this.secret === 'string' 
        ? new TextEncoder().encode(this.secret)
        : this.secret;
    } else if (this.algorithm.startsWith('RS') || this.algorithm.startsWith('PS')) {
      // RSA algorithms
      if (typeof this.secret === 'string') {
        return await jose.importPKCS8(this.secret, this.algorithm);
      }
      throw new JWTError(JWTErrorType.KEY_NOT_FOUND, 'RSA algorithms require PEM-encoded private key');
    } else if (this.algorithm.startsWith('ES')) {
      // ECDSA algorithms
      if (typeof this.secret === 'string') {
        return await jose.importPKCS8(this.secret, this.algorithm);
      }
      throw new JWTError(JWTErrorType.KEY_NOT_FOUND, 'ECDSA algorithms require PEM-encoded private key');
    }

    throw new JWTError(JWTErrorType.ALGORITHM_MISMATCH, `Unsupported algorithm: ${this.algorithm}`);
  }

  /**
   * Create JWT handler instance
   * @param secret - Secret key
   * @param algorithm - Signing algorithm
   * @param defaultOptions - Default signing options
   * @returns JWTHandlerImpl instance
   */
  static create(
    secret: string | Uint8Array,
    algorithm?: string,
    defaultOptions?: Partial<JWTSigningOptions>
  ): JWTHandlerImpl {
    return new JWTHandlerImpl(secret, algorithm, defaultOptions);
  }
}

/**
 * Factory function to create JWT handler
 * @param secret - Secret key
 * @param algorithm - Signing algorithm (default: 'HS256')
 * @param defaultOptions - Default signing options
 * @returns JWTHandlerImpl instance
 */
export function createJWTHandler(
  secret: string | Uint8Array,
  algorithm: string = 'HS256',
  defaultOptions?: Partial<JWTSigningOptions>
): JWTHandlerImpl {
  return JWTHandlerImpl.create(secret, algorithm, defaultOptions);
}

/**
 * Utility function to generate secure JWT secret
 * @param length - Secret length in bytes (default: 32)
 * @returns Generated secret
 */
export function generateJWTSecret(length: number = 32): string {
  const crypto = require('crypto');
  return crypto.randomBytes(length).toString('base64url');
}

/**
 * Utility function to parse JWT without verification
 * @param token - JWT token
 * @returns Parsed token or null if invalid
 */
export function parseJWT(token: string): { header: JWTHeader; payload: JWTPayload } | null {
  try {
    const handler = new JWTHandlerImpl('dummy', 'HS256');
    const { header, payload } = handler.decodeToken(token);
    return { header, payload };
  } catch {
    return null;
  }
}

/**
 * Utility function to check if string is a valid JWT format
 * @param token - Token to check
 * @returns Whether token has valid JWT format
 */
export function isValidJWTFormat(token: string): boolean {
  if (typeof token !== 'string') {
    return false;
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    return false;
  }

  try {
    // Try to decode each part
    Buffer.from(parts[0], 'base64url');
    Buffer.from(parts[1], 'base64url');
    Buffer.from(parts[2], 'base64url');
    return true;
  } catch {
    return false;
  }
}

/**
 * Common JWT algorithms
 */
export const JWT_ALGORITHMS = {
  // HMAC algorithms
  HS256: 'HS256',
  HS384: 'HS384',
  HS512: 'HS512',
  
  // RSA algorithms
  RS256: 'RS256',
  RS384: 'RS384',
  RS512: 'RS512',
  
  // ECDSA algorithms
  ES256: 'ES256',
  ES384: 'ES384',
  ES512: 'ES512',
  
  // RSA-PSS algorithms
  PS256: 'PS256',
  PS384: 'PS384',
  PS512: 'PS512'
} as const;

/**
 * Common JWT claim names
 */
export const JWT_CLAIMS = {
  ISSUER: 'iss',
  SUBJECT: 'sub',
  AUDIENCE: 'aud',
  EXPIRATION: 'exp',
  NOT_BEFORE: 'nbf',
  ISSUED_AT: 'iat',
  JWT_ID: 'jti'
} as const;