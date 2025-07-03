/**
 * @file auth-middleware.test.ts
 * @description Integration tests for authentication middleware
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import request from 'supertest';
import express, { Request, Response, NextFunction } from 'express';
import { createAuthMiddleware, requireAuth, requireRoles } from '../../src/middleware/auth-middleware';

// Mock the auth package for testing
vi.mock('@dexwox-labs/a2a-auth', () => ({
  AuthFactory: class MockAuthFactory {
    private schemes: Map<string, any> = new Map();

    registerBasicAuth(config: any) {
      this.schemes.set('basic', config);
    }

    registerBearerAuth(config: any) {
      this.schemes.set('bearer', config);
    }

    registerApiKeyAuth(config: any) {
      this.schemes.set('apiKey', config);
    }

    async authenticate(request: any): Promise<any> {
      const authHeader = request.headers.authorization;
      const apiKey = request.headers['x-api-key'];

      // Mock basic auth
      if (authHeader?.startsWith('Basic ')) {
        const basicConfig = this.schemes.get('basic');
        if (basicConfig) {
          const credentials = Buffer.from(authHeader.slice(6), 'base64').toString();
          const [username, password] = credentials.split(':');
          
          if (username === basicConfig.username && password === basicConfig.password) {
            return {
              user: {
                id: username,
                username,
                permissions: [],
                roles: [],
                authenticatedAt: new Date().toISOString()
              }
            };
          }
        }
        throw new Error('Invalid credentials');
      }

      // Mock bearer auth
      if (authHeader?.startsWith('Bearer ')) {
        const bearerConfig = this.schemes.get('bearer');
        if (bearerConfig) {
          const token = authHeader.slice(7);
          
          if (token === bearerConfig.token) {
            return {
              tokens: {
                accessToken: token,
                tokenType: 'Bearer'
              }
            };
          }
        }
        throw new Error('Invalid token');
      }

      // Mock API key auth
      if (apiKey) {
        const apiKeyConfig = this.schemes.get('apiKey');
        if (apiKeyConfig) {
          if (apiKey === apiKeyConfig.apiKey) {
            return {
              tokens: {
                accessToken: apiKey,
                tokenType: 'ApiKey'
              }
            };
          }
        }
        throw new Error('Invalid API key');
      }

      throw new Error('No authentication provided');
    }
  },
  // Add the missing createAuthFactory export
  createAuthFactory: () => new (class MockAuthFactory {
    private schemes: Map<string, any> = new Map();

    registerBasicAuth(config: any) {
      this.schemes.set('basic', config);
    }

    registerBearerAuth(config: any) {
      this.schemes.set('bearer', config);
    }

    registerApiKeyAuth(config: any) {
      this.schemes.set('apiKey', config);
    }

    registerScheme(name: string, scheme: any) {
      this.schemes.set(name, scheme);
    }

    getScheme(name: string) {
      return this.schemes.get(name);
    }

    listSchemes() {
      return Array.from(this.schemes.keys());
    }

    async authenticate(request: any): Promise<any> {
      const authHeader = request.headers.authorization;
      const apiKey = request.headers['x-api-key'];

      // Mock basic auth
      if (authHeader?.startsWith('Basic ')) {
        const basicConfig = this.schemes.get('basic');
        if (basicConfig) {
          const credentials = Buffer.from(authHeader.slice(6), 'base64').toString();
          const [username, password] = credentials.split(':');
          
          if (username === basicConfig.username && password === basicConfig.password) {
            return {
              user: {
                id: username,
                username,
                permissions: [],
                roles: [],
                authenticatedAt: new Date().toISOString()
              }
            };
          }
        }
        throw new Error('Invalid credentials');
      }

      // Mock bearer auth
      if (authHeader?.startsWith('Bearer ')) {
        const bearerConfig = this.schemes.get('bearer');
        if (bearerConfig) {
          const token = authHeader.slice(7);
          
          if (token === bearerConfig.token) {
            return {
              tokens: {
                accessToken: token,
                tokenType: 'Bearer'
              }
            };
          }
        }
        throw new Error('Invalid token');
      }

      // Mock API key auth
      if (apiKey) {
        const apiKeyConfig = this.schemes.get('apiKey');
        if (apiKeyConfig) {
          if (apiKey === apiKeyConfig.apiKey) {
            return {
              tokens: {
                accessToken: apiKey,
                tokenType: 'ApiKey'
              }
            };
          }
        }
        throw new Error('Invalid API key');
      }

      throw new Error('No authentication provided');
    }
  })(),
  AuthenticationError: class AuthenticationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'AuthenticationError';
    }
  }
}));

// Extend Express Request interface for testing
declare global {
  namespace Express {
    interface Request {
      auth?: {
        user?: {
          id: string;
          username: string;
          permissions: string[];
          authenticatedAt: string;
        };
        tokens?: {
          accessToken: string;
          tokenType: string;
        };
      };
    }
  }
}

describe('Authentication Middleware Integration', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
  });

  describe('Basic Authentication', () => {
    beforeEach(() => {
      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'basic',
            username: 'testuser',
            password: 'testpass',
            enabled: true
          }
        ],
        required: true
      });

      app.use(authMiddleware);
      app.get('/protected', (req, res) => {
        res.json({ 
          message: 'Access granted',
          user: req.auth?.user 
        });
      });
    });

    it('should allow access with valid basic auth credentials', async () => {
      const response = await request(app)
        .get('/protected')
        .auth('testuser', 'testpass')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Access granted',
        user: {
          id: 'testuser',
          username: 'testuser',
          permissions: [],
          roles: [],
          authenticatedAt: expect.any(String)
        }
      });
    });

    it('should reject access with invalid credentials', async () => {
      const response = await request(app)
        .get('/protected')
        .auth('wronguser', 'wrongpass')
        .expect(401);

      expect(response.body).toEqual({
        jsonrpc: '2.0',
        error: {
          code: -32001,
          message: 'Authentication failed'
        }
      });
    });

    it('should reject access without credentials', async () => {
      const response = await request(app)
        .get('/protected')
        .expect(401);

      expect(response.body).toEqual({
        jsonrpc: '2.0',
        error: {
          code: -32001,
          message: 'Authorization header is required'
        }
      });
    });
  });

  describe('Bearer Token Authentication', () => {
    beforeEach(() => {
      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'bearer',
            token: 'valid-token-123',
            tokenType: 'Bearer',
            enabled: true
          }
        ],
        required: true
      });

      app.use(authMiddleware);
      app.get('/protected', (req, res) => {
        res.json({ 
          message: 'Access granted',
          tokens: req.auth?.tokens 
        });
      });
    });

    it('should allow access with valid bearer token', async () => {
      const response = await request(app)
        .get('/protected')
        .set('Authorization', 'Bearer valid-token-123')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Access granted',
        tokens: {
          accessToken: 'valid-token-123',
          tokenType: 'Bearer'
        }
      });
    });

    it('should reject access with invalid token', async () => {
      const response = await request(app)
        .get('/protected')
        .set('Authorization', 'Bearer invalid-token')
        .expect(401);

      expect(response.body).toEqual({
        jsonrpc: '2.0',
        error: {
          code: -32001,
          message: 'Authentication failed'
        }
      });
    });
  });

  describe('API Key Authentication', () => {
    beforeEach(() => {
      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'apiKey',
            apiKey: 'secret-api-key',
            headerName: 'X-API-Key',
            enabled: true
          }
        ],
        required: true
      });

      app.use(authMiddleware);
      app.get('/protected', (req, res) => {
        res.json({ 
          message: 'Access granted',
          tokens: req.auth?.tokens 
        });
      });
    });

    it('should allow access with valid API key', async () => {
      const response = await request(app)
        .get('/protected')
        .set('X-API-Key', 'secret-api-key')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Access granted',
        tokens: {
          accessToken: 'secret-api-key',
          tokenType: 'ApiKey'
        }
      });
    });

    it('should reject access with invalid API key', async () => {
      const response = await request(app)
        .get('/protected')
        .set('X-API-Key', 'wrong-api-key')
        .expect(401);

      expect(response.body).toEqual({
        jsonrpc: '2.0',
        error: {
          code: -32001,
          message: 'Authentication failed'
        }
      });
    });
  });

  describe('Optional Authentication', () => {
    beforeEach(() => {
      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'basic',
            username: 'user',
            password: 'pass',
            enabled: true
          }
        ],
        required: false // Optional authentication
      });

      app.use(authMiddleware);
      app.get('/optional', (req, res) => {
        res.json({ 
          message: 'Access granted',
          authenticated: !!req.auth,
          user: req.auth?.user?.username || 'anonymous'
        });
      });
    });

    it('should allow access without authentication', async () => {
      const response = await request(app)
        .get('/optional')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Access granted',
        authenticated: false,
        user: 'anonymous'
      });
    });

    it('should allow access with valid authentication', async () => {
      const response = await request(app)
        .get('/optional')
        .auth('user', 'pass')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Access granted',
        authenticated: true,
        user: 'user'
      });
    });
  });

  describe('Skip Paths', () => {
    beforeEach(() => {
      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'basic',
            username: 'admin',
            password: 'secret',
            enabled: true
          }
        ],
        required: true,
        skipPaths: ['/public', '/health', '/status']
      });

      app.use(authMiddleware);
      
      app.get('/public', (req, res) => {
        res.json({ message: 'Public access' });
      });
      
      app.get('/health', (req, res) => {
        res.json({ status: 'healthy' });
      });
      
      app.get('/protected', (req, res) => {
        res.json({ message: 'Protected access' });
      });
    });

    it('should allow access to public paths without authentication', async () => {
      const response = await request(app)
        .get('/public')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Public access'
      });
    });

    it('should allow access to health endpoint without authentication', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toEqual({
        status: 'healthy'
      });
    });

    it('should require authentication for protected paths', async () => {
      await request(app)
        .get('/protected')
        .expect(401);
    });

    it('should allow access to protected paths with valid authentication', async () => {
      const response = await request(app)
        .get('/protected')
        .auth('admin', 'secret')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Protected access'
      });
    });
  });

  describe('Custom Callbacks', () => {
    let authSuccessCallback: any;
    let authErrorCallback: any;

    beforeEach(() => {
      authSuccessCallback = vi.fn();
      authErrorCallback = vi.fn();

      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'basic',
            username: 'test',
            password: 'test123',
            enabled: true
          }
        ],
        required: true,
        onAuthSuccess: authSuccessCallback,
        onAuthError: authErrorCallback
      });

      app.use(authMiddleware);
      app.get('/test', (req, res) => {
        res.json({ message: 'Success' });
      });
    });

    it('should call success callback on successful authentication', async () => {
      await request(app)
        .get('/test')
        .auth('test', 'test123')
        .expect(200);

      expect(authSuccessCallback).toHaveBeenCalledOnce();
      expect(authSuccessCallback).toHaveBeenCalledWith(
        expect.objectContaining({
          user: expect.objectContaining({
            username: 'test'
          })
        }),
        expect.any(Object) // request object
      );
    });

    it('should call error callback on failed authentication', async () => {
      console.log('[AUTH-TEST-DEBUG] Starting failed authentication test at:', new Date().toISOString());
      const startTime = Date.now();
      
      await request(app)
        .get('/test')
        .auth('test', 'wrongpass')
        .expect(401);

      const endTime = Date.now();
      console.log('[AUTH-TEST-DEBUG] Authentication test completed in:', endTime - startTime, 'ms');

      expect(authErrorCallback).toHaveBeenCalledOnce();
      expect(authErrorCallback).toHaveBeenCalledWith(
        expect.any(Error),
        expect.any(Object), // request object
        expect.any(Object)  // response object
      );
      
      console.log('[AUTH-TEST-DEBUG] Error callback validation completed at:', new Date().toISOString());
    }, 15000); // Increase timeout to 15 seconds
  });

  describe('requireAuth middleware', () => {
    beforeEach(() => {
      // Set up basic auth first
      const authMiddleware = createAuthMiddleware({
        schemes: [
          {
            type: 'basic',
            username: 'user',
            password: 'pass',
            enabled: true
          }
        ],
        required: false // Make auth optional at middleware level
      });

      app.use(authMiddleware);
      
      // Then require auth for specific route
      app.get('/require-auth', requireAuth, (req, res) => {
        res.json({ message: 'Authenticated access' });
      });
      
      app.get('/no-auth-required', (req, res) => {
        res.json({ message: 'No auth required' });
      });
    });

    it('should allow access to route requiring auth when authenticated', async () => {
      const response = await request(app)
        .get('/require-auth')
        .auth('user', 'pass')
        .expect(200);

      expect(response.body).toEqual({
        message: 'Authenticated access'
      });
    });

    it('should deny access to route requiring auth when not authenticated', async () => {
      await request(app)
        .get('/require-auth')
        .expect(401);
    });

    it('should allow access to routes not requiring auth', async () => {
      const response = await request(app)
        .get('/no-auth-required')
        .expect(200);

      expect(response.body).toEqual({
        message: 'No auth required'
      });
    });
  });
});