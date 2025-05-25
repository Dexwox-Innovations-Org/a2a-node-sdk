[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / AgentCard

# Interface: AgentCard

[Core](../modules/Core.md).AgentCard

Represents the metadata and capabilities of an agent

**`Remarks`**

AgentCards are used for discovery and routing in the A2A protocol

## Table of contents

### Properties

- [capabilities](Core.AgentCard.md#capabilities)
- [description](Core.AgentCard.md#description)
- [endpoint](Core.AgentCard.md#endpoint)
- [id](Core.AgentCard.md#id)
- [metadata](Core.AgentCard.md#metadata)
- [name](Core.AgentCard.md#name)
- [version](Core.AgentCard.md#version)

## Properties

### capabilities

• **capabilities**: `string`[]

List of capabilities this agent provides

___

### description

• `Optional` **description**: `string`

Optional detailed description of the agent

___

### endpoint

• **endpoint**: `string`

URL endpoint where this agent can be reached

___

### id

• **id**: `string`

Unique identifier for the agent

___

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

Optional additional metadata about the agent

___

### name

• **name**: `string`

Human-readable name of the agent

___

### version

• `Optional` **version**: `string`

Optional version string for the agent
