# A2A Protocol Specification

This document outlines the Agent-to-Agent (A2A) communication protocol used in the @dexwox-labs/a2a platform.

## Overview

The A2A protocol defines how agents communicate with each other and with clients. It is designed to be:

- **Extensible**: New message types and capabilities can be added without breaking existing implementations
- **Language-agnostic**: The protocol can be implemented in any programming language
- **Stateless**: Each message contains all the information needed to process it
- **Secure**: Authentication and authorization mechanisms are built into the protocol

## Message Format

All messages in the A2A protocol follow this general structure:

```json
{
  "id": "msg_123456789",
  "timestamp": "2025-05-25T14:25:00Z",
  "sender": {
    "id": "client_abc",
    "type": "client"
  },
  "recipient": {
    "id": "weather-agent",
    "type": "agent"
  },
  "parts": [
    {
      "type": "text",
      "content": "What's the weather in New York?",
      "metadata": {
        "language": "en"
      }
    }
  ],
  "metadata": {
    "conversation_id": "conv_987654321"
  }
}
```

### Message Parts

Messages can contain multiple parts, each with a different type:

- **text**: Plain text content
- **image**: Image data (base64 encoded) or URL
- **audio**: Audio data (base64 encoded) or URL
- **video**: Video data (base64 encoded) or URL
- **file**: File data (base64 encoded) or URL
- **json**: Structured JSON data
- **function_call**: Function call request with parameters
- **function_result**: Result of a function call

## Agent Discovery

Agents expose their capabilities through an AgentCard:

```json
{
  "id": "weather-agent",
  "name": "Weather Agent",
  "description": "Provides weather information for locations worldwide",
  "version": "1.0.0",
  "capabilities": ["weather-lookup", "forecast"],
  "endpoint": "https://example.com/agents/weather",
  "auth": {
    "type": "api_key"
  },
  "metadata": {
    "provider": "WeatherCorp",
    "pricing": "free"
  }
}
```

## Task Management

Tasks represent asynchronous operations that agents can perform:

```json
{
  "id": "task_123456789",
  "agentId": "weather-agent",
  "status": "running",
  "input": {
    "location": "New York",
    "days": 7
  },
  "createdAt": "2025-05-25T14:25:00Z",
  "updatedAt": "2025-05-25T14:25:05Z"
}
```

Task statuses include:
- **pending**: Task has been created but not started
- **running**: Task is currently being processed
- **completed**: Task has completed successfully
- **failed**: Task has failed

## API Endpoints

### Agent Endpoints

- `GET /agents`: List all available agents
- `GET /agents/:id`: Get information about a specific agent
- `POST /agents/:id/messages`: Send a message to an agent

### Message Endpoints

- `POST /messages`: Send a message
- `GET /messages/:id`: Get a message by ID
- `GET /conversations/:id/messages`: Get all messages in a conversation

### Task Endpoints

- `POST /tasks`: Create a new task
- `GET /tasks/:id`: Get information about a task
- `GET /tasks/:id/status`: Get the status of a task
- `DELETE /tasks/:id`: Cancel a task

## Authentication and Authorization

The A2A protocol supports multiple authentication methods:

- API keys
- OAuth 2.0
- JWT tokens

Authentication information is included in the HTTP headers:

```
Authorization: Bearer <token>
```

## Error Handling

Errors are returned in a standardized format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid request parameters",
    "details": {
      "field": "location",
      "issue": "required"
    }
  }
}
```

Common error codes include:
- **INVALID_REQUEST**: The request was malformed or contained invalid parameters
- **UNAUTHORIZED**: Authentication is required or failed
- **FORBIDDEN**: The authenticated user does not have permission
- **NOT_FOUND**: The requested resource was not found
- **INTERNAL_ERROR**: An internal server error occurred

## Versioning

The A2A protocol uses semantic versioning. The current version is 1.0.0.

API endpoints include version information in the URL:

```
https://api.example.com/v1/agents
```

## Extensions

The protocol can be extended with custom message types and capabilities. Extensions should follow these guidelines:

1. Use a unique prefix for custom types (e.g., `mycompany.custom_type`)
2. Document all extensions thoroughly
3. Provide fallback behavior for clients that don't support the extension

## Implementation Guidelines

When implementing the A2A protocol:

1. Always validate incoming messages against the schema
2. Handle unknown message types gracefully
3. Include appropriate error information in responses
4. Use HTTPS for all communications
5. Implement rate limiting to prevent abuse

## Reference Implementations

Reference implementations of the A2A protocol are available in the following packages:

- `@dexwox-labs/a2a-node`: Node.js implementation
- `@dexwox-labs/a2a-client`: Client library
- `@dexwox-labs/a2a-server`: Server implementation
