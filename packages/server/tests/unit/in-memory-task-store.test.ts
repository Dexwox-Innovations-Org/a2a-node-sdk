import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryTaskStore } from '../../src/tasks/in-memory-task-store';
import { TaskState, Task, type TaskStatus } from '@dexwox-labs/a2a-core';

describe('Enhanced InMemoryTaskStore', () => {
  let taskStore: InMemoryTaskStore;

  beforeEach(() => {
    taskStore = new InMemoryTaskStore({
      lockTimeout: 1000,
      maxConcurrentBatch: 5,
      enablePerformanceMonitoring: true
    });
  });

  describe('Basic Operations', () => {
    it('should create and retrieve tasks', async () => {
      const taskData = {
        name: 'Test Task',
        agentId: 'test-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const created = await taskStore.createTask(taskData);
      const retrieved = await taskStore.getTask(created.id);
      
      expect(retrieved).toBeDefined();
      expect(retrieved?.id).toBe(created.id);
      expect(retrieved?.status.state).toBe('submitted');
      expect(retrieved?.name).toBe('Test Task');
    });

    it('should update task status', async () => {
      const taskData = {
        name: 'Test Task 2',
        agentId: 'test-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const created = await taskStore.createTask(taskData);
      
      const updated = await taskStore.updateTaskStatus(created.id, 'working');
      
      expect(updated.status.state).toBe('working');
      expect(updated.id).toBe(created.id);
    });

    it('should get tasks by status', async () => {
      // Create tasks with different states
      const tasks = [
        {
          name: 'Task 1',
          agentId: 'agent-1',
          status: { state: 'submitted' as TaskState, timestamp: new Date().toISOString(), metadata: {} } as TaskStatus,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          name: 'Task 2',
          agentId: 'agent-1',
          status: { state: 'working' as TaskState, timestamp: new Date().toISOString(), metadata: {} } as TaskStatus,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          name: 'Task 3',
          agentId: 'agent-1',
          status: { state: 'submitted' as TaskState, timestamp: new Date().toISOString(), metadata: {} } as TaskStatus,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];

      for (const task of tasks) {
        await taskStore.createTask(task);
      }

      const submittedTasks = await taskStore.getTasksByStatus(['submitted']);
      const workingTasks = await taskStore.getTasksByStatus(['working']);

      expect(submittedTasks).toHaveLength(2);
      expect(workingTasks).toHaveLength(1);
      expect(submittedTasks.map(t => t.name)).toContain('Task 1');
      expect(submittedTasks.map(t => t.name)).toContain('Task 3');
      expect(workingTasks[0].name).toBe('Task 2');
    });
  });

  describe('Enhanced Features - Batch Operations', () => {
    it('should perform batch task updates', async () => {
      // Create multiple tasks
      const tasks = Array.from({ length: 3 }, (_, i) => ({
        name: `Batch Task ${i + 1}`,
        agentId: 'batch-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      const createdTasks = [];
      for (const task of tasks) {
        const created = await taskStore.createTask(task);
        createdTasks.push(created);
      }

      // Batch update to WORKING state
      const updates = createdTasks.map(task => ({
        id: task.id,
        updates: {
          status: {
            state: 'working' as TaskState,
            timestamp: new Date().toISOString(),
            metadata: { batchUpdate: true }
          } as TaskStatus
        }
      }));

      const results = await taskStore.batchUpdateTasks!(updates);
      
      expect(results).toHaveLength(3);

      // Verify all tasks were updated
      for (const task of createdTasks) {
        const updated = await taskStore.getTask(task.id);
        expect(updated?.status.state).toBe('working');
        expect(updated?.status.metadata?.batchUpdate).toBe(true);
      }
    });

    it('should handle batch create operations', async () => {
      const newTasks = Array.from({ length: 4 }, (_, i) => ({
        name: `Batch Create ${i + 1}`,
        agentId: 'batch-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: { batch: true }
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      const results = await taskStore.batchCreateTasks!(newTasks);
      
      expect(results).toHaveLength(4);

      // Verify all tasks were created
      for (const task of results) {
        const created = await taskStore.getTask(task.id);
        expect(created).toBeDefined();
        expect(created?.status.metadata?.batch).toBe(true);
      }
    });

    it('should perform batch state transitions', async () => {
      // Create tasks in SUBMITTED state
      const tasks = Array.from({ length: 3 }, (_, i) => ({
        name: `Transition Task ${i + 1}`,
        agentId: 'transition-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      const createdTasks = [];
      for (const task of tasks) {
        const created = await taskStore.createTask(task);
        createdTasks.push(created);
      }

      // Batch transition to WORKING
      const transitions = createdTasks.map(task => ({
        taskId: task.id,
        newState: 'working' as TaskState,
        reason: 'Batch transition test'
      }));

      const results = await taskStore.batchTransitionTasks!(transitions);
      
      expect(results).toHaveLength(3);

      // Verify transitions
      for (const task of createdTasks) {
        const updated = await taskStore.getTask(task.id);
        expect(updated?.status.state).toBe('working');
        expect(updated?.transitions).toBeDefined();
        expect(updated?.transitions?.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Enhanced Features - Concurrency Control', () => {
    it('should handle concurrent task updates safely', async () => {
      const taskData = {
        name: 'Concurrent Task',
        agentId: 'test-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: { counter: 0 }
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const created = await taskStore.createTask(taskData);

      // Simulate concurrent updates
      const concurrentUpdates = Array.from({ length: 5 }, (_, i) => 
        taskStore.updateTaskStatus(created.id, 'working')
      );

      await Promise.all(concurrentUpdates);

      const finalTask = await taskStore.getTask(created.id);
      expect(finalTask?.status.state).toBe('working');
    });

    it('should respect batch operation limits', async () => {
      // Create more tasks than the batch limit (5)
      const largeBatch = Array.from({ length: 8 }, (_, i) => ({
        name: `Large Batch ${i + 1}`,
        agentId: 'large-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      // This should process in chunks due to maxConcurrentBatch: 5
      const results = await taskStore.batchCreateTasks!(largeBatch);
      
      expect(results).toHaveLength(8);

      // Verify all tasks were created
      for (const task of results) {
        const created = await taskStore.getTask(task.id);
        expect(created).toBeDefined();
      }
    });
  });

  describe('Enhanced Features - Advanced Queries', () => {
    it('should efficiently query tasks by criteria', async () => {
      // Create tasks for different agents and states
      const testData = [
        { agentId: 'agent-1', state: 'submitted' as TaskState, count: 3 },
        { agentId: 'agent-1', state: 'working' as TaskState, count: 2 },
        { agentId: 'agent-2', state: 'submitted' as TaskState, count: 1 },
        { agentId: 'agent-2', state: 'completed' as TaskState, count: 2 }
      ];

      let taskCounter = 0;
      for (const { agentId, state, count } of testData) {
        for (let i = 0; i < count; i++) {
          await taskStore.createTask({
            name: `Indexed Task ${++taskCounter}`,
            agentId,
            status: {
              state,
              timestamp: new Date().toISOString(),
              metadata: {}
            } as TaskStatus,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          });
        }
      }

      // Test criteria-based queries
      const agent1Tasks = await taskStore.getTasksByCriteria!({
        agentId: 'agent-1'
      });
      const agent2Tasks = await taskStore.getTasksByCriteria!({
        agentId: 'agent-2'
      });
      
      expect(agent1Tasks).toHaveLength(5); // 3 + 2
      expect(agent2Tasks).toHaveLength(3); // 1 + 2

      // Test state-specific queries
      const submittedTasks = await taskStore.getTasksByCriteria!({
        states: ['submitted']
      });
      const workingTasks = await taskStore.getTasksByCriteria!({
        states: ['working']
      });
      const completedTasks = await taskStore.getTasksByCriteria!({
        states: ['completed']
      });

      expect(submittedTasks).toHaveLength(4); // 3 + 1
      expect(workingTasks).toHaveLength(2);
      expect(completedTasks).toHaveLength(2);
    });
  });

  describe('Enhanced Features - Performance Monitoring', () => {
    it('should track performance metrics when enabled', async () => {
      // Performance monitoring is enabled in beforeEach
      const taskData = {
        name: 'Perf Task',
        agentId: 'perf-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const created = await taskStore.createTask(taskData);
      
      // Perform some operations
      await taskStore.updateTaskStatus(created.id, 'working');

      const batchResults = await taskStore.batchUpdateTasks!([{
        id: created.id,
        updates: {
          status: {
            state: 'completed' as TaskState,
            timestamp: new Date().toISOString(),
            metadata: {}
          } as TaskStatus
        }
      }]);

      expect(batchResults).toHaveLength(1);
      
      // Performance metrics should be tracked internally
      const metrics = taskStore.getPerformanceMetrics();
      expect(metrics.batchOperations).toBeGreaterThan(0);
      expect(metrics.lockAcquisitions).toBeGreaterThan(0);
    });
  });

  describe('Error Handling', () => {
    it('should handle non-existent task updates gracefully', async () => {
      await expect(
        taskStore.updateTask('non-existent', { name: 'Updated' })
      ).rejects.toThrow('Task non-existent not found');
    });

    it('should handle batch operations with some failures', async () => {
      // Create one valid task
      const validTask = await taskStore.createTask({
        name: 'Valid Task',
        agentId: 'test-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      // Try to update both valid and invalid tasks
      const updates = [
        {
          id: validTask.id,
          updates: {
            status: {
              state: 'working' as TaskState,
              timestamp: new Date().toISOString(),
              metadata: {}
            } as TaskStatus
          }
        },
        {
          id: 'invalid-task',
          updates: {
            status: {
              state: 'working' as TaskState,
              timestamp: new Date().toISOString(),
              metadata: {}
            } as TaskStatus
          }
        }
      ];

      // This should throw an error due to the invalid task
      await expect(
        taskStore.batchUpdateTasks!(updates)
      ).rejects.toThrow();
    });
  });

  describe('Artifact Management', () => {
    it('should add and retrieve artifacts', async () => {
      const task = await taskStore.createTask({
        name: 'Artifact Task',
        agentId: 'test-agent',
        status: {
          state: 'submitted' as TaskState,
          timestamp: new Date().toISOString(),
          metadata: {}
        } as TaskStatus,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      const artifact = {
        id: 'artifact-1',
        type: 'text' as const,
        content: { text: 'Hello World' },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      await taskStore.addArtifact(task.id, artifact);
      
      const artifacts = await taskStore.getArtifacts(task.id);
      expect(artifacts).toHaveLength(1);
      expect(artifacts[0].id).toBe('artifact-1');
      expect(artifacts[0].type).toBe('text');

      const specificArtifact = await taskStore.getArtifact(task.id, 'artifact-1');
      expect(specificArtifact).toBeDefined();
      expect(specificArtifact?.id).toBe('artifact-1');
    });
  });

  describe('Task Statistics', () => {
    it('should provide task statistics', async () => {
      // Create some tasks with different states
      const tasks = [
        { state: 'submitted' as TaskState },
        { state: 'working' as TaskState },
        { state: 'completed' as TaskState },
        { state: 'submitted' as TaskState }
      ];

      for (const { state } of tasks) {
        await taskStore.createTask({
          name: 'Stats Task',
          agentId: 'stats-agent',
          status: {
            state,
            timestamp: new Date().toISOString(),
            metadata: {}
          } as TaskStatus,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }

      const stats = await taskStore.getTaskStatistics!();
      
      expect(stats.total).toBe(4);
      expect(stats.byState.submitted).toBe(2);
      expect(stats.byState.working).toBe(1);
      expect(stats.byState.completed).toBe(1);
      expect(stats.oldestTask).toBeDefined();
      expect(stats.newestTask).toBeDefined();
    });
  });
});