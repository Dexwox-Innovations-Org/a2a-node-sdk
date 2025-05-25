/**
 * Standard error class for A2A SDK matching Python implementation
 */
export class A2AError extends Error {
  constructor(
    message: string, 
    public readonly code: number,
    public readonly data?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'A2AError';
    Object.setPrototypeOf(this, A2AError.prototype);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      ...(this.data && { data: this.data })
    };
  }
}

// Task-specific error classes
export class InvalidTaskStateError extends A2AError {
  constructor(message: string) {
    super(message, ERROR_CODES.INVALID_TASK_STATE);
  }
}

export class TaskNotFoundError extends A2AError {
  constructor(taskId: string) {
    super(`Task ${taskId} not found`, ERROR_CODES.TASK_NOT_FOUND);
  }
}

export class TaskAlreadyCompletedError extends A2AError {
  constructor(taskId: string) {
    super(`Task ${taskId} is already completed`, ERROR_CODES.TASK_ALREADY_COMPLETED);
  }
}

export class TaskCanceledError extends A2AError {
  constructor(taskId: string) {
    super(`Task ${taskId} was canceled`, ERROR_CODES.TASK_CANCELED);
  }
}

export class TaskFailedError extends A2AError {
  constructor(taskId: string, reason: string) {
    super(`Task ${taskId} failed: ${reason}`, ERROR_CODES.TASK_FAILED);
  }
}

// Standard error codes matching Python SDK
export const ERROR_CODES = {
  // Task errors (-32000 to -32099)
  INVALID_TASK_STATE: -32010,
  TASK_NOT_FOUND: -32011,
  TASK_ALREADY_COMPLETED: -32012,
  TASK_CANCELED: -32013,
  TASK_FAILED: -32014,

  // Queue errors (-32050 to -32099)
  QUEUE_EXISTS: -32050,
  NO_QUEUE: -32051,
} as const;
