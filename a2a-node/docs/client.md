# A2A Client Documentation

This document provides detailed information about the A2A client libraries in the `@dexwox/a2a-client` package.

## Overview

The A2A client libraries provide a simple and intuitive way to connect to A2A servers, discover agents, send messages, and manage tasks. The client is designed to be lightweight, easy to use, and compatible with both browser and Node.js environments.

## Installation

```bash
npm install @dexwox/a2a-client
# or
pnpm add @dexwox/a2a-client
```

## Client Components

The client package includes several key components:

### AgentClient

The `AgentClient` is used to discover and manage agent connections.

```typescript
import { AgentClient } from '@dexwox/a2a-client';

// Initialize the client
const agentClient = new AgentClient({
  baseUrl: 'http://localhost:3000'
});

// List available agents
const agents = await agentClient.listAgents();

// Get details for a specific agent
const agent = await agentClient.getAgent('weather-agent');
```

### MessageClient

The `MessageClient` is used to send messages to agents and receive responses.

```typescript
import { MessageClient } from '@dexwox/a2a-client';
import { MessagePart } from '@dexwox/a2a-core';

// Initialize the client
const messageClient = new MessageClient({
  baseUrl: 'http://localhost:3000'
});

// Create a message
const message: MessagePart[] = [
  {
    type: 'text',
    content: 'What is the weather like in San Francisco?'
  }
];

// Send the message to an agent
const taskId = await messageClient.sendMessage({
  agentId: 'weather-agent',
  message
});
```

### TaskClient

The `TaskClient` is used to manage task lifecycle and monitor task state.

```typescript
import { TaskClient } from '@dexwox/a2a-client';

// Initialize the client
const taskClient = new TaskClient({
  baseUrl: 'http://localhost:3000'
});

// Get a task by ID
const task = await taskClient.getTask('task-123');

// List tasks
const tasks = await taskClient.listTasks();

// Update a task
await taskClient.updateTask('task-123', {
  state: 'completed'
});
```

### HttpClient

The `HttpClient` is a low-level HTTP client for A2A API communication. It's used internally by the other clients but can also be used directly for custom API calls.

```typescript
import { HttpClient } from '@dexwox/a2a-client';

// Initialize the client
const httpClient = new HttpClient({
  baseUrl: 'http://localhost:3000'
});

// Make a GET request
const response = await httpClient.get('/agents');

// Make a POST request
const result = await httpClient.post('/agents/weather-agent/messages', {
  message: [{ type: 'text', content: 'Hello' }]
});
```

## Configuration Options

All clients accept a configuration object with the following options:

```typescript
interface ClientConfig {
  // Base URL of the A2A server
  baseUrl: string;
  
  // Optional authentication token
  authToken?: string;
  
  // Optional request timeout in milliseconds
  timeout?: number;
  
  // Optional headers to include with all requests
  headers?: Record<string, string>;
  
  // Optional retry configuration
  retry?: {
    // Maximum number of retries
    maxRetries: number;
    
    // Base delay between retries in milliseconds
    baseDelay: number;
    
    // Maximum delay between retries in milliseconds
    maxDelay: number;
  };
}
```

## Error Handling

The client libraries use standardized error handling through the `A2AError` class from the `@dexwox/a2a-core` package.

```typescript
import { A2AError } from '@dexwox/a2a-core';

try {
  const agents = await agentClient.listAgents();
} catch (error) {
  if (error instanceof A2AError) {
    console.error(`A2A Error: ${error.code} - ${error.message}`);
  } else {
    console.error('Unknown error:', error);
  }
}
```

## Advanced Usage

### Polling for Task Updates

```typescript
import { TaskClient } from '@dexwox/a2a-client';
import { Task } from '@dexwox/a2a-core';

async function pollTaskUntilComplete(taskId: string): Promise<Task> {
  const taskClient = new TaskClient({
    baseUrl: 'http://localhost:3000'
  });
  
  let task = await taskClient.getTask(taskId);
  
  while (task.state !== 'completed' && task.state !== 'failed') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    task = await taskClient.getTask(taskId);
  }
  
  return task;
}
```

### WebSocket Connections

The client also supports WebSocket connections for real-time updates:

```typescript
import { WebSocketClient } from '@dexwox/a2a-client';

const wsClient = new WebSocketClient({
  baseUrl: 'ws://localhost:3000'
});

wsClient.on('task.updated', (task) => {
  console.log(`Task ${task.id} updated: ${task.state}`);
});

wsClient.on('message.received', (message) => {
  console.log('New message received:', message);
});

await wsClient.connect();
```

## Next Steps

- [Server Documentation](./server.md): Learn about the A2A server implementation
- [Protocol Specification](./protocol.md): Understand the A2A protocol details
- [Examples](../examples/README.md): See examples of the client in action
