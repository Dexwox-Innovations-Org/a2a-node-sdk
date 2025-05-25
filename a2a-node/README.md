# @dexwox/a2a-node

The unified TypeScript package for implementing the Agent-to-Agent (A2A) communication protocol, enabling seamless communication between AI agents.

This package provides a complete implementation of the A2A protocol specification, allowing developers to build, connect, and deploy intelligent agents. Developed by [Dexwox Innovations Pvt Ltd](https://dexwox.com) to offer a robust TypeScript solution for agent-based systems.

## Overview

The A2A protocol provides a standardized way for AI agents to communicate, share information, and collaborate on tasks. This package implements the protocol specification, making it easy to build, deploy, and connect agents that are compatible with the A2A ecosystem.

This package serves as the unified entry point to the A2A implementation and integrates the following components:

- **@dexwox/a2a-core**: Core types, utilities, and A2A protocol definitions
- **@dexwox/a2a-client**: Client libraries for connecting to A2A protocol servers
- **@dexwox/a2a-server**: Server implementation for hosting A2A protocol-compatible agents

## Installation

```bash
# Install the main package
npm install @dexwox/a2a-node

# Or install individual packages
npm install @dexwox/a2a-core @dexwox/a2a-client @dexwox/a2a-server
```

## Quick Start

```typescript
// Import from the main package
import { createServer, AgentClient, MessageClient } from '@dexwox/a2a-node';

// Or import from individual packages
import { AgentCard, Task } from '@dexwox/a2a-core';
import { AgentClient, MessageClient } from '@dexwox/a2a-client';
import { createServer, InMemoryTaskStore } from '@dexwox/a2a-server';
```

## Documentation

- [API Reference](/docs/api.md) - Comprehensive reference for all A2A APIs
- [Protocol Specification](/docs/protocol.md) - Details of the Google A2A communication protocol
- [Development Guide](/docs/development.md) - Guide for developing with the A2A platform
- [Deployment Guide](/docs/deployment.md) - Strategies for deploying A2A applications
- [Integration Guide](/docs/integration.md) - Instructions for integrating A2A with other systems

## Examples

This package includes several examples to help you get started:

- [Basic Client](./examples/basic-client/): Simple client implementation
- [Basic Server](./examples/basic-server/): Simple server implementation
- [Weather Agent](./examples/weather-agent/): Example agent implementation
- [Full Stack](./examples/full-stack/): Complete example with client, server, and agent

See the [Examples README](./examples/README.md) for more information.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](../CONTRIBUTING.md) for details.

## License

This project is licensed under the [Apache 2.0 License](../LICENSE).

## Legal

A2A protocol is a specification for agent communication. This implementation is provided by [Dexwox Innovations Pvt Ltd](https://dexwox.com). Google and A2A are trademarks of Google LLC.
