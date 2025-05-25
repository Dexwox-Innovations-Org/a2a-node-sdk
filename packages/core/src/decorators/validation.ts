import { z } from 'zod';
import { A2AError, ERROR_CODES } from '../errors';

export function ValidateParams(schema: z.ZodSchema) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      try {
        schema.parse(args[0]); // Validate first argument
        return originalMethod.apply(this, args);
      } catch (err) {
        throw new A2AError('Invalid parameters', ERROR_CODES.INVALID_TASK_STATE, { validationError: err });
      }
    };
  };
}

export function ValidateReturn(schema: z.ZodSchema) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = async function(...args: any[]) {
      const result = await originalMethod.apply(this, args);
      try {
        return schema.parse(result);
      } catch (err) {
        throw new A2AError('Invalid return value', ERROR_CODES.TASK_NOT_FOUND, { validationError: err });
      }
    };
  };
}

export function ValidateTask(schema: z.ZodSchema) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(task: any, ...args: any[]) {
      try {
        schema.parse(task);
        return originalMethod.apply(this, [task, ...args]);
      } catch (err) {
        throw new A2AError('Invalid task state', ERROR_CODES.TASK_ALREADY_COMPLETED, { validationError: err });
      }
    };
  };
}
