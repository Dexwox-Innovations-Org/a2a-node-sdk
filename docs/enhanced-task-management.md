# Enhanced Task Management System

## Overview

The A2A Node SDK provides a comprehensive task management system that has been enhanced to achieve feature parity with Google's Python SDK. This document covers the enhanced task state management capabilities, new convenience methods, and improved lifecycle management.

## What's New in Enhanced Task Management

### Enhanced Task States

The task state system has been expanded from 6 basic states to 9 comprehensive states:

```typescript
type TaskState = 
  | 'submitted'      // Task has been submitted but processing hasn't started
  | 'working'        // Task is currently being processed
  | 'input_required' // Task requires additional input to continue
  | 'completed'      // Task has been successfully completed
  | 'failed'         // Task has failed to complete
  | 'canceled'       // Task was canceled before completion
  | 'rejected'       // Task was rejected by the agent (NEW)
  | 'auth_required'  // Task requires authentication before proceeding (NEW)
  | 'unknown'        // Default/fallback state for unrecognized states (NEW)
```

### Enhanced TaskStatus Interface

Tasks now use a comprehensive status structure instead of simple strings:

```typescript
interface TaskStatus {
  state: TaskState;
  timestamp: string;
  message?: Message;
  metadata?: Record<string, unknown>;
}
```

### State Transition Tracking

All task state changes are now tracked with comprehensive transition history:

```typescript
interface TaskTransition {
  from: TaskState;
  to: TaskState;
  timestamp: string;
  reason?: string;
  triggeredBy?: 'system' | 'agent' | 'user';
}
```

## State Machine and Transition Rules

### Valid State Transitions

The enhanced state machine enforces strict transition rules:

```typescript
const VALID_TRANSITIONS: Record<TaskState, TaskState[]> = {
  submitted: ['working', 'rejected', 'canceled', 'auth_required'],
  working: ['input_required', 'completed', 'failed', 'canceled', 'auth_required'],
  input_required: ['working', 'completed', 'failed', 'canceled'],
  completed: [], // Terminal state
  failed: [], // Terminal state
  canceled: [], // Terminal state
  rejected: [], // Terminal state
  auth_required: ['working', 'rejected', 'canceled'],
  unknown: ['submitted', 'working', 'input_required', 'completed', 'failed', 'canceled', 'rejected', 'auth_required'] // Recovery mechanism
};
```

### Transition Validation

All state transitions are validated using the `validateStateTransition()` function:

```typescript
import { validateStateTransition } from '@dexwox-labs/a2a-core';

try {
  validateStateTransition('submitted', 'working', 'agent');
  console.log('Transition is valid');
} catch (error) {
  console.error('Invalid transition:', error.message);
}
```

### Permission-Based Transitions

Different actors have different permissions for state transitions:

- **System**: Can perform any valid transition
- **User**: Can only cancel tasks or provide input to continue from `input_required`
- **Agent**: Cannot directly set `auth_required` or `rejected` states

## Enhanced Task Manager API

### Python SDK API Parity Methods

The enhanced TaskManager provides convenience methods that match the Python SDK API:

#### reject()
```typescript
// Reject a task with optional reason
await taskManager.reject('task-123', 'Invalid input format');
await taskManager.reject('task-456', 'Unsupported operation', 'system');
```

#### requireAuth()
```typescript
// Mark a task as requiring authentication
await taskManager.requireAuth('task-123', 'OAuth2 token required');
await taskManager.requireAuth('task-456', 'Multi-factor authentication needed');
```

#### complete()
```typescript
// Complete a task with optional result data
await taskManager.complete('task-123', { output: 'Processing complete', data: {...} });
await taskManager.complete('task-456'); // Complete without result data
```

#### fail()
```typescript
// Fail a task with error information
await taskManager.fail('task-123', 'Processing failed due to invalid input');

// Fail with Error object
try {
  // Some operation that might fail
} catch (error) {
  await taskManager.fail('task-456', error);
}
```

### Enhanced Query Methods

#### Get Tasks by State
```typescript
// Get all working tasks
const workingTasks = await taskManager.getTasksByState('working');

// Get all rejected tasks
const rejectedTasks = await taskManager.getTasksByState('rejected');
```

#### Get Tasks by Multiple States
```typescript
// Get all terminal state tasks
const terminalTasks = await taskManager.getTasksByStates(['completed', 'failed', 'canceled', 'rejected']);

// Get all tasks requiring attention
const attentionTasks = await taskManager.getTasksByStates(['input_required', 'auth_required']);
```

#### Get Completed and Failed Tasks
```typescript
const completedTasks = await taskManager.getCompletedTasks();
const failedTasks = await taskManager.getFailedTasks();
```

### Lifecycle Management Methods

#### Transition History
```typescript
// Get complete transition history for a task
const history = await taskManager.getTransitionHistory('task-123');
console.log(`Task has undergone ${history.length} transitions`);

history.forEach(transition => {
  console.log(`${transition.timestamp}: ${transition.from} → ${transition.to} (${transition.triggeredBy})`);
});
```

#### Transition Validation
```typescript
// Check if a task can transition to a specific state
const canComplete = await taskManager.canTransitionTo('task-123', 'completed', 'agent');
if (canComplete) {
  await taskManager.complete('task-123');
}
```

#### Task Statistics
```typescript
// Get comprehensive task statistics
const stats = await taskManager.getTaskStatistics();
console.log(`Active: ${stats.active}, Completed: ${stats.completed}, Failed: ${stats.failed}`);
console.log('By state:', stats.byState);
```

## Enhanced Task Store Features

### Concurrency Control

The enhanced InMemoryTaskStore provides thread-safe operations with async locking:

```typescript
// Create task store with concurrency control
const taskStore = new InMemoryTaskStore({
  lockTimeout: 5000,
  maxConcurrentBatch: 10,
  enablePerformanceMonitoring: true
});
```

### Batch Operations

#### Batch Create Tasks
```typescript
const tasks = await taskStore.batchCreateTasks([
  { name: 'Task 1', agentId: 'agent-1', parts: [], expectedParts: 0 },
  { name: 'Task 2', agentId: 'agent-2', parts: [], expectedParts: 0 }
]);
```

#### Batch Update Tasks
```typescript
await taskStore.batchUpdateTasks([
  { id: 'task-1', updates: { name: 'Updated Task 1' } },
  { id: 'task-2', updates: { metadata: { priority: 'high' } } }
]);
```

#### Batch State Transitions
```typescript
await taskStore.batchTransitionTasks([
  { taskId: 'task-1', newState: 'working', reason: 'Started processing' },
  { taskId: 'task-2', newState: 'completed', reason: 'Finished successfully' }
]);
```

### Advanced Querying

#### Query by Criteria
```typescript
const tasks = await taskStore.getTasksByCriteria({
  states: ['working', 'input_required'],
  agentId: 'agent-1',
  createdAfter: '2023-01-01T00:00:00Z',
  hasTransitions: true,
  metadata: { priority: 'high' }
});
```

#### Search Tasks
```typescript
const searchResults = await taskStore.searchTasks('image processing', ['name', 'description']);
```

### Performance Monitoring

```typescript
// Get performance metrics
const metrics = taskStore.getPerformanceMetrics();
console.log('Batch operations:', metrics.batchOperations);
console.log('Average batch size:', metrics.averageBatchSize);
console.log('Lock acquisitions:', metrics.lockAcquisitions);

// Get store statistics
const stats = taskStore.getStoreStatistics();
console.log('Total tasks:', stats.totalTasks);
console.log('State distribution:', stats.stateDistribution);
console.log('Locked tasks:', stats.lockedTasks);
```

## Error Handling

### Task-Specific Errors

The system provides specific error types for task operations:

```typescript
import { TaskNotFoundError, InvalidTaskStateError } from '@dexwox-labs/a2a-core';

try {
  await taskManager.getTask('non-existent-task');
} catch (error) {
  if (error instanceof TaskNotFoundError) {
    console.error('Task not found');
  }
}

try {
  await taskManager.updateTaskStatus('task-123', 'completed'); // Invalid transition
} catch (error) {
  if (error instanceof InvalidTaskStateError) {
    console.error('Invalid state transition');
  }
}
```

### State Transition Errors

```typescript
import { A2AError } from '@dexwox-labs/a2a-core';

try {
  await taskManager.updateTaskStatus('completed-task', 'working');
} catch (error) {
  if (error instanceof A2AError && error.code === -32070) {
    console.error('Invalid transition from terminal state');
  }
}
```

## Integration Examples

### Basic Task Lifecycle
```typescript
import { TaskManager, InMemoryTaskStore } from '@dexwox-labs/a2a-server';

// Create task manager
const taskStore = new InMemoryTaskStore();
const taskManager = new TaskManager(taskStore);

// Create a new task
const task = await taskManager.createTask({
  name: 'Process Image',
  agentId: 'image-processor',
  parts: [{
    type: 'file',
    content: 'base64-encoded-image-data',
    mimeType: 'image/jpeg',
    name: 'image.jpg'
  }],
  expectedParts: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

// Start processing
await taskManager.updateTaskStatus(task.id, 'working');

// Complete with result
await taskManager.complete(task.id, { 
  processedImage: 'base64-encoded-result',
  metadata: { format: 'png', size: '1024x768' }
});
```

### Error Handling Example
```typescript
try {
  // Attempt to process a task
  await taskManager.updateTaskStatus(task.id, 'working');
  
  // Simulate processing that might fail
  const result = await processTask(task);
  await taskManager.complete(task.id, result);
  
} catch (error) {
  // Handle different types of failures
  if (error.code === 'INVALID_INPUT') {
    await taskManager.reject(task.id, 'Invalid input format provided');
  } else if (error.code === 'AUTH_REQUIRED') {
    await taskManager.requireAuth(task.id, 'Additional authentication needed');
  } else {
    await taskManager.fail(task.id, error.message);
  }
}
```

### Batch Processing Example
```typescript
// Process multiple tasks efficiently
const pendingTasks = await taskManager.getTasksByState('submitted');

// Batch transition to working state
await taskStore.batchTransitionTasks(
  pendingTasks.map(task => ({
    taskId: task.id,
    newState: 'working',
    reason: 'Batch processing started',
    triggeredBy: 'system'
  }))
);

// Process tasks and batch complete
const results = await Promise.allSettled(
  pendingTasks.map(task => processTask(task))
);

const completions = results.map((result, index) => ({
  taskId: pendingTasks[index].id,
  newState: result.status === 'fulfilled' ? 'completed' : 'failed',
  reason: result.status === 'fulfilled' ? 'Processing successful' : result.reason
}));

await taskStore.batchTransitionTasks(completions);
```

## Performance Considerations

### Efficient State Querying

The enhanced task store uses state indexing for efficient queries:

```typescript
// Efficient: Uses state index
const activeTasks = await taskManager.listActiveTasks();

// Efficient: Uses state index for multiple states
const terminalTasks = await taskManager.getTasksByStates(['completed', 'failed', 'canceled']);
```

### Batch Operations for Scale

Use batch operations when working with multiple tasks:

```typescript
// Efficient: Single batch operation
await taskStore.batchUpdateTasks(updates);

// Inefficient: Multiple individual operations
for (const update of updates) {
  await taskStore.updateTask(update.id, update.updates);
}
```

### Lock Management

The system provides fine-grained locking for concurrent access:

```typescript
// Acquire explicit lock for complex operations
const releaseLock = await taskStore.acquireTaskLock('task-123');
try {
  // Perform complex operations
  await complexTaskOperation(task);
} finally {
  await releaseLock();
}
```

## Best Practices

### 1. Use Convenience Methods
```typescript
// Preferred: Use convenience methods
await taskManager.complete(taskId, result);
await taskManager.fail(taskId, error);
await taskManager.reject(taskId, reason);

// Avoid: Direct status updates for terminal states
await taskManager.updateTaskStatus(taskId, 'completed');
```

### 2. Handle State Transitions Gracefully
```typescript
// Check if transition is valid before attempting
const canTransition = await taskManager.canTransitionTo(taskId, 'completed');
if (canTransition) {
  await taskManager.complete(taskId);
} else {
  console.log('Cannot complete task in current state');
}
```

### 3. Use Batch Operations for Performance
```typescript
// Process multiple tasks efficiently
const batchSize = 10;
const taskBatches = chunk(tasks, batchSize);

for (const batch of taskBatches) {
  await taskStore.batchTransitionTasks(
    batch.map(task => ({ taskId: task.id, newState: 'working' }))
  );
}
```

### 4. Monitor Performance
```typescript
// Enable performance monitoring
const taskStore = new InMemoryTaskStore({
  enablePerformanceMonitoring: true
});

// Regularly check metrics
setInterval(() => {
  const metrics = taskStore.getPerformanceMetrics();
  console.log('Performance metrics:', metrics);
}, 60000);
```

## Migration from Basic Task Management

### Updating Task Status Access

**Before (Basic):**
```typescript
console.log(task.status); // string
```

**After (Enhanced):**
```typescript
console.log(task.status.state); // TaskState
console.log(task.status.timestamp); // ISO timestamp
console.log(task.status.metadata); // Additional metadata
```

### Using New Convenience Methods

**Before (Basic):**
```typescript
await taskManager.updateTaskStatus(taskId, 'completed');
await taskManager.updateTaskStatus(taskId, 'failed');
```

**After (Enhanced):**
```typescript
await taskManager.complete(taskId, result);
await taskManager.fail(taskId, error);
await taskManager.reject(taskId, reason);
await taskManager.requireAuth(taskId, authInfo);
```

### Accessing Transition History

**Before (Basic):**
```typescript
// No transition history available
```

**After (Enhanced):**
```typescript
const history = await taskManager.getTransitionHistory(taskId);
history.forEach(transition => {
  console.log(`${transition.from} → ${transition.to} at ${transition.timestamp}`);
});
```

## Troubleshooting

### Common Issues

#### Invalid State Transitions
```typescript
// Error: Invalid transition from completed to working
try {
  await taskManager.updateTaskStatus('completed-task', 'working');
} catch (error) {
  console.error('Cannot restart completed task');
  // Solution: Create a new task instead
}
```

#### Permission Errors
```typescript
// Error: Agent cannot transition task to auth_required state
try {
  await taskManager.requireAuth(taskId, 'OAuth required', 'agent');
} catch (error) {
  console.error('Only system can require authentication');
  // Solution: Use 'system' as triggeredBy
}
```

#### Lock Timeouts
```typescript
// Error: Lock timeout after 5000ms
try {
  await taskStore.acquireTaskLock(taskId, 1000); // Short timeout
} catch (error) {
  console.error('Could not acquire lock');
  // Solution: Increase timeout or retry
}
```

### Debugging Tips

1. **Enable Debug Logging**: Set log level to debug to see detailed state transition logs
2. **Check Transition History**: Use `getTransitionHistory()` to understand task progression
3. **Validate States**: Use `canTransitionTo()` to check valid transitions before attempting
4. **Monitor Performance**: Enable performance monitoring to identify bottlenecks

## Future Enhancements

The enhanced task management system provides a solid foundation for future improvements:

1. **Persistent Storage**: Database backends for production deployments
2. **Distributed Locking**: Redis-based locking for multi-instance deployments
3. **Advanced Querying**: Full-text search and complex filtering capabilities
4. **Metrics Integration**: Prometheus metrics for monitoring and alerting
5. **Event Streaming**: Real-time task state change notifications

## Conclusion

The enhanced task management system brings the A2A Node SDK to near-complete feature parity with the Python SDK, providing:

- ✅ 9 comprehensive task states (vs 6 basic states)
- ✅ Enhanced TaskStatus interface with metadata
- ✅ Complete state transition validation and history
- ✅ Python SDK API parity with convenience methods
- ✅ Concurrency control and batch operations
- ✅ Performance monitoring and optimization
- ✅ Comprehensive error handling and debugging

This enhanced system provides enterprise-grade task management capabilities while maintaining the familiar Node.js/TypeScript developer experience.