/**
 * @file authenticated-server.ts
 * @description Example of setting up an A2A server with authentication
 */

import { A2AServer, DefaultRequestHandler } from '../src';
import { AgentCard } from '@dexwox-labs/a2a-core';

// Define the agent card
const agentCard: AgentCard = {
  id: 'secure-weather-agent',
  name: 'Secure Weather Agent',
  description: 'A weather agent with authentication required',
  capabilities: ['weather-forecasting', 'location-services'],
  endpoint: 'http://localhost:3000',
  version: '1.0.0'
};

// Create request handler
const requestHandler = new DefaultRequestHandler([agentCard]);

// Example 1: Basic Authentication
const basicAuthServer = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'basic',
        username: 'admin',
        password: 'secure-password',
        enabled: true
      }
    ],
    required: true,
    skipPaths: ['/health', '/status'],
    onAuthError: (error, req, res) => {
      console.log('Authentication failed:', error.message);
      res.status(401).json({
        jsonrpc: '2.0',
        error: {
          code: -32001,
          message: 'Authentication required',
          data: { hint: 'Use Basic authentication with valid credentials' }
        }
      });
    },
    onAuthSuccess: (result, req) => {
      console.log('User authenticated:', result.user?.username);
    }
  }
});

// Example 2: Bearer Token Authentication
const bearerAuthServer = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'bearer',
        token: 'your-secret-jwt-token',
        tokenType: 'Bearer',
        enabled: true
      }
    ],
    required: true,
    skipPaths: ['/health']
  }
});

// Example 3: API Key Authentication
const apiKeyAuthServer = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'apiKey',
        apiKey: 'your-api-key-here',
        headerName: 'X-API-Key',
        enabled: true
      }
    ],
    required: true
  }
});

// Example 4: Multiple Authentication Schemes
const multiAuthServer = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'basic',
        username: 'admin',
        password: 'admin-password',
        enabled: true
      },
      {
        type: 'bearer',
        token: 'jwt-token-here',
        tokenType: 'Bearer',
        enabled: true
      },
      {
        type: 'apiKey',
        apiKey: 'api-key-here',
        headerName: 'X-API-Key',
        enabled: true
      }
    ],
    required: false, // Optional authentication
    skipPaths: ['/public', '/health'],
    onAuthSuccess: (result, req) => {
      console.log(`Authenticated via ${result.tokens?.tokenType || 'unknown'} scheme`);
      console.log('User:', result.user?.username || result.user?.id);
    }
  },
  cors: {
    origin: ['http://localhost:3000', 'https://yourdomain.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
  }
});

// Example 5: OAuth2 Authentication (when implemented)
const oauth2AuthServer = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'oauth2',
        clientId: 'your-oauth2-client-id',
        clientSecret: 'your-oauth2-client-secret',
        tokenUrl: 'https://oauth-provider.com/token',
        grantType: 'client_credentials',
        enabled: true
      }
    ],
    required: true
  }
});

// Start the servers on different ports
console.log('Starting authenticated A2A servers...');

// Basic Auth Server
basicAuthServer.start(3001);
console.log('Basic Auth Server running on port 3001');
console.log('Test with: curl -u admin:secure-password http://localhost:3001/.well-known/agent.json');

// Bearer Token Server
bearerAuthServer.start(3002);
console.log('Bearer Token Server running on port 3002');
console.log('Test with: curl -H "Authorization: Bearer your-secret-jwt-token" http://localhost:3002/.well-known/agent.json');

// API Key Server
apiKeyAuthServer.start(3003);
console.log('API Key Server running on port 3003');
console.log('Test with: curl -H "X-API-Key: your-api-key-here" http://localhost:3003/.well-known/agent.json');

// Multi Auth Server
multiAuthServer.start(3004);
console.log('Multi Auth Server running on port 3004');
console.log('Test with any of the above authentication methods on port 3004');

// OAuth2 Server (when OAuth2 is fully implemented)
// oauth2AuthServer.start(3005);
// console.log('OAuth2 Server running on port 3005');

console.log('\nAuthentication Examples:');
console.log('1. Basic Auth: curl -u admin:secure-password http://localhost:3001/api/v1/agents');
console.log('2. Bearer Token: curl -H "Authorization: Bearer your-secret-jwt-token" http://localhost:3002/api/v1/agents');
console.log('3. API Key: curl -H "X-API-Key: your-api-key-here" http://localhost:3003/api/v1/agents');
console.log('4. No Auth (public): curl http://localhost:3004/health');
console.log('5. Any Auth: curl -u admin:admin-password http://localhost:3004/api/v1/agents');