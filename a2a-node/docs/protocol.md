# A2A Protocol Specification

This document provides a detailed specification of the A2A (Agent-to-Agent) protocol, including message formats, API endpoints, and communication patterns.

## Overview

The A2A protocol defines how agents communicate with each other and with clients. It is designed to be:

- **Simple**: Easy to understand and implement
- **Extensible**: Supports custom message types and extensions
- **Interoperable**: Works across different platforms and languages
- **Secure**: Supports authentication and encryption

## Core Concepts

### Agents

Agents are the primary entities in the A2A ecosystem. Each agent is identified by an Agent Card, which includes:

```typescript
interface AgentCard {
  // Unique identifier for the agent
  id: string;
  
  // Human-readable name for the agent
  name: string;
  
  // Description of the agent's capabilities
  description: string;
  
  // Version of the agent
  version: string;
  
  // List of capabilities the agent provides
  capabilities: string[];
  
  // Optional configuration parameters
  parameters?: Record<string, {
    type: string;
    description: string;
    required: boolean;
    default?: any;
  }>;
  
  // Optional authentication requirements
  auth?: {
    type: string;
    description: string;
  };
  
  // Optional metadata
  metadata?: Record<string, any>;
}
```

### Messages

Messages are the primary means of communication between agents and clients. Each message consists of one or more Message Parts:

```typescript
interface MessagePart {
  // Type of the message part
  type: string;
  
  // Content of the message part
  content: any;
  
  // Optional metadata
  metadata?: Record<string, any>;
}
```

Common message part types include:

- **text**: Plain text content
- **image**: Image data with MIME type
- **file**: File data with MIME type
- **custom**: Custom data with a specified type

### Tasks

Tasks represent units of work in the A2A system. Each task has a lifecycle and state:

```typescript
interface Task {
  // Unique identifier for the task
  id: string;
  
  // ID of the agent handling the task
  agentId: string;
  
  // Current state of the task
  state: TaskState;
  
  // Timestamp when the task was created
  createdAt: string;
  
  // Timestamp when the task was last updated
  updatedAt: string;
  
  // Optional parent task ID for subtasks
  parentId?: string;
  
  // Optional user ID associated with the task
  userId?: string;
  
  // Optional error information if the task failed
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  
  // Artifacts produced by the task
  artifacts: Artifact[];
  
  // Optional metadata
  metadata?: Record<string, any>;
}

// Task states
type TaskState = 'pending' | 'in_progress' | 'completed' | 'failed';
```

### Artifacts

Artifacts are the outputs produced by tasks:

```typescript
interface Artifact {
  // Type of the artifact
  type: string;
  
  // Content of the artifact
  content: any;
  
  // Optional metadata
  metadata?: Record<string, any>;
}
```

Common artifact types include:

- **message**: A message response from an agent
- **file**: A file produced by an agent
- **result**: A structured result from an agent
- **custom**: A custom artifact type

## API Endpoints

The A2A protocol defines the following API endpoints:

### Agent Endpoints

- `GET /agents`: List all available agents
- `GET /agents/:agentId`: Get details for a specific agent

### Message Endpoints

- `POST /agents/:agentId/messages`: Send a message to an agent
- `GET /messages/:messageId`: Get a specific message

### Task Endpoints

- `GET /tasks`: List all tasks
- `GET /tasks/:taskId`: Get a specific task
- `PUT /tasks/:taskId`: Update a task
- `DELETE /tasks/:taskId`: Delete a task

## Communication Patterns

### Request-Response

The basic communication pattern is request-response:

1. Client sends a message to an agent
2. Server creates a task for the message
3. Agent processes the message and produces a response
4. Client retrieves the response from the task

Example:

```http
POST /agents/weather-agent/messages
Content-Type: application/json

{
  "message": [
    {
      "type": "text",
      "content": "What is the weather like in San Francisco?"
    }
  ]
}
```

Response:

```http
HTTP/1.1 202 Accepted
Content-Type: application/json

{
  "taskId": "task-123"
}
```

### Streaming

For long-running tasks or real-time updates, the protocol supports streaming responses:

1. Client sends a message to an agent with `stream: true`
2. Server creates a task and establishes a streaming connection
3. Agent processes the message and streams partial responses
4. Client receives the responses in real-time

Example:

```http
POST /agents/weather-agent/messages
Content-Type: application/json

{
  "message": [
    {
      "type": "text",
      "content": "What is the weather like in San Francisco?"
    }
  ],
  "stream": true
}
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: text/event-stream

event: update
data: {"type":"partial","content":"The weather in San Francisco is "}

event: update
data: {"type":"partial","content":"currently sunny with a high of "}

event: update
data: {"type":"partial","content":"72°F and a low of 58°F."}

event: complete
data: {"taskId":"task-123"}
```

### WebSocket

For bidirectional communication, the protocol supports WebSocket connections:

1. Client establishes a WebSocket connection to `/ws`
2. Client sends messages through the WebSocket
3. Server sends responses and updates through the WebSocket

Example client message:

```json
{
  "type": "message",
  "agentId": "weather-agent",
  "message": [
    {
      "type": "text",
      "content": "What is the weather like in San Francisco?"
    }
  ]
}
```

Example server response:

```json
{
  "type": "task.created",
  "taskId": "task-123"
}
```

```json
{
  "type": "task.updated",
  "task": {
    "id": "task-123",
    "agentId": "weather-agent",
    "state": "in_progress",
    "createdAt": "2023-05-25T12:00:00Z",
    "updatedAt": "2023-05-25T12:00:01Z",
    "artifacts": []
  }
}
```

```json
{
  "type": "task.completed",
  "task": {
    "id": "task-123",
    "agentId": "weather-agent",
    "state": "completed",
    "createdAt": "2023-05-25T12:00:00Z",
    "updatedAt": "2023-05-25T12:00:02Z",
    "artifacts": [
      {
        "type": "message",
        "content": [
          {
            "type": "text",
            "content": "The weather in San Francisco is currently sunny with a high of 72°F and a low of 58°F."
          }
        ]
      }
    ]
  }
}
```

## Authentication

The A2A protocol supports multiple authentication methods:

### API Key

```http
GET /agents
Authorization: Bearer api_key_123
```

### OAuth 2.0

```http
GET /agents
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Custom Authentication

Agents can define custom authentication requirements in their Agent Cards.

## Error Handling

Errors in the A2A protocol are represented as JSON objects with the following structure:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      // Optional additional details
    }
  }
}
```

Common error codes include:

- `AGENT_NOT_FOUND`: The requested agent was not found
- `TASK_NOT_FOUND`: The requested task was not found
- `INVALID_REQUEST`: The request was invalid
- `AUTHENTICATION_ERROR`: Authentication failed
- `AUTHORIZATION_ERROR`: Authorization failed
- `AGENT_EXECUTION_ERROR`: The agent failed to execute
- `INTERNAL_SERVER_ERROR`: An internal server error occurred

## Next Steps

- [Client Documentation](./client.md): Learn about the A2A client libraries
- [Server Documentation](./server.md): Learn about the A2A server implementation
- [Examples](../examples/README.md): See examples of the protocol in action
