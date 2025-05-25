# A2A Server Documentation

This document provides detailed information about the A2A server implementation in the `@dexwox/a2a-server` package.

## Overview

The A2A server provides the infrastructure for hosting A2A agents, handling client requests, managing tasks, and orchestrating agent execution. It's designed to be modular, extensible, and scalable.

## Installation

```bash
npm install @dexwox/a2a-server
# or
pnpm add @dexwox/a2a-server
```

## Server Components

The server package includes several key components:

### Server

The core server implementation provides HTTP and WebSocket endpoints for client communication.

```typescript
import { createServer, ServerConfig } from '@dexwox/a2a-server';
import { AgentCard } from '@dexwox/a2a-core';

// Define an agent
const weatherAgent: AgentCard = {
  id: 'weather-agent',
  name: 'Weather Agent',
  description: 'Provides weather information',
  version: '1.0.0',
  capabilities: ['weather-lookup']
};

// Configure the server
const config: ServerConfig = {
  port: 3000,
  agents: [weatherAgent],
  handleMessage: async (task, message) => {
    // Process the message and return a response
    return {
      type: 'message',
      content: [{ type: 'text', content: 'Hello from the server!' }]
    };
  }
};

// Create and start the server
const server = createServer(config);
await server.start();
```

### Task Store

The task store manages task state and persistence. The package includes an in-memory implementation, but you can create custom implementations for persistent storage.

```typescript
import { InMemoryTaskStore, TaskStore } from '@dexwox/a2a-server';
import { Task } from '@dexwox/a2a-core';

// Create an in-memory task store
const taskStore = new InMemoryTaskStore();

// Create a custom task store
class CustomTaskStore implements TaskStore {
  async createTask(task: Task): Promise<Task> {
    // Implementation
  }
  
  async getTask(taskId: string): Promise<Task> {
    // Implementation
  }
  
  async updateTask(taskId: string, updates: Partial<Task>): Promise<Task> {
    // Implementation
  }
  
  async listTasks(filter?: any): Promise<Task[]> {
    // Implementation
  }
  
  async deleteTask(taskId: string): Promise<void> {
    // Implementation
  }
}
```

### Request Handlers

Request handlers process incoming requests and route them to appropriate handlers.

```typescript
import { JsonRpcHandler } from '@dexwox/a2a-server';
import { JsonRpcRequest, JsonRpcResponse } from '@dexwox/a2a-core';

// Create a custom JSON-RPC handler
class CustomJsonRpcHandler extends JsonRpcHandler {
  async handleRequest(request: JsonRpcRequest): Promise<JsonRpcResponse> {
    // Implementation
  }
}
```

### Agent Execution

The agent execution components manage agent lifecycle and execution.

```typescript
import { AgentExecutor } from '@dexwox/a2a-server';
import { Task, MessagePart } from '@dexwox/a2a-core';

// Create a custom agent executor
class CustomAgentExecutor implements AgentExecutor {
  async executeAgent(task: Task, message: MessagePart[]): Promise<any> {
    // Implementation
  }
}
```

## Server Configuration

The server accepts a configuration object with the following options:

```typescript
interface ServerConfig {
  // Port to listen on
  port: number;
  
  // Host to bind to (default: 0.0.0.0)
  host?: string;
  
  // List of agents to register
  agents: AgentCard[];
  
  // Task store implementation (default: InMemoryTaskStore)
  taskStore?: TaskStore;
  
  // Message handler function
  handleMessage: (task: Task, message: MessagePart[]) => Promise<Artifact>;
  
  // Optional CORS configuration
  cors?: {
    // Origins to allow (default: *)
    origin?: string | string[];
    
    // Methods to allow (default: GET, POST, PUT, DELETE)
    methods?: string[];
    
    // Headers to allow (default: Content-Type, Authorization)
    allowedHeaders?: string[];
    
    // Headers to expose (default: none)
    exposedHeaders?: string[];
    
    // Allow credentials (default: false)
    credentials?: boolean;
  };
  
  // Optional authentication configuration
  auth?: {
    // Authentication handler function
    handler: (req: any) => Promise<boolean>;
    
    // Routes to exclude from authentication
    exclude?: string[];
  };
  
  // Optional logging configuration
  logging?: {
    // Log level (default: info)
    level?: 'debug' | 'info' | 'warn' | 'error';
    
    // Custom logger implementation
    logger?: any;
  };
}
```

## Task Management

The server manages tasks through the task store and provides APIs for creating, updating, and retrieving tasks.

```typescript
import { createServer, InMemoryTaskStore } from '@dexwox/a2a-server';
import { Task, TaskState } from '@dexwox/a2a-core';

// Create a task store
const taskStore = new InMemoryTaskStore();

// Create a task
const task: Task = {
  id: 'task-123',
  agentId: 'weather-agent',
  state: 'pending',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  artifacts: []
};

// Store the task
await taskStore.createTask(task);

// Update the task state
await taskStore.updateTask('task-123', {
  state: 'in_progress',
  updatedAt: new Date().toISOString()
});

// Add an artifact to the task
await taskStore.updateTask('task-123', {
  artifacts: [
    {
      type: 'message',
      content: [{ type: 'text', content: 'Hello!' }]
    }
  ],
  state: 'completed',
  updatedAt: new Date().toISOString()
});
```

## Middleware

The server supports middleware for request processing, allowing you to add custom logic to the request pipeline.

```typescript
import { createServer, Middleware } from '@dexwox/a2a-server';

// Create a logging middleware
const loggingMiddleware: Middleware = async (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  await next();
};

// Create a timing middleware
const timingMiddleware: Middleware = async (req, res, next) => {
  const start = Date.now();
  await next();
  const duration = Date.now() - start;
  console.log(`Request took ${duration}ms`);
};

// Create the server with middleware
const server = createServer({
  port: 3000,
  middleware: [loggingMiddleware, timingMiddleware],
  // Other configuration...
});
```

## WebSocket Support

The server includes WebSocket support for real-time communication with clients.

```typescript
import { createServer } from '@dexwox/a2a-server';

// Create the server with WebSocket support
const server = createServer({
  port: 3000,
  websocket: {
    // Enable WebSocket support
    enabled: true,
    
    // Path for WebSocket connections (default: /ws)
    path: '/ws',
    
    // Event handlers
    handlers: {
      // Handle client connection
      connection: (socket) => {
        console.log('Client connected');
      },
      
      // Handle client disconnection
      disconnection: (socket) => {
        console.log('Client disconnected');
      },
      
      // Handle custom events
      'custom.event': (socket, data) => {
        console.log('Custom event received:', data);
      }
    }
  },
  // Other configuration...
});
```

## Error Handling

The server uses standardized error handling through the `A2AError` class from the `@dexwox/a2a-core` package.

```typescript
import { createServer } from '@dexwox/a2a-server';
import { A2AError, ERROR_CODES } from '@dexwox/a2a-core';

// Create the server with custom error handling
const server = createServer({
  port: 3000,
  handleMessage: async (task, message) => {
    try {
      // Process the message
      // ...
      
      // Return the response
      return {
        type: 'message',
        content: [{ type: 'text', content: 'Hello!' }]
      };
    } catch (error) {
      // Handle the error
      throw new A2AError({
        code: ERROR_CODES.AGENT_EXECUTION_ERROR,
        message: 'Failed to process message',
        details: error
      });
    }
  },
  // Other configuration...
});
```

## Next Steps

- [Client Documentation](./client.md): Learn about the A2A client libraries
- [Protocol Specification](./protocol.md): Understand the A2A protocol details
- [Examples](../examples/README.md): See examples of the server in action
