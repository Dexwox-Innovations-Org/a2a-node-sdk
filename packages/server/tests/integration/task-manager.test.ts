/**
 * @file task-manager.test.ts
 * @description Comprehensive integration tests for TaskManager with enhanced TaskStore
 * 
 * This test suite validates the integration between TaskManager and InMemoryTaskStore,
 * ensuring all enhanced features work correctly together including state machine validation,
 * convenience methods, concurrency control, and Python SDK API parity.
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TaskManager } from '../../src/tasks/task-manager';
import { InMemoryTaskStore } from '../../src/tasks/in-memory-task-store';
import { PushNotificationService } from '../../src/push-notifications/push-service';
import { 
  TaskState, 
  Task, 
  TaskNotFoundError
} from '@dexwox-labs/a2a-core';

describe('TaskManager Integration Tests', () => {
  let taskManager: TaskManager;
  let taskStore: InMemoryTaskStore;
  let mockPushService: PushNotificationService;

  beforeEach(() => {
    taskStore = new InMemoryTaskStore({
      lockTimeout: 2000,
      maxConcurrentBatch: 10,
      enablePerformanceMonitoring: true
    });

    // Mock push service
    mockPushService = {
      notifyStatusChange: async (taskId: string, newState: TaskState) => {
        // Mock implementation - just log for testing
        console.log(`Push notification: Task ${taskId} changed to ${newState}`);
      }
    } as PushNotificationService;

    taskManager = new TaskManager(taskStore, mockPushService);
  });

  afterEach(() => {
    // Clean up any resources if needed
  });

  describe('Enhanced Task Creation and Retrieval', () => {
    it('should create task with enhanced status structure', async () => {
      const taskData = {
        name: 'Integration Test Task',
        agentId: 'test-agent-1',
        parts: [{ type: 'text' as const, content: 'Test content', format: 'plain' as const }],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const task = await taskManager.createTask(taskData);

      expect(task.id).toBeDefined();
      expect(task.status).toBeDefined();
      expect(task.transitions).toEqual([]);
      expect(task.parts).toHaveLength(1);

      // Verify task can be retrieved
      const retrieved = await taskManager.getTask(task.id);
      expect(retrieved.id).toBe(task.id);
    });

    it('should initialize result aggregator for tasks with expectedParts', async () => {
      const taskData = {
        name: 'Aggregator Test Task',
        agentId: 'test-agent-2',
        parts: [],
        expectedParts: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const task = await taskManager.createTask(taskData);
      const aggregator = taskManager.getAggregator(task.id);

      expect(aggregator).toBeDefined();
      expect(aggregator?.getTask().id).toBe(task.id);
    });
  });

  describe('State Machine Integration', () => {
    let testTask: Task;

    beforeEach(async () => {
      testTask = await taskManager.createTask({
        name: 'State Machine Test',
        agentId: 'state-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    });

    it('should validate state transitions through updateTaskStatus', async () => {
      // Valid transition: submitted -> working
      const workingTask = await taskManager.updateTaskStatus(testTask.id, 'working', 'Starting work');
      expect(workingTask.transitions).toHaveLength(1);
      expect(workingTask.transitions![0].from).toBe('submitted');
      expect(workingTask.transitions![0].to).toBe('working');
      expect(workingTask.transitions![0].reason).toBe('Starting work');

      // Valid transition: working -> completed
      const completedTask = await taskManager.updateTaskStatus(workingTask.id, 'completed', 'Work finished');
      expect(completedTask.transitions).toHaveLength(2);
    });

    it('should allow Python SDK parity transitions', async () => {
      // Valid transition: submitted -> completed (Python SDK parity - direct completion allowed)
      const completedTask = await taskManager.updateTaskStatus(testTask.id, 'completed', 'Direct completion allowed in Python SDK');
      
      expect(completedTask.transitions).toHaveLength(1);
      expect(completedTask.transitions![0].from).toBe('submitted');
      expect(completedTask.transitions![0].to).toBe('completed');
      expect(completedTask.transitions![0].reason).toBe('Direct completion allowed in Python SDK');
    });

    it('should handle complex state transition sequences', async () => {
      // submitted -> working
      await taskManager.updateTaskStatus(testTask.id, 'working');
      
      // working -> input_required
      await taskManager.updateTaskStatus(testTask.id, 'input_required', 'Need user input');
      
      // input_required -> working
      await taskManager.updateTaskStatus(testTask.id, 'working', 'Input received');
      
      // working -> completed
      const finalTask = await taskManager.updateTaskStatus(testTask.id, 'completed');
      
      expect(finalTask.transitions).toHaveLength(4);
      
      // Verify transition history
      const history = await taskManager.getTransitionHistory(testTask.id);
      expect(history).toHaveLength(4);
      expect(history.map(t => `${t.from}->${t.to}`)).toEqual([
        'submitted->working',
        'working->input_required',
        'input_required->working',
        'working->completed'
      ]);
    });
  });

  describe('Python SDK API Parity - Convenience Methods', () => {
    let testTask: Task;

    beforeEach(async () => {
      testTask = await taskManager.createTask({
        name: 'Convenience Methods Test',
        agentId: 'convenience-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    });

    it('should complete tasks with result data and cleanup', async () => {
      // First transition to working state
      await taskManager.updateTaskStatus(testTask.id, 'working');
      
      const resultData = { output: 'Processing complete', data: { count: 42 } };
      const completedTask = await taskManager.complete(testTask.id, resultData);
      
      expect(completedTask.output).toEqual(resultData);
      expect(completedTask.transitions).toHaveLength(2);
      
      // Verify aggregator cleanup
      const aggregator = taskManager.getAggregator(testTask.id);
      expect(aggregator).toBeUndefined();
    });

    it('should fail tasks with error information and cleanup', async () => {
      // First transition to working state
      await taskManager.updateTaskStatus(testTask.id, 'working');
      
      const error = new Error('Processing failed due to network timeout');
      const failedTask = await taskManager.fail(testTask.id, error);
      
      expect(failedTask.error).toBeDefined();
      expect(failedTask.error?.message).toBe('Processing failed due to network timeout');
      expect(failedTask.error?.code).toBe(-32603);
      expect(failedTask.error?.data?.stack).toBeDefined();
      
      // Verify aggregator cleanup
      const aggregator = taskManager.getAggregator(testTask.id);
      expect(aggregator).toBeUndefined();
    });

    it('should cancel tasks with proper validation', async () => {
      await taskManager.cancelTask(testTask.id, 'User requested cancellation');
      
      const canceledTask = await taskManager.getTask(testTask.id);
      expect(canceledTask.transitions).toHaveLength(1);
      expect(canceledTask.transitions![0].reason).toBe('User requested cancellation');
    });
  });

  describe('Enhanced Query Methods Integration', () => {
    beforeEach(async () => {
      // Create test tasks in various states
      const testData = [
        { name: 'Task 1', state: 'submitted' as TaskState, agentId: 'agent-1' },
        { name: 'Task 2', state: 'working' as TaskState, agentId: 'agent-1' },
        { name: 'Task 3', state: 'completed' as TaskState, agentId: 'agent-2' },
        { name: 'Task 4', state: 'failed' as TaskState, agentId: 'agent-2' }
      ];

      for (const data of testData) {
        const task = await taskManager.createTask({
          name: data.name,
          agentId: data.agentId,
          parts: [],
          expectedParts: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });

        if (data.state !== 'submitted') {
          // Follow proper state machine transitions: submitted -> working -> final_state
          if (data.state === 'completed' || data.state === 'failed') {
            await taskManager.updateTaskStatus(task.id, 'working');
            await taskManager.updateTaskStatus(task.id, data.state);
          } else {
            await taskManager.updateTaskStatus(task.id, data.state);
          }
        }
      }
    });

    it('should list active tasks correctly', async () => {
      const activeTasks = await taskManager.listActiveTasks();
      
      // Active states: submitted, working, input_required
      expect(activeTasks.length).toBeGreaterThanOrEqual(2);
    });

    it('should get completed tasks', async () => {
      const completedTasks = await taskManager.getCompletedTasks();
      expect(completedTasks).toHaveLength(1);
      expect(completedTasks[0].name).toBe('Task 3');
    });

    it('should get failed tasks', async () => {
      const failedTasks = await taskManager.getFailedTasks();
      expect(failedTasks).toHaveLength(1);
      expect(failedTasks[0].name).toBe('Task 4');
    });

    it('should get tasks by multiple states', async () => {
      const terminalTasks = await taskManager.getTasksByStates(['completed', 'failed']);
      expect(terminalTasks).toHaveLength(2);
      
      const terminalNames = terminalTasks.map(t => t.name);
      expect(terminalNames).toContain('Task 3');
      expect(terminalNames).toContain('Task 4');
    });
  });

  describe('Task Statistics Integration', () => {
    beforeEach(async () => {
      // Create tasks with known distribution
      const taskData = [
        { count: 3, state: 'submitted' as TaskState },
        { count: 2, state: 'working' as TaskState },
        { count: 1, state: 'completed' as TaskState },
        { count: 1, state: 'failed' as TaskState }
      ];

      for (const { count, state } of taskData) {
        for (let i = 0; i < count; i++) {
          const task = await taskManager.createTask({
            name: `Stats Task ${state} ${i + 1}`,
            agentId: 'stats-agent',
            parts: [],
            expectedParts: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });

          if (state !== 'submitted') {
            await taskManager.updateTaskStatus(task.id, state);
          }
        }
      }
    });

    it('should provide comprehensive task statistics', async () => {
      const stats = await taskManager.getTaskStatistics();
      
      expect(stats.total).toBe(7);
      expect(stats.active).toBe(5); // submitted + working
      expect(stats.completed).toBe(1);
      expect(stats.failed).toBe(1);
      expect(stats.canceled).toBe(0);
      
      expect(stats.byState.submitted).toBe(3);
      expect(stats.byState.working).toBe(2);
      expect(stats.byState.completed).toBe(1);
      expect(stats.byState.failed).toBe(1);
    });
  });

  describe('Transition History and Validation', () => {
    it('should track complete transition history', async () => {
      const task = await taskManager.createTask({
        name: 'History Test Task',
        agentId: 'history-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Perform multiple transitions
      await taskManager.updateTaskStatus(task.id, 'working', 'Starting work', 'agent');
      await taskManager.updateTaskStatus(task.id, 'input_required', 'Need input', 'system');
      await taskManager.updateTaskStatus(task.id, 'working', 'Input received', 'user');
      await taskManager.complete(task.id, { result: 'success' }, 'agent');

      const history = await taskManager.getTransitionHistory(task.id);
      expect(history).toHaveLength(4);

      // Verify transition details
      expect(history[0]).toMatchObject({
        from: 'submitted',
        to: 'working',
        reason: 'Starting work',
        triggeredBy: 'agent'
      });

      expect(history[1]).toMatchObject({
        from: 'working',
        to: 'input_required',
        reason: 'Need input',
        triggeredBy: 'system'
      });

      expect(history[2]).toMatchObject({
        from: 'input_required',
        to: 'working',
        reason: 'Input received',
        triggeredBy: 'user'
      });

      expect(history[3]).toMatchObject({
        from: 'working',
        to: 'completed',
        reason: 'Task completed successfully',
        triggeredBy: 'agent'
      });
    });

    it('should validate transition capabilities', async () => {
      const task = await taskManager.createTask({
        name: 'Validation Test Task',
        agentId: 'validation-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Test valid transitions
      expect(await taskManager.canTransitionTo(task.id, 'working')).toBe(true);

      // Test Python SDK parity transitions (submitted can transition to completed and input_required)
      expect(await taskManager.canTransitionTo(task.id, 'completed')).toBe(true);
      expect(await taskManager.canTransitionTo(task.id, 'input_required')).toBe(true);

      // After transitioning to working
      await taskManager.updateTaskStatus(task.id, 'working');
      expect(await taskManager.canTransitionTo(task.id, 'completed')).toBe(true);
      expect(await taskManager.canTransitionTo(task.id, 'input_required')).toBe(true);
      expect(await taskManager.canTransitionTo(task.id, 'submitted')).toBe(false);
    });
  });

  describe('Artifact Management Integration', () => {
    it('should manage artifacts through task manager', async () => {
      const task = await taskManager.createTask({
        name: 'Artifact Test Task',
        agentId: 'artifact-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      const artifact1 = {
        id: 'artifact-1',
        type: 'text' as const,
        content: { text: 'First artifact' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const artifact2 = {
        id: 'artifact-2',
        type: 'file' as const,
        content: { filename: 'test.txt', data: 'file content' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await taskManager.addArtifact(task.id, artifact1);
      await taskManager.addArtifact(task.id, artifact2);

      const artifacts = await taskManager.getArtifacts(task.id);
      expect(artifacts).toHaveLength(2);

      const specificArtifact = await taskManager.getArtifact(task.id, 'artifact-1');
      expect(specificArtifact).toBeDefined();
      expect(specificArtifact?.id).toBe('artifact-1');
      expect(specificArtifact?.type).toBe('text');
    });
  });

  describe('Error Handling Integration', () => {
    it('should handle task not found errors', async () => {
      await expect(
        taskManager.getTask('non-existent-task')
      ).rejects.toThrow(TaskNotFoundError);

      await expect(
        taskManager.updateTaskStatus('non-existent-task', 'working')
      ).rejects.toThrow(TaskNotFoundError);
    });

    it('should handle invalid state transitions gracefully', async () => {
      const task = await taskManager.createTask({
        name: 'Error Test Task',
        agentId: 'error-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // First transition to completed (this should work with Python SDK parity)
      await taskManager.updateTaskStatus(task.id, 'completed');
      
      // Now try invalid transition from completed to submitted (this should fail)
      await expect(
        taskManager.updateTaskStatus(task.id, 'submitted')
      ).rejects.toThrow();

      // Verify task is still in completed state
      const finalTask = await taskManager.getTask(task.id);
      expect(finalTask.status.state).toBe('completed');
      expect(finalTask.transitions).toHaveLength(1); // Only the valid transition
    });
  });

  describe('Push Notification Integration', () => {
    it('should send push notifications on state changes', async () => {
      const notifications: Array<{ taskId: string; state: TaskState }> = [];
      
      // Override mock to capture notifications
      mockPushService.notifyStatusChange = async (taskId: string, newState: TaskState) => {
        notifications.push({ taskId, state: newState });
      };

      const task = await taskManager.createTask({
        name: 'Push Notification Test',
        agentId: 'push-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      await taskManager.updateTaskStatus(task.id, 'working');
      await taskManager.complete(task.id);

      expect(notifications).toHaveLength(2);
      expect(notifications[0]).toEqual({ taskId: task.id, state: 'working' });
      expect(notifications[1]).toEqual({ taskId: task.id, state: 'completed' });
    });
  });

  describe('Concurrency Integration Tests', () => {
    it('should handle concurrent task updates safely', async () => {
      const task = await taskManager.createTask({
        name: 'Concurrent Task',
        agentId: 'test-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Simulate concurrent updates
      const concurrentUpdates = Array.from({ length: 5 }, (_, i) => 
        taskManager.updateTaskStatus(task.id, 'working')
      );

      await Promise.all(concurrentUpdates);

      const finalTask = await taskManager.getTask(task.id);
      expect(finalTask).toBeDefined();
    });

    it('should handle batch operations through task store', async () => {
      // Create multiple tasks
      const tasks = Array.from({ length: 3 }, (_, i) => ({
        name: `Batch Task ${i + 1}`,
        agentId: 'batch-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      const createdTasks: Task[] = [];
      for (const task of tasks) {
        const created = await taskManager.createTask(task);
        createdTasks.push(created);
      }

      // Verify all tasks were created
      for (const task of createdTasks) {
        const retrieved = await taskManager.getTask(task.id);
        expect(retrieved).toBeDefined();
      }
    });
  });

  describe('TaskStore Integration Features', () => {
    it('should leverage enhanced task store capabilities', async () => {
      // Test performance metrics
      const metrics = taskStore.getPerformanceMetrics();
      expect(metrics).toBeDefined();
      expect(typeof metrics.lockAcquisitions).toBe('number');

      // Test store statistics
      const stats = taskStore.getStoreStatistics();
      expect(stats).toBeDefined();
      expect(typeof stats.totalTasks).toBe('number');
      expect(typeof stats.totalArtifacts).toBe('number');
    });

    it('should handle task locking mechanisms', async () => {
      const task = await taskManager.createTask({
        name: 'Lock Test Task',
        agentId: 'lock-agent',
        parts: [],
        expectedParts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Test lock acquisition if available
      if (taskStore.acquireTaskLock) {
        const releaseLock = await taskStore.acquireTaskLock(task.id);
        expect(typeof releaseLock).toBe('function');
        
        if (taskStore.isTaskLocked) {
          const isLocked = await taskStore.isTaskLocked(task.id);
          expect(isLocked).toBe(true);
        }
        
        await releaseLock();
        
        if (taskStore.isTaskLocked) {
          const isLockedAfter = await taskStore.isTaskLocked(task.id);
          expect(isLockedAfter).toBe(false);
        }
      }
    });
  });
});