import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { TelemetryService } from '../service';
import { TelemetryConfig } from '../config';

describe('TelemetryService', () => {
  let telemetry: TelemetryService;
  
  const mockConfig: Partial<TelemetryConfig> = {
    enabled: true,
    serviceName: 'test-service',
    serviceVersion: '1.0.0',
    collectionLevel: 'detailed',
  };

  beforeEach(() => {
    // Reset the singleton instance before each test
    (TelemetryService as any).instance = undefined;
    telemetry = TelemetryService.initialize(mockConfig);
  });

  afterEach(async () => {
    await telemetry.shutdown();
  });

  it('should initialize with default config', () => {
    const defaultTelemetry = TelemetryService.initialize();
    expect(defaultTelemetry.isEnabled()).toBe(true);
  });

  it('should respect disabled config', () => {
    const disabledTelemetry = TelemetryService.initialize({ enabled: false });
    expect(disabledTelemetry.isEnabled()).toBe(false);
  });

  it('should create and end spans', () => {
    const { span } = telemetry.startSpan('test-span');
    expect(span).toBeDefined();
    
    // Should not throw when ending a span
    expect(() => telemetry.endSpan(span)).not.toThrow();
  });

  it('should record metrics', () => {
    // Should not throw when recording metrics
    expect(() => {
      telemetry.recordMetric('test.metric', 1, { tag: 'value' });
    }).not.toThrow();
  });

  it('should record durations', () => {
    const startTime = Date.now() - 100; // 100ms ago
    expect(() => {
      telemetry.recordDuration('test.duration', startTime, { tag: 'value' });
    }).not.toThrow();
  });

  it('should update config', () => {
    telemetry.updateConfig({ collectionLevel: 'basic' });
    // This is a simple test to verify the method doesn't throw
    // More thorough testing would require checking internal state
    expect(telemetry).toBeDefined();
  });
});
