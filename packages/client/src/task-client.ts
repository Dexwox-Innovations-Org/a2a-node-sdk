import { Task, TaskState, JsonRpcRequest, validateTransition, TraceClass } from '@dexwox/a2a-core';
import { MessageClientOptions, PushNotificationConfig } from './types';
import { 
  normalizeError,
  A2ANetworkError,
  A2ATimeoutError
} from './utils/error-handler';
import { sendRequest } from './utils/http-utils';
import { EventEmitter } from 'events';
import { TASK_UPDATED, TASK_COMPLETED, TASK_FAILED } from './types';

@TraceClass()
export class TaskClient extends EventEmitter {
  private pushConfigs: Map<string, PushNotificationConfig> = new Map();
  private taskCallbacks: Map<string, (task: Task) => void> = new Map();

  constructor(private options: MessageClientOptions) {
    super();
  }

  /**
   * Gets the current status of a task
   * @param taskId The ID of the task to check
   * @returns Promise resolving to the task status
   * @throws A2AError if the request fails
   */
  async getTaskStatus(taskId: string): Promise<Task> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'getTaskStatus',
      params: { taskId }
    };

    try {
      const response = await sendRequest<{ task: Task }>(this.options, request);
      return response.result.task;
    } catch (err) {
      if (err instanceof Error && err.message.includes('Network')) {
        throw new A2ANetworkError('Failed to get task status', {
          originalError: err,
          taskId
        });
      }
      throw normalizeError(err);
    }
  }

  /**
   * Cancels a running task
   * @param taskId The ID of the task to cancel
   * @returns Promise resolving when cancellation is complete
   * @throws A2AError if cancellation fails
   */
  async cancelTask(taskId: string): Promise<void> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'cancelTask',
      params: { taskId }
    };

    try {
      await sendRequest(this.options, request);
    } catch (err) {
      if (err instanceof Error && err.message.includes('Network')) {
        throw new A2ANetworkError('Failed to cancel task', {
          originalError: err,
          taskId
        });
      }
      throw normalizeError(err);
    }
  }

  /**
   * Lists all tasks for the current session
   * @param options Optional filters for the task list
   * @returns Promise resolving to an array of tasks
   * @throws A2AError if the request fails
   */
  /**
   * Sets push notification configuration for a task
   * @param taskId The task ID to configure
   * @param config Push notification settings
   * @returns Promise resolving when configuration is complete
   * @throws A2AError if configuration fails
   */
  async setPushConfig(taskId: string, config: PushNotificationConfig): Promise<void> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'setPushConfig',
      params: { taskId, config }
    };

    try {
      await sendRequest(this.options, request);
      this.pushConfigs.set(taskId, config);
    } catch (err) {
      if (err instanceof Error && err.message.includes('timeout')) {
        throw new A2ATimeoutError('Task operation timed out', {
          originalError: err,
          taskId
        });
      }
      throw normalizeError(err);
    }
  }

  /**
   * Gets push notification configuration for a task
   * @param taskId The task ID to check
   * @returns Promise resolving to push configuration
   * @throws A2AError if request fails
   */
  async getPushConfig(taskId: string): Promise<PushNotificationConfig> {
    // Return cached config if available
    if (this.pushConfigs.has(taskId)) {
      return this.pushConfigs.get(taskId)!;
    }

    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'getPushConfig',
      params: { taskId }
    };

    try {
      const response = await sendRequest<{ config: PushNotificationConfig }>(this.options, request);
      this.pushConfigs.set(taskId, response.result.config);
      return response.result.config;
    } catch (err) {
      throw normalizeError(err);
    }
  }

  async updateTaskStatus(taskId: string, status: { from: TaskState, to: TaskState }): Promise<void> {
    validateTransition(status.from, status.to);
    
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'updateTaskStatus',
      params: { taskId, status }
    };

    try {
      await sendRequest(this.options, request);
    } catch (err) {
      if (err instanceof Error && err.message.includes('Network')) {
        throw new A2ANetworkError('Failed to update task status', {
          originalError: err,
          taskId
        });
      }
      throw normalizeError(err);
    }
  }

  async listTasks(options?: { 
    status?: TaskState;
    limit?: number;
    since?: string;
  }): Promise<Task[]> {
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      method: 'listTasks',
      params: options || {}
    };

    try {
      const response = await sendRequest<{ tasks: Task[] }>(this.options, request);
      return response.result.tasks;
    } catch (err) {
      throw normalizeError(err);
    }
  }

  /**
   * Registers a callback for task updates
   * @param taskId The task ID to monitor
   * @param callback Callback function for task updates
   */
  onTaskUpdate(taskId: string, callback: (task: Task) => void): void {
    this.taskCallbacks.set(taskId, callback);
    this.on(TASK_UPDATED, (updatedTask: Task) => {
      if (updatedTask.id === taskId) {
        callback(updatedTask);
      }
    });
  }

  /**
   * Handles incoming task updates and triggers callbacks
   * @param task The updated task
   */
  handleTaskUpdate(task: Task): void {
    // Trigger specific callback if registered
    const callback = this.taskCallbacks.get(task.id);
    if (callback) {
      callback(task);
    }

    // Emit appropriate event based on task state
    this.emit(TASK_UPDATED, task);
    
    if (task.status === 'completed') {
      this.emit(TASK_COMPLETED, task);
      this.taskCallbacks.delete(task.id);
    } else if (task.status === 'failed' || task.status === 'canceled') {
      this.emit(TASK_FAILED, task);
      this.taskCallbacks.delete(task.id);
    }
  }
}
