import { EventQueue } from './event-queue';
import { 
  Task, 
  A2AError,
  Artifact,
  TaskNotFoundError,
  InvalidTaskStateError
} from '@dexwox/a2a-core';

export class TaskEventManager {
  private eventQueue: EventQueue;

  constructor(eventQueue: EventQueue) {
    this.eventQueue = eventQueue;
  }

  taskCreated(task: Task): void {
    if (!task.id) {
      throw new InvalidTaskStateError('Cannot create event for task without ID');
    }
    this.eventQueue.publish({
      type: 'taskCreated',
      task,
      timestamp: Date.now()
    });
  }

  taskUpdated(task: Task, previousState?: string): void {
    if (!task.id) {
      throw new InvalidTaskStateError('Cannot update event for task without ID');
    }
    this.eventQueue.publish({
      type: 'taskUpdated',
      task,
      previousState,
      timestamp: Date.now()
    });
  }

  taskCompleted(task: Task): void {
    if (!task.id) {
      throw new InvalidTaskStateError('Cannot complete event for task without ID');
    }
    this.eventQueue.publish({
      type: 'taskCompleted',
      task,
      timestamp: Date.now()
    });
  }

  taskFailed(task: Task, error: Error | A2AError): void {
    if (!task.id) {
      throw new InvalidTaskStateError('Cannot fail event for task without ID');
    }

    const normalizedError = 'code' in error 
      ? error as A2AError
      : {
          code: -32000,
          message: error.message,
          data: { stack: error.stack }
        };

    this.eventQueue.publish({
      type: 'taskFailed',
      task: {
        ...task,
        error: normalizedError
      },
      timestamp: Date.now()
    });
  }

  taskCanceled(task: Task): void {
    if (!task.id) {
      throw new InvalidTaskStateError('Cannot cancel event for task without ID');
    }
    this.eventQueue.publish({
      type: 'taskCanceled',
      task,
      timestamp: Date.now()
    });
  }

  artifactAdded(task: Task, artifact: Artifact): void {
    if (!task.id) {
      throw new InvalidTaskStateError('Cannot add artifact to task without ID');
    }
    if (!artifact.id) {
      throw new InvalidTaskStateError('Cannot add artifact without ID');
    }
    this.eventQueue.publish({
      type: 'artifactAdded',
      task,
      artifact,
      timestamp: Date.now()
    });
  }
}
