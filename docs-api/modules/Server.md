[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / Server

# Module: Server

**`Description`**

Server implementation for the A2A protocol

This package provides a complete server implementation for the Agent-to-Agent (A2A) protocol.
It includes an Express-based HTTP and WebSocket server, request handlers, task management,
agent execution, and push notification support.

## Table of contents

### Classes

- [A2AServer](../classes/Server.A2AServer.md)
- [DefaultAgentExecutor](../classes/Server.DefaultAgentExecutor.md)
- [DefaultRequestHandler](../classes/Server.DefaultRequestHandler.md)
- [TaskManager](../classes/Server.TaskManager.md)

### Interfaces

- [AgentExecutor](../interfaces/Server.AgentExecutor.md)
- [RequestHandler](../interfaces/Server.RequestHandler.md)

### Functions

- [buildErrorResponse](Server.md#builderrorresponse)
- [buildSuccessResponse](Server.md#buildsuccessresponse)
- [prepareResponse](Server.md#prepareresponse)
- [validateResponseType](Server.md#validateresponsetype)

## Functions

### buildErrorResponse

▸ **buildErrorResponse**(`id`, `error`): [`JsonRpcResponse`](Core.md#jsonrpcresponse)\<``null``\>

Builds an error JSON-RPC response

This function creates a properly formatted JSON-RPC 2.0 error response
with the provided error object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `undefined` \| `string` \| `number` | The request ID from the original JSON-RPC request |
| `error` | [`A2AError`](../classes/Core.A2AError.md) | The error object to include in the response |

#### Returns

[`JsonRpcResponse`](Core.md#jsonrpcresponse)\<``null``\>

A properly formatted JSON-RPC error response

**`Example`**

```typescript
// Create an error response
const error = new A2AError('Task not found', -32011);
const response = buildErrorResponse('request-123', error);
```

___

### buildSuccessResponse

▸ **buildSuccessResponse**\<`T`\>(`id`, `result`): [`JsonRpcResponse`](Core.md#jsonrpcresponse)\<`T`\>

Builds a successful JSON-RPC response

This function creates a properly formatted JSON-RPC 2.0 success response
with the provided result data.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `SuccessResponseTypes` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `undefined` \| `string` \| `number` | The request ID from the original JSON-RPC request |
| `result` | `T` | The result data to include in the response |

#### Returns

[`JsonRpcResponse`](Core.md#jsonrpcresponse)\<`T`\>

A properly formatted JSON-RPC success response

**`Example`**

```typescript
// Create a success response with a task result
const response = buildSuccessResponse('request-123', {
  id: 'task-456',
  state: 'completed',
  result: { data: 'Task output' }
});
```

___

### prepareResponse

▸ **prepareResponse**\<`T`\>(`id`, `response`, `expectedTypes`): [`JsonRpcResponse`](Core.md#jsonrpcresponse)\<`T`\>

Prepares a JSON-RPC response with validation

This function handles both success and error cases, validating that
success responses match the expected types. If validation fails,
it automatically generates an appropriate error response.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Task`](../interfaces/Core.Task.md) \| \{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  } \| `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `undefined` \| `string` \| `number` | The request ID from the original JSON-RPC request |
| `response` | [`A2AError`](../classes/Core.A2AError.md) \| `T` | The response object or error to include |
| `expectedTypes` | `string`[] | Array of valid response types |

#### Returns

[`JsonRpcResponse`](Core.md#jsonrpcresponse)\<`T`\>

A properly formatted JSON-RPC response

**`Example`**

```typescript
// Prepare a response with validation
const result = await handleRequest();
const response = prepareResponse(
  'request-123',
  result,
  ['text', 'image']
);
```

___

### validateResponseType

▸ **validateResponseType**(`response`, `expectedTypes`): `boolean`

Validates that a response matches one of the expected types

This function checks if a response object has a type that matches
one of the expected types. For string responses, it checks if 'string'
is in the expected types array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `unknown` | The response object to validate |
| `expectedTypes` | `string`[] | Array of valid type strings |

#### Returns

`boolean`

True if the response type is valid, false otherwise

**`Example`**

```typescript
// Check if a response is a valid message part
const isValid = validateResponseType(
  { type: 'text', content: 'Hello' },
  ['text', 'image']
);
```
