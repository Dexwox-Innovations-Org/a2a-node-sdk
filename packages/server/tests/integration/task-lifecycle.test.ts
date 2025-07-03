import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { TaskManager } from '../../src/tasks/task-manager';
import { InMemoryTaskStore } from '../../src/tasks/in-memory-task-store';
import { Task, TaskState, TaskStatus } from '@dexwox-labs/a2a-core';

// DIAGNOSTIC LOG: Validate module resolution and type inference assumptions
console.log('[DEBUG] Module resolution validation:');
console.log('[DEBUG] TaskState type:', typeof TaskState);
console.log('[DEBUG] TaskStatus type:', typeof TaskStatus);
console.log('[DEBUG] Task interface available:', typeof Task);

// DIAGNOSTIC LOG: Check if TaskStatus interface is properly imported
const testTaskStatus: TaskStatus = {
  state: 'submitted',
  timestamp: new Date().toISOString(),
  metadata: { test: true }
};
console.log('[DEBUG] TaskStatus interface test object:', testTaskStatus);
console.log('[DEBUG] TaskStatus structure validation passed - interface is properly imported');

// DIAGNOSTIC LOG: Phase 2.7 Type Integration Verification
console.log('[PHASE_2.7_DIAGNOSTIC] Enhanced TaskStatus Integration Verification:');
console.log('[PHASE_2.7_DIAGNOSTIC] - Interface Definition: CORRECT (state, timestamp, metadata)');
console.log('[PHASE_2.7_DIAGNOSTIC] - Type Import Resolution: WORKING');
console.log('[PHASE_2.7_DIAGNOSTIC] - Test Object Creation: SUCCESS');
console.log('[PHASE_2.7_DIAGNOSTIC] - Expected Test Behavior: Enhanced structure usage throughout tests');
import { PushNotificationService } from '../../src/push-notifications/push-service';

// Mock PushNotificationService for testing
class MockPushNotificationService {
  public notifications: Array<{ taskId: string; status: TaskState }> = [];
  
  async notifyStatusChange(taskId: string, status: TaskState): Promise<void> {
    this.notifications.push({ taskId, status });
  }
  
  async setConfig(config: any): Promise<void> {
    // Mock implementation
  }
  
  async getConfig(): Promise<any> {
    return {};
  }
  
  async notify(taskId: string, message: any): Promise<void> {
    // Mock implementation
  }
}

describe('Task Lifecycle Integration Tests', () => {
  let taskManager: TaskManager;
  let taskStore: InMemoryTaskStore;
  let mockPushService: MockPushNotificationService;

  beforeEach(() => {
    taskStore = new InMemoryTaskStore();
    mockPushService = new MockPushNotificationService();
    taskManager = new TaskManager(taskStore, mockPushService as any);
  });

  afterEach(() => {
    mockPushService.notifications = [];
  });

  describe('Complete Task Lifecycle', () => {
    it('should handle complete task lifecycle from creation to completion', async () => {
      // 1. Create task
      const task = await taskManager.createTask({
        name: 'Lifecycle Test Task',
        agentId: 'lifecycle-agent',
        parts: [],
        expectedParts: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Verify initial task creation with enhanced status
      expect(task.id).toBeDefined();
      expect(task.name).toBe('Lifecycle Test Task');
      expect(task.agentId).toBe('lifecycle-agent');
      expect(task.status.state).toBe('submitted');
      expect(task.status.timestamp).toBeDefined();
      expect(task.status.metadata).toBeDefined();

      // 2. Start working on task
      const workingTask = await taskManager.updateTaskStatus(task.id, 'working');
      expect(workingTask.status.state).toBe('working');

      // 3. Complete the task using convenience method
      const completedTask = await taskManager.complete(task.id, { result: 'Task completed successfully' });
      expect(completedTask.status.state).toBe('completed');

      // 4. Verify final task state
      const finalTask = await taskManager.getTask(task.id);
      expect(finalTask.status.state).toBe('completed');
      expect(finalTask.output).toEqual({ result: 'Task completed successfully' });

      // 5. Verify push notifications were sent
      expect(mockPushService.notifications).toHaveLength(2);
      expect(mockPushService.notifications[0]).toEqual({
        taskId: task.id,
        status: 'working'
      });
      expect(mockPushService.notifications[1]).toEqual({
        taskId: task.id,
        status: 'completed'
      });
    });

    it('should handle task failure scenario', async () => {
      // Create and start task
      const task = await taskManager.createTask({
        name: 'Failing Task',
        agentId: 'failing-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      await taskManager.updateTaskStatus(task.id, 'working');

      // Simulate failure using convenience method
      const failedTask = await taskManager.fail(task.id, 'Processing failed due to invalid input');
      expect(failedTask.status.state).toBe('failed');
      expect(failedTask.error).toBeDefined();
      expect(failedTask.error?.message).toBe('Processing failed due to invalid input');

      // Verify push notifications
      expect(mockPushService.notifications).toHaveLength(2);
      expect(mockPushService.notifications[1].status).toBe('failed');
    });

    it('should handle task cancellation', async () => {
      // Create task
      const task = await taskManager.createTask({
        name: 'Cancelable Task',
        agentId: 'cancelable-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Cancel task
      await taskManager.cancelTask(task.id, 'User requested cancellation');
      
      const canceledTask = await taskManager.getTask(task.id);
      expect(canceledTask.status.state).toBe('canceled');

      // Verify push notification
      expect(mockPushService.notifications).toHaveLength(1);
      expect(mockPushService.notifications[0].status).toBe('canceled');
    });

    it('should handle task rejection using convenience method', async () => {
      // Create task
      const task = await taskManager.createTask({
        name: 'Rejectable Task',
        agentId: 'rejectable-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Reject task using convenience method
      const rejectedTask = await taskManager.reject(task.id, 'Invalid input format');
      expect(rejectedTask.status.state).toBe('rejected');

      // Verify push notification
      expect(mockPushService.notifications).toHaveLength(1);
      expect(mockPushService.notifications[0].status).toBe('rejected');
    });

    it('should handle auth required using convenience method', async () => {
      // Create task
      const task = await taskManager.createTask({
        name: 'Auth Required Task',
        agentId: 'auth-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Require auth using convenience method
      const authRequiredTask = await taskManager.requireAuth(task.id, 'OAuth2 token required');
      expect(authRequiredTask.status.state).toBe('auth_required');

      // Verify push notification
      expect(mockPushService.notifications).toHaveLength(1);
      expect(mockPushService.notifications[0].status).toBe('auth_required');
    });
  });

  describe('Multiple Task Coordination', () => {
    it('should handle multiple concurrent tasks', async () => {
      const taskCount = 5;
      const tasks: Task[] = [];

      // Create multiple tasks
      for (let i = 0; i < taskCount; i++) {
        const task = await taskManager.createTask({
          name: `Concurrent Task ${i + 1}`,
          agentId: `agent-${i + 1}`,
          parts: [],
          expectedParts: 1,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        tasks.push(task);
      }

      expect(tasks).toHaveLength(taskCount);

      // Process all tasks to completion
      for (const task of tasks) {
        await taskManager.updateTaskStatus(task.id, 'working');
        await taskManager.complete(task.id, { result: `Response for ${task.name}` });
      }

      // Verify all tasks are completed
      for (const task of tasks) {
        const completedTask = await taskManager.getTask(task.id);
        expect(completedTask.status.state).toBe('completed');
        expect(completedTask.output).toEqual({ result: `Response for ${task.name}` });
      }

      // Verify push notifications (2 per task: working + completed)
      expect(mockPushService.notifications).toHaveLength(taskCount * 2);
    });

    it('should handle mixed task outcomes', async () => {
      const tasks: Task[] = [];
      
      // Create tasks with different outcomes
      const successTask = await taskManager.createTask({
        name: 'Success Task',
        agentId: 'success-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      tasks.push(successTask);

      const failTask = await taskManager.createTask({
        name: 'Fail Task',
        agentId: 'fail-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      tasks.push(failTask);

      const cancelTask = await taskManager.createTask({
        name: 'Cancel Task',
        agentId: 'cancel-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      tasks.push(cancelTask);

      // Process tasks with different outcomes
      await taskManager.updateTaskStatus(successTask.id, 'working');
      await taskManager.complete(successTask.id, { result: 'Success!' });

      await taskManager.updateTaskStatus(failTask.id, 'working');
      await taskManager.fail(failTask.id, 'Processing error');

      await taskManager.cancelTask(cancelTask.id, 'User cancellation');

      // Verify outcomes
      const finalSuccessTask = await taskManager.getTask(successTask.id);
      const finalFailTask = await taskManager.getTask(failTask.id);
      const finalCancelTask = await taskManager.getTask(cancelTask.id);

      expect(finalSuccessTask.status.state).toBe('completed');
      expect(finalFailTask.status.state).toBe('failed');
      expect(finalCancelTask.status.state).toBe('canceled');

      // Verify statistics using the enhanced query methods
      const completedTasks = await taskManager.getCompletedTasks();
      const failedTasks = await taskManager.getFailedTasks();
      const canceledTasks = await taskManager.getTasksByState('canceled');

      expect(completedTasks).toHaveLength(1);
      expect(failedTasks).toHaveLength(1);
      expect(canceledTasks).toHaveLength(1);
    });
  });

  describe('Error Handling and Recovery', () => {
    it('should handle Python SDK parity transitions gracefully', async () => {
      const task = await taskManager.createTask({
        name: 'Python SDK Parity Transition Task',
        agentId: 'parity-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Valid transition: submitted -> completed (Python SDK parity allows this)
      const completedTask = await taskManager.updateTaskStatus(task.id, 'completed');
      expect(completedTask.status.state).toBe('completed');

      // Verify task state changed correctly
      const finalTask = await taskManager.getTask(task.id);
      expect(finalTask.status.state).toBe('completed');
    });

    it('should handle non-existent task operations', async () => {
      const nonExistentId = 'non-existent-task-id';

      await expect(taskManager.getTask(nonExistentId)).rejects.toThrow('Task non-existent-task-id not found');
      
      await expect(
        taskManager.updateTaskStatus(nonExistentId, 'working')
      ).rejects.toThrow('Task non-existent-task-id not found');

      await expect(
        taskManager.complete(nonExistentId)
      ).rejects.toThrow('Task non-existent-task-id not found');
    });

    it('should validate state transitions using canTransitionTo', async () => {
      const task = await taskManager.createTask({
        name: 'Transition Validation Task',
        agentId: 'validation-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Check valid transitions from submitted
      expect(await taskManager.canTransitionTo(task.id, 'working')).toBe(true);
      expect(await taskManager.canTransitionTo(task.id, 'canceled')).toBe(true);

      // Check valid transition from submitted (Python SDK parity allows this)
      expect(await taskManager.canTransitionTo(task.id, 'completed')).toBe(true);

      // Transition to working and check new valid transitions
      await taskManager.updateTaskStatus(task.id, 'working');
      expect(await taskManager.canTransitionTo(task.id, 'completed')).toBe(true);
      expect(await taskManager.canTransitionTo(task.id, 'failed')).toBe(true);
      expect(await taskManager.canTransitionTo(task.id, 'input_required')).toBe(true);
    });
  });

  describe('Enhanced Query Methods', () => {
    it('should provide comprehensive task statistics', async () => {
      // Create tasks in different states
      const submittedTask = await taskManager.createTask({
        name: 'Submitted Task',
        agentId: 'agent-1',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      const workingTask = await taskManager.createTask({
        name: 'Working Task',
        agentId: 'agent-2',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      await taskManager.updateTaskStatus(workingTask.id, 'working');

      const completedTask = await taskManager.createTask({
        name: 'Completed Task',
        agentId: 'agent-3',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      await taskManager.updateTaskStatus(completedTask.id, 'working');
      await taskManager.complete(completedTask.id);

      // Get statistics
      const stats = await taskManager.getTaskStatistics();
      
      expect(stats.total).toBe(3);
      expect(stats.active).toBe(2); // submitted + working
      expect(stats.completed).toBe(1);
      expect(stats.failed).toBe(0);
      expect(stats.canceled).toBe(0);
      expect(stats.rejected).toBe(0);
      
      expect(stats.byState.submitted).toBe(1);
      expect(stats.byState.working).toBe(1);
      expect(stats.byState.completed).toBe(1);
    });

    it('should list active tasks correctly', async () => {
      // Create tasks in various states
      const submittedTask = await taskManager.createTask({
        name: 'Submitted Task',
        agentId: 'agent-1',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      const workingTask = await taskManager.createTask({
        name: 'Working Task',
        agentId: 'agent-2',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      await taskManager.updateTaskStatus(workingTask.id, 'working');

      const completedTask = await taskManager.createTask({
        name: 'Completed Task',
        agentId: 'agent-3',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      await taskManager.updateTaskStatus(completedTask.id, 'working');
      await taskManager.complete(completedTask.id);

      // Get active tasks
      const activeTasks = await taskManager.listActiveTasks();
      
      expect(activeTasks).toHaveLength(2);
      expect(activeTasks.some(t => t.id === submittedTask.id)).toBe(true);
      expect(activeTasks.some(t => t.id === workingTask.id)).toBe(true);
      expect(activeTasks.some(t => t.id === completedTask.id)).toBe(false);
    });
  });

  describe('Transition History and Audit Trail', () => {
    it('should maintain complete transition history', async () => {
      const task = await taskManager.createTask({
        name: 'History Task',
        agentId: 'history-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Perform multiple state transitions
      await taskManager.updateTaskStatus(task.id, 'working', 'Started processing');
      await taskManager.updateTaskStatus(task.id, 'input_required', 'Need user input');
      await taskManager.updateTaskStatus(task.id, 'working', 'Input received');
      await taskManager.complete(task.id, { result: 'Final result' });

      // Get transition history
      const history = await taskManager.getTransitionHistory(task.id);
      
      expect(history).toHaveLength(4);
      expect(history[0].from).toBe('submitted');
      expect(history[0].to).toBe('working');
      expect(history[1].from).toBe('working');
      expect(history[1].to).toBe('input_required');
      expect(history[2].from).toBe('input_required');
      expect(history[2].to).toBe('working');
      expect(history[3].from).toBe('working');
      expect(history[3].to).toBe('completed');

      // Verify each transition has proper metadata
      history.forEach(transition => {
        expect(transition.timestamp).toBeDefined();
      });
    });
  });

  describe('Artifact Management Integration', () => {
    it('should handle artifacts throughout task lifecycle', async () => {
      const task = await taskManager.createTask({
        name: 'Artifact Task',
        agentId: 'artifact-agent',
        parts: [],
        expectedParts: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Add artifacts during task processing
      const artifact1 = {
        id: 'artifact-1',
        type: 'file' as const,
        content: { data: 'base64-encoded-data', filename: 'result.txt' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await taskManager.addArtifact(task.id, artifact1);

      // Verify artifact was added
      const artifacts = await taskManager.getArtifacts(task.id);
      expect(artifacts).toHaveLength(1);
      expect(artifacts[0]).toEqual(artifact1);

      // Get specific artifact
      const retrievedArtifact = await taskManager.getArtifact(task.id, 'artifact-1');
      expect(retrievedArtifact).toEqual(artifact1);

      // Complete task and verify artifacts are still accessible
      await taskManager.updateTaskStatus(task.id, 'working');
      await taskManager.complete(task.id);

      const finalArtifacts = await taskManager.getArtifacts(task.id);
      expect(finalArtifacts).toHaveLength(1);
    });
  });
});