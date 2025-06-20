/**
 * @file auth-integration.test.ts
 * @description Integration tests for the A2A authentication framework
 */

import { describe, it, expect } from 'vitest';
import {
  createAuthFactory,
  createBasicAuth,
  createBearerAuth,
  createApiKeyAuth,
  OAuth2ClientCredentialsFlowImpl,
  OAuth2ImplicitFlowImpl,
  OAuth2PasswordFlowImpl,
  createJWTHandler,
  createJWTValidator,
  createJWKSManager,
  JWTErrorType,
  AuthenticationError,
  OAuth2Error,
  JWTError
} from '../src/index';

describe('Authentication Framework Integration', () => {
  describe('Basic Authentication', () => {
    it('should create basic auth scheme', () => {
      const basicAuth = createBasicAuth('testuser', 'testpass');

      expect(basicAuth).toBeDefined();
      expect(basicAuth.type).toBe('basic');
    });

    it('should validate basic auth credentials', async () => {
      const basicAuth = createBasicAuth('testuser', 'testpass');
      
      const credentials = Buffer.from('testuser:testpass').toString('base64');
      const result = await basicAuth.validate({ authorization: `Basic ${credentials}` });

      expect(result.success).toBe(true);
      expect(result.user?.username).toBe('testuser');
    });

    it('should reject invalid basic auth credentials', async () => {
      const basicAuth = createBasicAuth('testuser', 'testpass');

      const result = await basicAuth.validate({ authorization: 'Basic invalid' });
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('Bearer Authentication', () => {
    it('should create bearer auth scheme', () => {
      const bearerAuth = createBearerAuth('valid-token');

      expect(bearerAuth).toBeDefined();
      expect(bearerAuth.type).toBe('bearer');
    });

    it('should validate bearer token', async () => {
      const bearerAuth = createBearerAuth('valid-token');

      const result = await bearerAuth.validate({ authorization: 'Bearer valid-token' });
      expect(result.success).toBe(true);
      expect(result.user?.id).toBeDefined();
    });

    it('should reject invalid bearer token', async () => {
      const bearerAuth = createBearerAuth('valid-token');

      const result = await bearerAuth.validate({ authorization: 'Bearer invalid-token' });
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('API Key Authentication', () => {
    it('should create API key auth scheme', () => {
      const apiKeyAuth = createApiKeyAuth('valid-api-key');

      expect(apiKeyAuth).toBeDefined();
      expect(apiKeyAuth.type).toBe('apiKey');
    });

    it('should validate API key', async () => {
      const apiKeyAuth = createApiKeyAuth('valid-api-key', { headerName: 'X-API-Key' });

      const result = await apiKeyAuth.validate({ 'x-api-key': 'valid-api-key' });
      expect(result.success).toBe(true);
      expect(result.user?.id).toBeDefined();
    });

    it('should reject invalid API key', async () => {
      const apiKeyAuth = createApiKeyAuth('valid-api-key', { headerName: 'X-API-Key' });

      const result = await apiKeyAuth.validate({ 'x-api-key': 'invalid-key' });
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });
  });

  describe('OAuth2 Flows', () => {
    it('should create OAuth2 client credentials flow', () => {
      const clientCredentialsFlow = new OAuth2ClientCredentialsFlowImpl({
        type: 'oauth2',
        enabled: true,
        clientId: 'test-client',
        clientSecret: 'test-secret',
        authorizationUrl: 'https://auth.example.com/authorize',
        tokenUrl: 'https://auth.example.com/token',
        scopes: ['read', 'write'],
        grantType: 'client_credentials',
        enablePKCE: false
      });

      expect(clientCredentialsFlow).toBeDefined();
    });

    it('should create OAuth2 implicit flow', () => {
      const implicitFlow = new OAuth2ImplicitFlowImpl({
        type: 'oauth2',
        enabled: true,
        clientId: 'test-client',
        clientSecret: '',
        authorizationUrl: 'https://auth.example.com/authorize',
        tokenUrl: 'https://auth.example.com/token',
        scopes: ['read'],
        grantType: 'implicit',
        enablePKCE: false,
        redirectUri: 'https://app.example.com/callback'
      });

      expect(implicitFlow).toBeDefined();
    });

    it('should create OAuth2 password flow', () => {
      const passwordFlow = new OAuth2PasswordFlowImpl({
        type: 'oauth2',
        enabled: true,
        clientId: 'test-client',
        clientSecret: 'test-secret',
        authorizationUrl: 'https://auth.example.com/authorize',
        tokenUrl: 'https://auth.example.com/token',
        scopes: ['read', 'write'],
        grantType: 'password',
        enablePKCE: false
      });

      expect(passwordFlow).toBeDefined();
    });
  });

  describe('JWT Components', () => {
    it('should create JWT handler', async () => {
      const secretKey = new TextEncoder().encode('test-secret-key-that-is-long-enough');
      const jwtHandler = createJWTHandler(secretKey);

      expect(jwtHandler).toBeDefined();

      const payload = { sub: 'user123', exp: Math.floor(Date.now() / 1000) + 3600 };
      const token = await jwtHandler.createToken(payload);
      
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');

      const decoded = jwtHandler.decodeToken(token);
      expect(decoded.payload.sub).toBe('user123');
    });

    it('should create JWT validator', () => {
      const jwtValidator = createJWTValidator({
        secret: 'test-secret-key',
        issuer: 'test-issuer',
        audience: 'test-audience',
        enabled: true
      });

      expect(jwtValidator).toBeDefined();
    });

    it('should create JWKS manager', () => {
      const jwksManager = createJWKSManager({
        jwksUri: 'https://auth.example.com/.well-known/jwks.json',
        cacheTtl: 3600
      });

      expect(jwksManager).toBeDefined();
    });
  });

  describe('Authentication Factory', () => {
    it('should create authentication factory with default configuration', () => {
      const authFactory = createAuthFactory();
      expect(authFactory).toBeDefined();
    });

    it('should create authentication factory with custom configuration', () => {
      const authFactory = createAuthFactory({
        defaultScheme: 'bearer'
      });

      expect(authFactory).toBeDefined();
    });
  });

  describe('Error Classes', () => {
    it('should create authentication error', () => {
      const error = new AuthenticationError('Test auth error', 'AUTH_001');
      expect(error.name).toBe('AuthenticationError');
      expect(error.message).toBe('Test auth error');
      expect(error.code).toBe('AUTH_001');
    });

    it('should create OAuth2 error', () => {
      const error = new OAuth2Error('invalid_grant', 'Invalid grant type');
      expect(error.name).toBe('OAuth2Error');
      expect(error.type).toBe('invalid_grant');
    });

    it('should create JWT error', () => {
      const error = new JWTError(JWTErrorType.EXPIRED_TOKEN, 'Token has expired');
      expect(error.name).toBe('JWTError');
      expect(error.type).toBe(JWTErrorType.EXPIRED_TOKEN);
    });
  });

  describe('Type Exports', () => {
    it('should export JWT error types', () => {
      expect(JWTErrorType.INVALID_TOKEN).toBe('INVALID_TOKEN');
      expect(JWTErrorType.EXPIRED_TOKEN).toBe('EXPIRED_TOKEN');
      expect(JWTErrorType.INVALID_SIGNATURE).toBe('INVALID_SIGNATURE');
    });
  });

  describe('Package Exports', () => {
    it('should export all main components', () => {
      // Test that all main exports are available
      expect(createAuthFactory).toBeDefined();
      expect(createBasicAuth).toBeDefined();
      expect(createBearerAuth).toBeDefined();
      expect(createApiKeyAuth).toBeDefined();
      expect(OAuth2ClientCredentialsFlowImpl).toBeDefined();
      expect(OAuth2ImplicitFlowImpl).toBeDefined();
      expect(OAuth2PasswordFlowImpl).toBeDefined();
      expect(createJWTHandler).toBeDefined();
      expect(createJWTValidator).toBeDefined();
      expect(createJWKSManager).toBeDefined();
      expect(AuthenticationError).toBeDefined();
      expect(OAuth2Error).toBeDefined();
      expect(JWTError).toBeDefined();
      expect(JWTErrorType).toBeDefined();
    });
  });

  describe('Authentication Scheme Integration', () => {
    it('should generate and validate headers for basic auth', async () => {
      const basicAuth = createBasicAuth('testuser', 'testpass');
      
      const headers = await basicAuth.generateHeaders();
      expect(headers.Authorization).toBeDefined();
      expect(headers.Authorization).toMatch(/^Basic /);

      const result = await basicAuth.validate({ authorization: headers.Authorization });
      expect(result.success).toBe(true);
    });

    it('should generate and validate headers for bearer auth', async () => {
      const bearerAuth = createBearerAuth('test-token');
      
      const headers = await bearerAuth.generateHeaders();
      expect(headers.Authorization).toBe('Bearer test-token');

      const result = await bearerAuth.validate({ authorization: headers.Authorization });
      expect(result.success).toBe(true);
    });

    it('should generate and validate headers for API key auth', async () => {
      const apiKeyAuth = createApiKeyAuth('test-api-key', { headerName: 'X-API-Key' });
      
      const headers = await apiKeyAuth.generateHeaders();
      expect(headers['X-API-Key']).toBe('test-api-key');

      const result = await apiKeyAuth.validate(headers);
      expect(result.success).toBe(true);
    });
  });
});