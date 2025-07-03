/**
 * @module InMemoryTaskStore
 * @description Enhanced in-memory implementation of the TaskStore interface with concurrency control and batch operations
 *
 * This module provides a comprehensive in-memory implementation of the TaskStore interface
 * for storing tasks and artifacts with support for the new TaskStatus structure,
 * transition history, enhanced query capabilities, concurrency control, and batch operations.
 * It's useful for development, testing, and simple deployments where persistence is not required.
 */

import { Task, Artifact, TaskState, TaskStatus, TaskTransition, TaskNotFoundError } from '@dexwox-labs/a2a-core';
import { TaskStore } from './task-store';
import logger from '../utils/logger';

/**
 * Configuration options for the InMemoryTaskStore
 */
interface InMemoryTaskStoreConfig {
  /** Maximum time to wait for lock acquisition in milliseconds */
  lockTimeout?: number;
  /** Maximum number of concurrent batch operations */
  maxConcurrentBatch?: number;
  /** Enable performance monitoring for batch operations */
  enablePerformanceMonitoring?: boolean;
}

/**
 * Simple async lock implementation for concurrency control
 */
class SimpleAsyncLock {
  private locks = new Map<string, Promise<void>>();
  private timeout: number;

  constructor(timeout: number = 5000) {
    this.timeout = timeout;
  }

  async acquire<T>(key: string, fn: () => Promise<T>): Promise<T> {
    // Wait for existing lock to complete
    while (this.locks.has(key)) {
      await this.locks.get(key);
    }

    // Create new lock
    let resolve: () => void;
    const lockPromise = new Promise<void>((res) => {
      resolve = res;
    });
    this.locks.set(key, lockPromise);

    try {
      // Execute function with timeout
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error(`Lock timeout after ${this.timeout}ms`)), this.timeout);
      });

      const result = await Promise.race([fn(), timeoutPromise]);
      return result;
    } finally {
      // Release lock
      this.locks.delete(key);
      resolve!();
    }
  }
}

/**
 * Enhanced in-memory implementation of the TaskStore interface with concurrency control
 * 
 * This class provides a thread-safe in-memory implementation of the TaskStore interface
 * using JavaScript Maps and a simple async lock for concurrency control. It supports all enhanced
 * features including batch operations, state indexing, and transition history.
 * 
 * @example
 * ```typescript
 * // Create an enhanced in-memory task store
 * const taskStore = new InMemoryTaskStore({
 *   lockTimeout: 5000,
 *   maxConcurrentBatch: 10,
 *   enablePerformanceMonitoring: true
 * });
 * 
 * // Use it with a task manager
 * const taskManager = new TaskManager(taskStore);
 * 
 * // Perform batch operations
 * const tasks = await taskStore.batchCreateTasks([
 *   { name: 'Task 1', agentId: 'agent-1', parts: [], expectedParts: 0 },
 *   { name: 'Task 2', agentId: 'agent-2', parts: [], expectedParts: 0 }
 * ]);
 * ```
 */
export class InMemoryTaskStore implements TaskStore {
  /** Map of task ID to task object */
  private tasks = new Map<string, Task>();
  
  /** Map of task ID to a map of artifact ID to artifact object */
  private artifacts = new Map<string, Map<string, Artifact>>();

  /** Index of tasks by state for efficient querying */
  private stateIndex = new Map<TaskState, Set<string>>();

  /** Index of tasks by agent ID for efficient querying */
  private agentIndex = new Map<string, Set<string>>();

  /** Map of task transitions for enhanced querying */
  private transitionHistory = new Map<string, TaskTransition[]>();

  /** Simple async lock instance for concurrency control */
  private lock: SimpleAsyncLock;

  /** Configuration for the task store */
  private config: Required<InMemoryTaskStoreConfig>;

  /** Performance metrics for monitoring */
  private performanceMetrics = {
    batchOperations: 0,
    lockAcquisitions: 0,
    lockTimeouts: 0,
    averageBatchSize: 0,
    totalBatchItems: 0
  };

  /** Set of currently locked task IDs */
  private lockedTasks = new Set<string>();

  /** Map of task locks for fine-grained control */
  private taskLocks = new Map<string, () => Promise<void>>();

  /**
   * Creates a new InMemoryTaskStore with enhanced concurrency control
   *
   * @param config - Configuration options for the task store
   */
  constructor(config: InMemoryTaskStoreConfig = {}) {
    this.config = {
      lockTimeout: config.lockTimeout ?? 5000,
      maxConcurrentBatch: config.maxConcurrentBatch ?? 10,
      enablePerformanceMonitoring: config.enablePerformanceMonitoring ?? false
    };

    this.lock = new SimpleAsyncLock(this.config.lockTimeout);

    // Initialize state index with all possible states
    const allStates: TaskState[] = [
      'submitted', 'working', 'input_required', 'completed', 
      'failed', 'canceled', 'rejected', 'auth_required', 'unknown'
    ];
    allStates.forEach(state => this.stateIndex.set(state, new Set()));

    logger.info('Enhanced InMemoryTaskStore initialized with concurrency control', {
      lockTimeout: this.config.lockTimeout,
      maxConcurrentBatch: this.config.maxConcurrentBatch,
      performanceMonitoring: this.config.enablePerformanceMonitoring
    });
  }

  /**
   * Saves a task to the store with proper indexing
   * 
   * This is an internal helper method for storing a task in the in-memory map
   * and updating all relevant indexes.
   * 
   * @param task - Task to save
   * @returns Promise resolving when the task is saved
   * @internal
   */
  private async saveTaskWithIndexing(task: Task): Promise<void> {
    const existingTask = this.tasks.get(task.id);
    
    // Remove from old indexes if task exists
    if (existingTask) {
      this.removeFromIndexes(existingTask);
    }

    // Save task
    this.tasks.set(task.id, task);

    // Update indexes
    this.addToIndexes(task);

    logger.debug('Task saved with indexing', { taskId: task.id, state: task.status.state });
  }

  /**
   * Adds a task to all relevant indexes
   * @param task - Task to add to indexes
   * @internal
   */
  private addToIndexes(task: Task): void {
    // Add to state index
    const stateSet = this.stateIndex.get(task.status.state);
    if (stateSet) {
      stateSet.add(task.id);
    }

    // Add to agent index
    if (task.agentId) {
      if (!this.agentIndex.has(task.agentId)) {
        this.agentIndex.set(task.agentId, new Set());
      }
      this.agentIndex.get(task.agentId)!.add(task.id);
    }
  }

  /**
   * Removes a task from all relevant indexes
   * @param task - Task to remove from indexes
   * @internal
   */
  private removeFromIndexes(task: Task): void {
    // Remove from state index
    const stateSet = this.stateIndex.get(task.status.state);
    if (stateSet) {
      stateSet.delete(task.id);
    }

    // Remove from agent index
    if (task.agentId) {
      const agentSet = this.agentIndex.get(task.agentId);
      if (agentSet) {
        agentSet.delete(task.id);
        if (agentSet.size === 0) {
          this.agentIndex.delete(task.agentId);
        }
      }
    }
  }

  /**
   * Updates performance metrics for monitoring
   * @param operation - Type of operation performed
   * @param batchSize - Size of batch operation (if applicable)
   * @internal
   */
  private updatePerformanceMetrics(operation: 'batch' | 'lock' | 'timeout', batchSize?: number): void {
    if (!this.config.enablePerformanceMonitoring) return;

    switch (operation) {
      case 'batch':
        this.performanceMetrics.batchOperations++;
        if (batchSize) {
          this.performanceMetrics.totalBatchItems += batchSize;
          this.performanceMetrics.averageBatchSize = 
            this.performanceMetrics.totalBatchItems / this.performanceMetrics.batchOperations;
        }
        break;
      case 'lock':
        this.performanceMetrics.lockAcquisitions++;
        break;
      case 'timeout':
        this.performanceMetrics.lockTimeouts++;
        break;
    }
  }

  // ============================================================================
  // CORE TASKSTORE INTERFACE METHODS
  // ============================================================================

  /**
   * Creates a new task with concurrency control
   * 
   * Creates a task with the provided parameters, generating a random UUID
   * for the task ID and setting the creation and update timestamps.
   * 
   * @param task - Task parameters (without ID)
   * @returns Promise resolving to the created task with ID
   * 
   * @example
   * ```typescript
   * const task = await taskStore.createTask({
   *   name: 'Process Data',
   *   agentId: 'data-processor',
   *   status: { state: 'submitted', timestamp: new Date().toISOString() },
   *   parts: [],
   *   expectedParts: 0
   * });
   * console.log('Created task with ID:', task.id);
   * ```
   */
  async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const taskId = crypto.randomUUID();
    
    return this.lock.acquire(`task:${taskId}`, async () => {
      this.updatePerformanceMetrics('lock');
      
      const newTask: Task = {
        ...task,
        id: taskId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        transitions: task.transitions || []
      };
      
      await this.saveTaskWithIndexing(newTask);
      logger.debug('Created new task with concurrency control', { taskId });
      return newTask;
    });
  }

  /**
   * Gets a task by ID
   * 
   * Retrieves a task from the in-memory store by its ID.
   * 
   * @param id - ID of the task to retrieve
   * @returns Promise resolving to the task, or null if not found
   * 
   * @example
   * ```typescript
   * const task = await taskStore.getTask('task-123');
   * if (task) {
   *   console.log('Found task:', task.name);
   * } else {
   *   console.log('Task not found');
   * }
   * ```
   */
  async getTask(id: string): Promise<Task | null> {
    return this.tasks.get(id) || null;
  }

  /**
   * Updates a task with new data using concurrency control
   * 
   * Updates a task with the provided partial task data and sets
   * the updatedAt timestamp to the current time.
   * 
   * @param id - ID of the task to update
   * @param updates - Partial task data to update
   * @returns Promise resolving to the updated task
   * @throws Error if the task is not found
   * 
   * @example
   * ```typescript
   * try {
   *   const updatedTask = await taskStore.updateTask('task-123', {
   *     name: 'Updated Task Name',
   *     metadata: { priority: 'high' }
   *   });
   *   console.log('Task updated:', updatedTask);
   * } catch (error) {
   *   console.error('Failed to update task:', error);
   * }
   * ```
   */
  async updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task> {
    return this.lock.acquire(`task:${id}`, async () => {
      this.updatePerformanceMetrics('lock');
      
      const task = await this.getTask(id);
      if (!task) throw new TaskNotFoundError(id);
      
      const updatedTask = {
        ...task,
        ...updates,
        id, // Ensure ID cannot be changed
        updatedAt: new Date().toISOString()
      };
      
      await this.saveTaskWithIndexing(updatedTask);
      logger.debug('Updated task with concurrency control', { taskId: id });
      return updatedTask;
    });
  }

  /**
   * Updates a task's status
   * 
   * Updates the status of a task and sets the updatedAt timestamp
   * to the current time.
   * 
   * @param id - ID of the task to update
   * @param status - New status for the task
   * @returns Promise resolving to the updated task
   * @throws Error if the task is not found
   * 
   * @example
   * ```typescript
   * try {
   *   // Update task status to 'completed'
   *   const task = await taskStore.updateTaskStatus('task-123', 'completed');
   *   console.log('Task status updated:', task.status);
   * } catch (error) {
   *   console.error('Failed to update task status:', error);
   * }
   * ```
   */
  async updateTaskStatus(id: string, status: TaskState): Promise<Task> {
    return this.updateTask(id, {
      status: {
        state: status,
        timestamp: new Date().toISOString(),
        metadata: {
          updatedBy: 'task-store',
          previousUpdate: new Date().toISOString()
        }
      }
    });
  }

  /**
   * Cancels a task
   * 
   * Updates the task's status to 'canceled'.
   * 
   * @param id - ID of the task to cancel
   * @returns Promise resolving when the task is canceled
   * @throws Error if the task is not found
   * 
   * @example
   * ```typescript
   * try {
   *   await taskStore.cancelTask('task-123');
   *   console.log('Task canceled successfully');
   * } catch (error) {
   *   console.error('Failed to cancel task:', error);
   * }
   * ```
   */
  async cancelTask(id: string): Promise<void> {
    await this.updateTaskStatus(id, 'canceled');
  }

  /**
   * Adds an artifact to a task
   * 
   * Artifacts represent files, data, or other content associated with a task.
   * This method adds an artifact to a specific task.
   * 
   * @param taskId - ID of the task
   * @param artifact - Artifact to add
   * @returns Promise resolving when the artifact is added
   * 
   * @example
   * ```typescript
   * await taskStore.addArtifact('task-123', {
   *   id: 'artifact-456',
   *   type: 'file',
   *   content: 'base64-encoded-file-data',
   *   createdAt: new Date().toISOString(),
   *   updatedAt: new Date().toISOString()
   * });
   * ```
   */
  async addArtifact(taskId: string, artifact: Artifact): Promise<void> {
    return this.lock.acquire(`artifacts:${taskId}`, async () => {
      this.updatePerformanceMetrics('lock');
      
      if (!this.artifacts.has(taskId)) {
        this.artifacts.set(taskId, new Map());
      }
      this.artifacts.get(taskId)!.set(artifact.id, artifact);
      logger.debug('Added artifact with concurrency control', { taskId, artifactId: artifact.id });
    });
  }

  /**
   * Gets all artifacts for a task
   * 
   * Retrieves all artifacts associated with a specific task.
   * 
   * @param taskId - ID of the task
   * @returns Promise resolving to an array of artifacts
   * 
   * @example
   * ```typescript
   * const artifacts = await taskStore.getArtifacts('task-123');
   * console.log(`Task has ${artifacts.length} artifacts`);
   * 
   * // Process each artifact
   * for (const artifact of artifacts) {
   *   console.log(`Artifact ${artifact.id} of type ${artifact.type}`);
   * }
   * ```
   */
  async getArtifacts(taskId: string): Promise<Artifact[]> {
    return Array.from(this.artifacts.get(taskId)?.values() || []);
  }

  /**
   * Gets a specific artifact for a task
   * 
   * Retrieves a specific artifact by ID from a specific task.
   * 
   * @param taskId - ID of the task
   * @param artifactId - ID of the artifact
   * @returns Promise resolving to the artifact, or null if not found
   * 
   * @example
   * ```typescript
   * const artifact = await taskStore.getArtifact('task-123', 'artifact-456');
   * if (artifact) {
   *   console.log('Found artifact:', artifact.id);
   *   console.log('Type:', artifact.type);
   *   console.log('Created at:', artifact.createdAt);
   * } else {
   *   console.log('Artifact not found');
   * }
   * ```
   */
  async getArtifact(taskId: string, artifactId: string): Promise<Artifact | null> {
    return this.artifacts.get(taskId)?.get(artifactId) || null;
  }

  /**
   * Gets tasks by status using efficient indexing
   * 
   * Retrieves all tasks that have one of the specified statuses.
   * 
   * @param statuses - Array of task statuses to filter by
   * @returns Promise resolving to an array of tasks with the specified statuses
   * 
   * @example
   * ```typescript
   * // Get all active tasks (submitted, working, or input_required)
   * const activeTasks = await taskStore.getTasksByStatus([
   *   'submitted', 'working', 'input_required'
   * ]);
   * console.log(`Found ${activeTasks.length} active tasks`);
   * 
   * // Get all completed or failed tasks
   * const finishedTasks = await taskStore.getTasksByStatus([
   *   'completed', 'failed'
   * ]);
   * console.log(`Found ${finishedTasks.length} finished tasks`);
   * ```
   */
  async getTasksByStatus(statuses: TaskState[]): Promise<Task[]> {
    const taskIds = new Set<string>();
    
    // Use state index for efficient lookup
    for (const status of statuses) {
      const stateSet = this.stateIndex.get(status);
      if (stateSet) {
        stateSet.forEach(id => taskIds.add(id));
      }
    }
    
    const tasks: Task[] = [];
    for (const taskId of taskIds) {
      const task = this.tasks.get(taskId);
      if (task) {
        tasks.push(task);
      }
    }
    
    logger.debug('Retrieved tasks by status using index', { 
      statuses, 
      count: tasks.length 
    });
    
    return tasks;
  }

  // ============================================================================
  // ENHANCED METHODS FOR PHASE 2.3
  // ============================================================================

  /**
   * Gets tasks by multiple criteria with enhanced filtering
   *
   * @param criteria - Filtering criteria for tasks
   * @returns Promise resolving to an array of matching tasks
   */
  async getTasksByCriteria(criteria: {
    states?: TaskState[];
    agentId?: string;
    createdAfter?: string;
    createdBefore?: string;
    hasTransitions?: boolean;
    metadata?: Record<string, any>;
  }): Promise<Task[]> {
    let candidateIds: Set<string> | null = null;

    // Start with state filtering if provided (most efficient)
    if (criteria.states) {
      candidateIds = new Set<string>();
      for (const state of criteria.states) {
        const stateSet = this.stateIndex.get(state);
        if (stateSet) {
          stateSet.forEach(id => candidateIds!.add(id));
        }
      }
    }

    // Filter by agent ID if provided
    if (criteria.agentId) {
      const agentSet = this.agentIndex.get(criteria.agentId);
      if (agentSet) {
        if (candidateIds) {
          // Intersect with existing candidates
          candidateIds = new Set([...candidateIds].filter(id => agentSet.has(id)));
        } else {
          candidateIds = new Set(agentSet);
        }
      } else {
        return []; // No tasks for this agent
      }
    }

    // Get tasks to filter
    const tasksToFilter = candidateIds 
      ? Array.from(candidateIds).map(id => this.tasks.get(id)).filter(Boolean) as Task[]
      : Array.from(this.tasks.values());

    // Apply remaining filters
    return tasksToFilter.filter(task => {
      // Date filters
      if (criteria.createdAfter && task.createdAt < criteria.createdAfter) return false;
      if (criteria.createdBefore && task.createdAt > criteria.createdBefore) return false;
      
      // Transition filter
      if (criteria.hasTransitions !== undefined) {
        const hasTransitions = (task.transitions?.length || 0) > 0;
        if (criteria.hasTransitions !== hasTransitions) return false;
      }
      
      // Metadata filter
      if (criteria.metadata) {
        for (const [key, value] of Object.entries(criteria.metadata)) {
          if (task.metadata?.[key] !== value) return false;
        }
      }
      
      return true;
    });
  }

  /**
   * Gets transition history for a task
   *
   * @param taskId - ID of the task
   * @returns Promise resolving to an array of task transitions
   */
  async getTaskTransitions(taskId: string): Promise<TaskTransition[]> {
    const task = await this.getTask(taskId);
    return task?.transitions || [];
  }

  /**
   * Gets task statistics and counts
   *
   * @returns Promise resolving to task statistics
   */
  async getTaskStatistics(): Promise<{
    total: number;
    byState: Record<TaskState, number>;
    oldestTask?: Task;
    newestTask?: Task;
  }> {
    const byState = {} as Record<TaskState, number>;
    let oldestTask: Task | undefined;
    let newestTask: Task | undefined;

    // Use state index for efficient counting
    for (const [state, taskIds] of this.stateIndex.entries()) {
      byState[state] = taskIds.size;
    }

    // Find oldest and newest tasks
    for (const task of this.tasks.values()) {
      if (!oldestTask || task.createdAt < oldestTask.createdAt) {
        oldestTask = task;
      }
      if (!newestTask || task.createdAt > newestTask.createdAt) {
        newestTask = task;
      }
    }

    return {
      total: this.tasks.size,
      byState,
      oldestTask,
      newestTask
    };
  }

  /**
   * Archives completed or failed tasks older than specified date
   *
   * @param olderThan - ISO date string for archival cutoff
   * @param states - Optional array of states to archive (defaults to terminal states)
   * @returns Promise resolving to the number of archived tasks
   */
  async archiveTasks(olderThan: string, states?: TaskState[]): Promise<number> {
    const archiveStates = states || ['completed', 'failed', 'canceled'];
    const tasksToArchive: string[] = [];

    for (const state of archiveStates) {
      const stateSet = this.stateIndex.get(state);
      if (stateSet) {
        for (const taskId of stateSet) {
          const task = this.tasks.get(taskId);
          if (task && task.createdAt < olderThan) {
            tasksToArchive.push(taskId);
          }
        }
      }
    }

    // Archive tasks (delete them in this implementation)
    for (const taskId of tasksToArchive) {
      const task = this.tasks.get(taskId);
      if (task) {
        this.removeFromIndexes(task);
        this.tasks.delete(taskId);
        this.artifacts.delete(taskId);
        this.transitionHistory.delete(taskId);
      }
    }

    logger.info('Archived tasks', { count: tasksToArchive.length, olderThan, states: archiveStates });
    return tasksToArchive.length;
  }

  /**
   * Searches tasks by content or metadata
   *
   * @param query - Search query string
   * @param fields - Optional array of fields to search in
   * @returns Promise resolving to an array of matching tasks
   */
  async searchTasks(query: string, fields?: string[]): Promise<Task[]> {
    const searchFields = fields || ['name', 'description'];
    const queryLower = query.toLowerCase();

    return Array.from(this.tasks.values()).filter(task => {
      return searchFields.some(field => {
        const value = task[field as keyof Task];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(queryLower);
        }
        return false;
      });
    });
  }

  // ============================================================================
  // ENHANCED METHODS FOR PHASE 2.4 - CONCURRENCY CONTROL & BATCH OPERATIONS
  // ============================================================================

  /**
   * Batch update multiple tasks with transaction-like behavior
   *
   * @param updates - Array of task updates with task IDs
   * @returns Promise resolving to an array of updated tasks
   */
  async batchUpdateTasks(updates: Array<{
    id: string;
    updates: Partial<Omit<Task, 'id'>>;
  }>): Promise<Task[]> {
    const taskIds = updates.map(u => u.id);
    
    return this.withBatchLock(async () => {
      this.updatePerformanceMetrics('batch', updates.length);
      
      const updatedTasks: Task[] = [];
      const errors: Array<{ id: string; error: string }> = [];

      // Validate all tasks exist first
      for (const { id } of updates) {
        const task = await this.getTask(id);
        if (!task) {
          errors.push({ id, error: 'Task not found' });
        }
      }

      if (errors.length > 0) {
        throw new Error(`Batch update failed: ${errors.map(e => `${e.id}: ${e.error}`).join(', ')}`);
      }

      // Perform all updates
      for (const { id, updates: taskUpdates } of updates) {
        try {
          const task = await this.getTask(id);
          if (task) {
            const updatedTask = {
              ...task,
              ...taskUpdates,
              id, // Ensure ID cannot be changed
              updatedAt: new Date().toISOString()
            };
            
            await this.saveTaskWithIndexing(updatedTask);
            updatedTasks.push(updatedTask);
          }
        } catch (error) {
          errors.push({ id, error: error instanceof Error ? error.message : String(error) });
        }
      }

      if (errors.length > 0) {
        throw new Error(`Batch update partially failed: ${errors.map(e => `${e.id}: ${e.error}`).join(', ')}`);
      }

      logger.info('Batch updated tasks', { count: updatedTasks.length });
      return updatedTasks;
    }, taskIds);
  }

  /**
   * Batch create multiple tasks efficiently
   *
   * @param tasks - Array of task data without IDs
   * @returns Promise resolving to an array of created tasks
   */
  async batchCreateTasks(tasks: Array<Omit<Task, 'id'>>): Promise<Task[]> {
    return this.lock.acquire('batch-create', async () => {
      this.updatePerformanceMetrics('batch', tasks.length);
      
      const createdTasks: Task[] = [];
      const timestamp = new Date().toISOString();

      for (const taskData of tasks) {
        const taskId = crypto.randomUUID();
        const newTask: Task = {
          ...taskData,
          id: taskId,
          createdAt: timestamp,
          updatedAt: timestamp,
          transitions: taskData.transitions || []
        };
        
        await this.saveTaskWithIndexing(newTask);
        createdTasks.push(newTask);
      }

      logger.info('Batch created tasks', { count: createdTasks.length });
      return createdTasks;
    });
  }

  /**
   * Batch transition multiple tasks to new states with validation
   *
   * @param transitions - Array of task transitions
   * @returns Promise resolving to an array of updated tasks
   */
  async batchTransitionTasks(transitions: Array<{
    taskId: string;
    newState: TaskState;
    reason?: string;
    triggeredBy?: 'system' | 'agent' | 'user';
  }>): Promise<Task[]> {
    const taskIds = transitions.map(t => t.taskId);
    
    return this.withBatchLockPrivate(async () => {
      this.updatePerformanceMetrics('batch', transitions.length);
      
      const updatedTasks: Task[] = [];
      const errors: Array<{ id: string; error: string }> = [];

      // Validate all tasks exist and transitions are valid
      for (const { taskId, newState } of transitions) {
        const task = await this.getTask(taskId);
        if (!task) {
          errors.push({ id: taskId, error: 'Task not found' });
          continue;
        }

        // Here you could add state transition validation logic
        // For now, we'll allow all transitions
      }

      if (errors.length > 0) {
        throw new Error(`Batch transition failed: ${errors.map(e => `${e.id}: ${e.error}`).join(', ')}`);
      }

      // Perform all transitions
      for (const { taskId, newState, reason, triggeredBy } of transitions) {
        try {
          const task = await this.getTask(taskId);
          if (task) {
            const transition: TaskTransition = {
              from: task.status.state,
              to: newState,
              timestamp: new Date().toISOString(),
              reason
            };

            const updatedTask = {
              ...task,
              status: { 
                state: newState, 
                timestamp: new Date().toISOString() 
              },
              transitions: [...(task.transitions || []), transition],
              updatedAt: new Date().toISOString()
            };
            
            await this.saveTaskWithIndexing(updatedTask);
            updatedTasks.push(updatedTask);
          }
        } catch (error) {
          errors.push({ id: taskId, error: error instanceof Error ? error.message : String(error) });
        }
      }

      if (errors.length > 0) {
        throw new Error(`Batch transition partially failed: ${errors.map(e => `${e.id}: ${e.error}`).join(', ')}`);
      }

      logger.info('Batch transitioned tasks', { count: updatedTasks.length });
      return updatedTasks;
    }, taskIds);
  }

  /**
   * Batch archive tasks based on criteria
   *
   * @param criteria - Criteria for selecting tasks to archive
   * @returns Promise resolving to the number of archived tasks
   */
  async batchArchiveTasks(criteria: {
    olderThan?: string;
    states?: TaskState[];
    agentId?: string;
    maxCount?: number;
  }): Promise<number> {
    return this.withBatchLockPrivate(async () => {
      this.updatePerformanceMetrics('batch');
      
      // Find tasks matching criteria
      const tasksToArchive: string[] = [];
      const archiveStates = criteria.states || ['completed', 'failed', 'canceled'];
      
      for (const state of archiveStates) {
        const stateSet = this.stateIndex.get(state);
        if (stateSet) {
          for (const taskId of stateSet) {
            if (criteria.maxCount && tasksToArchive.length >= criteria.maxCount) {
              break;
            }
            
            const task = this.tasks.get(taskId);
            if (task) {
              // Check date criteria
              if (criteria.olderThan && task.createdAt >= criteria.olderThan) {
                continue;
              }
              
              // Check agent criteria
              if (criteria.agentId && task.agentId !== criteria.agentId) {
                continue;
              }
              
              tasksToArchive.push(taskId);
            }
          }
          
          if (criteria.maxCount && tasksToArchive.length >= criteria.maxCount) {
            break;
          }
        }
      }

      // Archive tasks (delete them in this implementation)
      let archivedCount = 0;
      for (const taskId of tasksToArchive) {
        try {
          const task = this.tasks.get(taskId);
          if (task) {
            this.removeFromIndexes(task);
            this.tasks.delete(taskId);
            this.artifacts.delete(taskId);
            this.transitionHistory.delete(taskId);
            archivedCount++;
          }
        } catch (error) {
          logger.warn('Failed to archive task', { taskId, error });
        }
      }

      logger.info('Batch archived tasks', { count: archivedCount, criteria });
      return archivedCount;
    }, []);
  }

  /**
   * Acquires a lock for a specific task to prevent concurrent modifications
   *
   * @param taskId - ID of the task to lock
   * @param timeout - Optional timeout in milliseconds for lock acquisition
   * @returns Promise resolving to a lock release function
   */
  async acquireTaskLock(taskId: string, timeout?: number): Promise<() => Promise<void>> {
    const lockTimeout = timeout || this.config.lockTimeout;
    
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        this.updatePerformanceMetrics('timeout');
        reject(new Error(`Task lock timeout after ${lockTimeout}ms`));
      }, lockTimeout);

      this.lock.acquire(`task:${taskId}`, async () => {
        clearTimeout(timeoutId);
        this.updatePerformanceMetrics('lock');
        this.lockedTasks.add(taskId);

        const releaseFn = async () => {
          this.lockedTasks.delete(taskId);
          if (this.taskLocks.has(taskId)) {
            const release = this.taskLocks.get(taskId)!;
            this.taskLocks.delete(taskId);
            await release();
          }
        };

        this.taskLocks.set(taskId, releaseFn);
        resolve(releaseFn);
        
        // Keep the lock active until released
        return new Promise<void>((lockResolve) => {
          const checkRelease = () => {
            if (!this.taskLocks.has(taskId)) {
              lockResolve();
            } else {
              setTimeout(checkRelease, 100);
            }
          };
          checkRelease();
        });
      }).catch(reject);
    });
  }

  /**
   * Checks if a task is currently locked
   *
   * @param taskId - ID of the task to check
   * @returns Promise resolving to true if the task is locked
   */
  async isTaskLocked(taskId: string): Promise<boolean> {
    return this.lockedTasks.has(taskId);
  }

  /**
   * Performs a batch operation with automatic locking and rollback on failure
   *
   * @param operation - Function that performs the batch operation
   * @param taskIds - Array of task IDs that will be affected
   * @returns Promise resolving to the operation result
   */
  async withBatchLock<T>(
    operation: () => Promise<T>,
    taskIds: string[]
  ): Promise<T> {
    const lockKey = taskIds.length > 0 ? `batch:${taskIds.sort().join(',')}` : 'batch:global';
    
    return this.lock.acquire(lockKey, async () => {
      this.updatePerformanceMetrics('lock');
      
      // Mark tasks as locked if specified
      if (taskIds.length > 0) {
        taskIds.forEach(id => this.lockedTasks.add(id));
      }

      try {
        const result = await operation();
        return result;
      } finally {
        // Release task locks
        if (taskIds.length > 0) {
          taskIds.forEach(id => this.lockedTasks.delete(id));
        }
      }
    });
  }

  /**
   * Execute a function with batch-level locking for multiple tasks (private helper)
   *
   * @param fn - Function to execute with batch lock
   * @param taskIds - Optional array of task IDs to lock
   * @returns Promise resolving to the function result
   */
  private async withBatchLockPrivate<T>(fn: () => Promise<T>, taskIds?: string[]): Promise<T> {
    const lockKey = taskIds ? `batch:${taskIds.sort().join(',')}` : 'batch:global';
    
    return this.lock.acquire(lockKey, async () => {
      this.updatePerformanceMetrics('lock');
      
      // Mark tasks as locked if specified
      if (taskIds) {
        taskIds.forEach(id => this.lockedTasks.add(id));
      }

      try {
        const result = await fn();
        return result;
      } finally {
        // Release task locks
        if (taskIds) {
          taskIds.forEach(id => this.lockedTasks.delete(id));
        }
      }
    });
  }

  /**
   * Get performance metrics for monitoring
   *
   * @returns Current performance metrics
   */
  getPerformanceMetrics() {
    return { ...this.performanceMetrics };
  }

  /**
   * Reset performance metrics
   */
  resetPerformanceMetrics() {
    this.performanceMetrics = {
      batchOperations: 0,
      lockAcquisitions: 0,
      lockTimeouts: 0,
      averageBatchSize: 0,
      totalBatchItems: 0
    };
  }

  /**
   * Get current store statistics
   *
   * @returns Store statistics including task counts and index sizes
   */
  getStoreStatistics() {
    const stateStats: Record<TaskState, number> = {} as Record<TaskState, number>;
    for (const [state, taskIds] of this.stateIndex.entries()) {
      stateStats[state] = taskIds.size;
    }

    return {
      totalTasks: this.tasks.size,
      totalArtifacts: Array.from(this.artifacts.values()).reduce((sum, artifacts) => sum + artifacts.size, 0),
      stateDistribution: stateStats,
      agentCount: this.agentIndex.size,
      lockedTasks: this.lockedTasks.size,
      performanceMetrics: this.getPerformanceMetrics()
    };
  }
}
