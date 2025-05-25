[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Server](../modules/Server.md) / DefaultAgentExecutor

# Class: DefaultAgentExecutor

[Server](../modules/Server.md).DefaultAgentExecutor

Default implementation of the AgentExecutor interface

This class provides a basic implementation of the AgentExecutor interface
that manages task lifecycle, publishes events, and handles errors. It uses
a TaskManager for task persistence and a TaskEventManager for event publishing.

**`Example`**

```typescript
// Create dependencies
const taskStore = new InMemoryTaskStore();
const taskManager = new TaskManager(taskStore);
const taskEventManager = new TaskEventManager();

// Create the executor
const executor = new DefaultAgentExecutor(taskManager, taskEventManager);

// Execute a task
await executor.execute(
  createRequestContext(task, 'agent-123'),
  new EventQueue()
);
```

## Implements

- [`AgentExecutor`](../interfaces/Server.AgentExecutor.md)

## Table of contents

### Constructors

- [constructor](Server.DefaultAgentExecutor.md#constructor)

### Methods

- [cancel](Server.DefaultAgentExecutor.md#cancel)
- [execute](Server.DefaultAgentExecutor.md#execute)

## Constructors

### constructor

• **new DefaultAgentExecutor**(`taskManager`, `taskEventManager`): [`DefaultAgentExecutor`](Server.DefaultAgentExecutor.md)

Creates a new DefaultAgentExecutor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskManager` | [`TaskManager`](Server.TaskManager.md) | The task manager for task persistence |
| `taskEventManager` | `TaskEventManager` | The task event manager for event publishing |

#### Returns

[`DefaultAgentExecutor`](Server.DefaultAgentExecutor.md)

## Methods

### cancel

▸ **cancel**(`context`, `eventQueue`): `Promise`\<`void`\>

Cancel an ongoing task execution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `RequestContext` | Request context including task details |
| `eventQueue` | `EventQueue` | Event queue for publishing cancellation events |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[AgentExecutor](../interfaces/Server.AgentExecutor.md).[cancel](../interfaces/Server.AgentExecutor.md#cancel)

___

### execute

▸ **execute**(`context`, `eventQueue`): `Promise`\<`void`\>

Executes a task on behalf of an agent

This method handles the execution of a task, including updating its status,
publishing events, and handling errors. It transitions the task from its
current state to 'working' and then to 'completed' if successful.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `RequestContext` | The request context containing task and agent information |
| `eventQueue` | `EventQueue` | The event queue for publishing events |

#### Returns

`Promise`\<`void`\>

Promise that resolves when execution is complete

**`Throws`**

Various task-related errors if execution fails

#### Implementation of

[AgentExecutor](../interfaces/Server.AgentExecutor.md).[execute](../interfaces/Server.AgentExecutor.md#execute)
