import { Task, TaskState, TaskTransition, A2AError } from '@dexwox/a2a-core';

class InvalidTaskStateError extends A2AError {
  constructor(message: string) {
    super(message, -32002); // -32002 = Invalid state transition
  }
}
import { TaskManager } from './task-manager';

export class TaskUpdater {
  private readonly taskManager: TaskManager;
  private readonly transitions: Map<TaskState, Set<TaskState>>;

  constructor(taskManager: TaskManager) {
    this.taskManager = taskManager;
    this.transitions = this.buildStateTransitionMap();
  }

  private buildStateTransitionMap(): Map<TaskState, Set<TaskState>> {
    const transitions = new Map<TaskState, Set<TaskState>>();
    
    // Define valid state transitions
    transitions.set('submitted', new Set(['working', 'failed']));
    transitions.set('working', new Set(['completed', 'failed', 'canceled']));
    transitions.set('input_required', new Set(['working', 'failed', 'canceled']));
    transitions.set('failed', new Set([]));
    transitions.set('completed', new Set([]));
    transitions.set('canceled', new Set([]));

    return transitions;
  }

  async transitionTask(taskId: string, newState: TaskState): Promise<Task> {
    const currentTask = await this.taskManager.getTask(taskId);
    
    // Validate state transition
    if (!this.isValidTransition(currentTask.status, newState)) {
      throw new InvalidTaskStateError(
        `Invalid transition from ${currentTask.status} to ${newState}`
      );
    }

    // Create transition record
    const transition: TaskTransition = {
      from: currentTask.status,
      to: newState,
      timestamp: new Date().toISOString()
    };

    // Update task with new state and history
    return this.taskManager.updateTask(taskId, {
      status: newState,
      transitions: [...(currentTask.transitions || []), transition]
    });
  }

  private isValidTransition(from: TaskState, to: TaskState): boolean {
    const allowedTransitions = this.transitions.get(from);
    return allowedTransitions ? allowedTransitions.has(to) : false;
  }

  async getTransitionHistory(taskId: string): Promise<TaskTransition[]> {
    const task = await this.taskManager.getTask(taskId);
    return task.transitions || [];
  }
}
