# Full Stack A2A Protocol Example

This example demonstrates a complete implementation of the Agent-to-Agent (A2A) protocol with both client and server components. It includes multiple agents and an interactive CLI for sending messages and receiving responses.

Developed by [Dexwox Innovations Pvt Ltd](https://dexwox.com), this comprehensive example showcases the full capabilities of the A2A protocol implementation, providing a reference architecture for building complete agent-based systems.

## Features

- Complete A2A protocol server with multiple agents
- Interactive CLI client
- Real-time task monitoring
- Multiple agent implementations (Calculator and Echo)
- Error handling and task state management

## Prerequisites

- Node.js 18 or higher
- npm or pnpm

## Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

## Running the Example

You'll need two terminal windows to run this example:

### Terminal 1: Start the Server

```bash
npm run start:server
# or
pnpm run start:server
```

### Terminal 2: Start the Client

```bash
npm run start:client
# or
pnpm run start:client
```

## Using the Client

The client provides an interactive CLI with the following commands:

- `agents` - List all available agents
- `exit` - Exit the client
- `<agent-id>: <message>` - Send a message to a specific agent

### Example Commands

```
calculator: 2 + 2
calculator: (5 * 10) / 2
echo: Hello, world!
```

## Code Overview

The example demonstrates:

1. **Server Implementation**:
   - Agent registration and configuration
   - Task management with InMemoryTaskStore
   - Message routing to appropriate agent handlers
   - Response generation and error handling

2. **Client Implementation**:
   - Agent discovery
   - Message sending
   - Task monitoring
   - Response processing
   - Interactive CLI

## Agent Capabilities

### Calculator Agent

The Calculator agent can perform basic mathematical operations:
- Addition, subtraction, multiplication, division
- Parentheses for operation grouping
- Simple expressions

### Echo Agent

The Echo agent simply repeats back any message sent to it.

## Project Structure

- `server.ts` - Server implementation with agent handlers
- `client.ts` - Interactive CLI client

## Next Steps

- Add more sophisticated agents
- Implement a web-based UI
- Add authentication and security
- Implement persistent storage for tasks
- Add support for more message types (images, files, etc.)
