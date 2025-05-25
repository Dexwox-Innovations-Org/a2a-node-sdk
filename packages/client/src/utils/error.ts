export class A2AError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'A2AError';
  }
}

export class A2AClientError extends A2AError {
  constructor(
    code: string,
    message: string,
    details?: Record<string, unknown>
  ) {
    super(`CLIENT_${code}`, message, details);
    this.name = 'A2AClientError';
  }
}

export class A2AServerError extends A2AError {
  constructor(
    public readonly status: number,
    code: string,
    message: string,
    details?: Record<string, unknown>
  ) {
    super(`SERVER_${code}`, message, details);
    this.name = 'A2AServerError';
  }
}

export class A2ANetworkError extends A2AClientError {
  constructor(message: string, details?: Record<string, unknown>) {
    super('NETWORK_ERROR', message, details);
    this.name = 'A2ANetworkError';
  }
}

export class A2AValidationError extends A2AClientError {
  constructor(message: string, details?: Record<string, unknown>) {
    super('VALIDATION_ERROR', message, details);
    this.name = 'A2AValidationError';
  }
}

export class A2ATimeoutError extends A2AClientError {
  constructor(message: string, details?: Record<string, unknown>) {
    super('TIMEOUT_ERROR', message, details);
    this.name = 'A2ATimeoutError';
  }
}
