[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / Task

# Interface: Task

[Core](../modules/Core.md).Task

Represents a task in the A2A protocol

**`Remarks`**

Tasks are the primary unit of work in the A2A protocol

## Table of contents

### Properties

- [agentId](Core.Task.md#agentid)
- [artifacts](Core.Task.md#artifacts)
- [contextId](Core.Task.md#contextid)
- [createdAt](Core.Task.md#createdat)
- [description](Core.Task.md#description)
- [error](Core.Task.md#error)
- [expectedParts](Core.Task.md#expectedparts)
- [id](Core.Task.md#id)
- [input](Core.Task.md#input)
- [inputSchema](Core.Task.md#inputschema)
- [metadata](Core.Task.md#metadata)
- [name](Core.Task.md#name)
- [output](Core.Task.md#output)
- [outputSchema](Core.Task.md#outputschema)
- [parts](Core.Task.md#parts)
- [status](Core.Task.md#status)
- [transitions](Core.Task.md#transitions)
- [updatedAt](Core.Task.md#updatedat)

## Properties

### agentId

• `Optional` **agentId**: `string`

Optional ID of the agent assigned to this task

___

### artifacts

• `Optional` **artifacts**: \{ `content`: `Record`\<`string`, `any`\> ; `createdAt`: `string` ; `id`: `string` ; `type`: ``"text"`` \| ``"file"`` \| ``"data"`` ; `updatedAt`: `string`  }[]

Optional artifacts produced by this task

___

### contextId

• `Optional` **contextId**: `string`

Optional context ID for grouping related tasks

___

### createdAt

• **createdAt**: `string`

ISO timestamp when the task was created

___

### description

• `Optional` **description**: `string`

Optional detailed description of the task

___

### error

• `Optional` **error**: `Object`

Optional error information if the task failed

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | Error code in the JSON-RPC reserved range |
| `data?` | `Record`\<`string`, `any`\> | Optional additional error data |
| `message` | `string` | Human-readable error message |

___

### expectedParts

• `Optional` **expectedParts**: `number`

Optional count of expected message parts

___

### id

• **id**: `string`

Unique identifier for the task

___

### input

• `Optional` **input**: `Record`\<`string`, `any`\>

Optional input data for the task

___

### inputSchema

• `Optional` **inputSchema**: `Record`\<`string`, `any`\>

Optional JSON schema defining the expected input format

___

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

Optional additional metadata

___

### name

• **name**: `string`

Human-readable name of the task

___

### output

• `Optional` **output**: `Record`\<`string`, `any`\>

Optional output data produced by the task

___

### outputSchema

• `Optional` **outputSchema**: `Record`\<`string`, `any`\>

Optional JSON schema defining the expected output format

___

### parts

• `Optional` **parts**: (\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  })[]

Optional message parts associated with this task

___

### status

• **status**: ``"submitted"`` \| ``"working"`` \| ``"input_required"`` \| ``"completed"`` \| ``"failed"`` \| ``"canceled"``

Current state of the task

___

### transitions

• `Optional` **transitions**: [`TaskTransition`](Core.TaskTransition.md)[]

Optional history of state transitions

___

### updatedAt

• **updatedAt**: `string`

ISO timestamp when the task was last updated
