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
    // Force OPEN state by triggering failures
    const failingFn = () => Promise.reject(new Error('Test error'));
    
    // First failure
    await expect(cb.execute(failingFn)).rejects.toThrow('Test error');
    
    // Second failure (reaches threshold, should open circuit)
    await expect(cb.execute(failingFn)).rejects.toThrow('Test error');
    
    // Verify circuit is OPEN
    expect(cb.getState()).toBe('OPEN');

    // Fast-forward timeout using fake timers
    vi.useFakeTimers();
    vi.advanceTimersByTime(options.timeout + 100); // Add buffer for timing
    
    // Check state after timeout
    expect(cb.getState()).toBe('HALF_OPEN');
    
    vi.useRealTimers();
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
