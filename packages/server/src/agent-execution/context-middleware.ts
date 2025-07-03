import { Request, Response, NextFunction } from 'express';
import { Task, TaskStatus } from '@dexwox-labs/a2a-core';
import { createRequestContext, runInContext } from './request-context';
import { randomUUID } from 'crypto';

export function contextMiddleware(agentId: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    
    // Create a basic task for the request with proper TaskStatus structure
    const taskStatus: TaskStatus = {
      state: 'submitted',
      timestamp,
      metadata: {
        method: req.method,
        path: req.path
      }
    };

    const task: Task = {
      id: randomUUID(),
      name: `${req.method} ${req.path}`,
      status: taskStatus,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    // Create and run the request in context
    const context = createRequestContext(task, agentId);
    runInContext(context, () => next());
  };
}
