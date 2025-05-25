import { Task, TaskState, Artifact, TaskNotFoundError, InvalidTaskStateError } from '@dexwox/a2a-core';
import { TaskStore } from './task-store';
import { PushNotificationService } from '../push-notifications/push-service';
import { ResultAggregator } from '../agent-execution/result-aggregator';
import logger from '../utils/logger';

export class TaskManager {
  private readonly aggregators = new Map<string, ResultAggregator>();

  constructor(
    private readonly taskStore: TaskStore,
    private readonly pushService?: PushNotificationService
  ) {
    logger.info('TaskManager initialized', { hasPushService: !!pushService });
  }

  async createTask(task: Omit<Task, 'id'|'status'>): Promise<Task> {
    logger.debug('Creating new task', { taskParams: task });
    const createdTask = await this.taskStore.createTask({
      ...task,
      status: 'submitted' as const,
      parts: task.parts ?? []  // Ensure parts array exists
    });
    
    logger.info('Successfully created task', { taskId: createdTask.id });
    
    // Initialize result aggregation if expectedParts is specified
    if (task.expectedParts) {
      logger.debug('Initializing result aggregator', { taskId: createdTask.id });
      this.aggregators.set(createdTask.id, new ResultAggregator(createdTask));
    }
    return createdTask;
  }

  getAggregator(taskId: string): ResultAggregator | undefined {
    return this.aggregators.get(taskId);
  }

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

  async updateTask(taskId: string, updates: Partial<Omit<Task, 'id'>>): Promise<Task> {
    const currentTask = await this.getTask(taskId);
    return this.taskStore.updateTask(taskId, { 
      ...currentTask,
      ...updates,
      updatedAt: new Date().toISOString() 
    });
  }

  async updateTaskStatus(taskId: string, status: TaskState): Promise<Task> {
    logger.info('Updating task status', { taskId, newStatus: status });
    const updatedTask = await this.updateTask(taskId, { status });
    logger.info('Successfully updated task status', { taskId });
    return updatedTask;
  }

  async cancelTask(taskId: string): Promise<void> {
    logger.info('Attempting to cancel task', { taskId });
    const task = await this.getTask(taskId);
    if (['completed', 'failed', 'canceled'].includes(task.status)) {
      logger.error('Cannot cancel task in terminal state', { taskId, currentStatus: task.status });
      throw new InvalidTaskStateError(
        `Task ${taskId} is already in terminal state: ${task.status}`
      );
    }

    await this.taskStore.cancelTask(taskId);
    logger.info('Successfully canceled task', { taskId });
    
    if (this.pushService) {
      logger.debug('Sending push notification for canceled task', { taskId });
      await this.pushService.notifyStatusChange(taskId, 'canceled');
    }
  }

  async listActiveTasks(): Promise<Task[]> {
    logger.debug('Listing active tasks');
    const tasks = await this.taskStore.getTasksByStatus([
      'submitted', 'working', 'input_required'
    ]);
    logger.debug('Found active tasks', { count: tasks.length });
    return tasks;
  }

  // Artifact handling
  async addArtifact(taskId: string, artifact: Artifact): Promise<void> {
    await this.taskStore.addArtifact(taskId, artifact);
  }

  async getArtifacts(taskId: string): Promise<Artifact[]> {
    return this.taskStore.getArtifacts(taskId);
  }

  async getArtifact(taskId: string, artifactId: string): Promise<Artifact | null> {
    return this.taskStore.getArtifact(taskId, artifactId);
  }
}
