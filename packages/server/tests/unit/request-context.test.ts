import { describe, it, expect, vi } from 'vitest';
import { 
  createRequestContext, 
  getCurrentContext,
  runInContext,
  attachRelatedTask,
  getMessageText,
  type Message,
  type Task
} from '../../src/agent-execution/request-context';

describe('Request Context', () => {
  const mockTask: Task = {
    id: 'task-1',
    name: 'Test Task',
    status: 'submitted',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const mockMessage: Message = {
    parts: [
      { type: 'text', content: 'Hello', format: 'plain' },
      { type: 'text', content: 'World', format: 'plain' }
    ]
  };

  it('should create context with required fields', () => {
    const ctx = createRequestContext(mockTask, 'agent-1');
    expect(ctx.task).toEqual(mockTask);
    expect(ctx.agentId).toBe('agent-1');
    expect(ctx.requestId).toBeDefined();
    expect(ctx.contextId).toBeDefined();
    expect(ctx.timestamp).toBeDefined();
  });

  it('should run callback in context', () => {
    const ctx = createRequestContext(mockTask, 'agent-1');
    runInContext(ctx, () => {
      expect(getCurrentContext()).toBe(ctx);
    });
  });

  it('should attach related task', () => {
    const ctx = createRequestContext(mockTask, 'agent-1');
    const relatedTask = { ...mockTask, id: 'task-2' };

    runInContext(ctx, () => {
      attachRelatedTask(relatedTask);
      expect(ctx.relatedTasks).toContain(relatedTask);
    });
  });

  it('should get message text', () => {
    const ctx = createRequestContext(mockTask, 'agent-1', mockMessage);
    runInContext(ctx, () => {
      expect(getMessageText()).toBe('Hello\nWorld');
      expect(getMessageText(' ')).toBe('Hello World');
    });
  });

  it('should return undefined outside context', () => {
    expect(getCurrentContext()).toBeUndefined();
  });
});
