/**
 * @module TaskManager
 * @description Enhanced task lifecycle and state management for the A2A server
 *
 * This module provides a comprehensive task manager implementation that handles creating,
 * updating, and managing tasks throughout their lifecycle. It includes convenience methods
 * for Python SDK API parity, state machine validation, and enhanced lifecycle management.
 */

import {
  Task,
  TaskState,
  TaskStatus,
  TaskTransition,
  Artifact,
  TaskNotFoundError,
  InvalidTaskStateError,
  A2AError,
  validateStateTransition,
  createTaskTransition,
  isTaskInFinalState,
  getActiveStates,
  getTerminalStates
} from '@dexwox-labs/a2a-core';
import { TaskStore } from './task-store';
import { PushNotificationService } from '../push-notifications/push-service';
import { ResultAggregator } from '../agent-execution/result-aggregator';
import logger from '../utils/logger';

/**
 * Manages task lifecycle and state
 * 
 * The TaskManager is responsible for creating, updating, and managing tasks
 * throughout their lifecycle. It provides methods for task creation, status
 * updates, cancellation, and artifact management.
 * 
 * @example
 * ```typescript
 * // Create a task manager with in-memory storage
 * const taskStore = new InMemoryTaskStore();
 * const taskManager = new TaskManager(taskStore);
 * 
 * // Create a new task
 * const task = await taskManager.createTask({
 *   name: 'ProcessData',
 *   agentId: 'data-processor',
 *   parts: [{ type: 'text', content: 'Process this data', format: 'plain' }],
 *   expectedParts: 1,
 *   createdAt: new Date().toISOString(),
 *   updatedAt: new Date().toISOString()
 * });
 * 
 * console.log('Created task:', task.id);
 * ```
 */
export class TaskManager {
  /** Map of task aggregators for collecting and processing task results */
  private readonly aggregators = new Map<string, ResultAggregator>();

  /**
   * Creates a new TaskManager
   *
   * @param taskStore - Storage backend for tasks
   * @param pushService - Optional service for push notifications
   */
  constructor(
    private readonly taskStore: TaskStore,
    private readonly pushService?: PushNotificationService
  ) {
    logger.info('Enhanced TaskManager initialized', {
      hasPushService: !!pushService,
      features: ['state-machine-validation', 'convenience-methods', 'lifecycle-management']
    });
  }

  /**
   * Creates a new task
   * 
   * Creates a task with the provided parameters and initializes a result
   * aggregator if expectedParts is specified.
   * 
   * @param task - Task parameters (without id and status)
   * @returns Promise resolving to the created task
   * 
   * @example
   * ```typescript
   * const task = await taskManager.createTask({
   *   name: 'ProcessImage',
   *   agentId: 'image-processor',
   *   parts: [{
   *     type: 'file',
   *     content: 'base64-encoded-image-data',
   *     mimeType: 'image/jpeg',
   *     name: 'image.jpg'
   *   }],
   *   expectedParts: 2,
   *   createdAt: new Date().toISOString(),
   *   updatedAt: new Date().toISOString()
   * });
   * ```
   */
  async createTask(task: Omit<Task, 'id'|'status'>): Promise<Task> {
    logger.debug('Creating new task', { taskParams: task });
    
    // Create enhanced task status with new structure
    const taskStatus: TaskStatus = {
      state: 'submitted',
      timestamp: new Date().toISOString(),
      metadata: {
        createdBy: 'system',
        initialState: 'submitted'
      }
    };

    const createdTask = await this.taskStore.createTask({
      ...task,
      status: taskStatus,
      parts: task.parts ?? [],  // Ensure parts array exists
      transitions: [] // Initialize empty transitions array
    });
    
    logger.info('Successfully created task with enhanced status', {
      taskId: createdTask.id,
      initialState: taskStatus.state
    });
    
    // Initialize result aggregation if expectedParts is specified
    if (task.expectedParts) {
      logger.debug('Initializing result aggregator', { taskId: createdTask.id });
      this.aggregators.set(createdTask.id, new ResultAggregator(createdTask));
    }
    return createdTask;
  }

  /**
   * Gets the result aggregator for a task
   * 
   * Result aggregators collect and process task results, including
   * handling streaming responses and combining multiple parts.
   * 
   * @param taskId - ID of the task
   * @returns The result aggregator for the task, or undefined if none exists
   */
  getAggregator(taskId: string): ResultAggregator | undefined {
    return this.aggregators.get(taskId);
  }

  /**
   * Gets a task by ID
   * 
   * Retrieves a task from the task store by its ID.
   * 
   * @param taskId - ID of the task to retrieve
   * @returns Promise resolving to the task
   * @throws {TaskNotFoundError} If the task is not found
   * 
   * @example
   * ```typescript
   * try {
   *   const task = await taskManager.getTask('task-123');
   *   console.log('Task status:', task.status);
   * } catch (error) {
   *   if (error instanceof TaskNotFoundError) {
   *     console.error('Task not found');
   *   } else {
   *     console.error('Error retrieving task:', error);
   *   }
   * }
   * ```
   */
  async getTask(taskId: string): Promise<Task> {
    logger.debug('Getting task', { taskId });
    const task = await this.taskStore.getTask(taskId);
    if (!task) {
      logger.error('Task not found', { taskId });
      throw new TaskNotFoundError(taskId);
    }
    logger.debug('Successfully retrieved task', { taskId });
    return task;
  }

  /**
   * Updates a task with new data
   * 
   * Updates a task with the provided partial task data and sets
   * the updatedAt timestamp to the current time.
   * 
   * @param taskId - ID of the task to update
   * @param updates - Partial task data to update
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * 
   * @example
   * ```typescript
   * const updatedTask = await taskManager.updateTask('task-123', {
   *   name: 'Updated Task Name',
   *   metadata: { priority: 'high' }
   * });
   * ```
   */
  async updateTask(taskId: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task> {
    const currentTask = await this.getTask(taskId);
    
    // If status is being updated, validate the transition
    if (updates.status && updates.status.state !== currentTask.status.state) {
      await this.validateAndTransitionTask(taskId, updates.status.state, 'system', updates.status.metadata?.reason as string);
      // Remove status from updates as it will be handled by validateAndTransitionTask
      const { status, ...otherUpdates } = updates;
      updates = otherUpdates;
    }
    
    return this.taskStore.updateTask(taskId, {
      ...currentTask,
      ...updates,
      updatedAt: new Date().toISOString()
    });
  }

  /**
   * Updates a task's status
   * 
   * Updates the status of a task and sets the updatedAt timestamp
   * to the current time.
   * 
   * @param taskId - ID of the task to update
   * @param status - New status for the task
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * 
   * @example
   * ```typescript
   * // Update task status to 'completed'
   * const task = await taskManager.updateTaskStatus('task-123', 'completed');
   * console.log('Task status updated:', task.status);
   * ```
   */
  async updateTaskStatus(taskId: string, status: TaskState | TaskStatus, reason?: string, triggeredBy: 'system' | 'agent' | 'user' = 'system'): Promise<Task> {
    logger.info('Updating task status with validation', { taskId, newStatus: typeof status === 'string' ? status : status.state, triggeredBy });
    
    // Handle both string and TaskStatus object inputs for backward compatibility
    const targetState = typeof status === 'string' ? status : status.state;
    const statusReason = reason || (typeof status === 'object' ? status.metadata?.reason as string : undefined);
    
    return this.validateAndTransitionTask(taskId, targetState, triggeredBy, statusReason);
  }

  /**
   * Cancels a task
   * 
   * Cancels a task that is not already in a terminal state (completed, failed, or canceled).
   * If a push service is configured, it will send a push notification about the cancellation.
   * 
   * @param taskId - ID of the task to cancel
   * @returns Promise resolving when the task is canceled
   * @throws {TaskNotFoundError} If the task is not found
   * @throws {InvalidTaskStateError} If the task is already in a terminal state
   * 
   * @example
   * ```typescript
   * try {
   *   await taskManager.cancelTask('task-123');
   *   console.log('Task canceled successfully');
   * } catch (error) {
   *   if (error instanceof InvalidTaskStateError) {
   *     console.error('Cannot cancel task in terminal state');
   *   } else {
   *     console.error('Error canceling task:', error);
   *   }
   * }
   * ```
   */
  async cancelTask(taskId: string, reason?: string, triggeredBy: 'system' | 'agent' | 'user' = 'user'): Promise<void> {
    logger.info('Attempting to cancel task with validation', { taskId, triggeredBy, reason });
    await this.validateAndTransitionTask(taskId, 'canceled', triggeredBy, reason || 'Task canceled');
  }

  /**
   * Lists all active tasks
   * 
   * Retrieves all tasks that are not in a terminal state (completed, failed, or canceled).
   * Active tasks include those with status 'submitted', 'working', or 'input_required'.
   * 
   * @returns Promise resolving to an array of active tasks
   * 
   * @example
   * ```typescript
   * const activeTasks = await taskManager.listActiveTasks();
   * console.log(`Found ${activeTasks.length} active tasks`);
   * 
   * // Process each active task
   * for (const task of activeTasks) {
   *   console.log(`Task ${task.id} is ${task.status}`);
   * }
   * ```
   */
  async listActiveTasks(): Promise<Task[]> {
    logger.debug('Listing active tasks using enhanced state management');
    const activeStates = getActiveStates();
    const tasks = await this.taskStore.getTasksByStatus(activeStates);
    logger.debug('Found active tasks', { count: tasks.length, activeStates });
    return tasks;
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
   * @throws {TaskNotFoundError} If the task is not found
   * 
   * @example
   * ```typescript
   * await taskManager.addArtifact('task-123', {
   *   id: 'artifact-456',
   *   type: 'file',
   *   content: 'base64-encoded-file-data',
   *   createdAt: new Date().toISOString(),
   *   updatedAt: new Date().toISOString(),
   *   metadata: {
   *     filename: 'report.pdf',
   *     mimeType: 'application/pdf'
   *   }
   * });
   * ```
   */
  async addArtifact(taskId: string, artifact: Artifact): Promise<void> {
    await this.taskStore.addArtifact(taskId, artifact);
  }

  /**
   * Gets all artifacts for a task
   * 
   * Retrieves all artifacts associated with a specific task.
   * 
   * @param taskId - ID of the task
   * @returns Promise resolving to an array of artifacts
   * @throws {TaskNotFoundError} If the task is not found
   * 
   * @example
   * ```typescript
   * const artifacts = await taskManager.getArtifacts('task-123');
   * console.log(`Task has ${artifacts.length} artifacts`);
   * 
   * // Process each artifact
   * for (const artifact of artifacts) {
   *   console.log(`Artifact ${artifact.id} of type ${artifact.type}`);
   * }
   * ```
   */
  async getArtifacts(taskId: string): Promise<Artifact[]> {
    return this.taskStore.getArtifacts(taskId);
  }

  /**
   * Gets a specific artifact for a task
   * 
   * Retrieves a specific artifact by ID from a specific task.
   * 
   * @param taskId - ID of the task
   * @param artifactId - ID of the artifact
   * @returns Promise resolving to the artifact, or null if not found
   * @throws {TaskNotFoundError} If the task is not found
   * 
   * @example
   * ```typescript
   * const artifact = await taskManager.getArtifact('task-123', 'artifact-456');
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
    return this.taskStore.getArtifact(taskId, artifactId);
  }

  // ============================================================================
  // ENHANCED CONVENIENCE METHODS (Python SDK API Parity)
  // ============================================================================

  /**
   * Rejects a task with an optional reason
   *
   * This convenience method transitions a task to the 'rejected' state,
   * matching the Python SDK's reject() method. Tasks can only be rejected
   * from certain states according to the state machine rules.
   *
   * @param taskId - ID of the task to reject
   * @param reason - Optional reason for rejection
   * @param triggeredBy - Who/what triggered the rejection (defaults to 'system')
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * @throws {A2AError} If the state transition is invalid
   *
   * @example
   * ```typescript
   * // Reject a submitted task
   * await taskManager.reject('task-123', 'Invalid input format');
   *
   * // Reject with system trigger
   * await taskManager.reject('task-456', 'Unsupported operation', 'system');
   * ```
   */
  async reject(taskId: string, reason?: string, triggeredBy: 'system' | 'agent' | 'user' = 'system'): Promise<Task> {
    logger.info('Rejecting task', { taskId, reason, triggeredBy });
    return this.validateAndTransitionTask(taskId, 'rejected', triggeredBy, reason || 'Task rejected');
  }

  /**
   * Marks a task as requiring authentication
   *
   * This convenience method transitions a task to the 'auth_required' state,
   * matching the Python SDK's require_auth() method. This is typically used
   * when a task needs additional authentication before proceeding.
   *
   * @param taskId - ID of the task requiring authentication
   * @param authInfo - Optional authentication information or requirements
   * @param triggeredBy - Who/what triggered the auth requirement (defaults to 'system')
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * @throws {A2AError} If the state transition is invalid
   *
   * @example
   * ```typescript
   * // Require authentication for a task
   * await taskManager.requireAuth('task-123', 'OAuth2 token required');
   *
   * // Require auth with specific metadata
   * await taskManager.requireAuth('task-456', 'Multi-factor authentication needed', 'system');
   * ```
   */
  async requireAuth(taskId: string, authInfo?: string, triggeredBy: 'system' | 'agent' | 'user' = 'system'): Promise<Task> {
    logger.info('Requiring authentication for task', { taskId, authInfo, triggeredBy });
    return this.validateAndTransitionTask(taskId, 'auth_required', triggeredBy, authInfo || 'Authentication required');
  }

  /**
   * Completes a task with optional result data
   *
   * This convenience method transitions a task to the 'completed' state,
   * matching the Python SDK's complete() method. It can optionally include
   * result data and automatically handles result aggregation cleanup.
   *
   * @param taskId - ID of the task to complete
   * @param result - Optional result data for the task
   * @param triggeredBy - Who/what triggered the completion (defaults to 'agent')
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * @throws {A2AError} If the state transition is invalid
   *
   * @example
   * ```typescript
   * // Complete a task with result
   * await taskManager.complete('task-123', { output: 'Processing complete', data: {...} });
   *
   * // Complete without result data
   * await taskManager.complete('task-456');
   * ```
   */
  async complete(taskId: string, result?: Record<string, any>, triggeredBy: 'system' | 'agent' | 'user' = 'agent'): Promise<Task> {
    logger.info('Completing task', { taskId, hasResult: !!result, triggeredBy });
    
    // Get current task to check state
    const currentTask = await this.getTask(taskId);
    const currentState = currentTask.status.state;
    
    // If result data is provided, update the task with it
    if (result) {
      await this.updateTask(taskId, { output: result });
    }
    
    // Handle proper state progression for completion
    let completedTask: Task;
    if (currentState === 'submitted') {
      // For submitted tasks, transition through working state first
      logger.debug('Transitioning submitted task through working state before completion', { taskId, currentState });
      await this.validateAndTransitionTask(taskId, 'working', triggeredBy, 'Auto-transitioning to working for completion');
      completedTask = await this.validateAndTransitionTask(taskId, 'completed', triggeredBy, 'Task completed successfully');
    } else {
      // For tasks already in working or other valid states, complete directly
      completedTask = await this.validateAndTransitionTask(taskId, 'completed', triggeredBy, 'Task completed successfully');
    }
    
    // Clean up result aggregator
    this.aggregators.delete(taskId);
    logger.debug('Cleaned up result aggregator for completed task', { taskId });
    
    return completedTask;
  }

  /**
   * Fails a task with error information
   *
   * This convenience method transitions a task to the 'failed' state,
   * matching the Python SDK's fail() method. It includes comprehensive
   * error handling and can store error details in the task.
   *
   * @param taskId - ID of the task to fail
   * @param error - Error information (string message or Error object)
   * @param triggeredBy - Who/what triggered the failure (defaults to 'agent')
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * @throws {A2AError} If the state transition is invalid
   *
   * @example
   * ```typescript
   * // Fail a task with error message
   * await taskManager.fail('task-123', 'Processing failed due to invalid input');
   *
   * // Fail with Error object
   * try {
   *   // Some operation that might fail
   * } catch (error) {
   *   await taskManager.fail('task-456', error);
   * }
   * ```
   */
  async fail(taskId: string, error: string | Error, triggeredBy: 'system' | 'agent' | 'user' = 'agent'): Promise<Task> {
    logger.info('Failing task', { taskId, error: error.toString(), triggeredBy });
    
    // Prepare error information
    const errorInfo = error instanceof Error ? {
      code: -32603, // Internal error
      message: error.message,
      data: { stack: error.stack, name: error.name }
    } : {
      code: -32603,
      message: error,
      data: {}
    };
    
    // Update task with error information
    await this.updateTask(taskId, { error: errorInfo });
    
    const failedTask = await this.validateAndTransitionTask(taskId, 'failed', triggeredBy, errorInfo.message);
    
    // Clean up result aggregator
    this.aggregators.delete(taskId);
    logger.debug('Cleaned up result aggregator for failed task', { taskId });
    
    return failedTask;
  }

  // ============================================================================
  // ENHANCED QUERY METHODS
  // ============================================================================

  /**
   * Gets all completed tasks
   *
   * Retrieves all tasks that have been successfully completed.
   *
   * @returns Promise resolving to an array of completed tasks
   *
   * @example
   * ```typescript
   * const completedTasks = await taskManager.getCompletedTasks();
   * console.log(`Found ${completedTasks.length} completed tasks`);
   * ```
   */
  async getCompletedTasks(): Promise<Task[]> {
    logger.debug('Getting completed tasks');
    const tasks = await this.taskStore.getTasksByStatus(['completed']);
    logger.debug('Found completed tasks', { count: tasks.length });
    return tasks;
  }

  /**
   * Gets all failed tasks
   *
   * Retrieves all tasks that have failed during execution.
   *
   * @returns Promise resolving to an array of failed tasks
   *
   * @example
   * ```typescript
   * const failedTasks = await taskManager.getFailedTasks();
   * console.log(`Found ${failedTasks.length} failed tasks`);
   * ```
   */
  async getFailedTasks(): Promise<Task[]> {
    logger.debug('Getting failed tasks');
    const tasks = await this.taskStore.getTasksByStatus(['failed']);
    logger.debug('Found failed tasks', { count: tasks.length });
    return tasks;
  }

  /**
   * Gets tasks by specific state
   *
   * Retrieves all tasks that are currently in the specified state.
   * This method provides flexible querying capabilities matching the Python SDK.
   *
   * @param state - The task state to filter by
   * @returns Promise resolving to an array of tasks in the specified state
   *
   * @example
   * ```typescript
   * // Get all working tasks
   * const workingTasks = await taskManager.getTasksByState('working');
   *
   * // Get all rejected tasks
   * const rejectedTasks = await taskManager.getTasksByState('rejected');
   * ```
   */
  async getTasksByState(state: TaskState): Promise<Task[]> {
    logger.debug('Getting tasks by state', { state });
    const tasks = await this.taskStore.getTasksByStatus([state]);
    logger.debug('Found tasks by state', { state, count: tasks.length });
    return tasks;
  }

  /**
   * Gets tasks by multiple states
   *
   * Retrieves all tasks that are in any of the specified states.
   *
   * @param states - Array of task states to filter by
   * @returns Promise resolving to an array of tasks in the specified states
   *
   * @example
   * ```typescript
   * // Get all terminal state tasks
   * const terminalTasks = await taskManager.getTasksByStates(['completed', 'failed', 'canceled', 'rejected']);
   *
   * // Get all tasks requiring attention
   * const attentionTasks = await taskManager.getTasksByStates(['input_required', 'auth_required']);
   * ```
   */
  async getTasksByStates(states: TaskState[]): Promise<Task[]> {
    logger.debug('Getting tasks by multiple states', { states });
    const tasks = await this.taskStore.getTasksByStatus(states);
    logger.debug('Found tasks by states', { states, count: tasks.length });
    return tasks;
  }

  // ============================================================================
  // ENHANCED LIFECYCLE MANAGEMENT
  // ============================================================================

  /**
   * Validates and transitions a task to a new state
   *
   * This internal method handles state validation, transition creation,
   * and task updates with comprehensive error handling and logging.
   *
   * @param taskId - ID of the task to transition
   * @param newState - Target state for the transition
   * @param triggeredBy - Who/what triggered the transition
   * @param reason - Optional reason for the transition
   * @returns Promise resolving to the updated task
   * @throws {TaskNotFoundError} If the task is not found
   * @throws {A2AError} If the state transition is invalid
   * @internal
   */
  private async validateAndTransitionTask(
    taskId: string,
    newState: TaskState,
    triggeredBy: 'system' | 'agent' | 'user',
    reason?: string
  ): Promise<Task> {
    const currentTask = await this.getTask(taskId);
    const currentState = currentTask.status.state;
    
    // Validate the state transition
    try {
      validateStateTransition(currentState, newState, triggeredBy);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      logger.error('Invalid state transition attempted', {
        taskId,
        currentState,
        newState,
        triggeredBy,
        error: errorMessage
      });
      throw error;
    }
    
    // Create transition record
    const transition = createTaskTransition(currentState, newState, reason, triggeredBy);
    
    // Create new task status
    const newStatus: TaskStatus = {
      state: newState,
      timestamp: new Date().toISOString(),
      metadata: {
        previousState: currentState,
        triggeredBy,
        reason,
        transitionId: crypto.randomUUID()
      }
    };
    
    // Update task with new status and transition history
    const updatedTask = await this.taskStore.updateTask(taskId, {
      status: newStatus,
      transitions: [...(currentTask.transitions || []), transition],
      updatedAt: new Date().toISOString()
    });
    
    logger.info('Successfully transitioned task state', {
      taskId,
      transition: `${currentState} → ${newState}`,
      triggeredBy,
      reason
    });
    
    // Send push notification if service is available
    if (this.pushService) {
      try {
        await this.pushService.notifyStatusChange(taskId, newState);
        logger.debug('Sent push notification for state change', { taskId, newState });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.warn('Failed to send push notification', { taskId, newState, error: errorMessage });
        // Don't throw - push notification failure shouldn't fail the transition
      }
    }
    
    return updatedTask;
  }

  /**
   * Gets the transition history for a task
   *
   * Retrieves the complete history of state transitions for a task,
   * providing audit trail and debugging capabilities.
   *
   * @param taskId - ID of the task
   * @returns Promise resolving to an array of task transitions
   * @throws {TaskNotFoundError} If the task is not found
   *
   * @example
   * ```typescript
   * const history = await taskManager.getTransitionHistory('task-123');
   * console.log(`Task has undergone ${history.length} transitions`);
   *
   * history.forEach(transition => {
   *   console.log(`${transition.timestamp}: ${transition.from} → ${transition.to} (${transition.triggeredBy})`);
   * });
   * ```
   */
  async getTransitionHistory(taskId: string): Promise<TaskTransition[]> {
    const task = await this.getTask(taskId);
    return task.transitions || [];
  }

  /**
   * Checks if a task can transition to a specific state
   *
   * Validates whether a task can transition to the specified state
   * without actually performing the transition.
   *
   * @param taskId - ID of the task
   * @param targetState - Target state to check
   * @param triggeredBy - Who/what would trigger the transition
   * @returns Promise resolving to true if transition is valid, false otherwise
   *
   * @example
   * ```typescript
   * const canComplete = await taskManager.canTransitionTo('task-123', 'completed', 'agent');
   * if (canComplete) {
   *   await taskManager.complete('task-123');
   * }
   * ```
   */
  async canTransitionTo(taskId: string, targetState: TaskState, triggeredBy?: 'system' | 'agent' | 'user'): Promise<boolean> {
    try {
      const task = await this.getTask(taskId);
      validateStateTransition(task.status.state, targetState, triggeredBy);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Gets summary statistics for all tasks
   *
   * Provides a comprehensive overview of task states and counts,
   * useful for monitoring and dashboard purposes.
   *
   * @returns Promise resolving to task statistics
   *
   * @example
   * ```typescript
   * const stats = await taskManager.getTaskStatistics();
   * console.log(`Active: ${stats.active}, Completed: ${stats.completed}, Failed: ${stats.failed}`);
   * ```
   */
  async getTaskStatistics(): Promise<{
    total: number;
    active: number;
    completed: number;
    failed: number;
    canceled: number;
    rejected: number;
    byState: Record<TaskState, number>;
  }> {
    logger.debug('Calculating task statistics');
    
    const allStates: TaskState[] = ['submitted', 'working', 'input_required', 'completed', 'failed', 'canceled', 'rejected', 'auth_required', 'unknown'];
    const byState: Record<TaskState, number> = {} as Record<TaskState, number>;
    let total = 0;
    
    // Get counts for each state
    for (const state of allStates) {
      const tasks = await this.taskStore.getTasksByStatus([state]);
      byState[state] = tasks.length;
      total += tasks.length;
    }
    
    const activeStates = getActiveStates();
    const active = activeStates.reduce((sum, state) => sum + byState[state], 0);
    
    const statistics = {
      total,
      active,
      completed: byState.completed,
      failed: byState.failed,
      canceled: byState.canceled,
      rejected: byState.rejected,
      byState
    };
    
    logger.debug('Task statistics calculated', statistics);
    return statistics;
  }
}
