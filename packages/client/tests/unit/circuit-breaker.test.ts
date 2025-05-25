import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CircuitBreaker } from '../../src/utils/circuit-breaker';

describe('CircuitBreaker', () => {
  const options = {
    failureThreshold: 2,
    successThreshold: 1,
    timeout: 1000
  };

  let cb: CircuitBreaker;

  beforeEach(() => {
    cb = new CircuitBreaker(options);
  });

  it('should start in CLOSED state', () => {
    expect(cb.getState()).toBe('CLOSED');
  });

  it('should transition to OPEN after failure threshold', async () => {
    const failingFn = () => Promise.reject(new Error('Test error'));
    
    // First failure
    await expect(cb.execute(failingFn)).rejects.toThrow('Test error');
    expect(cb.getState()).toBe('CLOSED');

    // Second failure (reaches threshold)
    await expect(cb.execute(failingFn)).rejects.toThrow('Test error');
    expect(cb.getState()).toBe('OPEN');
  });

  it('should transition to HALF_OPEN after timeout', async () => {
    // Force OPEN state
    vi.spyOn(cb as any, 'onFailure').mockImplementation(() => {
      (cb as any).state = 'OPEN';
      (cb as any).lastFailureTime = Date.now();
    });
    cb.execute(() => Promise.reject(new Error('Test error')));

    // Fast-forward timeout
    vi.useFakeTimers();
    vi.advanceTimersByTime(options.timeout + 1);
    vi.useRealTimers();

    expect(cb.getState()).toBe('HALF_OPEN');
  });

  it('should transition to CLOSED after success in HALF_OPEN', async () => {
    // Set to HALF_OPEN state
    (cb as any).state = 'HALF_OPEN';
    
    await cb.execute(() => Promise.resolve('success'));
    expect(cb.getState()).toBe('CLOSED');
  });

  it('should track failure count', async () => {
    const failingFn = () => Promise.reject(new Error('Test error'));
    await cb.execute(failingFn).catch(() => {});
    await cb.execute(failingFn).catch(() => {});
    expect(cb['failureCount']).toBe(2);
  });

  it('should reset failure count after success', async () => {
    const failingFn = () => Promise.reject(new Error('Test error'));
    const successFn = () => Promise.resolve('success');
    
    await cb.execute(failingFn).catch(() => {});
    await cb.execute(successFn);
    
    expect(cb['failureCount']).toBe(0);
  });

  it('should reject when OPEN and not timed out', async () => {
    (cb as any).state = 'OPEN';
    (cb as any).lastFailureTime = Date.now();
    
    await expect(cb.execute(() => Promise.resolve('success')))
      .rejects.toMatchObject({
        code: -32050,
        message: 'Circuit breaker is open'
      });
  });
});
