# Migration Guide: Basic to Enhanced Task Management

## Overview

This guide helps you migrate from the basic task management system to the enhanced task management system in the A2A Node SDK. The enhanced system provides Python SDK API parity, improved state management, and enterprise-grade features.

## What's Changed

### Enhanced Task States

**Before (Basic):** 6 basic states
```typescript
type TaskState = 'submitted' | 'working' | 'input_required' | 'completed' | 'failed' | 'canceled'
```

**After (Enhanced):** 9 comprehensive states
```typescript
type TaskState = 
  | 'submitted' | 'working' | 'input_required' | 'completed' | 'failed' | 'canceled'
  | 'rejected'       // NEW: Task rejected by agent
  | 'auth_required'  // NEW: Authentication required
  | 'unknown'        // NEW: Fallback/recovery state
```

### Enhanced Task Status Structure

**Before (Basic):** Simple string status
```typescript
interface Task {
  status: string; // Simple string like 'working', 'completed'
}
```

**After (Enhanced):** Rich status object
```typescript
interface Task {
  status: TaskStatus; // Enhanced status with metadata
}

interface TaskStatus {
  state: TaskState;
  timestamp: string;
  message?: Message;
  metadata?: Record<string, unknown>;
}
```

### New Convenience Methods

**Before (Basic):** Manual status updates
```typescript
await taskManager.updateTaskStatus(taskId, 'completed');
await taskManager.updateTaskStatus(taskId, 'failed');
```

**After (Enhanced):** Python SDK API parity methods
```typescript
await taskManager.complete(taskId, result);
await taskManager.fail(taskId, error);
await taskManager.reject(taskId, reason);
await taskManager.requireAuth(taskId, authInfo);
```

## Step-by-Step Migration

### Step 1: Update Task Status Access

**Before:**
```typescript
// Accessing task status as string
console.log(task.status); // 'working'

if (task.status === 'completed') {
  // Handle completed task
}
```

**After:**
```typescript
// Accessing enhanced task status
console.log(task.status.state); // 'working'
console.log(task.status.timestamp); // '2023-05-26T12:34:56.789Z'
console.log(task.status.metadata); // { triggeredBy: 'agent', reason: 'Processing started' }

if (task.status.state === 'completed') {
  // Handle completed task
}
```

### Step 2: Replace Manual Status Updates

**Before:**
```typescript
// Manual status updates
try {
  await taskManager.updateTaskStatus(taskId, 'working');
  // ... processing logic
  await taskManager.updateTaskStatus(taskId, 'completed');
} catch (error) {
  await taskManager.updateTaskStatus(taskId, 'failed');
}
```

**After:**
```typescript
// Use convenience methods
try {
  await taskManager.updateTaskStatus(taskId, 'working');
  // ... processing logic
  await taskManager.complete(taskId, { result: 'success' });
} catch (error) {
  await taskManager.fail(taskId, error);
}
```

### Step 3: Add New State Handling

**Before:**
```typescript
// Limited state handling
switch (task.status) {
  case 'completed':
    handleCompleted(task);
    break;
  case 'failed':
    handleFailed(task);
    break;
  default:
    handleOther(task);
}
```

**After:**
```typescript
// Enhanced state handling with new states
switch (task.status.state) {
  case 'completed':
    handleCompleted(task);
    break;
  case 'failed':
    handleFailed(task);
    break;
  case 'rejected':
    handleRejected(task); // NEW
    break;
  case 'auth_required':
    handleAuthRequired(task); // NEW
    break;
  case 'unknown':
    handleUnknown(task); // NEW
    break;
  default:
    handleOther(task);
}
```

### Step 4: Update Error Handling

**Before:**
```typescript
// Basic error handling
try {
  await taskManager.updateTaskStatus(taskId, 'completed');
} catch (error) {
  console.error('Failed to update task:', error);
}
```

**After:**
```typescript
// Enhanced error handling with specific error types
import { TaskNotFoundError, InvalidTaskStateError, A2AError } from '@dexwox-labs/a2a-core';

try {
  await taskManager.complete(taskId);
} catch (error) {
  if (error instanceof TaskNotFoundError) {
    console.error('Task not found:', error.message);
  } else if (error instanceof A2AError && error.code === -32070) {
    console.error('Invalid state transition:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### Step 5: Leverage New Query Methods

**Before:**
```typescript
// Manual filtering for task queries
const allTasks = await taskStore.getAllTasks();
const completedTasks = allTasks.filter(task => task.status === 'completed');
const failedTasks = allTasks.filter(task => task.status === 'failed');
```

**After:**
```typescript
// Use enhanced query methods
const completedTasks = await taskManager.getCompletedTasks();
const failedTasks = await taskManager.getFailedTasks();
const workingTasks = await taskManager.getTasksByState('working');
const activeTasks = await taskManager.listActiveTasks();
```

### Step 6: Add Transition History Tracking

**Before:**
```typescript
// No transition history available
console.log('Current status:', task.status);
```

**After:**
```typescript
// Access complete transition history
const history = await taskManager.getTransitionHistory(taskId);
console.log('Current status:', task.status.state);
console.log('Transition history:');
history.forEach(transition => {
  console.log(`${transition.timestamp}: ${transition.from} → ${transition.to} (${transition.triggeredBy})`);
});
```

### Step 7: Implement Batch Operations

**Before:**
```typescript
// Individual operations (inefficient)
for (const taskId of taskIds) {
  await taskManager.updateTaskStatus(taskId, 'working');
}
```

**After:**
```typescript
// Batch operations (efficient)
await taskStore.batchTransitionTasks(
  taskIds.map(taskId => ({
    taskId,
    newState: 'working',
    reason: 'Batch processing started',
    triggeredBy: 'system'
  }))
);
```

## Configuration Updates

### Task Store Configuration

**Before:**
```typescript
// Basic task store
const taskStore = new InMemoryTaskStore();
```

**After:**
```typescript
// Enhanced task store with configuration
const taskStore = new InMemoryTaskStore({
  lockTimeout: 5000,
  maxConcurrentBatch: 10,
  enablePerformanceMonitoring: true
});
```

### Task Manager Configuration

**Before:**
```typescript
// Basic task manager
const taskManager = new TaskManager(taskStore);
```

**After:**
```typescript
// Enhanced task manager with push notifications
const pushService = new PushNotificationService(config);
const taskManager = new TaskManager(taskStore, pushService);
```

## Common Migration Patterns

### Pattern 1: Task Completion with Results

**Before:**
```typescript
async function completeTask(taskId: string, result: any) {
  // Update task with result data
  await taskManager.updateTask(taskId, { output: result });
  // Update status
  await taskManager.updateTaskStatus(taskId, 'completed');
}
```

**After:**
```typescript
async function completeTask(taskId: string, result: any) {
  // Single operation with result
  await taskManager.complete(taskId, result);
}
```

### Pattern 2: Error Handling with Context

**Before:**
```typescript
async function handleTaskError(taskId: string, error: Error) {
  // Update task with error
  await taskManager.updateTask(taskId, { 
    error: { message: error.message } 
  });
  // Update status
  await taskManager.updateTaskStatus(taskId, 'failed');
}
```

**After:**
```typescript
async function handleTaskError(taskId: string, error: Error) {
  // Single operation with comprehensive error handling
  await taskManager.fail(taskId, error);
}
```

### Pattern 3: Conditional Task Processing

**Before:**
```typescript
async function processTask(taskId: string) {
  const task = await taskManager.getTask(taskId);
  
  if (task.status === 'submitted') {
    await taskManager.updateTaskStatus(taskId, 'working');
    // Process task
  }
}
```

**After:**
```typescript
async function processTask(taskId: string) {
  const task = await taskManager.getTask(taskId);
  
  // Check if transition is valid
  const canStart = await taskManager.canTransitionTo(taskId, 'working');
  if (canStart) {
    await taskManager.updateTaskStatus(taskId, 'working');
    // Process task
  }
}
```

### Pattern 4: Task Analytics

**Before:**
```typescript
async function getTaskAnalytics() {
  const allTasks = await taskStore.getAllTasks();
  const completed = allTasks.filter(t => t.status === 'completed').length;
  const failed = allTasks.filter(t => t.status === 'failed').length;
  
  return { total: allTasks.length, completed, failed };
}
```

**After:**
```typescript
async function getTaskAnalytics() {
  // Use built-in statistics
  return await taskManager.getTaskStatistics();
}
```

## Breaking Changes

### 1. Task Status Structure

**Impact:** Direct access to `task.status` as string will break

**Migration:**
```typescript
// Before
if (task.status === 'completed') { }

// After
if (task.status.state === 'completed') { }
```

### 2. Error Types

**Impact:** Generic errors are now specific error types

**Migration:**
```typescript
// Before
catch (error) {
  console.error('Error:', error.message);
}

// After
catch (error) {
  if (error instanceof TaskNotFoundError) {
    console.error('Task not found:', error.message);
  } else if (error instanceof A2AError) {
    console.error('A2A Error:', error.code, error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### 3. State Validation

**Impact:** Invalid state transitions now throw errors

**Migration:**
```typescript
// Before (no validation)
await taskManager.updateTaskStatus(taskId, 'completed');

// After (with validation)
try {
  await taskManager.updateTaskStatus(taskId, 'completed');
} catch (error) {
  if (error instanceof A2AError && error.code === -32070) {
    console.error('Invalid transition');
  }
}
```

## Testing Updates

### Unit Test Updates

**Before:**
```typescript
test('should complete task', async () => {
  await taskManager.updateTaskStatus(taskId, 'completed');
  const task = await taskManager.getTask(taskId);
  expect(task.status).toBe('completed');
});
```

**After:**
```typescript
test('should complete task', async () => {
  await taskManager.complete(taskId, { result: 'success' });
  const task = await taskManager.getTask(taskId);
  expect(task.status.state).toBe('completed');
  expect(task.output).toEqual({ result: 'success' });
});
```

### Integration Test Updates

**Before:**
```typescript
test('should handle task lifecycle', async () => {
  const task = await taskManager.createTask(taskData);
  await taskManager.updateTaskStatus(task.id, 'working');
  await taskManager.updateTaskStatus(task.id, 'completed');
  
  const finalTask = await taskManager.getTask(task.id);
  expect(finalTask.status).toBe('completed');
});
```

**After:**
```typescript
test('should handle task lifecycle', async () => {
  const task = await taskManager.createTask(taskData);
  await taskManager.updateTaskStatus(task.id, 'working');
  await taskManager.complete(task.id, { result: 'success' });
  
  const finalTask = await taskManager.getTask(task.id);
  expect(finalTask.status.state).toBe('completed');
  expect(finalTask.output).toEqual({ result: 'success' });
  
  // Test transition history
  const history = await taskManager.getTransitionHistory(task.id);
  expect(history).toHaveLength(2);
  expect(history[0].from).toBe('submitted');
  expect(history[0].to).toBe('working');
  expect(history[1].from).toBe('working');
  expect(history[1].to).toBe('completed');
});
```

## Performance Considerations

### Batch Operations

**Before:** Individual operations
```typescript
// Inefficient: Multiple individual calls
for (const taskId of taskIds) {
  await taskManager.updateTaskStatus(taskId, 'working');
}
```

**After:** Batch operations
```typescript
// Efficient: Single batch call
await taskStore.batchTransitionTasks(
  taskIds.map(taskId => ({
    taskId,
    newState: 'working',
    triggeredBy: 'system'
  }))
);
```

### State Indexing

**Before:** Manual filtering
```typescript
// Inefficient: Filter all tasks
const allTasks = await taskStore.getAllTasks();
const activeTasks = allTasks.filter(task => 
  ['submitted', 'working', 'input_required'].includes(task.status)
);
```

**After:** Indexed queries
```typescript
// Efficient: Use state index
const activeTasks = await taskManager.listActiveTasks();
```

### Performance Monitoring

**After:** Enable monitoring
```typescript
const taskStore = new InMemoryTaskStore({
  enablePerformanceMonitoring: true
});

// Monitor performance
const metrics = taskStore.getPerformanceMetrics();
console.log('Batch operations:', metrics.batchOperations);
console.log('Lock acquisitions:', metrics.lockAcquisitions);
```

## Rollback Strategy

If you need to rollback to the basic system:

### 1. Revert Status Access

```typescript
// Create compatibility layer
function getTaskStatus(task: Task): string {
  return typeof task.status === 'string' ? task.status : task.status.state;
}

// Use in code
if (getTaskStatus(task) === 'completed') {
  // Handle completed task
}
```

### 2. Disable Enhanced Features

```typescript
// Use basic task store without enhancements
const taskStore = new InMemoryTaskStore({
  enablePerformanceMonitoring: false
});

// Use basic task manager without push service
const taskManager = new TaskManager(taskStore);
```

### 3. Fallback Error Handling

```typescript
// Generic error handling for compatibility
try {
  await taskManager.updateTaskStatus(taskId, 'completed');
} catch (error) {
  // Handle all errors generically
  console.error('Task operation failed:', error.message);
}
```

## Validation Checklist

Before completing migration, verify:

- [ ] All `task.status` references updated to `task.status.state`
- [ ] Error handling updated for new error types
- [ ] State transition validation added where needed
- [ ] Convenience methods used for terminal states
- [ ] Batch operations implemented for performance
- [ ] Tests updated for new status structure
- [ ] Performance monitoring enabled if desired
- [ ] New states (`rejected`, `auth_required`, `unknown`) handled
- [ ] Transition history utilized where beneficial
- [ ] Query methods updated to use enhanced APIs

## Support and Resources

- **API Reference:** [`docs/api-reference/task-management.md`](./api-reference/task-management.md)
- **Examples:** [`docs/examples/task-lifecycle-examples.md`](./examples/task-lifecycle-examples.md)
- **Enhanced Documentation:** [`docs/enhanced-task-management.md`](./enhanced-task-management.md)
- **Python SDK Comparison:** [`docs/python-sdk-parity.md`](./python-sdk-parity.md)

## Conclusion

The enhanced task management system provides significant improvements in functionality, performance, and developer experience while maintaining backward compatibility where possible. The migration process is straightforward and the benefits include:

- ✅ Python SDK API parity
- ✅ Enhanced state management with 9 states
- ✅ Comprehensive error handling
- ✅ Performance optimizations with batch operations
- ✅ Rich transition history and analytics
- ✅ Enterprise-grade concurrency control
- ✅ Improved debugging and monitoring capabilities

Take advantage of the enhanced features to build more robust and scalable agent-based applications.