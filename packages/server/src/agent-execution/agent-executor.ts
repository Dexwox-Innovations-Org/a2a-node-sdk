import { EventQueue } from './event-queue';
import { RequestContext } from './request-context';

export interface AgentExecutor {
  /**
   * Execute a task with the given context
   * @param context Request context including task details
   * @param eventQueue Event queue for publishing task events
   */
  execute(context: RequestContext, eventQueue: EventQueue): Promise<void>;

  /**
   * Cancel an ongoing task execution
   * @param context Request context including task details
   * @param eventQueue Event queue for publishing cancellation events
   */
  cancel(context: RequestContext, eventQueue: EventQueue): Promise<void>;
}

import { TaskManager } from '../tasks/task-manager';
import { TaskEventManager } from './task-event-manager';
import { 
  Task,
  InvalidTaskStateError,
  TaskNotFoundError,
  TaskAlreadyCompletedError,
  TaskCanceledError,
  TaskFailedError
} from '@dexwox/a2a-core';

export class DefaultAgentExecutor implements AgentExecutor {
  constructor(
    private taskManager: TaskManager,
    private taskEventManager: TaskEventManager
  ) {}

  async execute(context: RequestContext, eventQueue: EventQueue): Promise<void> {
    const task = await this.taskManager.getTask(context.task.id);
    
    // Update task status to working
    const workingTask = await this.taskManager.updateTaskStatus(task.id, 'working');
    
    // Publish task update event
    this.taskEventManager.taskUpdated(workingTask, task.status);

    try {
      // TODO: Implement actual agent execution logic
      // For now we'll simulate successful completion
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const completedTask = await this.taskManager.updateTaskStatus(task.id, 'completed');
      this.taskEventManager.taskCompleted(completedTask);
    } catch (error) {
      const failedTask = await this.taskManager.updateTaskStatus(task.id, 'failed');
      const normalizedError = error instanceof Error 
        ? error 
        : new Error(error instanceof Object ? JSON.stringify(error) : String(error));
      this.taskEventManager.taskFailed(failedTask, normalizedError);
      throw normalizedError;
    }
  }

  async cancel(context: RequestContext, eventQueue: EventQueue): Promise<void> {
    const task = await this.taskManager.getTask(context.task.id);
    
    if (['completed', 'failed', 'canceled'].includes(task.status)) {
      throw new InvalidTaskStateError(
        `Task ${task.id} is already in terminal state: ${task.status}`
      );
    }

    await this.taskManager.cancelTask(task.id);
    this.taskEventManager.taskCanceled(task);
  }
}
