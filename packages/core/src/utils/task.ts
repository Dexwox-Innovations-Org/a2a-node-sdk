import type { Task, TaskState, TaskTransition } from '../types/a2a-protocol';
import { A2AError } from '../errors';

export enum TaskErrorCode {
  InvalidTransition = -32070,
  MissingTaskId = -32071,
  InvalidState = -32072
}

const VALID_TRANSITIONS: Record<TaskState, TaskState[]> = {
  submitted: ['working', 'failed', 'canceled'],
  working: ['input_required', 'completed', 'failed', 'canceled'],
  input_required: ['working', 'failed', 'canceled'],
  completed: [],
  failed: [],
  canceled: []
};

/**
 * Validates task state transition
 * @param current Current task state
 * @param next Proposed next state
 * @throws A2AError if transition is invalid
 */
export function validateTransition(current: TaskState, next: TaskState): void {
  if (!VALID_TRANSITIONS[current].includes(next)) {
    throw new A2AError(
      `Invalid transition from ${current} to ${next}`,
      TaskErrorCode.InvalidTransition
    );
  }
}

/**
 * Validates basic task properties
 * @param task Task to validate
 * @throws A2AError if validation fails
 */
export function validateTask(task: Task): void {
  if (!task.id) {
    throw new A2AError(
      'Task missing required id',
      TaskErrorCode.MissingTaskId
    );
  }

  if (!Object.keys(VALID_TRANSITIONS).includes(task.status)) {
    throw new A2AError(
      `Invalid task state: ${task.status}`,
      TaskErrorCode.InvalidState
    );
  }
}

/**
 * Creates a new task transition record
 * @param from Starting state
 * @param to Ending state
 * @param reason Optional transition reason
 * @returns New transition object
 */
export function createTransition(
  from: TaskState,
  to: TaskState,
  reason?: string
): TaskTransition {
  validateTransition(from, to);
  return {
    from,
    to,
    timestamp: new Date().toISOString(),
    reason
  };
}
