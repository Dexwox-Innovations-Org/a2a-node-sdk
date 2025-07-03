# Task Management API Reference

## Overview

This document provides a comprehensive API reference for the enhanced task management system in the A2A Node SDK. The task management system provides full lifecycle management for tasks with state validation, transition tracking, and Python SDK API parity.

## Core Types

### TaskState

```typescript
type TaskState = 
  | 'submitted'      // Task has been submitted but processing hasn't started
  | 'working'        // Task is currently being processed
  | 'input_required' // Task requires additional input to continue
  | 'completed'      // Task has been successfully completed
  | 'failed'         // Task has failed to complete
  | 'canceled'       // Task was canceled before completion
  | 'rejected'       // Task was rejected by the agent
  | 'auth_required'  // Task requires authentication before proceeding
  | 'unknown'        // Default/fallback state for unrecognized states
```

### TaskStatus

```typescript
interface TaskStatus {
  /** Current state of the task */
  state: TaskState;
  /** Optional message associated with the current status */
  message?: Message;
  /** ISO timestamp when this status was set */
  timestamp: string;
  /** Optional additional metadata for the status */
  metadata?: Record<string, unknown>;
}
```

### TaskTransition

```typescript
interface TaskTransition {
  /** The state the task is transitioning from */
  from: TaskState;
  /** The state the task is transitioning to */
  to: TaskState;
  /** ISO timestamp when the transition occurred */
  timestamp: string;
  /** Optional explanation for why the transition occurred */
  reason?: string;
  /** Optional identifier of who/what triggered the transition */
  triggeredBy?: 'system' | 'agent' | 'user';
}
```

### Task

```typescript
interface Task {
  /** Unique identifier for the task */
  id: string;
  /** Human-readable name of the task */
  name: string;
  /** Optional detailed description of the task */
  description?: string;
  /** Current status of the task with enhanced metadata */
  status: TaskStatus;
  /** Optional ID of the agent assigned to this task */
  agentId?: string;
  /** Optional message parts associated with this task */
  parts?: MessagePart[];
  /** Optional count of expected message parts */
  expectedParts?: number;
  /** Optional artifacts produced by this task */
  artifacts?: Artifact[];
  /** Optional history of state transitions */
  transitions?: TaskTransition[];
  /** ISO timestamp when the task was created */
  createdAt: string;
  /** ISO timestamp when the task was last updated */
  updatedAt: string;
  /** Optional error information if the task failed */
  error?: A2AError;
  /** Optional additional metadata */
  metadata?: Record<string, unknown>;
  /** Optional context ID for grouping related tasks */
  contextId?: string;
  /** Optional JSON schema defining the expected input format */
  inputSchema?: Record<string, any>;
  /** Optional JSON schema defining the expected output format */
  outputSchema?: Record<string, any>;
  /** Optional input data for the task */
  input?: Record<string, any>;
  /** Optional output data produced by the task */
  output?: Record<string, any>;
}
```

## TaskManager Class

### Constructor

```typescript
constructor(
  taskStore: TaskStore,
  pushService?: PushNotificationService
)
```

Creates a new TaskManager instance.

**Parameters:**
- `taskStore`: Storage backend for tasks
- `pushService`: Optional service for push notifications

### Core Methods

#### createTask()

```typescript
async createTask(task: Omit<Task, 'id'|'status'>): Promise<Task>
```

Creates a new task with the provided parameters.

**Parameters:**
- `task`: Task parameters (without id and status)

**Returns:** Promise resolving to the created task

**Example:**
```typescript
const task = await taskManager.createTask({
  name: 'ProcessImage',
  agentId: 'image-processor',
  parts: [{
    type: 'file',
    content: 'base64-encoded-image-data',
    mimeType: 'image/jpeg',
    name: 'image.jpg'
  }],
  expectedParts: 2,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});
```

#### getTask()

```typescript
async getTask(taskId: string): Promise<Task>
```

Gets a task by ID.

**Parameters:**
- `taskId`: ID of the task to retrieve

**Returns:** Promise resolving to the task

**Throws:** `TaskNotFoundError` if the task is not found

#### updateTask()

```typescript
async updateTask(taskId: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task>
```

Updates a task with new data.

**Parameters:**
- `taskId`: ID of the task to update
- `updates`: Partial task data to update

**Returns:** Promise resolving to the updated task

**Throws:** `TaskNotFoundError` if the task is not found

#### updateTaskStatus()

```typescript
async updateTaskStatus(
  taskId: string, 
  status: TaskState, 
  reason?: string, 
  triggeredBy: 'system' | 'agent' | 'user' = 'system'
): Promise<Task>
```

Updates a task's status with validation.

**Parameters:**
- `taskId`: ID of the task to update
- `status`: New status for the task
- `reason`: Optional reason for the status change
- `triggeredBy`: Who/what triggered the status change

**Returns:** Promise resolving to the updated task

#### cancelTask()

```typescript
async cancelTask(
  taskId: string, 
  reason?: string, 
  triggeredBy: 'system' | 'agent' | 'user' = 'user'
): Promise<void>
```

Cancels a task.

**Parameters:**
- `taskId`: ID of the task to cancel
- `reason`: Optional reason for cancellation
- `triggeredBy`: Who/what triggered the cancellation

**Throws:** `TaskNotFoundError` if the task is not found, `InvalidTaskStateError` if the task is already in a terminal state

### Python SDK API Parity Methods

#### reject()

```typescript
async reject(
  taskId: string, 
  reason?: string, 
  triggeredBy: 'system' | 'agent' | 'user' = 'system'
): Promise<Task>
```

Rejects a task with an optional reason.

**Parameters:**
- `taskId`: ID of the task to reject
- `reason`: Optional reason for rejection
- `triggeredBy`: Who/what triggered the rejection

**Returns:** Promise resolving to the updated task

#### requireAuth()

```typescript
async requireAuth(
  taskId: string, 
  authInfo?: string, 
  triggeredBy: 'system' | 'agent' | 'user' = 'system'
): Promise<Task>
```

Marks a task as requiring authentication.

**Parameters:**
- `taskId`: ID of the task requiring authentication
- `authInfo`: Optional authentication information or requirements
- `triggeredBy`: Who/what triggered the auth requirement

**Returns:** Promise resolving to the updated task

#### complete()

```typescript
async complete(
  taskId: string, 
  result?: Record<string, any>, 
  triggeredBy: 'system' | 'agent' | 'user' = 'agent'
): Promise<Task>
```

Completes a task with optional result data.

**Parameters:**
- `taskId`: ID of the task to complete
- `result`: Optional result data for the task
- `triggeredBy`: Who/what triggered the completion

**Returns:** Promise resolving to the updated task

#### fail()

```typescript
async fail(
  taskId: string, 
  error: string | Error, 
  triggeredBy: 'system' | 'agent' | 'user' = 'agent'
): Promise<Task>
```

Fails a task with error information.

**Parameters:**
- `taskId`: ID of the task to fail
- `error`: Error information (string message or Error object)
- `triggeredBy`: Who/what triggered the failure

**Returns:** Promise resolving to the updated task

### Query Methods

#### listActiveTasks()

```typescript
async listActiveTasks(): Promise<Task[]>
```

Lists all active tasks (not in terminal states).

**Returns:** Promise resolving to an array of active tasks

#### getCompletedTasks()

```typescript
async getCompletedTasks(): Promise<Task[]>
```

Gets all completed tasks.

**Returns:** Promise resolving to an array of completed tasks

#### getFailedTasks()

```typescript
async getFailedTasks(): Promise<Task[]>
```

Gets all failed tasks.

**Returns:** Promise resolving to an array of failed tasks

#### getTasksByState()

```typescript
async getTasksByState(state: TaskState): Promise<Task[]>
```

Gets tasks by specific state.

**Parameters:**
- `state`: The task state to filter by

**Returns:** Promise resolving to an array of tasks in the specified state

#### getTasksByStates()

```typescript
async getTasksByStates(states: TaskState[]): Promise<Task[]>
```

Gets tasks by multiple states.

**Parameters:**
- `states`: Array of task states to filter by

**Returns:** Promise resolving to an array of tasks in the specified states

### Lifecycle Management Methods

#### getTransitionHistory()

```typescript
async getTransitionHistory(taskId: string): Promise<TaskTransition[]>
```

Gets the transition history for a task.

**Parameters:**
- `taskId`: ID of the task

**Returns:** Promise resolving to an array of task transitions

#### canTransitionTo()

```typescript
async canTransitionTo(
  taskId: string, 
  targetState: TaskState, 
  triggeredBy?: 'system' | 'agent' | 'user'
): Promise<boolean>
```

Checks if a task can transition to a specific state.

**Parameters:**
- `taskId`: ID of the task
- `targetState`: Target state to check
- `triggeredBy`: Who/what would trigger the transition

**Returns:** Promise resolving to true if transition is valid, false otherwise

#### getTaskStatistics()

```typescript
async getTaskStatistics(): Promise<{
  total: number;
  active: number;
  completed: number;
  failed: number;
  canceled: number;
  rejected: number;
  byState: Record<TaskState, number>;
}>
```

Gets summary statistics for all tasks.

**Returns:** Promise resolving to task statistics

### Artifact Management

#### addArtifact()

```typescript
async addArtifact(taskId: string, artifact: Artifact): Promise<void>
```

Adds an artifact to a task.

**Parameters:**
- `taskId`: ID of the task
- `artifact`: Artifact to add

#### getArtifacts()

```typescript
async getArtifacts(taskId: string): Promise<Artifact[]>
```

Gets all artifacts for a task.

**Parameters:**
- `taskId`: ID of the task

**Returns:** Promise resolving to an array of artifacts

#### getArtifact()

```typescript
async getArtifact(taskId: string, artifactId: string): Promise<Artifact | null>
```

Gets a specific artifact for a task.

**Parameters:**
- `taskId`: ID of the task
- `artifactId`: ID of the artifact

**Returns:** Promise resolving to the artifact, or null if not found

## InMemoryTaskStore Class

### Constructor

```typescript
constructor(config: InMemoryTaskStoreConfig = {})
```

Creates a new InMemoryTaskStore with enhanced concurrency control.

**Parameters:**
- `config`: Configuration options for the task store

```typescript
interface InMemoryTaskStoreConfig {
  /** Maximum time to wait for lock acquisition in milliseconds */
  lockTimeout?: number;
  /** Maximum number of concurrent batch operations */
  maxConcurrentBatch?: number;
  /** Enable performance monitoring for batch operations */
  enablePerformanceMonitoring?: boolean;
}
```

### Core TaskStore Methods

#### createTask()

```typescript
async createTask(task: Omit<Task, 'id'>): Promise<Task>
```

Creates a new task with concurrency control.

#### getTask()

```typescript
async getTask(id: string): Promise<Task | null>
```

Gets a task by ID.

#### updateTask()

```typescript
async updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task>
```

Updates a task with new data using concurrency control.

#### updateTaskStatus()

```typescript
async updateTaskStatus(id: string, status: TaskState): Promise<Task>
```

Updates a task's status.

#### cancelTask()

```typescript
async cancelTask(id: string): Promise<void>
```

Cancels a task.

#### getTasksByStatus()

```typescript
async getTasksByStatus(statuses: TaskState[]): Promise<Task[]>
```

Gets tasks by status using efficient indexing.

### Enhanced Methods

#### getTasksByCriteria()

```typescript
async getTasksByCriteria(criteria: {
  states?: TaskState[];
  agentId?: string;
  createdAfter?: string;
  createdBefore?: string;
  hasTransitions?: boolean;
  metadata?: Record<string, any>;
}): Promise<Task[]>
```

Gets tasks by multiple criteria with enhanced filtering.

#### searchTasks()

```typescript
async searchTasks(query: string, fields?: string[]): Promise<Task[]>
```

Searches tasks by content or metadata.

#### getTaskStatistics()

```typescript
async getTaskStatistics(): Promise<{
  total: number;
  byState: Record<TaskState, number>;
  oldestTask?: Task;
  newestTask?: Task;
}>
```

Gets task statistics and counts.

### Batch Operations

#### batchCreateTasks()

```typescript
async batchCreateTasks(tasks: Array<Omit<Task, 'id'>>): Promise<Task[]>
```

Batch create multiple tasks efficiently.

#### batchUpdateTasks()

```typescript
async batchUpdateTasks(updates: Array<{
  id: string;
  updates: Partial<Omit<Task, 'id'>>;
}>): Promise<Task[]>
```

Batch update multiple tasks with transaction-like behavior.

#### batchTransitionTasks()

```typescript
async batchTransitionTasks(transitions: Array<{
  taskId: string;
  newState: TaskState;
  reason?: string;
  triggeredBy?: 'system' | 'agent' | 'user';
}>): Promise<Task[]>
```

Batch transition multiple tasks to new states with validation.

### Concurrency Control

#### acquireTaskLock()

```typescript
async acquireTaskLock(taskId: string, timeout?: number): Promise<() => Promise<void>>
```

Acquires a lock for a specific task to prevent concurrent modifications.

#### isTaskLocked()

```typescript
async isTaskLocked(taskId: string): Promise<boolean>
```

Checks if a task is currently locked.

#### withBatchLock()

```typescript
async withBatchLock<T>(
  operation: () => Promise<T>,
  taskIds: string[]
): Promise<T>
```

Performs a batch operation with automatic locking and rollback on failure.

### Performance Monitoring

#### getPerformanceMetrics()

```typescript
getPerformanceMetrics(): {
  batchOperations: number;
  lockAcquisitions: number;
  lockTimeouts: number;
  averageBatchSize: number;
  totalBatchItems: number;
}
```

Get performance metrics for monitoring.

#### getStoreStatistics()

```typescript
getStoreStatistics(): {
  totalTasks: number;
  totalArtifacts: number;
  stateDistribution: Record<TaskState, number>;
  agentCount: number;
  lockedTasks: number;
  performanceMetrics: object;
}
```

Get current store statistics.

## Utility Functions

### State Validation

#### validateStateTransition()

```typescript
function validateStateTransition(
  current: TaskState, 
  next: TaskState, 
  triggeredBy?: 'system' | 'agent' | 'user'
): void
```

Validates that a task state transition is allowed.

**Throws:** `A2AError` if the transition is invalid

#### getValidNextStates()

```typescript
function getValidNextStates(current: TaskState): TaskState[]
```

Gets the list of valid next states for a given current state.

#### canTransitionTo()

```typescript
function canTransitionTo(current: TaskState, next: TaskState): boolean
```

Checks if a task can transition to a specific state.

### State Queries

#### isTaskInFinalState()

```typescript
function isTaskInFinalState(state: TaskState): boolean
```

Checks if a task is in a final (terminal) state.

#### isTaskActive()

```typescript
function isTaskActive(state: TaskState): boolean
```

Checks if a task is currently active (not in a final state).

#### getTerminalStates()

```typescript
function getTerminalStates(): TaskState[]
```

Gets all terminal (final) states.

#### getActiveStates()

```typescript
function getActiveStates(): TaskState[]
```

Gets all active (non-terminal) states.

### Transition Management

#### createTaskTransition()

```typescript
function createTaskTransition(
  from: TaskState,
  to: TaskState,
  reason?: string,
  triggeredBy?: 'system' | 'agent' | 'user'
): TaskTransition
```

Creates a new task transition record with comprehensive validation.

#### validateTask()

```typescript
function validateTask(task: Task): void
```

Validates that a task has all required properties and a valid state.

**Throws:** `A2AError` if validation fails

## Error Types

### TaskNotFoundError

```typescript
class TaskNotFoundError extends Error {
  constructor(taskId: string)
}
```

Thrown when a task is not found.

### InvalidTaskStateError

```typescript
class InvalidTaskStateError extends Error {
  constructor(message: string)
}
```

Thrown when an invalid task state operation is attempted.

### A2AError

```typescript
class A2AError extends Error {
  code: number;
  data?: Record<string, any>;
  
  constructor(message: string, code: number, data?: Record<string, any>)
}
```

Base error class for A2A protocol errors.

## Error Codes

```typescript
enum TaskErrorCode {
  /** Error code when a task state transition is invalid (-32070) */
  InvalidTransition = -32070,
  /** Error code when a task is missing a required ID (-32071) */
  MissingTaskId = -32071,
  /** Error code when a task state is invalid (-32072) */
  InvalidState = -32072
}
```

## Usage Examples

### Basic Task Management

```typescript
import { TaskManager, InMemoryTaskStore } from '@dexwox-labs/a2a-server';

// Create task manager
const taskStore = new InMemoryTaskStore();
const taskManager = new TaskManager(taskStore);

// Create a task
const task = await taskManager.createTask({
  name: 'Process Data',
  agentId: 'data-processor',
  parts: [],
  expectedParts: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
});

// Update status
await taskManager.updateTaskStatus(task.id, 'working');

// Complete task
await taskManager.complete(task.id, { result: 'Success' });
```

### Error Handling

```typescript
try {
  await taskManager.updateTaskStatus('invalid-id', 'working');
} catch (error) {
  if (error instanceof TaskNotFoundError) {
    console.error('Task not found');
  } else if (error instanceof A2AError && error.code === -32070) {
    console.error('Invalid state transition');
  }
}
```

### Batch Operations

```typescript
// Batch create tasks
const tasks = await taskStore.batchCreateTasks([
  { name: 'Task 1', agentId: 'agent-1', parts: [], expectedParts: 0 },
  { name: 'Task 2', agentId: 'agent-2', parts: [], expectedParts: 0 }
]);

// Batch transition
await taskStore.batchTransitionTasks([
  { taskId: tasks[0].id, newState: 'working' },
  { taskId: tasks[1].id, newState: 'working' }
]);
```

### Performance Monitoring

```typescript
const taskStore = new InMemoryTaskStore({
  enablePerformanceMonitoring: true
});

// Get metrics
const metrics = taskStore.getPerformanceMetrics();
console.log('Batch operations:', metrics.batchOperations);
console.log('Lock acquisitions:', metrics.lockAcquisitions);
```

## Best Practices

1. **Use convenience methods** for terminal state transitions (`complete()`, `fail()`, `reject()`)
2. **Check transition validity** before attempting state changes
3. **Use batch operations** for processing multiple tasks
4. **Enable performance monitoring** in production
5. **Handle errors gracefully** with specific error types
6. **Use proper triggeredBy values** for audit trails
7. **Leverage state indexing** for efficient queries