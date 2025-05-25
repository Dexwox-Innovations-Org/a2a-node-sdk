# Basic A2A Protocol Server Example

This example demonstrates how to set up a basic server implementing the Agent-to-Agent (A2A) protocol that registers agents, handles incoming messages, and processes tasks.

Developed by [Dexwox Innovations Pvt Ltd](https://dexwox.com), this example provides a production-ready implementation of the A2A protocol server, offering a solid foundation for hosting agent-based services.

## Features

- Set up an A2A server
- Register an agent
- Handle incoming messages
- Process tasks and generate responses
- Use the in-memory task store

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
# Start the server
npm start
# or
pnpm start
```

## Code Overview

The example demonstrates:

1. **Server Creation**: Setting up an A2A server with configuration
2. **Agent Registration**: Registering a weather agent with the server
3. **Message Handling**: Processing incoming messages and generating responses
4. **Task Management**: Using the in-memory task store to manage tasks

## Expected Output

When running the server:

```
A2A Server is running on http://localhost:3000
Registered agents: [weather-agent]
Press Ctrl+C to stop the server
```

When a message is received:

```
Received message: [{ type: 'text', content: 'What is the weather like in San Francisco today?' }]
Processing message: What is the weather like in San Francisco today?
Sending response: [{ type: 'text', content: 'The weather in San Francisco is currently sunny with a high of 72°F and a low of 58°F.' }]
```

## Testing the Server

You can test this server using:

1. The basic client example in this repository
2. cURL commands:
   ```bash
   curl -X POST http://localhost:3000/agents/weather-agent/messages \
     -H "Content-Type: application/json" \
     -d '{"message":[{"type":"text","content":"What is the weather like in San Francisco today?"}]}'
   ```

## Next Steps

- Add more agents with different capabilities
- Implement more sophisticated message handling
- Connect to external APIs for real weather data
- Explore persistent storage options instead of in-memory storage
