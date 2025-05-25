import {
  A2AError,
  A2AClientError,
  A2AServerError,
  A2ANetworkError,
  A2AValidationError,
  A2ATimeoutError
} from './error';

export {
  A2AError,
  A2AClientError,
  A2AServerError,
  A2ANetworkError,
  A2AValidationError,
  A2ATimeoutError
};

export function normalizeError(err: unknown): A2AError {
  if (err instanceof A2AError) {
    return err;
  }

  if (err instanceof Error) {
    return new A2AClientError(
      'UNKNOWN_ERROR',
      err.message,
      { stack: err.stack }
    );
  }

  if (typeof err === 'object' && err !== null) {
    const errorObj = err as Record<string, unknown>;
    if (errorObj.status && typeof errorObj.status === 'number') {
      return new A2AServerError(
        errorObj.status,
        String(errorObj.code || 'SERVER_ERROR'),
        String(errorObj.message || 'Server error occurred'),
        errorObj
      );
    }
  }

  return new A2AClientError(
    'UNKNOWN_ERROR',
    'Unknown error occurred',
    { originalError: err }
  );
}
