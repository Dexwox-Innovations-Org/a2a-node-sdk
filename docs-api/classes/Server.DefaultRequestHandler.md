[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Server](../modules/Server.md) / DefaultRequestHandler

# Class: DefaultRequestHandler

[Server](../modules/Server.md).DefaultRequestHandler

Default implementation of the RequestHandler interface

This class provides the standard implementation of the RequestHandler interface,
handling all A2A protocol requests including message sending, task management,
push notifications, and agent discovery.

**`Example`**

```typescript
// Create a request handler with available agents
const agents: AgentCard[] = [
  {
    id: 'assistant-agent',
    name: 'Assistant',
    description: 'A helpful assistant',
    capabilities: ['chat', 'answer-questions']
  }
];

const requestHandler = new DefaultRequestHandler(agents);

// Use in an Express app
app.use('/a2a', requestHandler.router);
```

## Hierarchy

- `DefaultJsonRpcRequestHandler`

  ↳ **`DefaultRequestHandler`**

## Implements

- [`RequestHandler`](../interfaces/Server.RequestHandler.md)

## Table of contents

### Constructors

- [constructor](Server.DefaultRequestHandler.md#constructor)

### Properties

- [router](Server.DefaultRequestHandler.md#router)

### Methods

- [buildErrorResponse](Server.DefaultRequestHandler.md#builderrorresponse)
- [buildSuccessResponse](Server.DefaultRequestHandler.md#buildsuccessresponse)
- [formatResponse](Server.DefaultRequestHandler.md#formatresponse)
- [handleCancelTask](Server.DefaultRequestHandler.md#handlecanceltask)
- [handleDiscoverAgents](Server.DefaultRequestHandler.md#handlediscoveragents)
- [handleErrors](Server.DefaultRequestHandler.md#handleerrors)
- [handleGetPushConfig](Server.DefaultRequestHandler.md#handlegetpushconfig)
- [handleGetTaskStatus](Server.DefaultRequestHandler.md#handlegettaskstatus)
- [handleJsonRpcCancelTask](Server.DefaultRequestHandler.md#handlejsonrpccanceltask)
- [handleJsonRpcDiscoverAgents](Server.DefaultRequestHandler.md#handlejsonrpcdiscoveragents)
- [handleJsonRpcGetTaskStatus](Server.DefaultRequestHandler.md#handlejsonrpcgettaskstatus)
- [handleJsonRpcSendMessage](Server.DefaultRequestHandler.md#handlejsonrpcsendmessage)
- [handleJsonRpcStreamMessage](Server.DefaultRequestHandler.md#handlejsonrpcstreammessage)
- [handleSendMessage](Server.DefaultRequestHandler.md#handlesendmessage)
- [handleSetPushConfig](Server.DefaultRequestHandler.md#handlesetpushconfig)
- [handleStreamMessage](Server.DefaultRequestHandler.md#handlestreammessage)
- [handleTaskResubscription](Server.DefaultRequestHandler.md#handletaskresubscription)
- [normalizeError](Server.DefaultRequestHandler.md#normalizeerror)
- [use](Server.DefaultRequestHandler.md#use)
- [validateRequest](Server.DefaultRequestHandler.md#validaterequest)

## Constructors

### constructor

• **new DefaultRequestHandler**(`agents?`): [`DefaultRequestHandler`](Server.DefaultRequestHandler.md)

Creates a new DefaultRequestHandler

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `agents` | [`AgentCard`](../interfaces/Core.AgentCard.md)[] | `[]` | Array of available agent cards |

#### Returns

[`DefaultRequestHandler`](Server.DefaultRequestHandler.md)

#### Overrides

DefaultJsonRpcRequestHandler.constructor

## Properties

### router

• `Readonly` **router**: `Router`

Express router for handling HTTP requests

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[router](../interfaces/Server.RequestHandler.md#router)

#### Overrides

DefaultJsonRpcRequestHandler.router

## Methods

### buildErrorResponse

▸ **buildErrorResponse**(`id?`, `error?`): [`JsonRpcResponse`](../modules/Core.md#jsonrpcresponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` \| `number` |
| `error?` | `any` |

#### Returns

[`JsonRpcResponse`](../modules/Core.md#jsonrpcresponse)

#### Inherited from

DefaultJsonRpcRequestHandler.buildErrorResponse

___

### buildSuccessResponse

▸ **buildSuccessResponse**(`id?`, `result?`): [`JsonRpcResponse`](../modules/Core.md#jsonrpcresponse)

Builds a JSON-RPC success response

This method creates a properly formatted JSON-RPC 2.0 success response
with the provided result data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` \| `number` | Request ID from the original JSON-RPC request |
| `result?` | `any` | Result data to include in the response |

#### Returns

[`JsonRpcResponse`](../modules/Core.md#jsonrpcresponse)

Properly formatted JSON-RPC success response

**`Example`**

```typescript
// Create a success response
const response = jsonRpcHandler.buildSuccessResponse('request-123', {
  taskId: 'task-456'
});

// Send the response
res.json(response);
```

#### Inherited from

DefaultJsonRpcRequestHandler.buildSuccessResponse

___

### formatResponse

▸ **formatResponse**(): `Middleware`

Creates middleware for formatting responses

This method returns a middleware function that formats responses as JSON-RPC
success responses. If the response already has a jsonrpc property, it is
left unchanged.

#### Returns

`Middleware`

Middleware function that formats responses

**`Example`**

```typescript
// Add response formatting middleware
jsonRpcHandler.use(jsonRpcHandler.formatResponse());
```

#### Inherited from

DefaultJsonRpcRequestHandler.formatResponse

___

### handleCancelTask

▸ **handleCancelTask**(`taskId`): `Promise`\<`void`\>

Cancels a running task

Attempts to cancel a task that is currently in progress. This will notify
the agent to stop processing and update the task status to 'canceled'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskId` | `string` | ID of the task to cancel |

#### Returns

`Promise`\<`void`\>

Promise resolving when the task is canceled

**`Throws`**

If the task is not found or has no agent ID

**`Example`**

```typescript
try {
  await requestHandler.handleCancelTask('task-123');
  console.log('Task canceled successfully');
} catch (error) {
  console.error('Failed to cancel task:', error);
}
```

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleCancelTask](../interfaces/Server.RequestHandler.md#handlecanceltask)

#### Overrides

DefaultJsonRpcRequestHandler.handleCancelTask

___

### handleDiscoverAgents

▸ **handleDiscoverAgents**(`capability?`): `Promise`\<[`AgentCard`](../interfaces/Core.AgentCard.md)[]\>

Discovers available agents

Returns a list of available agents, optionally filtered by capability.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `capability?` | `string` | Optional capability to filter agents by |

#### Returns

`Promise`\<[`AgentCard`](../interfaces/Core.AgentCard.md)[]\>

Promise resolving to an array of agent cards

**`Example`**

```typescript
// Get all agents
const allAgents = await requestHandler.handleDiscoverAgents();
console.log('All agents:', allAgents);

// Get agents with a specific capability
const chatAgents = await requestHandler.handleDiscoverAgents('chat');
console.log('Chat agents:', chatAgents);
```

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleDiscoverAgents](../interfaces/Server.RequestHandler.md#handlediscoveragents)

#### Overrides

DefaultJsonRpcRequestHandler.handleDiscoverAgents

___

### handleErrors

▸ **handleErrors**(): `Middleware`

Creates middleware for handling errors

This method returns a middleware function that catches any errors thrown
during request processing and responds with a 500 Internal Server Error
and a JSON-RPC error response.

#### Returns

`Middleware`

Middleware function that catches and processes errors

**`Example`**

```typescript
// Add error handling middleware
jsonRpcHandler.use(jsonRpcHandler.handleErrors());
```

#### Inherited from

DefaultJsonRpcRequestHandler.handleErrors

___

### handleGetPushConfig

▸ **handleGetPushConfig**(`taskId`): `Promise`\<`PushNotificationConfig`\>

Gets push notification configuration for a task

Retrieves the current push notification configuration for a specific task.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskId` | `string` | ID of the task |

#### Returns

`Promise`\<`PushNotificationConfig`\>

Promise resolving to the push notification configuration

**`Throws`**

If the task is not found

**`Example`**

```typescript
const config = await requestHandler.handleGetPushConfig('task-123');
console.log('Push notification config:', config);
console.log('Enabled:', config.enabled);
console.log('Events:', config.events);
```

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleGetPushConfig](../interfaces/Server.RequestHandler.md#handlegetpushconfig)

___

### handleGetTaskStatus

▸ **handleGetTaskStatus**(`taskId`): `Promise`\<[`Task`](../interfaces/Core.Task.md)\>

Gets the status of a task

Retrieves the current status and details of a task by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskId` | `string` | ID of the task to retrieve |

#### Returns

`Promise`\<[`Task`](../interfaces/Core.Task.md)\>

Promise resolving to the task object

**`Throws`**

If the task is not found

**`Example`**

```typescript
try {
  const task = await requestHandler.handleGetTaskStatus('task-123');
  console.log('Task status:', task.status);
  console.log('Task result:', task.result);
} catch (error) {
  console.error('Failed to get task:', error);
}
```

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleGetTaskStatus](../interfaces/Server.RequestHandler.md#handlegettaskstatus)

#### Overrides

DefaultJsonRpcRequestHandler.handleGetTaskStatus

___

### handleJsonRpcCancelTask

▸ **handleJsonRpcCancelTask**(`req`, `res`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultJsonRpcRequestHandler.handleJsonRpcCancelTask

___

### handleJsonRpcDiscoverAgents

▸ **handleJsonRpcDiscoverAgents**(`req`, `res`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultJsonRpcRequestHandler.handleJsonRpcDiscoverAgents

___

### handleJsonRpcGetTaskStatus

▸ **handleJsonRpcGetTaskStatus**(`req`, `res`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultJsonRpcRequestHandler.handleJsonRpcGetTaskStatus

___

### handleJsonRpcSendMessage

▸ **handleJsonRpcSendMessage**(`req`, `res`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultJsonRpcRequestHandler.handleJsonRpcSendMessage

___

### handleJsonRpcStreamMessage

▸ **handleJsonRpcStreamMessage**(`req`, `res`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultJsonRpcRequestHandler.handleJsonRpcStreamMessage

___

### handleSendMessage

▸ **handleSendMessage**(`parts`, `agentId`): `Promise`\<`string`\>

Handles sending a message to an agent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parts` | (\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  })[] | Message parts to send |
| `agentId` | `string` | ID of the target agent |

#### Returns

`Promise`\<`string`\>

Promise resolving to the created task ID

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleSendMessage](../interfaces/Server.RequestHandler.md#handlesendmessage)

#### Overrides

DefaultJsonRpcRequestHandler.handleSendMessage

___

### handleSetPushConfig

▸ **handleSetPushConfig**(`taskId`, `config`): `Promise`\<`void`\>

Sets push notification configuration for a task

Configures push notifications for a specific task, including the endpoint
to send notifications to and which events to notify about.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskId` | `string` | ID of the task |
| `config` | `PushNotificationConfig` | Push notification configuration |

#### Returns

`Promise`\<`void`\>

Promise resolving when the configuration is set

**`Throws`**

If the task is not found

**`Example`**

```typescript
await requestHandler.handleSetPushConfig('task-123', {
  enabled: true,
  endpoint: 'https://webhook.example.com/notifications',
  authToken: 'your-auth-token',
  events: ['taskCompleted', 'taskFailed']
});
```

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleSetPushConfig](../interfaces/Server.RequestHandler.md#handlesetpushconfig)

___

### handleStreamMessage

▸ **handleStreamMessage**(`parts`, `agentId`): `AsyncGenerator`\<\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  }, `void`, `unknown`\>

Handles streaming a message to an agent

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parts` | (\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  })[] | Message parts to send |
| `agentId` | `string` | ID of the target agent |

#### Returns

`AsyncGenerator`\<\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  }, `void`, `unknown`\>

AsyncGenerator yielding message parts as they are processed

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleStreamMessage](../interfaces/Server.RequestHandler.md#handlestreammessage)

#### Overrides

DefaultJsonRpcRequestHandler.handleStreamMessage

___

### handleTaskResubscription

▸ **handleTaskResubscription**(`taskId`): `AsyncGenerator`\<\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  }, `void`, `unknown`\>

Resubscribes to a task's message stream

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskId` | `string` | ID of the task |

#### Returns

`AsyncGenerator`\<\{ `content`: `string` ; `format`: ``"plain"`` \| ``"markdown"`` ; `type`: ``"text"``  } \| \{ `content`: `string` \| `Uint8Array`\<`ArrayBuffer`\> ; `mimeType`: `string` ; `name`: `string` ; `size?`: `number` ; `type`: ``"file"``  } \| \{ `content`: `Record`\<`string`, `any`\> ; `schema?`: `string` ; `type`: ``"data"``  } \| \{ `content`: `string` ; `format`: ``"plain"`` ; `type`: ``"heartbeat"``  }, `void`, `unknown`\>

AsyncGenerator yielding message parts for the task

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[handleTaskResubscription](../interfaces/Server.RequestHandler.md#handletaskresubscription)

#### Overrides

DefaultJsonRpcRequestHandler.handleTaskResubscription

___

### normalizeError

▸ **normalizeError**(`err`): [`A2AError`](Core.A2AError.md)

Normalizes errors to A2AError format

Converts various error types to the standardized A2AError format used
throughout the A2A protocol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `unknown` | Error to normalize |

#### Returns

[`A2AError`](Core.A2AError.md)

Normalized A2AError

**`Example`**

```typescript
try {
  // Some operation that might fail
  throw new Error('Something went wrong');
} catch (error) {
  // Normalize the error to A2AError format
  const normalizedError = requestHandler.normalizeError(error);
  console.error('Normalized error:', normalizedError);
  console.error('Error code:', normalizedError.code);
}
```

#### Implementation of

[RequestHandler](../interfaces/Server.RequestHandler.md).[normalizeError](../interfaces/Server.RequestHandler.md#normalizeerror)

#### Overrides

DefaultJsonRpcRequestHandler.normalizeError

___

### use

▸ **use**(`middleware`): `void`

Adds middleware to the request handler

This method adds a middleware function to the request handler's middleware
stack. Middleware functions are executed in the order they are added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `middleware` | `Middleware` | Middleware function to add |

#### Returns

`void`

**`Example`**

```typescript
// Add error handling middleware
jsonRpcHandler.use(jsonRpcHandler.handleErrors());

// Add custom logging middleware
jsonRpcHandler.use(async (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  await next();
});
```

#### Inherited from

DefaultJsonRpcRequestHandler.use

___

### validateRequest

▸ **validateRequest**(`schema`): `Middleware`

Creates middleware for validating request body against a schema

This method returns a middleware function that validates the request body
against a Zod schema. If validation fails, it responds with a 400 Bad Request
and a JSON-RPC error response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | [`ZodType`](Core.z.ZodType.md)\<`any`, [`ZodTypeDef`](../interfaces/Core.z.ZodTypeDef.md), `any`\> | Zod schema to validate against |

#### Returns

`Middleware`

Middleware function that validates requests

**`Example`**

```typescript
// Create a schema for validating sendMessage requests
const sendMessageSchema = z.object({
  jsonrpc: z.literal('2.0'),
  method: z.literal('sendMessage'),
  params: z.object({
    parts: z.array(z.object({
      type: z.string(),
      content: z.string()
    })),
    agentId: z.string()
  }),
  id: z.string().optional()
});

// Add validation middleware
jsonRpcHandler.use(jsonRpcHandler.validateRequest(sendMessageSchema));
```

#### Inherited from

DefaultJsonRpcRequestHandler.validateRequest
