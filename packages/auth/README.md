# @dexwox-labs/a2a-auth

Comprehensive authentication framework for Google's Agent-to-Agent (A2A) protocol. This package provides OAuth2 flows, JWT handling, and various security schemes to achieve feature parity with the Python SDK.

## Features

- **OAuth2 Flows**: Authorization Code, Client Credentials, Implicit, and Password flows
- **JWT Handling**: Creation, validation, and parsing with JOSE library
- **PKCE Support**: Enhanced security for OAuth2 Authorization Code flow
- **Multiple Auth Schemes**: Basic, Bearer, API Key, and custom authentication
- **User Management**: Session management and authenticated user context
- **Security Features**: Token management, scope validation, and audit logging
- **Express Middleware**: Ready-to-use middleware for authentication
- **TypeScript Support**: Full type safety with comprehensive type definitions

## Installation

```bash
npm install @dexwox-labs/a2a-auth
# or
pnpm add @dexwox-labs/a2a-auth
```

## Quick Start

### Basic Authentication

```typescript
import { BasicAuthScheme } from '@dexwox-labs/a2a-auth';

const basicAuth = new BasicAuthScheme({
  username: 'user',
  password: 'password'
});

const headers = await basicAuth.generateHeaders();
// { Authorization: 'Basic dXNlcjpwYXNzd29yZA==' }
```

### Bearer Token Authentication

```typescript
import { BearerAuthScheme } from '@dexwox-labs/a2a-auth';

const bearerAuth = new BearerAuthScheme({
  token: 'your-jwt-token'
});

const headers = await bearerAuth.generateHeaders();
// { Authorization: 'Bearer your-jwt-token' }
```

### OAuth2 Authorization Code Flow

```typescript
import { OAuth2AuthorizationCode } from '@dexwox-labs/a2a-auth';

const oauth2 = new OAuth2AuthorizationCode({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'https://your-app.com/callback',
  authorizationUrl: 'https://auth-server.com/oauth/authorize',
  tokenUrl: 'https://auth-server.com/oauth/token',
  scopes: ['read', 'write']
});

// Generate authorization URL
const authUrl = await oauth2.getAuthorizationUrl();

// Exchange authorization code for tokens
const tokens = await oauth2.exchangeCodeForTokens('authorization-code');
```

### JWT Handling

```typescript
import { JWTHandler } from '@dexwox-labs/a2a-auth';

const jwtHandler = new JWTHandler({
  secret: 'your-secret-key',
  algorithm: 'HS256'
});

// Create JWT
const token = await jwtHandler.createToken({
  userId: '123',
  email: 'user@example.com'
}, { expiresIn: '1h' });

// Validate JWT
const payload = await jwtHandler.validateToken(token);
```

### Express Middleware

```typescript
import express from 'express';
import { authMiddleware, OAuth2Middleware } from '@dexwox-labs/a2a-auth';

const app = express();

// Basic authentication middleware
app.use('/api', authMiddleware({
  scheme: 'bearer',
  secret: 'your-secret'
}));

// OAuth2 middleware
app.use('/oauth', OAuth2Middleware({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
}));
```

## API Reference

### Authentication Schemes

- [`BasicAuthScheme`](src/schemes/basic-auth.ts) - HTTP Basic authentication
- [`BearerAuthScheme`](src/schemes/bearer-auth.ts) - Bearer token authentication
- [`ApiKeyAuthScheme`](src/schemes/api-key-auth.ts) - API key authentication
- [`OAuth2AuthorizationCode`](src/schemes/oauth2/authorization-code.ts) - OAuth2 Authorization Code flow
- [`OAuth2ClientCredentials`](src/schemes/oauth2/client-credentials.ts) - OAuth2 Client Credentials flow
- [`OAuth2Implicit`](src/schemes/oauth2/implicit.ts) - OAuth2 Implicit flow
- [`OAuth2Password`](src/schemes/oauth2/password.ts) - OAuth2 Password flow

### JWT & Security

- [`JWTHandler`](src/jwt/jwt-handler.ts) - JWT creation and validation
- [`JWTValidator`](src/jwt/jwt-validator.ts) - Advanced JWT validation
- [`JWKSManager`](src/jwt/jwks-manager.ts) - JSON Web Key Set management
- [`PKCEGenerator`](src/security/pkce.ts) - PKCE code generation
- [`ScopeValidator`](src/security/scope-validator.ts) - OAuth2 scope validation
- [`TokenManager`](src/security/token-manager.ts) - Token lifecycle management

### User Management

- [`UserContext`](src/user/user-context.ts) - User authentication context
- [`AuthenticatedUser`](src/user/authenticated-user.ts) - Authenticated user representation
- [`SessionManager`](src/user/session-manager.ts) - Session management

### Middleware

- [`authMiddleware`](src/middleware/auth-middleware.ts) - General authentication middleware
- [`OAuth2Middleware`](src/middleware/oauth2-middleware.ts) - OAuth2-specific middleware

## Configuration

### Environment Variables

```bash
# OAuth2 Configuration
OAUTH2_CLIENT_ID=your-client-id
OAUTH2_CLIENT_SECRET=your-client-secret
OAUTH2_REDIRECT_URI=https://your-app.com/callback

# JWT Configuration
JWT_SECRET=your-jwt-secret
JWT_ALGORITHM=HS256
JWT_EXPIRES_IN=1h

# Security Configuration
ENABLE_PKCE=true
TOKEN_REFRESH_THRESHOLD=300
```

### Configuration Object

```typescript
import { AuthConfig } from '@dexwox-labs/a2a-auth';

const config: AuthConfig = {
  oauth2: {
    clientId: process.env.OAUTH2_CLIENT_ID,
    clientSecret: process.env.OAUTH2_CLIENT_SECRET,
    redirectUri: process.env.OAUTH2_REDIRECT_URI,
    scopes: ['read', 'write'],
    enablePKCE: true
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    algorithm: 'HS256',
    expiresIn: '1h'
  },
  security: {
    enableAuditLogging: true,
    tokenRefreshThreshold: 300,
    maxRetries: 3
  }
};
```

## Integration with A2A SDK

This package integrates seamlessly with other A2A SDK packages:

```typescript
import { A2AClient } from '@dexwox-labs/a2a-client';
import { OAuth2AuthorizationCode } from '@dexwox-labs/a2a-auth';

const auth = new OAuth2AuthorizationCode({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  // ... other config
});

const client = new A2AClient({
  baseUrl: 'https://a2a-server.com',
  auth: auth
});
```

## Security Considerations

- Always use HTTPS in production
- Store client secrets securely
- Implement proper token rotation
- Use PKCE for public clients
- Validate all tokens server-side
- Implement rate limiting
- Enable audit logging

## Contributing

See the main [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

Apache-2.0 - see [LICENSE](../../LICENSE) for details.