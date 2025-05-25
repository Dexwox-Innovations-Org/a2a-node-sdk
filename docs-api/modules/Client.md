[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / Client

# Module: Client

**`Description`**

Client SDK for interacting with A2A protocol servers

This package provides client classes for interacting with Agent-to-Agent (A2A) protocol servers.
It includes clients for sending messages, managing tasks, and discovering agents, along with
utilities for error handling and stream management.

**`Example`**

```typescript
import { MessageClient, TaskClient, AgentClient } from '@dexwox/a2a-client';

// Create clients
const messageClient = new MessageClient({ baseUrl: 'https://a2a-server.example.com' });
const taskClient = new TaskClient({ baseUrl: 'https://a2a-server.example.com' });
const agentClient = new AgentClient({ baseUrl: 'https://a2a-server.example.com' });

// Use clients
const agents = await agentClient.resolveAgents();
console.log('Available agents:', agents);

const messageId = await messageClient.sendMessage(
  [{ type: 'text', content: 'Hello, agent!' }],
  agents[0].id
);
console.log('Message sent with ID:', messageId);
```

## Table of contents

### Classes

- [AgentClient](../classes/Client.AgentClient.md)
- [MessageClient](../classes/Client.MessageClient.md)
- [TaskClient](../classes/Client.TaskClient.md)

### Interfaces

- [MessageClientOptions](../interfaces/Client.MessageClientOptions.md)
- [StreamOptions](../interfaces/Client.StreamOptions.md)

### Functions

- [normalizeError](Client.md#normalizeerror)

## Functions

### normalizeError

▸ **normalizeError**(`err`): `A2AError`

Normalizes any error into an A2AError

This utility function converts any error or exception into a standardized
A2AError object. It handles various error types including:
- Existing A2AError instances (returned as-is)
- Standard JavaScript Error objects
- Server response objects with status codes
- Any other unknown error types

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `unknown` | The error to normalize, can be of any type |

#### Returns

`A2AError`

A standardized A2AError instance

**`Example`**

```typescript
try {
  // Some operation that might fail
  await fetch('https://a2a-server.example.com');
} catch (error) {
  // Normalize the error to a standard format
  const normalizedError = normalizeError(error);
  
  // Now we can handle it consistently
  console.error(`Error (${normalizedError.code}): ${normalizedError.message}`);
  
  // And we can check for specific error types
  if (normalizedError instanceof A2ANetworkError) {
    // Handle network errors specifically
  }
}
```
