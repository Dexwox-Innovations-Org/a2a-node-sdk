/**
 * @module TaskStore
 * @description Interface for task storage backends
 * 
 * This module defines the contract for task storage backends in the A2A server.
 * Implementations of this interface provide persistence for tasks and their
 * associated artifacts.
 */

import { Task, Artifact, TaskState, TaskStatus, TaskTransition } from '@dexwox-labs/a2a-core';

/**
 * Interface for task storage backends
 * 
 * This interface defines the contract for task storage backends in the A2A server.
 * Implementations can use different storage mechanisms such as in-memory storage,
 * file system, or databases.
 * 
 * @example
 * ```typescript
 * // Example implementation with in-memory storage
 * class InMemoryTaskStore implements TaskStore {
 *   private tasks = new Map<string, Task>();
 *   private artifacts = new Map<string, Map<string, Artifact>>();
 *   
 *   async createTask(task: Omit<Task, 'id'>): Promise<Task> {
 *     const id = generateUniqueId();
 *     const newTask = { ...task, id };
 *     this.tasks.set(id, newTask);
 *     return newTask;
 *   }
 *   
 *   // ... other method implementations
 * }
 * ```
 */
export interface TaskStore {
  /**
   * Creates a new task
   *
   * @param task - Task data without ID
   * @returns Promise resolving to the created task with ID
   */
  createTask(task: Omit<Task, 'id'>): Promise<Task>;
  
  /**
   * Gets a task by ID
   *
   * @param id - ID of the task to retrieve
   * @returns Promise resolving to the task, or null if not found
   */
  getTask(id: string): Promise<Task | null>;
  
  /**
   * Updates a task with new data
   *
   * @param id - ID of the task to update
   * @param updates - Partial task data to update
   * @returns Promise resolving to the updated task
   */
  updateTask(id: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task>;
  
  /**
   * Updates a task's status (legacy method for backward compatibility)
   *
   * @param id - ID of the task to update
   * @param status - New status for the task (can be TaskState string or TaskStatus object)
   * @returns Promise resolving to the updated task
   * @deprecated Use updateTask with TaskStatus object instead
   */
  updateTaskStatus(id: string, status: TaskState | TaskStatus): Promise<Task>;
  
  /**
   * Cancels a task
   *
   * @param id - ID of the task to cancel
   * @returns Promise resolving when the task is canceled
   */
  cancelTask(id: string): Promise<void>;
  
  /**
   * Adds an artifact to a task
   *
   * @param taskId - ID of the task
   * @param artifact - Artifact to add
   * @returns Promise resolving when the artifact is added
   */
  addArtifact(taskId: string, artifact: Artifact): Promise<void>;
  
  /**
   * Gets all artifacts for a task
   *
   * @param taskId - ID of the task
   * @returns Promise resolving to an array of artifacts
   */
  getArtifacts(taskId: string): Promise<Artifact[]>;
  
  /**
   * Gets a specific artifact for a task
   *
   * @param taskId - ID of the task
   * @param artifactId - ID of the artifact
   * @returns Promise resolving to the artifact, or null if not found
   */
  getArtifact(taskId: string, artifactId: string): Promise<Artifact | null>;
  
  /**
   * Gets tasks by status
   *
   * @param statuses - Array of task statuses to filter by
   * @returns Promise resolving to an array of tasks with the specified statuses
   */
  getTasksByStatus(statuses: TaskState[]): Promise<Task[]>;

  // ============================================================================
  // ENHANCED METHODS FOR PHASE 2.3
  // ============================================================================

  /**
   * Gets tasks by multiple criteria with enhanced filtering
   *
   * @param criteria - Filtering criteria for tasks
   * @returns Promise resolving to an array of matching tasks
   */
  getTasksByCriteria?(criteria: {
    states?: TaskState[];
    agentId?: string;
    createdAfter?: string;
    createdBefore?: string;
    hasTransitions?: boolean;
    metadata?: Record<string, any>;
  }): Promise<Task[]>;

  /**
   * Gets transition history for a task
   *
   * @param taskId - ID of the task
   * @returns Promise resolving to an array of task transitions
   */
  getTaskTransitions?(taskId: string): Promise<TaskTransition[]>;

  /**
   * Gets task statistics and counts
   *
   * @returns Promise resolving to task statistics
   */
  getTaskStatistics?(): Promise<{
    total: number;
    byState: Record<TaskState, number>;
    oldestTask?: Task;
    newestTask?: Task;
  }>;

  /**
   * Archives completed or failed tasks older than specified date
   *
   * @param olderThan - ISO date string for archival cutoff
   * @param states - Optional array of states to archive (defaults to terminal states)
   * @returns Promise resolving to the number of archived tasks
   */
  archiveTasks?(olderThan: string, states?: TaskState[]): Promise<number>;

  /**
   * Searches tasks by content or metadata
   *
   * @param query - Search query string
   * @param fields - Optional array of fields to search in
   * @returns Promise resolving to an array of matching tasks
   */
  searchTasks?(query: string, fields?: string[]): Promise<Task[]>;

  // ============================================================================
  // ENHANCED METHODS FOR PHASE 2.4 - CONCURRENCY CONTROL & BATCH OPERATIONS
  // ============================================================================

  /**
   * Batch update multiple tasks with transaction-like behavior
   *
   * @param updates - Array of task updates with task IDs
   * @returns Promise resolving to an array of updated tasks
   */
  batchUpdateTasks?(updates: Array<{
    id: string;
    updates: Partial<Omit<Task, 'id'>>;
  }>): Promise<Task[]>;

  /**
   * Batch create multiple tasks efficiently
   *
   * @param tasks - Array of task data without IDs
   * @returns Promise resolving to an array of created tasks
   */
  batchCreateTasks?(tasks: Array<Omit<Task, 'id'>>): Promise<Task[]>;

  /**
   * Batch transition multiple tasks to new states
   *
   * @param transitions - Array of task state transitions
   * @returns Promise resolving to an array of updated tasks
   */
  batchTransitionTasks?(transitions: Array<{
    taskId: string;
    newState: TaskState;
    reason?: string;
    triggeredBy?: 'system' | 'agent' | 'user';
  }>): Promise<Task[]>;

  /**
   * Batch archive tasks based on criteria
   *
   * @param criteria - Criteria for selecting tasks to archive
   * @returns Promise resolving to the number of archived tasks
   */
  batchArchiveTasks?(criteria: {
    olderThan?: string;
    states?: TaskState[];
    agentId?: string;
    maxCount?: number;
  }): Promise<number>;

  /**
   * Acquires a lock for a specific task to prevent concurrent modifications
   *
   * @param taskId - ID of the task to lock
   * @param timeout - Optional timeout in milliseconds for lock acquisition
   * @returns Promise resolving to a lock release function
   */
  acquireTaskLock?(taskId: string, timeout?: number): Promise<() => Promise<void>>;

  /**
   * Checks if a task is currently locked
   *
   * @param taskId - ID of the task to check
   * @returns Promise resolving to true if the task is locked
   */
  isTaskLocked?(taskId: string): Promise<boolean>;

  /**
   * Performs a batch operation with automatic locking and rollback on failure
   *
   * @param operation - Function that performs the batch operation
   * @param taskIds - Array of task IDs that will be affected
   * @returns Promise resolving to the operation result
   */
  withBatchLock?<T>(
    operation: () => Promise<T>,
    taskIds: string[]
  ): Promise<T>;
}
