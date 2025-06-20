/**
 * @module AuthErrors
 * @description Authentication error classes for the A2A authentication framework
 */

import { OAuth2ErrorType } from '../types/oauth2-types';
import { JWTErrorType } from '../types/jwt-types';

/**
 * Base authentication error class
 */
export class AuthenticationError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

/**
 * OAuth2-specific error class
 */
export class OAuth2Error extends Error {
  constructor(
    public readonly type: OAuth2ErrorType | string,
    message: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'OAuth2Error';
  }
}

/**
 * JWT-specific error class
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
 * Session management error class
 */
export class SessionError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'SessionError';
  }
}

/**
 * Token management error class
 */
export class TokenError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'TokenError';
  }
}

/**
 * PKCE error class
 */
export class PKCEError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'PKCEError';
  }
}

/**
 * Scope validation error class
 */
export class ScopeError extends Error {
  constructor(
    message: string,
    public readonly requiredScopes?: string[],
    public readonly providedScopes?: string[],
    public readonly details?: any
  ) {
    super(message);
    this.name = 'ScopeError';
  }
}