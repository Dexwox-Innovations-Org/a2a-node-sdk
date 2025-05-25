# A2A Development Guide

This guide provides instructions for developing with the A2A (Agent-to-Agent) platform.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher
- TypeScript 5.3 or higher

### Setting Up Your Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/dexwox/a2a-node.git
   cd a2a-node
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build all packages:
   ```bash
   pnpm build
   ```

## Package Structure

The A2A platform is organized as a monorepo with the following packages:

- **@dexwox/a2a-node**: Unified package that includes all components
- **@dexwox/a2a-core**: Core types and utilities
- **@dexwox/a2a-client**: Client libraries
- **@dexwox/a2a-server**: Server implementation

## Development Workflow

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for a specific package
pnpm --filter @dexwox/a2a-core test

# Run tests in watch mode
pnpm test:watch
```

### Building Packages

```bash
# Build all packages
pnpm build

# Build a specific package
pnpm --filter @dexwox/a2a-core build
```

### Linting and Formatting

```bash
# Lint all packages
pnpm lint

# Format all packages
pnpm format
```

## Creating an Agent

Here's a step-by-step guide to creating a new agent:

1. Define your agent's capabilities:
   ```typescript
   const myAgent: AgentCard = {
     id: 'my-agent',
     name: 'My Agent',
     description: 'A custom agent that does something useful',
     version: '1.0.0',
     capabilities: ['custom-capability'],
     endpoint: 'http://localhost:3000'
   };
   ```

2. Create a request handler:
   ```typescript
   import { DefaultRequestHandler } from '@dexwox/a2a-node';
   
   class MyAgentHandler extends DefaultRequestHandler {
     async handleSendMessage(parts: MessagePart[], agentId: string): Promise<string> {
       // Custom message handling logic
       const response = await processMessage(parts);
       return this.createArtifact(response);
     }
   }
   
   const requestHandler = new MyAgentHandler([myAgent]);
   ```

3. Create and start the server:
   ```typescript
   import { A2AServer } from '@dexwox/a2a-node';
   
   const server = new A2AServer(myAgent, requestHandler);
   server.start(3000);
   ```

## Creating a Client

Here's how to create a client that interacts with agents:

```typescript
import { AgentClient, MessageClient } from '@dexwox/a2a-node';

// Initialize clients
const agentClient = new AgentClient({ baseUrl: 'http://localhost:3000' });
const messageClient = new MessageClient({ baseUrl: 'http://localhost:3000' });

// Get available agents
const agents = await agentClient.getAgents();

// Send a message to an agent
const messageId = await messageClient.sendMessage('my-agent', [
  { type: 'text', content: 'Hello, agent!' }
]);

// Get the response
const response = await messageClient.getMessage(messageId);
```

## Best Practices

### Error Handling

Always handle errors properly in your agents and clients:

```typescript
try {
  const result = await messageClient.sendMessage('my-agent', parts);
  // Process result
} catch (error) {
  if (error.code === 'AGENT_NOT_FOUND') {
    console.error('Agent not found:', error.message);
  } else if (error.code === 'INVALID_MESSAGE') {
    console.error('Invalid message format:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### Authentication

Implement proper authentication for your agents:

```typescript
const server = new A2AServer(myAgent, requestHandler, {
  auth: {
    type: 'api_key',
    validateKey: (key) => {
      return key === process.env.API_KEY;
    }
  }
});
```

### Performance Optimization

For high-performance agents, consider these tips:

1. Use connection pooling for database operations
2. Implement caching for frequently accessed data
3. Use streaming responses for large payloads
4. Consider horizontal scaling for high-traffic agents

## Debugging

### Logging

The A2A platform uses a structured logging system:

```typescript
import { logger } from '@dexwox/a2a-core';

// Set log level
logger.setLevel('debug');

// Log messages
logger.info('Agent started', { agentId: 'my-agent' });
logger.error('Request failed', { error: err.message });
```

### Tracing

For distributed tracing, use the built-in telemetry system:

```typescript
import { Trace } from '@dexwox/a2a-core';

class MyService {
  @Trace()
  async processRequest(data: any) {
    // Method will be automatically traced
  }
}
```

## Deployment

### Docker

A Dockerfile is provided for containerized deployment:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

### Environment Variables

Configure your application using environment variables:

```
PORT=3000
LOG_LEVEL=info
DATABASE_URL=postgres://user:password@localhost:5432/mydb
API_KEY=your-secret-key
```

## Contributing

Please follow these guidelines when contributing to the A2A platform:

1. Follow the coding style and conventions
2. Write tests for all new features
3. Update documentation as needed
4. Submit pull requests against the `main` branch

## Resources

- [API Reference](/docs/api.md)
- [Protocol Specification](/docs/protocol.md)
- [Examples](/meta/examples)
- [GitHub Repository](https://github.com/dexwox/a2a-node)
