# Task Lifecycle Examples

## Overview

This document provides practical examples demonstrating how to use the enhanced task management system in the A2A Node SDK. These examples show real-world usage patterns and best practices for managing task lifecycles.

## Basic Task Lifecycle

### Simple Task Creation and Completion

```typescript
import { TaskManager, InMemoryTaskStore } from '@dexwox-labs/a2a-server';

async function basicTaskExample() {
  // Create task manager
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  // Create a simple task
  const task = await taskManager.createTask({
    name: 'Process User Data',
    agentId: 'data-processor',
    parts: [{
      type: 'text',
      content: 'Process user registration data',
      format: 'plain'
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  console.log(`Created task: ${task.id}`);
  console.log(`Initial status: ${task.status.state}`);

  // Start processing
  await taskManager.updateTaskStatus(task.id, 'working');
  console.log('Task started processing');

  // Complete the task
  await taskManager.complete(task.id, {
    processedUsers: 150,
    validationErrors: 3,
    processingTime: '2.5s'
  });

  console.log('Task completed successfully');
}
```

### Task with File Processing

```typescript
async function fileProcessingExample() {
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  // Create task for file processing
  const task = await taskManager.createTask({
    name: 'Process Image',
    agentId: 'image-processor',
    parts: [{
      type: 'file',
      content: 'base64-encoded-image-data',
      mimeType: 'image/jpeg',
      name: 'profile.jpg',
      size: 1024000
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: {
      priority: 'high',
      userId: 'user-123'
    }
  });

  try {
    // Start processing
    await taskManager.updateTaskStatus(task.id, 'working', 'Starting image processing');

    // Simulate processing steps
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add artifact during processing
    await taskManager.addArtifact(task.id, {
      id: 'processed-image',
      type: 'file',
      content: {
        data: 'base64-encoded-processed-image',
        filename: 'profile_processed.jpg',
        mimeType: 'image/jpeg'
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    // Complete with results
    await taskManager.complete(task.id, {
      originalSize: '1MB',
      processedSize: '800KB',
      compressionRatio: 0.8,
      processingTime: '1.2s'
    });

    console.log('Image processing completed');

  } catch (error) {
    await taskManager.fail(task.id, error);
    console.error('Image processing failed:', error);
  }
}
```

## Advanced Task Scenarios

### Task Requiring Authentication

```typescript
async function authRequiredExample() {
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  const task = await taskManager.createTask({
    name: 'Access Protected Resource',
    agentId: 'secure-agent',
    parts: [{
      type: 'text',
      content: 'Fetch user financial data',
      format: 'plain'
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  try {
    // Start processing
    await taskManager.updateTaskStatus(task.id, 'working');

    // Simulate discovering auth requirement
    await taskManager.requireAuth(task.id, 'OAuth2 token required for financial data access');

    console.log('Task requires authentication');

    // Simulate auth being provided (in real scenario, this would be external)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Resume processing after auth
    await taskManager.updateTaskStatus(task.id, 'working', 'Authentication provided, resuming');

    // Complete the task
    await taskManager.complete(task.id, {
      dataRetrieved: true,
      recordCount: 25,
      authMethod: 'OAuth2'
    });

  } catch (error) {
    await taskManager.fail(task.id, error);
  }
}
```

### Task Requiring User Input

```typescript
async function inputRequiredExample() {
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  const task = await taskManager.createTask({
    name: 'Interactive Data Validation',
    agentId: 'validation-agent',
    parts: [{
      type: 'data',
      content: {
        records: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'invalid-email' }
        ]
      }
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  try {
    // Start processing
    await taskManager.updateTaskStatus(task.id, 'working');

    // Simulate finding validation issues
    await taskManager.updateTaskStatus(
      task.id, 
      'input_required', 
      'Invalid email found, user input needed'
    );

    console.log('Task requires user input for validation');

    // Simulate user providing input
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Resume processing with corrected data
    await taskManager.updateTaskStatus(task.id, 'working', 'User input received, continuing validation');

    // Complete validation
    await taskManager.complete(task.id, {
      validRecords: 2,
      correctedRecords: 1,
      validationStatus: 'passed'
    });

  } catch (error) {
    await taskManager.fail(task.id, error);
  }
}
```

### Task Rejection Scenario

```typescript
async function taskRejectionExample() {
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  const task = await taskManager.createTask({
    name: 'Process Unsupported Format',
    agentId: 'format-processor',
    parts: [{
      type: 'file',
      content: 'binary-data',
      mimeType: 'application/x-custom-format',
      name: 'data.custom'
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  try {
    // Agent examines the task and rejects unsupported format
    await taskManager.reject(task.id, 'Unsupported file format: application/x-custom-format');

    console.log('Task rejected due to unsupported format');

  } catch (error) {
    console.error('Error during task rejection:', error);
  }
}
```

## Batch Processing Examples

### Processing Multiple Tasks Efficiently

```typescript
async function batchProcessingExample() {
  const taskStore = new InMemoryTaskStore({
    enablePerformanceMonitoring: true,
    maxConcurrentBatch: 10
  });
  const taskManager = new TaskManager(taskStore);

  // Create multiple tasks
  const taskData = Array.from({ length: 20 }, (_, i) => ({
    name: `Batch Task ${i + 1}`,
    agentId: 'batch-processor',
    parts: [{
      type: 'text',
      content: `Process item ${i + 1}`,
      format: 'plain' as const
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: { batchId: 'batch-001', itemIndex: i }
  }));

  // Batch create tasks
  const tasks = await taskStore.batchCreateTasks(taskData);
  console.log(`Created ${tasks.length} tasks in batch`);

  // Batch transition to working state
  await taskStore.batchTransitionTasks(
    tasks.map(task => ({
      taskId: task.id,
      newState: 'working' as const,
      reason: 'Batch processing started',
      triggeredBy: 'system' as const
    }))
  );

  console.log('All tasks transitioned to working state');

  // Simulate processing with some failures
  const results = await Promise.allSettled(
    tasks.map(async (task, index) => {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
      
      // Simulate some failures
      if (index % 7 === 0) {
        throw new Error(`Processing failed for item ${index + 1}`);
      }
      
      return { taskId: task.id, result: `Processed item ${index + 1}` };
    })
  );

  // Batch complete successful tasks and fail others
  const completions = results.map((result, index) => ({
    taskId: tasks[index].id,
    newState: result.status === 'fulfilled' ? 'completed' as const : 'failed' as const,
    reason: result.status === 'fulfilled' 
      ? 'Processing successful' 
      : `Processing failed: ${result.reason}`,
    triggeredBy: 'system' as const
  }));

  await taskStore.batchTransitionTasks(completions);

  // Get final statistics
  const stats = await taskManager.getTaskStatistics();
  console.log('Batch processing completed:');
  console.log(`- Completed: ${stats.completed}`);
  console.log(`- Failed: ${stats.failed}`);
  console.log(`- Total: ${stats.total}`);

  // Get performance metrics
  const metrics = taskStore.getPerformanceMetrics();
  console.log('Performance metrics:');
  console.log(`- Batch operations: ${metrics.batchOperations}`);
  console.log(`- Average batch size: ${metrics.averageBatchSize}`);
}
```

### Concurrent Task Processing with Locks

```typescript
async function concurrentProcessingExample() {
  const taskStore = new InMemoryTaskStore({
    lockTimeout: 10000,
    enablePerformanceMonitoring: true
  });
  const taskManager = new TaskManager(taskStore);

  // Create a shared resource task
  const sharedTask = await taskManager.createTask({
    name: 'Shared Resource Task',
    agentId: 'shared-processor',
    parts: [{
      type: 'data',
      content: { sharedCounter: 0 }
    }],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  // Simulate multiple concurrent processors
  const processors = Array.from({ length: 5 }, (_, i) => 
    processWithLock(taskStore, sharedTask.id, i + 1)
  );

  await Promise.all(processors);

  const finalTask = await taskManager.getTask(sharedTask.id);
  console.log('Final shared counter value:', finalTask.parts?.[0]?.content?.sharedCounter);
}

async function processWithLock(taskStore: InMemoryTaskStore, taskId: string, processorId: number) {
  console.log(`Processor ${processorId} attempting to acquire lock`);
  
  const releaseLock = await taskStore.acquireTaskLock(taskId);
  
  try {
    console.log(`Processor ${processorId} acquired lock`);
    
    // Get current task
    const task = await taskStore.getTask(taskId);
    if (!task) throw new Error('Task not found');

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Update shared resource
    const currentCounter = task.parts?.[0]?.content?.sharedCounter || 0;
    await taskStore.updateTask(taskId, {
      parts: [{
        type: 'data',
        content: { sharedCounter: currentCounter + 1 }
      }]
    });

    console.log(`Processor ${processorId} incremented counter to ${currentCounter + 1}`);
    
  } finally {
    await releaseLock();
    console.log(`Processor ${processorId} released lock`);
  }
}
```

## Error Handling and Recovery

### Comprehensive Error Handling

```typescript
import { TaskNotFoundError, InvalidTaskStateError, A2AError } from '@dexwox-labs/a2a-core';

async function errorHandlingExample() {
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  try {
    // Create a task
    const task = await taskManager.createTask({
      name: 'Error-Prone Task',
      agentId: 'unreliable-agent',
      parts: [{
        type: 'text',
        content: 'Process with potential errors',
        format: 'plain'
      }],
      expectedParts: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    // Start processing
    await taskManager.updateTaskStatus(task.id, 'working');

    // Simulate various error scenarios
    await simulateProcessingWithErrors(taskManager, task.id);

  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

async function simulateProcessingWithErrors(taskManager: TaskManager, taskId: string) {
  try {
    // Simulate network error
    throw new Error('Network connection failed');
    
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('Network')) {
        // Handle network errors - might retry
        console.log('Network error detected, marking for retry');
        await taskManager.updateTaskStatus(taskId, 'input_required', 'Network retry needed');
        return;
      }
      
      if (error.message.includes('Authentication')) {
        // Handle auth errors
        await taskManager.requireAuth(taskId, 'Re-authentication required');
        return;
      }
      
      if (error.message.includes('Invalid format')) {
        // Handle validation errors - reject task
        await taskManager.reject(taskId, error.message);
        return;
      }
      
      // Generic error - fail the task
      await taskManager.fail(taskId, error);
    }
  }
}

async function stateTransitionErrorExample() {
  const taskStore = new InMemoryTaskStore();
  const taskManager = new TaskManager(taskStore);

  const task = await taskManager.createTask({
    name: 'State Transition Test',
    agentId: 'test-agent',
    parts: [],
    expectedParts: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  try {
    // Complete the task
    await taskManager.complete(task.id);
    
    // Try to transition from completed state (should fail)
    await taskManager.updateTaskStatus(task.id, 'working');
    
  } catch (error) {
    if (error instanceof A2AError && error.code === -32070) {
      console.log('Expected error: Cannot transition from terminal state');
    } else {
      console.error('Unexpected error:', error);
    }
  }

  try {
    // Try to get non-existent task
    await taskManager.getTask('non-existent-id');
    
  } catch (error) {
    if (error instanceof TaskNotFoundError) {
      console.log('Expected error: Task not found');
    }
  }
}
```

## Monitoring and Analytics

### Task Analytics and Reporting

```typescript
async function analyticsExample() {
  const taskStore = new InMemoryTaskStore({
    enablePerformanceMonitoring: true
  });
  const taskManager = new TaskManager(taskStore);

  // Create various tasks for analytics
  const taskTypes = ['data-processing', 'image-processing', 'text-analysis'];
  const agents = ['agent-1', 'agent-2', 'agent-3'];

  for (let i = 0; i < 50; i++) {
    const task = await taskManager.createTask({
      name: `Analytics Task ${i + 1}`,
      agentId: agents[i % agents.length],
      parts: [{
        type: 'text',
        content: `Process ${taskTypes[i % taskTypes.length]} data`,
        format: 'plain'
      }],
      expectedParts: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      metadata: {
        taskType: taskTypes[i % taskTypes.length],
        priority: i % 3 === 0 ? 'high' : 'normal'
      }
    });

    // Simulate different outcomes
    await taskManager.updateTaskStatus(task.id, 'working');
    
    if (i % 10 === 0) {
      await taskManager.fail(task.id, 'Simulated failure');
    } else if (i % 15 === 0) {
      await taskManager.reject(task.id, 'Simulated rejection');
    } else if (i % 20 === 0) {
      await taskManager.requireAuth(task.id, 'Simulated auth requirement');
    } else {
      await taskManager.complete(task.id, { processed: true });
    }
  }

  // Generate analytics report
  await generateAnalyticsReport(taskManager, taskStore);
}

async function generateAnalyticsReport(taskManager: TaskManager, taskStore: InMemoryTaskStore) {
  console.log('\n=== Task Analytics Report ===');

  // Overall statistics
  const stats = await taskManager.getTaskStatistics();
  console.log('\nOverall Statistics:');
  console.log(`Total Tasks: ${stats.total}`);
  console.log(`Active Tasks: ${stats.active}`);
  console.log(`Completed: ${stats.completed}`);
  console.log(`Failed: ${stats.failed}`);
  console.log(`Rejected: ${stats.rejected}`);
  console.log(`Canceled: ${stats.canceled}`);

  // Success rate
  const successRate = (stats.completed / stats.total * 100).toFixed(2);
  console.log(`Success Rate: ${successRate}%`);

  // State distribution
  console.log('\nState Distribution:');
  Object.entries(stats.byState).forEach(([state, count]) => {
    if (count > 0) {
      console.log(`  ${state}: ${count}`);
    }
  });

  // Performance metrics
  const metrics = taskStore.getPerformanceMetrics();
  console.log('\nPerformance Metrics:');
  console.log(`Batch Operations: ${metrics.batchOperations}`);
  console.log(`Lock Acquisitions: ${metrics.lockAcquisitions}`);
  console.log(`Lock Timeouts: ${metrics.lockTimeouts}`);
  console.log(`Average Batch Size: ${metrics.averageBatchSize.toFixed(2)}`);

  // Store statistics
  const storeStats = taskStore.getStoreStatistics();
  console.log('\nStore Statistics:');
  console.log(`Total Tasks: ${storeStats.totalTasks}`);
  console.log(`Total Artifacts: ${storeStats.totalArtifacts}`);
  console.log(`Agent Count: ${storeStats.agentCount}`);
  console.log(`Currently Locked Tasks: ${storeStats.lockedTasks}`);

  // Task type analysis
  console.log('\nTask Analysis by Agent:');
  const allTasks = await taskStore.getTasksByStatus(['completed', 'failed', 'rejected', 'canceled']);
  const agentStats = allTasks.reduce((acc, task) => {
    if (task.agentId) {
      acc[task.agentId] = acc[task.agentId] || { total: 0, completed: 0, failed: 0 };
      acc[task.agentId].total++;
      if (task.status.state === 'completed') acc[task.agentId].completed++;
      if (task.status.state === 'failed') acc[task.agentId].failed++;
    }
    return acc;
  }, {} as Record<string, { total: number; completed: number; failed: number }>);

  Object.entries(agentStats).forEach(([agentId, stats]) => {
    const successRate = (stats.completed / stats.total * 100).toFixed(2);
    console.log(`  ${agentId}: ${stats.total} total, ${successRate}% success rate`);
  });
}
```

## Python SDK Comparison Examples

### Side-by-Side API Comparison

```typescript
// Node SDK Enhanced API (matches Python SDK)
async function nodeSDKExample() {
  const taskManager = new TaskManager(taskStore);
  
  // Create task
  const task = await taskManager.createTask({
    name: 'Example Task',
    agentId: 'example-agent',
    parts: [],
    expectedParts: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  // Python SDK equivalent methods now available in Node SDK
  await taskManager.reject(task.id, 'Invalid input');
  await taskManager.requireAuth(task.id, 'OAuth2 required');
  await taskManager.complete(task.id, { result: 'success' });
  await taskManager.fail(task.id, 'Processing error');

  // Enhanced query methods (Python SDK parity)
  const completedTasks = await taskManager.getCompletedTasks();
  const failedTasks = await taskManager.getFailedTasks();
  const workingTasks = await taskManager.getTasksByState('working');
  const activeTasks = await taskManager.listActiveTasks();

  // Transition history (Python SDK parity)
  const history = await taskManager.getTransitionHistory(task.id);
  const canTransition = await taskManager.canTransitionTo(task.id, 'completed');

  // Statistics (Python SDK parity)
  const stats = await taskManager.getTaskStatistics();
}

/*
Python SDK equivalent:

task_manager = TaskManager(task_store)

# Create task
task = await task_manager.create_task(
    name="Example Task",
    agent_id="example-agent",
    parts=[],
    expected_parts=1
)

# Convenience methods
await task_manager.reject(task.id, "Invalid input")
await task_manager.require_auth(task.id, "OAuth2 required")
await task_manager.complete(task.id, {"result": "success"})
await task_manager.fail(task.id, "Processing error")

# Query methods
completed_tasks = await task_manager.get_completed_tasks()
failed_tasks = await task_manager.get_failed_tasks()
working_tasks = await task_manager.get_tasks_by_state("working")
active_tasks = await task_manager.list_active_tasks()

# Transition history
history = await task_manager.get_transition_history(task.id)
can_transition = await task_manager.can_transition_to(task.id, "completed")

# Statistics
stats = await task_manager.get_task_statistics()
*/
```

## Best Practices Summary

### 1. Use Convenience Methods

```typescript
// ✅ Preferred: Use convenience methods
await taskManager.complete(taskId, result);
await taskManager.fail(taskId, error);
await taskManager.reject(taskId, reason);

// ❌ Avoid: Direct status updates for terminal states
await taskManager.updateTaskStatus(taskId, 'completed');
```

### 2. Handle State Transitions Gracefully

```typescript
// ✅ Check transition validity
const canComplete = await taskManager.canTransitionTo(taskId, 'completed');
if (canComplete) {
  await taskManager.complete(taskId);
} else {
  console.log('Cannot complete task in current state');
}
```

### 3. Use Batch Operations for Performance

```typescript
// ✅ Efficient: Batch operations
await taskStore.batchUpdateTasks(updates);
await taskStore.batchTransitionTasks(transitions);

// ❌ Inefficient: Individual operations in loop
for (const update of updates) {
  await taskStore.updateTask(update.id, update.updates);
}
```

### 4. Implement Proper Error Handling

```typescript
try {
  await taskManager.updateTaskStatus(taskId, 'working');
} catch (error) {
  if (error instanceof TaskNotFoundError) {
    console.error('Task not found');
  } else if (error instanceof A2AError && error.code === -32070) {
    console.error('Invalid state transition');
  } else {
    console.error('Unexpected error:', error);
  }
}
```

### 5. Monitor Performance

```typescript
// Enable monitoring
const taskStore = new InMemoryTaskStore({
  enablePerformanceMonitoring: true
});

// Regular monitoring
setInterval(() => {
  const metrics = taskStore.getPerformanceMetrics();
  const stats = taskStore.getStoreStatistics();
  console.log('Performance:', metrics);
  console.log('Store stats:', stats);
}, 60000);
```

These examples demonstrate the full capabilities of the enhanced task management system and show how to achieve Python SDK API parity while leveraging Node.js/TypeScript best practices.