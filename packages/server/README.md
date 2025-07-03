# @dexwox-labs/a2a-server

A comprehensive TypeScript implementation of the A2A (Agent-to-Agent) protocol server for Node.js applications. This package provides a robust Express.js-based server with authentication, task management, and real-time communication capabilities.

## Features

- 🚀 **Express.js Integration**: Built on the popular Express.js framework
- 🔐 **Comprehensive Authentication**: Multiple authentication schemes (Basic, Bearer, API Key, OAuth2)
- 📡 **Real-time Communication**: WebSocket and Server-Sent Events support
- 🎯 **Task Management**: Complete task lifecycle management with state tracking
- 📊 **Observability**: OpenTelemetry integration for metrics and tracing
- 🔄 **Queue System**: Event-driven architecture with pluggable queue managers
- 📬 **Push Notifications**: Webhook-based notifications for task updates
- 🛡️ **Type Safety**: Full TypeScript support with comprehensive type definitions

## Installation

```bash
npm install @dexwox-labs/a2a-server
# or
pnpm add @dexwox-labs/a2a-server
# or
yarn add @dexwox-labs/a2a-server
```

## Quick Start

### Basic Server Setup

```typescript
import { A2AServer, DefaultRequestHandler } from '@dexwox-labs/a2a-server';
import { AgentCard } from '@dexwox-labs/a2a-core';

// Define your agent card
const agentCard: AgentCard = {
  id: 'my-agent',
  name: 'My A2A Agent',
  description: 'A simple A2A agent',
  capabilities: ['text-processing'],
  endpoint: 'http://localhost:3000',
  version: '1.0.0'
};

// Create request handler
const requestHandler = new DefaultRequestHandler([agentCard]);

// Create and start server
const server = new A2AServer(agentCard, requestHandler);
server.start(3000);

console.log('A2A Server running on port 3000');
```

### Server with Authentication

```typescript
import { A2AServer, DefaultRequestHandler } from '@dexwox-labs/a2a-server';
import { AgentCard } from '@dexwox-labs/a2a-core';

const agentCard: AgentCard = {
  id: 'secure-agent',
  name: 'Secure A2A Agent',
  description: 'An authenticated A2A agent',
  capabilities: ['secure-processing'],
  endpoint: 'http://localhost:3000',
  version: '1.0.0'
};

const requestHandler = new DefaultRequestHandler([agentCard]);

// Server with authentication
const server = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'basic',
        username: 'admin',
        password: 'secure-password',
        enabled: true
      },
      {
        type: 'bearer',
        token: 'your-jwt-token',
        tokenType: 'Bearer',
        enabled: true
      }
    ],
    required: true,
    skipPaths: ['/health', '/status']
  }
});

server.start(3000);
```

## Authentication

The A2A Server supports multiple authentication schemes that can be used individually or in combination.

### Authentication Schemes

#### Basic Authentication

```typescript
const server = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'basic',
        username: 'admin',
        password: 'secure-password',
        enabled: true
      }
    ],
    required: true
  }
});
```

**Usage:**
```bash
curl -u admin:secure-password http://localhost:3000/api/v1/agents
```

#### Bearer Token Authentication

```typescript
const server = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'bearer',
        token: 'your-secret-token',
        tokenType: 'Bearer',
        enabled: true
      }
    ],
    required: true
  }
});
```

**Usage:**
```bash
curl -H "Authorization: Bearer your-secret-token" http://localhost:3000/api/v1/agents
```

#### API Key Authentication

```typescript
const server = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'apiKey',
        apiKey: 'your-api-key',
        headerName: 'X-API-Key',
        enabled: true
      }
    ],
    required: true
  }
});
```

**Usage:**
```bash
curl -H "X-API-Key: your-api-key" http://localhost:3000/api/v1/agents
```

#### OAuth2 Authentication

```typescript
const server = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [
      {
        type: 'oauth2',
        clientId: 'your-client-id',
        clientSecret: 'your-client-secret',
        tokenUrl: 'https://oauth-provider.com/token',
        grantType: 'client_credentials',
        enabled: true
      }
    ],
    required: true
  }
});
```

### Multiple Authentication Schemes

You can configure multiple authentication schemes to provide flexibility:

```typescript
const server = new A2AServer(agentCard, requestHandler, {
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
        token: 'jwt-token',
        tokenType: 'Bearer',
        enabled: true
      },
      {
        type: 'apiKey',
        apiKey: 'api-key',
        headerName: 'X-API-Key',
        enabled: true
      }
    ],
    required: false, // Optional authentication
    skipPaths: ['/public', '/health']
  }
});
```

### Authentication Configuration Options

```typescript
interface AuthConfig {
  schemes: AuthScheme[];           // Array of authentication schemes
  required?: boolean;              // Whether authentication is required (default: false)
  skipPaths?: string[];           // Paths to skip authentication
  onAuthSuccess?: (result: AuthResult, req: Request) => void;  // Success callback
  onAuthError?: (error: AuthError, req: Request, res: Response) => void;  // Error callback
}
```

### Authentication Callbacks

Handle authentication events with custom callbacks:

```typescript
const server = new A2AServer(agentCard, requestHandler, {
  auth: {
    schemes: [/* ... */],
    required: true,
    onAuthSuccess: (result, req) => {
      console.log('User authenticated:', result.user?.username);
      console.log('Auth scheme:', result.tokens?.tokenType);
    },
    onAuthError: (error, req, res) => {
      console.log('Authentication failed:', error.message);
      // Custom error response
      res.status(401).json({
        jsonrpc: '2.0',
        error: {
          code: -32001,
          message: 'Authentication required',
          data: { hint: 'Please provide valid credentials' }
        }
      });
    }
  }
});
```

## Server Configuration

### Complete Configuration Example

```typescript
const server = new A2AServer(agentCard, requestHandler, {
  // Authentication configuration
  auth: {
    schemes: [/* authentication schemes */],
    required: true,
    skipPaths: ['/health']
  },
  
  // CORS configuration
  cors: {
    origin: ['http://localhost:3000', 'https://yourdomain.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
  },
  
  // Server options
  port: 3000,
  host: '0.0.0.0'
});
```

## Task Management

The server provides comprehensive task management capabilities:

```typescript
import { TaskManager, InMemoryTaskStore } from '@dexwox-labs/a2a-server';

// Custom task management
const taskStore = new InMemoryTaskStore();
const taskManager = new TaskManager(taskStore);

// Task lifecycle events
taskManager.on('taskCreated', (task) => {
  console.log('Task created:', task.id);
});

taskManager.on('taskCompleted', (task) => {
  console.log('Task completed:', task.id);
});
```

## Real-time Communication

### WebSocket Support

```typescript
// WebSocket connections are automatically handled
// Clients can connect to ws://localhost:3000/ws
```

### Server-Sent Events

```typescript
// SSE endpoint available at /events
// Clients can subscribe to real-time updates
```

## Push Notifications

Configure webhook-based push notifications:

```typescript
import { PushService } from '@dexwox-labs/a2a-server';

const pushService = new PushService({
  webhookUrl: 'https://your-webhook-endpoint.com/notifications',
  retryAttempts: 3,
  retryDelay: 1000
});

// Push service will automatically send notifications for task updates
```

## Custom Request Handlers

Create custom request handlers for specialized agent behavior:

```typescript
import { RequestHandler, JsonRpcRequest, JsonRpcResponse } from '@dexwox-labs/a2a-server';

class CustomRequestHandler implements RequestHandler {
  async handle(request: JsonRpcRequest): Promise<JsonRpcResponse> {
    // Custom request handling logic
    switch (request.method) {
      case 'custom.method':
        return {
          jsonrpc: '2.0',
          id: request.id,
          result: { message: 'Custom method executed' }
        };
      default:
        return {
          jsonrpc: '2.0',
          id: request.id,
          error: {
            code: -32601,
            message: 'Method not found'
          }
        };
    }
  }
}

const customHandler = new CustomRequestHandler();
const server = new A2AServer(agentCard, customHandler);
```

## Middleware Integration

The server is built on Express.js, allowing easy middleware integration:

```typescript
import express from 'express';
import { A2AServer } from '@dexwox-labs/a2a-server';

const server = new A2AServer(agentCard, requestHandler);

// Access the underlying Express app
const app = server.getApp();

// Add custom middleware
app.use('/custom', express.json());
app.get('/custom/health', (req, res) => {
  res.json({ status: 'healthy' });
});

server.start(3000);
```

## Observability

### OpenTelemetry Integration

```typescript
import { trace } from '@opentelemetry/api';

// Tracing is automatically configured
// Custom spans can be created as needed
const tracer = trace.getTracer('my-agent');

const span = tracer.startSpan('custom-operation');
// ... perform operation
span.end();
```

### Logging

```typescript
import { logger } from '@dexwox-labs/a2a-server';

// Use the built-in Winston logger
logger.info('Server started');
logger.error('Error occurred', { error: errorObject });
```

## API Endpoints

The server automatically provides these endpoints:

- `GET /.well-known/agent.json` - Agent card discovery
- `POST /api/v1/agents` - Agent interaction endpoint
- `GET /api/v1/tasks/:taskId` - Task status endpoint
- `GET /events` - Server-Sent Events endpoint
- `WS /ws` - WebSocket endpoint
- `GET /health` - Health check endpoint

## Examples

Check out the [examples directory](./examples/) for complete working examples:

- [Basic Server](./examples/basic-server.ts)
- [Authenticated Server](./examples/authenticated-server.ts)
- [Custom Handler](./examples/custom-handler.ts)

## Error Handling

The server provides comprehensive error handling with JSON-RPC 2.0 compatible error responses:

```typescript
// Authentication errors
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32001,
    "message": "Authentication required"
  }
}

// Method not found
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32601,
    "message": "Method not found"
  }
}

// Invalid request
{
  "jsonrpc": "2.0",
  "error": {
    "code": -32600,
    "message": "Invalid Request"
  }
}
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import type {
  A2AServerConfig,
  AuthConfig,
  AuthScheme,
  RequestHandler,
  TaskManager,
  AgentExecutor
} from '@dexwox-labs/a2a-server';
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## Support

- 📖 [Documentation](https://docs.dexwox.com/a2a-node-sdk)
- 🐛 [Issue Tracker](https://github.com/dexwox-labs/a2a-node-sdk/issues)
- 💬 [Discussions](https://github.com/dexwox-labs/a2a-node-sdk/discussions)
