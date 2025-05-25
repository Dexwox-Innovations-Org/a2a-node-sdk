import { context, trace, type Context, type Span } from '@opentelemetry/api';
import { TelemetryService } from './service';

type AnyFunction = (...args: any[]) => any;

type TraceOptions = {
  name?: string;
  parentContext?: Context;
};

/**
 * Decorator that automatically creates a span for the decorated method
 * @param nameOrOptions Optional span name or configuration object
 */
export function Trace(nameOrOptions?: string | TraceOptions): any {
  // This function can be used as @Trace or @Trace(options)
  return function(
    target: any, 
    propertyKey: string | symbol, 
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    if (!descriptor || typeof descriptor.value !== 'function') {
      throw new Error('@Trace can only be applied to method declarations');
    }
    
    const originalMethod = descriptor.value;
    const className = target.constructor.name;
    const methodName = String(propertyKey);
    
    // Determine the span name and parent context
    let spanName: string;
    let parentContext: Context | undefined;
    
    if (typeof nameOrOptions === 'string') {
      spanName = nameOrOptions;
    } else if (nameOrOptions?.name) {
      spanName = nameOrOptions.name;
      parentContext = nameOrOptions.parentContext;
    } else {
      spanName = `${className}.${methodName}`;
    }
    
    // Handle both synchronous and asynchronous methods
    const isAsync = originalMethod.constructor.name === 'AsyncFunction';
    
    if (isAsync) {
      descriptor.value = async function(...args: any[]) {
        const telemetry = TelemetryService.initialize();
        if (!telemetry.isEnabled()) {
          return originalMethod.apply(this, args);
        }

        const { span } = telemetry.startSpan(spanName, parentContext);
        
        try {
          // Record method arguments if detailed telemetry is enabled
          if (telemetry['config'].collectionLevel === 'detailed') {
            span.setAttribute('method', methodName);
            span.setAttribute('class', className);
            
            if (args && args.length > 0) {
              span.setAttribute('args', JSON.stringify(args, (_, v) => 
                typeof v === 'bigint' ? v.toString() : v
              ));
            }
          }
          
          const result = await originalMethod.apply(this, args);
          span.setStatus({ code: 1 }); // OK
          return result;
        } catch (error) {
          span.recordException(error as Error);
          span.setStatus({ 
            code: 2, 
            message: error instanceof Error ? error.message : String(error) 
          });
          throw error;
        } finally {
          telemetry.endSpan(span);
        }
      };
    } else {
      descriptor.value = function(...args: any[]) {
        const telemetry = TelemetryService.initialize();
        if (!telemetry.isEnabled()) {
          return originalMethod.apply(this, args);
        }

        const { span } = telemetry.startSpan(spanName, parentContext);
        
        try {
          // Record method arguments if detailed telemetry is enabled
          if (telemetry['config'].collectionLevel === 'detailed') {
            span.setAttribute('method', methodName);
            span.setAttribute('class', className);
            
            if (args && args.length > 0) {
              span.setAttribute('args', JSON.stringify(args, (_, v) => 
                typeof v === 'bigint' ? v.toString() : v
              ));
            }
          }
          
          const result = originalMethod.apply(this, args);
          span.setStatus({ code: 1 }); // OK
          return result;
        } catch (error) {
          span.recordException(error as Error);
          span.setStatus({ 
            code: 2, 
            message: error instanceof Error ? error.message : String(error) 
          });
          throw error;
        } finally {
          telemetry.endSpan(span);
        }
      };
    }

    return descriptor;
  };
}

/**
 * Decorator factory for recording metrics when a method is called
 * @param name The name of the metric to record
 * @param value Optional value to record (default: 1)
 * @param attributes Optional attributes to include with the metric
 * @returns A method decorator
 */
export function Metric(name: string, value: number = 1, attributes?: Record<string, unknown>): any {
  // This is a decorator factory, it returns the actual decorator function
  return function(
    target: any, 
    propertyKey: string | symbol, 
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // Ensure we're decorating a method
    if (!descriptor || typeof descriptor.value !== 'function') {
      throw new Error('@Metric can only be applied to method declarations');
    }
    
    // Store the original method
    const originalMethod = descriptor.value;
    const className = target.constructor.name;
    const methodName = String(propertyKey);
    
    // Replace the original method with our instrumented version
    descriptor.value = function(...args: any[]) {
      const telemetry = TelemetryService.initialize();
      if (telemetry.isEnabled()) {
        telemetry.recordMetric(name, value, {
          ...attributes,
          class: className,
          method: methodName
        });
      }
      
      return originalMethod.apply(this, args);
    };
    
    return descriptor;
  };
}

/**
 * Helper function to apply the metric decorator logic
 */
function applyMetricDecorator(
  target: any, 
  propertyKey: string | symbol, 
  descriptor: PropertyDescriptor,
  name: string,
  value: number = 1,
  attributes?: Record<string, unknown>
): PropertyDescriptor {
  if (!descriptor || typeof descriptor.value !== 'function') {
    throw new Error('@Metric can only be applied to method declarations');
  }
  
  const originalMethod = descriptor.value;
  const className = target.constructor.name;
  const methodName = String(propertyKey);
  
  descriptor.value = function(...args: any[]) {
    const telemetry = TelemetryService.initialize();
    if (telemetry.isEnabled()) {
      telemetry.recordMetric(name, value, {
        ...attributes,
        class: className,
        method: methodName
      });
    }
    
    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

/**
 * Class decorator to trace all methods in a class
 */
export function TraceClass(name?: string): ClassDecorator {
  return function(constructor: Function) {
    const className = name || constructor.name;
    
    for (const propertyName of Object.getOwnPropertyNames(constructor.prototype)) {
      if (propertyName === 'constructor') continue;
      
      const descriptor = Object.getOwnPropertyDescriptor(
        constructor.prototype,
        propertyName
      );
      
      if (descriptor && typeof descriptor.value === 'function') {
        const traceDescriptor = Trace(`${className}.${propertyName}`)(
          constructor.prototype,
          propertyName,
          descriptor
        );
        
        if (traceDescriptor) {
          Object.defineProperty(
            constructor.prototype,
            propertyName,
            traceDescriptor
          );
        }
      }
    }
  };
}
