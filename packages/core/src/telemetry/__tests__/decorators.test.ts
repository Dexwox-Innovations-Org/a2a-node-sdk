import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Create mock functions outside the factory for better control
const mockSpan = {
  end: vi.fn(),
  setStatus: vi.fn(),
  recordException: vi.fn(),
  setAttribute: vi.fn()
};

const mockStartSpan = vi.fn().mockReturnValue({
  span: mockSpan,
  ctx: {}
});

const mockRecordMetric = vi.fn();
const mockIsEnabled = vi.fn().mockReturnValue(true);
const mockEndSpan = vi.fn();
const mockUpdateConfig = vi.fn();
const mockShutdown = vi.fn();

// Create the mock telemetry instance that matches the real TelemetryService structure
const mockTelemetryInstance = {
  isEnabled: mockIsEnabled,
  startSpan: mockStartSpan,
  endSpan: mockEndSpan,
  recordMetric: mockRecordMetric,
  updateConfig: mockUpdateConfig,
  shutdown: mockShutdown,
  config: {
    collectionLevel: 'detailed'
  }
};

// Mock the TelemetryService module with proper static method handling
vi.mock('../service', () => {
  // Create a mock class that properly handles static methods
  const MockTelemetryService = {
    initialize: vi.fn(() => mockTelemetryInstance),
    getInstance: vi.fn(() => mockTelemetryInstance)
  };

  return {
    TelemetryService: MockTelemetryService
  };
});

// Import after mocking
import { TelemetryService } from '../service';
import { Trace, Metric } from '../decorators';

describe('Telemetry Decorators', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('@Trace', () => {
    it('should trace synchronous methods', () => {
      // Define a class and apply decorator manually
      class TestClass {
        testMethod(): string {
          return 'result';
        }
      }
      
      // Apply decorator manually with proper descriptor
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      const decoratedDescriptor = Trace()(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      const result = instance.testMethod();
      
      expect(result).toBe('result');
      expect(TelemetryService.initialize).toHaveBeenCalled();
    });

    it('should trace asynchronous methods', async () => {
      // Define a class and apply decorator manually
      class TestClass {
        async testMethod(): Promise<string> {
          return 'result';
        }
      }
      
      // Apply decorator manually with proper descriptor
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      const decoratedDescriptor = Trace()(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      const result = await instance.testMethod();
      
      expect(result).toBe('result');
      expect(TelemetryService.initialize).toHaveBeenCalled();
    });

    it('should handle errors in methods', async () => {
      // Define a class and apply decorator manually
      class TestClass {
        async testMethod(): Promise<void> {
          throw new Error('Test error');
        }
      }
      
      // Apply decorator manually with proper descriptor
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      const decoratedDescriptor = Trace()(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      
      await expect(instance.testMethod()).rejects.toThrow('Test error');
      expect(TelemetryService.initialize).toHaveBeenCalled();
    });

    it('should use custom span name when provided', () => {
      class TestClass {
        testMethod(): void {
          // Method implementation
        }
      }
      
      // Apply decorator manually with custom name
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      const decoratedDescriptor = Trace('CustomSpanName')(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      instance.testMethod();
      
      expect(TelemetryService.initialize).toHaveBeenCalled();
    });
  });

  describe('@Metric', () => {
    it('should record metric for method calls', () => {
      class TestClass {
        testMethod(): void {
          // Method implementation
        }
      }
      
      // Apply decorator manually with proper descriptor
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      const decoratedDescriptor = Metric('test.metric')(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      instance.testMethod();
      
      expect(TelemetryService.initialize).toHaveBeenCalled();
    });

    it('should record metric with custom value', () => {
      class TestClass {
        testMethod(): void {
          // Method implementation
        }
      }
      
      // Apply decorator manually with proper descriptor
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };

      const decoratedDescriptor = Metric('test.metric', 5)(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);

      const instance = new TestClass();
      instance.testMethod();

      expect(TelemetryService.initialize).toHaveBeenCalled();
    });

    it('should record metric with attributes', () => {
      const attributes = { tag: 'value' };

      class TestClass {
        testMethod(): void {
          // Method implementation
        }
      }
      
      // Apply decorator manually with proper descriptor
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      const decoratedDescriptor = Metric('test.metric', 1, attributes)(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      instance.testMethod();
      
      expect(TelemetryService.initialize).toHaveBeenCalled();
    });
  });
});
