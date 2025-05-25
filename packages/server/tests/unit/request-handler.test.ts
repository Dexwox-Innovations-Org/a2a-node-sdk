import { describe, it, expect } from 'vitest';
import { DefaultRequestHandler } from '../../src/request-handler'

describe('RequestHandler', () => {
  it('should initialize correctly', () => {
    const handler = new DefaultRequestHandler();
    expect(handler).toBeInstanceOf(DefaultRequestHandler);
  });
});
