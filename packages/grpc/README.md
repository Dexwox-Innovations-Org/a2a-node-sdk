# @dexwox-labs/a2a-grpc

[![npm version](https://badge.fury.io/js/@dexwox-labs%2Fa2a-grpc.svg)](https://badge.fury.io/js/@dexwox-labs%2Fa2a-grpc)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

gRPC protocol support for Google's Agent-to-Agent (A2A) communication protocol. This package provides a TypeScript implementation with full feature parity with Google's Python SDK.

## Overview

This package implements gRPC protocol support for the A2A Node SDK, enabling high-performance, type-safe communication between AI agents using Google's Protocol Buffers and gRPC framework.

## Features

- **Full gRPC Protocol Support**: Complete implementation of A2A gRPC service definitions
- **TypeScript Type Safety**: Comprehensive type definitions with runtime validation
- **Bidirectional Streaming**: Support for both unary and streaming gRPC calls
- **Protocol Buffer Integration**: Automatic serialization/deserialization
- **Enhanced Task States**: Support for additional task states (REJECTED, AUTH_REQUIRED)
- **Advanced Authentication**: Multiple authentication schemes including OAuth2
- **Push Notifications**: Real-time task updates via gRPC streaming
- **Agent Discovery**: Dynamic agent capability discovery
- **Error Handling**: Comprehensive error mapping and recovery

## Installation

```bash
npm install @dexwox-labs/a2a-grpc
```

### Prerequisites

- Node.js >= 18.0.0
- TypeScript >= 5.0.0
- Protocol Buffers compiler (for development)

## Quick Start

### Creating a gRPC Client

```typescript
import { createA2AGrpcClient } from '@dexwox-labs/a2a-grpc';

const client = createA2AGrpcClient({
  endpoint: 'localhost:50051',
  timeout: 30000,
  keepalive: true
});

// Send a message
const response = await client.sendMessage({
  message: {
    message_id: 'msg-123',
    context_id: 'ctx-456',
    task_id: 'task-789',
    role: 'ROLE_USER',
    content: [
      {
        text: 'Hello, agent!'
      }
    ]
  }
});

console.log('Response:', response);
```

### Creating a gRPC Server

```typescript
import { createA2AGrpcServer, A2AAgent } from '@dexwox-labs/a2a-grpc';

// Implement your agent
class MyAgent implements A2AAgent {
  async handleMessage(message, config) {
    // Process the message and return a response
    return {
      id: 'task-' + Date.now(),
      context_id: message.context_id,
      status: {
        state: 'TASK_STATE_COMPLETED',
        timestamp: new Date()
      },
      artifacts: [],
      history: [message]
    };
  }
}

// Create and start the server
const server = createA2AGrpcServer({
  port: 50051,
  host: '0.0.0.0'
});

server.setAgent(new MyAgent());
await server.start();

console.log('gRPC server running on port 50051');
```

### Streaming Messages

```typescript
// Client-side streaming
const stream = client.sendMessageStreaming({
  message: {
    message_id: 'msg-stream-123',
    context_id: 'ctx-456',
    task_id: 'task-789',
    role: 'ROLE_USER',
    content: [{ text: 'Start streaming conversation' }]
  }
});

for await (const event of stream) {
  if (event.type === 'task') {
    console.log('Task update:', event.data);
  } else if (event.type === 'message') {
    console.log('Message:', event.data);
  }
}
```

## API Reference

### Client API

#### `createA2AGrpcClient(config: GrpcClientConfig): A2AGrpcClient`

Creates a new gRPC client instance.

**Parameters:**
- `config.endpoint` - gRPC server endpoint (e.g., 'localhost:50051')
- `config.credentials` - Optional authentication credentials
- `config.options` - gRPC channel options
- `config.timeout` - Request timeout in milliseconds
- `config.keepalive` - Enable connection keepalive

#### `A2AGrpcClient` Methods

- `sendMessage(params)` - Send a single message
- `sendMessageStreaming(params)` - Send message with streaming response
- `getTask(params)` - Retrieve task information
- `cancelTask(params)` - Cancel a running task
- `getAgentCard()` - Get agent capabilities
- `taskSubscription(params)` - Subscribe to task updates

### Server API

#### `createA2AGrpcServer(config: GrpcServerConfig): A2AGrpcServer`

Creates a new gRPC server instance.

**Parameters:**
- `config.port` - Port to listen on
- `config.host` - Host to bind to (default: '0.0.0.0')
- `config.credentials` - Server credentials
- `config.options` - gRPC server options

#### `A2AGrpcServer` Methods

- `setAgent(agent)` - Set the agent implementation
- `start()` - Start the server
- `stop()` - Stop the server
- `shutdown()` - Gracefully shutdown the server

### Agent Interface

Implement the `A2AAgent` interface to create custom agents:

```typescript
interface A2AAgent {
  handleMessage(message: Message, config?: any): Promise<Task | Message>;
  handleMessageStreaming?(message: Message, config?: any): AsyncIterable<Task | Message | any>;
  getTask?(taskId: string): Promise<Task>;
  cancelTask?(taskId: string): Promise<void>;
  getAgentCard?(): Promise<AgentCard>;
  // ... other optional methods
}
```

## Protocol Buffer Definitions

The package includes comprehensive Protocol Buffer definitions for the A2A protocol:

```protobuf
service A2AService {
  rpc SendMessage(SendMessageRequest) returns (SendMessageResponse);
  rpc SendStreamingMessage(SendMessageRequest) returns (stream StreamResponse);
  rpc GetTask(GetTaskRequest) returns (Task);
  rpc CancelTask(CancelTaskRequest) returns (google.protobuf.Empty);
  rpc TaskSubscription(TaskSubscriptionRequest) returns (stream Task);
  rpc GetAgentCard(GetAgentCardRequest) returns (AgentCard);
  // ... additional methods
}
```

## Type Conversion

The package provides automatic conversion between JSON-RPC and gRPC types:

```typescript
import { 
  messageToGrpc, 
  messageFromGrpc,
  taskToGrpc,
  taskFromGrpc 
} from '@dexwox-labs/a2a-grpc';

// Convert JSON-RPC message to gRPC format
const grpcMessage = messageToGrpc(jsonRpcMessage);

// Convert gRPC task to JSON-RPC format
const jsonRpcTask = taskFromGrpc(grpcTask);
```

## Enhanced Features

### Additional Task States

The gRPC implementation supports additional task states from the Python SDK:

- `TASK_STATE_REJECTED` - Task was rejected by the agent
- `TASK_STATE_AUTH_REQUIRED` - Authentication required to proceed

### Advanced Authentication

Support for multiple authentication schemes:

- API Key authentication
- HTTP Bearer token authentication
- OAuth2 flows (Authorization Code, Client Credentials, etc.)
- OpenID Connect

### Push Notifications

Real-time task updates via gRPC streaming:

```typescript
// Subscribe to task updates
const subscription = client.taskSubscription({ taskId: 'task-123' });

for await (const taskUpdate of subscription) {
  console.log('Task updated:', taskUpdate);
}
```

## Configuration

### Client Configuration

```typescript
const clientConfig: GrpcClientConfig = {
  endpoint: 'localhost:50051',
  timeout: 30000,
  keepalive: true,
  options: {
    'grpc.keepalive_time_ms': 30000,
    'grpc.keepalive_timeout_ms': 5000,
    'grpc.keepalive_permit_without_calls': true
  }
};
```

### Server Configuration

```typescript
const serverConfig: GrpcServerConfig = {
  port: 50051,
  host: '0.0.0.0',
  options: {
    'grpc.max_receive_message_length': 4 * 1024 * 1024, // 4MB
    'grpc.max_send_message_length': 4 * 1024 * 1024,    // 4MB
    'grpc.keepalive_time_ms': 30000,
    'grpc.keepalive_timeout_ms': 5000
  }
};
```

## Error Handling

The package provides comprehensive error handling with gRPC status codes:

```typescript
try {
  const response = await client.sendMessage(params);
} catch (error) {
  if (error.code === GRPC_STATUS_CODES.UNAUTHENTICATED) {
    console.log('Authentication required');
  } else if (error.code === GRPC_STATUS_CODES.NOT_FOUND) {
    console.log('Resource not found');
  }
}
```

## Development Status

**Current Status: Foundational Implementation**

This package provides the foundational structure and type definitions for gRPC support. The current implementation includes:

✅ Complete TypeScript type definitions
✅ Protocol Buffer definitions
✅ Type conversion utilities
✅ Client and server class structures
✅ Method stubs for all A2A operations

**Next Phase: Full Implementation**

The next development phase will include:
- [ ] Actual gRPC service registration
- [ ] Protocol buffer compilation integration
- [ ] Real gRPC client/server communication
- [ ] Authentication implementation
- [ ] Streaming optimizations
- [ ] Comprehensive testing

## Examples

See the [examples directory](../../examples/) for complete usage examples:

- Basic gRPC client/server
- Streaming communication
- Authentication setup
- Error handling patterns
- Agent implementation examples

## Contributing

Contributions are welcome! Please read our [Contributing Guide](../../CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](../../LICENSE) file for details.

## Related Packages

- [`@dexwox-labs/a2a-core`](../core/) - Core types and utilities
- [`@dexwox-labs/a2a-client`](../client/) - HTTP client implementation
- [`@dexwox-labs/a2a-server`](../server/) - HTTP server implementation
- [`@dexwox-labs/a2a-node`](../../a2a-node/) - Unified package

## Support

- [Documentation](https://dexwox-innovations-org.github.io/a2a-node-sdk/)
- [Issues](https://github.com/Dexwox-Innovations-Org/a2a-node-sdk/issues)
- [Discussions](https://github.com/Dexwox-Innovations-Org/a2a-node-sdk/discussions)