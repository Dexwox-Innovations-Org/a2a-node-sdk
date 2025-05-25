[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Server](../modules/Server.md) / A2AServer

# Class: A2AServer

[Server](../modules/Server.md).A2AServer

Server implementation for hosting A2A protocol agents

The A2AServer class provides a complete HTTP and WebSocket server implementation
for hosting agents that implement the A2A protocol. It handles request routing,
error handling, and WebSocket connections for streaming.

**`Example`**

```typescript
import { A2AServer, DefaultRequestHandler } from '@dexwox/a2a-node';

// Define an agent
const agent = {
  id: 'weather-agent',
  name: 'Weather Agent',
  description: 'Provides weather information',
  capabilities: ['weather-forecasting'],
  endpoint: 'http://localhost:3000'
};

// Create a request handler
const requestHandler = new DefaultRequestHandler([agent]);

// Create and start the server
const server = new A2AServer(agent, requestHandler);
server.start(3000);
```

## Table of contents

### Constructors

- [constructor](Server.A2AServer.md#constructor)

### Methods

- [start](Server.A2AServer.md#start)

## Constructors

### constructor

• **new A2AServer**(`agentCard`, `requestHandler`, `contextMiddleware?`): [`A2AServer`](Server.A2AServer.md)

Creates a new A2AServer instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agentCard` | [`AgentCard`](../interfaces/Core.AgentCard.md) | The agent card describing this server's capabilities |
| `requestHandler` | [`RequestHandler`](../interfaces/Server.RequestHandler.md) | Handler for processing incoming requests |
| `contextMiddleware?` | (`req`: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>, `res`: `Response`\<`any`, `Record`\<`string`, `any`\>\>, `next`: `NextFunction`) => `void` | Optional custom middleware for request context |

#### Returns

[`A2AServer`](Server.A2AServer.md)

## Methods

### start

▸ **start**(`port?`): `void`

Starts the A2A server on the specified port

This method starts both the HTTP server and WebSocket server for handling
A2A protocol requests. The WebSocket server is used for streaming messages.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `port` | `number` | `3000` | The port to listen on (default: 3000) |

#### Returns

`void`

**`Example`**

```typescript
// Start on the default port (3000)
server.start();

// Start on a specific port
server.start(8080);
```
