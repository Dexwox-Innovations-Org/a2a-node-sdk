# Basic A2A Protocol Client Example

This example demonstrates how to use the A2A client to connect to a server implementing the Agent-to-Agent (A2A) protocol, send messages to agents, and process responses.

Developed by [Dexwox Innovations Pvt Ltd](https://dexwox.com), this example showcases a practical implementation of the A2A protocol client, providing a foundation for building agent-based applications.

## Features

- Initialize the A2A client
- Connect to an A2A server
- Send messages to an agent
- Receive and process responses
- Handle task state management

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

```bash
# Start the client
npm start
# or
pnpm start
```

## Code Overview

The example demonstrates:

1. **Client Initialization**: Setting up the AgentClient, MessageClient, and TaskClient
2. **Agent Discovery**: Listing available agents on the server
3. **Message Sending**: Sending a text message to the weather agent
4. **Task Monitoring**: Polling for task updates
5. **Response Processing**: Handling the agent's response

## Expected Output

When running against a server with a weather agent:

```
Available agents: [{ id: 'weather-agent', name: 'Weather Agent', ... }]
Sending message to weather agent...
Message sent! Task ID: task-123
Initial task state: pending
Waiting for response... Current state: in_progress
Response received:
Agent: The weather in San Francisco today is sunny with a high of 72°F and a low of 58°F.
```

## Next Steps

- Try modifying the message to ask about different locations
- Explore other client capabilities like task management
- Check out the server example to set up your own A2A server
