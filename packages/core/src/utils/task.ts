/**
 * @module TaskUtils
 * @description Utilities for working with tasks in the A2A protocol
 * 
 * This module provides utility functions for validating and managing tasks
 * in the A2A protocol. Tasks are the primary unit of work in the protocol and
 * follow a specific state machine with defined transitions.
 */

import type { Task, TaskState, TaskTransition } from '../types/a2a-protocol';
import { A2AError } from '../errors';

/**
 * Error codes specific to task operations
 * 
 * These error codes are used to identify specific issues that can occur
 * when working with tasks, such as invalid state transitions or missing
 * required properties.
 */
export enum TaskErrorCode {
  /** Error code when a task state transition is invalid (-32070) */
  InvalidTransition = -32070,
  /** Error code when a task is missing a required ID (-32071) */
  MissingTaskId = -32071,
  /** Error code when a task state is invalid (-32072) */
  InvalidState = -32072
}

/**
 * Map of valid task state transitions
 * 
 * This constant defines the valid state transitions for tasks in the A2A protocol.
 * Each key represents a current state, and the array value contains all valid
 * next states. Empty arrays indicate terminal states with no valid transitions.
 * 
 * The state machine follows these rules:
 * - submitted → working, rejected, canceled, auth_required
 * - working → input_required, completed, failed, canceled, auth_required
 * - input_required → working, completed, failed, canceled
 * - completed → (terminal state, no transitions)
 * - failed → (terminal state, no transitions)
 * - canceled → (terminal state, no transitions)
 * - rejected → (terminal state, no transitions)
 * - auth_required → working, rejected, canceled
 * - unknown → any state (recovery mechanism)
 * 
 * @internal
 */
const VALID_TRANSITIONS: Record<TaskState, TaskState[]> = {
  // Enhanced transitions for Python SDK parity
  // Python SDK allows more flexible transitions from submitted state
  submitted: ['working', 'completed', 'failed', 'input_required', 'rejected', 'canceled', 'auth_required'],
  working: ['input_required', 'completed', 'failed', 'canceled', 'auth_required'],
  input_required: ['working', 'completed', 'failed', 'canceled'],
  completed: [], // Terminal state
  failed: [], // Terminal state
  canceled: [], // Terminal state
  rejected: [], // Terminal state
  auth_required: ['working', 'rejected', 'canceled'],
  unknown: ['submitted', 'working', 'input_required', 'completed', 'failed', 'canceled', 'rejected', 'auth_required'] // Recovery mechanism
};

/**
 * Validates that a task state transition is allowed
 * 
 * This function checks if a proposed state transition follows the rules of the
 * task state machine. It throws an error if the transition is not allowed.
 * 
 * @param current - Current task state
 * @param next - Proposed next state
 * @param triggeredBy - Optional identifier of who/what triggered the transition
 * @throws {A2AError} If the transition is invalid
 * 
 * @example
 * ```typescript
 * try {
 *   // Valid transition
 *   validateStateTransition('submitted', 'working');
 *   console.log('Transition is valid');
 *   
 *   // Invalid transition
 *   validateStateTransition('completed', 'working');
 * } catch (error) {
 *   console.error('Invalid transition:', error.message);
 *   // Output: Invalid transition from completed to working. Terminal states cannot transition to other states.
 * }
 * ```
 */
export function validateStateTransition(
  current: TaskState, 
  next: TaskState, 
  triggeredBy?: 'system' | 'agent' | 'user'
): void {
  // Check if current state is valid
  if (!Object.keys(VALID_TRANSITIONS).includes(current)) {
    throw new A2AError(
      `Invalid current state: ${current}`,
      TaskErrorCode.InvalidState
    );
  }

  // Check if next state is valid
  if (!Object.keys(VALID_TRANSITIONS).includes(next)) {
    throw new A2AError(
      `Invalid next state: ${next}`,
      TaskErrorCode.InvalidState
    );
  }

  // Check if transition is allowed
  if (!VALID_TRANSITIONS[current].includes(next)) {
    let errorMessage = `Invalid transition from ${current} to ${next}`;
    
    // Provide more specific error messages for common invalid transitions
    if (isTaskInFinalState(current)) {
      errorMessage += '. Terminal states cannot transition to other states.';
    } else if (current === 'auth_required' && next === 'completed') {
      errorMessage += '. Tasks requiring authentication must first transition to working state.';
    } else if (current === 'input_required' && next === 'auth_required') {
      errorMessage += '. Tasks requiring input cannot directly require authentication.';
    } else {
      const validStates = VALID_TRANSITIONS[current];
      errorMessage += `. Valid transitions from ${current}: [${validStates.join(', ')}]`;
    }

    throw new A2AError(errorMessage, TaskErrorCode.InvalidTransition);
  }

  // Validate triggeredBy permissions for certain transitions
  if (triggeredBy) {
    validateTransitionPermissions(current, next, triggeredBy);
  }
}

/**
 * Validates permissions for state transitions based on who triggered them
 * 
 * @param current - Current task state
 * @param next - Proposed next state
 * @param triggeredBy - Who/what triggered the transition
 * @throws {A2AError} If the transition is not allowed for the trigger source
 */
function validateTransitionPermissions(
  current: TaskState,
  next: TaskState,
  triggeredBy: 'system' | 'agent' | 'user'
): void {
  // System can perform any valid transition
  if (triggeredBy === 'system') {
    return;
  }

  // User-specific restrictions
  if (triggeredBy === 'user') {
    // Users can only cancel tasks or provide input
    if (next === 'canceled') {
      return; // Users can always cancel
    }
    if (current === 'input_required' && next === 'working') {
      return; // Users can provide input to continue
    }
    throw new A2AError(
      `User cannot transition task from ${current} to ${next}. Users can only cancel tasks or provide input.`,
      TaskErrorCode.InvalidTransition
    );
  }

  // Agent-specific restrictions
  if (triggeredBy === 'agent') {
    // Agents cannot directly set auth_required (system responsibility)
    if (next === 'auth_required') {
      throw new A2AError(
        `Agent cannot transition task to auth_required state. This is a system responsibility.`,
        TaskErrorCode.InvalidTransition
      );
    }
    // Agents cannot reject their own tasks (should fail instead)
    if (next === 'rejected') {
      throw new A2AError(
        `Agent cannot reject task. Use failed state instead for agent-detected issues.`,
        TaskErrorCode.InvalidTransition
      );
    }
  }
}

/**
 * Gets the list of valid next states for a given current state
 * 
 * @param current - Current task state
 * @returns Array of valid next states
 * 
 * @example
 * ```typescript
 * const validStates = getValidNextStates('working');
 * console.log(validStates);
 * // Output: ['input_required', 'completed', 'failed', 'canceled', 'auth_required']
 * ```
 */
export function getValidNextStates(current: TaskState): TaskState[] {
  if (!Object.keys(VALID_TRANSITIONS).includes(current)) {
    throw new A2AError(
      `Invalid current state: ${current}`,
      TaskErrorCode.InvalidState
    );
  }
  return [...VALID_TRANSITIONS[current]];
}

/**
 * Checks if a task can transition to a specific state
 * 
 * @param current - Current task state
 * @param next - Proposed next state
 * @returns True if the transition is valid, false otherwise
 * 
 * @example
 * ```typescript
 * const canComplete = canTransitionTo('working', 'completed');
 * console.log(canComplete); // true
 * 
 * const canRestart = canTransitionTo('completed', 'working');
 * console.log(canRestart); // false
 * ```
 */
export function canTransitionTo(current: TaskState, next: TaskState): boolean {
  try {
    validateStateTransition(current, next);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a task is in a final (terminal) state
 * 
 * @param state - Task state to check
 * @returns True if the state is terminal, false otherwise
 * 
 * @example
 * ```typescript
 * console.log(isTaskInFinalState('completed')); // true
 * console.log(isTaskInFinalState('working')); // false
 * ```
 */
export function isTaskInFinalState(state: TaskState): boolean {
  return VALID_TRANSITIONS[state].length === 0;
}

/**
 * Checks if a task is currently active (not in a final state)
 * 
 * @param state - Task state to check
 * @returns True if the task is active, false otherwise
 * 
 * @example
 * ```typescript
 * console.log(isTaskActive('working')); // true
 * console.log(isTaskActive('completed')); // false
 * ```
 */
export function isTaskActive(state: TaskState): boolean {
  return !isTaskInFinalState(state);
}

/**
 * Gets all terminal (final) states
 * 
 * @returns Array of terminal states
 * 
 * @example
 * ```typescript
 * const terminalStates = getTerminalStates();
 * console.log(terminalStates); // ['completed', 'failed', 'canceled', 'rejected']
 * ```
 */
export function getTerminalStates(): TaskState[] {
  return Object.keys(VALID_TRANSITIONS).filter(state => 
    VALID_TRANSITIONS[state as TaskState].length === 0
  ) as TaskState[];
}

/**
 * Gets all active (non-terminal) states
 * 
 * @returns Array of active states
 * 
 * @example
 * ```typescript
 * const activeStates = getActiveStates();
 * console.log(activeStates); // ['submitted', 'working', 'input_required', 'auth_required', 'unknown']
 * ```
 */
export function getActiveStates(): TaskState[] {
  return Object.keys(VALID_TRANSITIONS).filter(state => 
    VALID_TRANSITIONS[state as TaskState].length > 0
  ) as TaskState[];
}

/**
 * Creates a new task transition record with comprehensive validation
 * 
 * This function creates a transition record that documents a change in task state.
 * It validates the transition before creating the record and includes enhanced
 * metadata about who triggered the transition.
 * 
 * @param from - Starting task state
 * @param to - Ending task state
 * @param reason - Optional reason for the transition
 * @param triggeredBy - Optional identifier of who/what triggered the transition
 * @returns A new transition object with timestamp and validation
 * 
 * @example
 * ```typescript
 * // Create a transition record when a task is completed
 * const transition = createTaskTransition('working', 'completed', 'Task finished successfully', 'agent');
 * console.log(transition);
 * // Output: {
 * //   from: 'working',
 * //   to: 'completed',
 * //   timestamp: '2023-05-26T12:34:56.789Z',
 * //   reason: 'Task finished successfully',
 * //   triggeredBy: 'agent'
 * // }
 * ```
 */
export function createTaskTransition(
  from: TaskState,
  to: TaskState,
  reason?: string,
  triggeredBy?: 'system' | 'agent' | 'user'
): TaskTransition {
  validateStateTransition(from, to, triggeredBy);
  return {
    from,
    to,
    timestamp: new Date().toISOString(),
    reason,
    triggeredBy
  };
}

/**
 * Validates that a task has all required properties and a valid state
 * 
 * This function checks that a task has a valid ID and state. It throws
 * appropriate errors if validation fails, which can be caught and handled
 * by the caller.
 * 
 * @param task - Task object to validate
 * @throws {A2AError} If validation fails, with specific error codes
 * 
 * @example
 * ```typescript
 * try {
 *   // Valid task
 *   validateTask({
 *     id: 'task-123',
 *     name: 'Example Task',
 *     status: { state: 'working', timestamp: new Date().toISOString() },
 *     createdAt: new Date().toISOString(),
 *     updatedAt: new Date().toISOString()
 *   });
 *   console.log('Task is valid');
 *   
 *   // This would throw an error
 *   validateTask({
 *     name: 'Invalid Task', // Missing ID
 *     status: { state: 'working', timestamp: new Date().toISOString() },
 *     createdAt: new Date().toISOString(),
 *     updatedAt: new Date().toISOString()
 *   });
 * } catch (error) {
 *   console.error('Validation failed:', error.message);
 * }
 * ```
 */
export function validateTask(task: Task): void {
  if (!task.id) {
    throw new A2AError(
      'Task missing required id',
      TaskErrorCode.MissingTaskId
    );
  }

  if (!Object.keys(VALID_TRANSITIONS).includes(task.status.state)) {
    throw new A2AError(
      `Invalid task state: ${task.status.state}`,
      TaskErrorCode.InvalidState
    );
  }
}

// Maintain backward compatibility
export const validateTransition = validateStateTransition;
export const createTransition = createTaskTransition;
