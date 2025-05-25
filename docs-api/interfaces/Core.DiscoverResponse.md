[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / DiscoverResponse

# Interface: DiscoverResponse

[Core](../modules/Core.md).DiscoverResponse

Response format for agent discovery

**`Remarks`**

Follows JSON-RPC response format

## Table of contents

### Properties

- [error](Core.DiscoverResponse.md#error)
- [id](Core.DiscoverResponse.md#id)
- [result](Core.DiscoverResponse.md#result)

## Properties

### error

• `Optional` **error**: `Object`

Optional error information if discovery failed

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | Error code in the JSON-RPC reserved range |
| `data?` | `Record`\<`string`, `any`\> | Optional additional error data |
| `message` | `string` | Human-readable error message |

___

### id

• **id**: `string`

Request identifier (matching the request)

___

### result

• **result**: [`AgentCard`](Core.AgentCard.md)[]

Array of agent cards found during discovery
