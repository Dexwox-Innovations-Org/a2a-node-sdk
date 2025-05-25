[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Server](../modules/Server.md) / AgentExecutor

# Interface: AgentExecutor

[Server](../modules/Server.md).AgentExecutor

Interface for executing agent tasks

This interface defines the contract for executing tasks on behalf of agents.
Implementations are responsible for handling task execution, cancellation,
and lifecycle management.

**`Example`**

```typescript
class CustomAgentExecutor implements AgentExecutor {
  async execute(context: RequestContext, eventQueue: EventQueue): Promise<void> {
    // Custom execution logic
    console.log(`Executing task ${context.task.id}`);
    
    // Publish events
    eventQueue.publish({
      type: 'task.updated',
      payload: { taskId: context.task.id, status: 'working' }
    });
  }
  
  async cancel(context: RequestContext, eventQueue: EventQueue): Promise<void> {
    // Custom cancellation logic
    console.log(`Canceling task ${context.task.id}`);
  }
}
```

## Implemented by

- [`DefaultAgentExecutor`](../classes/Server.DefaultAgentExecutor.md)

## Table of contents

### Methods

- [cancel](Server.AgentExecutor.md#cancel)
- [execute](Server.AgentExecutor.md#execute)

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

___

### execute

▸ **execute**(`context`, `eventQueue`): `Promise`\<`void`\>

Execute a task with the given context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `RequestContext` | Request context including task details |
| `eventQueue` | `EventQueue` | Event queue for publishing task events |

#### Returns

`Promise`\<`void`\>
