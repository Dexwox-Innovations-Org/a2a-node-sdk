# A2A API Reference

This document provides a comprehensive reference for the A2A (Agent-to-Agent) platform APIs.

## @dexwox/a2a-node

The unified package that includes all A2A components.

```typescript
import { 
  AgentClient, 
  MessageClient, 
  TaskClient, 
  A2AServer, 
  AgentCard, 
  MessagePart 
} from '@dexwox/a2a-node';
```

## Client APIs

### AgentClient

Used to interact with agent information and capabilities.

```typescript
const agentClient = new AgentClient({ baseUrl: 'http://localhost:3000' });

// Get all available agents
const agents = await agentClient.getAgents();

// Get a specific agent by ID
const agent = await agentClient.getAgent('weather-agent');
```

### MessageClient

Used to send and receive messages to/from agents.

```typescript
const messageClient = new MessageClient({ baseUrl: 'http://localhost:3000' });

// Send a message to an agent
const messageId = await messageClient.sendMessage('weather-agent', [
  { type: 'text', content: 'What is the weather in New York?' }
]);

// Get a message by ID
const message = await messageClient.getMessage(messageId);
```

### TaskClient

Used to create and manage tasks.

```typescript
const taskClient = new TaskClient({ baseUrl: 'http://localhost:3000' });

// Create a new task
const task = await taskClient.createTask({
  agentId: 'weather-agent',
  input: { query: 'weather forecast for next week' }
});

// Get task status
const taskStatus = await taskClient.getTaskStatus(task.id);
```

## Server APIs

### A2AServer

The main server class for hosting A2A agents.

```typescript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';

// Define an agent
const agent = {
  id: 'my-agent',
  name: 'My Agent',
  description: 'A simple agent',
  version: '1.0.0',
  capabilities: ['text-processing'],
  endpoint: 'http://localhost:3000'
};

// Create a request handler
const requestHandler = new DefaultRequestHandler([agent]);

// Create and start the server
const server = new A2AServer(agent, requestHandler);
server.start(3000);
```

## Core Types

### AgentCard

Represents an agent's metadata and capabilities.

```typescript
interface AgentCard {
  id: string;
  name: string;
  description: string;
  version: string;
  capabilities: string[];
  endpoint: string;
  auth?: {
    type: string;
    [key: string]: any;
  };
  metadata?: Record<string, any>;
}
```

### MessagePart

Represents a part of a message in the A2A protocol.

```typescript
interface MessagePart {
  type: string;
  content: any;
  metadata?: Record<string, any>;
}
```

### Task

Represents a task in the A2A protocol.

```typescript
interface Task {
  id: string;
  agentId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  input: any;
  output?: any;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  createdAt: string;
  updatedAt: string;
}
```

## Error Handling

All A2A clients throw standardized errors that can be caught and handled.

```typescript
try {
  await agentClient.getAgent('non-existent-agent');
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    console.error('Agent not found');
  } else {
    console.error('Unexpected error:', error.message);
  }
}
```

## Advanced Usage

For more advanced usage patterns, refer to the examples in the `/examples` directory.
