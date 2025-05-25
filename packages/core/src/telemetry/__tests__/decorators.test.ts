import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { context, trace } from '@opentelemetry/api';

// First define the mock
vi.mock('../service', () => {
  // Define mock functions inside the factory function
  const mockStartSpan = vi.fn().mockReturnValue({
    span: { 
      end: vi.fn(), 
      setStatus: vi.fn(), 
      recordException: vi.fn(),
      setAttribute: vi.fn()
    },
    ctx: {}
  });
  
  const mockRecordMetric = vi.fn();
  const mockIsEnabled = vi.fn().mockReturnValue(true);
  const mockEndSpan = vi.fn();
  
  // Export the mock functions for later assertions
  vi.stubGlobal('mockStartSpan', mockStartSpan);
  vi.stubGlobal('mockRecordMetric', mockRecordMetric);
  vi.stubGlobal('mockIsEnabled', mockIsEnabled);
  vi.stubGlobal('mockEndSpan', mockEndSpan);
  
  return {
    TelemetryService: {
      initialize: vi.fn().mockReturnValue({
        isEnabled: mockIsEnabled,
        startSpan: mockStartSpan,
        endSpan: mockEndSpan,
        recordMetric: mockRecordMetric,
        config: {
          collectionLevel: 'detailed'
        }
      })
    }
  };
});

// Declare types for the mocks in global scope
declare global {
  var mockStartSpan: ReturnType<typeof vi.fn>;
  var mockRecordMetric: ReturnType<typeof vi.fn>;
  var mockIsEnabled: ReturnType<typeof vi.fn>;
  var mockEndSpan: ReturnType<typeof vi.fn>;
}

// Get the mock functions from global scope
const mockStartSpan = global.mockStartSpan;
const mockRecordMetric = global.mockRecordMetric;
const mockIsEnabled = global.mockIsEnabled;
const mockEndSpan = global.mockEndSpan;

// Import after setting up the mock
import { TelemetryService } from '../service';
import { Trace, Metric } from '../decorators';

describe('Telemetry Decorators', () => {
  let telemetryService: any;
  
  beforeEach(() => {
    // Get the mock instance
    telemetryService = TelemetryService.initialize();
    vi.clearAllMocks();
  });
  
  afterEach(() => {
    vi.restoreAllMocks();
  });
  
  describe('@Trace', () => {
    it('should trace synchronous methods', () => {
      // Define a class with the Trace decorator
      class TestClass {
        // Apply the decorator to the method
        @Trace()
        testMethod(): string {
          return 'result';
        }
      }
      
      const instance = new TestClass();
      const result = instance.testMethod();
      
      expect(result).toBe('result');
      expect(mockStartSpan).toHaveBeenCalledWith('TestClass.testMethod', undefined);
      expect(mockEndSpan).toHaveBeenCalled();
    });
    
    it('should trace asynchronous methods', async () => {
      // Define a class with the Trace decorator for async method
      class TestClass {
        // Apply the decorator to the async method
        @Trace()
        async testMethod(): Promise<string> {
          return 'result';
        }
      }
      
      const instance = new TestClass();
      const result = await instance.testMethod();
      
      expect(result).toBe('result');
      expect(mockStartSpan).toHaveBeenCalledWith('TestClass.testMethod', undefined);
      expect(mockEndSpan).toHaveBeenCalled();
    });
    
    it('should handle errors in methods', async () => {
      // Define a class with the Trace decorator for error handling
      class TestClass {
        // Apply the decorator to the method that throws an error
        @Trace()
        async testMethod(): Promise<void> {
          throw new Error('Test error');
        }
      }
      
      const instance = new TestClass();
      
      await expect(instance.testMethod()).rejects.toThrow('Test error');
      expect(mockStartSpan).toHaveBeenCalled();
      expect(mockEndSpan).toHaveBeenCalled();
    });
    
    it('should use custom span name when provided', () => {
      // Define the class with proper method descriptor
      const TestClass = class {
        testMethod() {
          return 'result';
        }
      };
      
      // Apply decorator to the method properly
      const originalMethod = TestClass.prototype.testMethod;
      const descriptor = {
        value: originalMethod,
        writable: true,
        enumerable: false,
        configurable: true
      };
      
      // Apply the decorator manually
      const decoratedDescriptor = Trace('custom.operation.name')(TestClass.prototype, 'testMethod', descriptor);
      Object.defineProperty(TestClass.prototype, 'testMethod', decoratedDescriptor || descriptor);
      
      const instance = new TestClass();
      instance.testMethod();
      
      expect(mockStartSpan).toHaveBeenCalledWith('custom.operation.name', undefined);
    });
  });
  
  describe('@Metric', () => {
    it('should record metric for method calls', () => {
      class TestClass {
        @Metric('test.metric')
        testMethod(): void {
          // Method implementation
        }
      }
      
      const instance = new TestClass();
      instance.testMethod();
      
      expect(mockRecordMetric).toHaveBeenCalledWith('test.metric', 1, undefined);
    });
    
    it('should record metric with custom value', () => {
      class TestClass {
        @Metric('test.metric', 5)
        testMethod(): void {
          // Method implementation
        }
      }

      const instance = new TestClass();
      instance.testMethod();

      expect(mockRecordMetric).toHaveBeenCalledWith('test.metric', 5, undefined);
    });

    it('should record metric with attributes', () => {
      const attributes = { tag: 'value' };

      class TestClass {
        @Metric('test.metric', 1, attributes)
        testMethod(): void {
          // Method implementation
        }
      }
      
      const instance = new TestClass();
      instance.testMethod();
      
      expect(mockRecordMetric).toHaveBeenCalledWith('test.metric', 1, attributes);
    });
  });
});
