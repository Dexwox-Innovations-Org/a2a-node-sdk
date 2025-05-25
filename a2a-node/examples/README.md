# A2A Protocol Examples

This directory contains examples of how to implement the Agent-to-Agent (A2A) protocol using the `@dexwox/a2a-node` package.

These examples demonstrate [Dexwox Innovations Pvt Ltd](https://dexwox.com)'s implementation of the A2A protocol specification, showcasing practical applications and integration patterns for agent-based systems.

## Examples Overview

- **Basic Client**: Simple example of using the A2A client to connect to an A2A protocol server
- **Basic Server**: Example of setting up a minimal A2A protocol server
- **Weather Agent**: Implementation of a simple agent that communicates using the A2A protocol
- **Full Stack Example**: Complete example showing client, server, and agent integration using the A2A protocol

## Getting Started

To run these examples, make sure you have the following packages installed:

```bash
# For complete functionality (recommended)
npm install @dexwox/a2a-node
# or
pnpm add @dexwox/a2a-node

# For specific packages only (if needed)
npm install @dexwox/a2a-core
# or
npm install @dexwox/a2a-client
# or
npm install @dexwox/a2a-server
```

## Running the Examples

Each example directory contains a README with specific instructions for running that example.

```bash
# Example: Running the basic client
cd basic-client
npm install
npm start
```

## Example Structure

```
examples/
├── basic-client/       # Simple client implementation
├── basic-server/       # Simple server implementation
├── weather-agent/      # Example agent implementation
└── full-stack/         # Complete example with client, server, and agent
```
