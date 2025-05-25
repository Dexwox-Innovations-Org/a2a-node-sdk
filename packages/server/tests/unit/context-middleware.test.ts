import { describe, it, expect, vi } from 'vitest';
import express from 'express';
import request from 'supertest';
import { contextMiddleware } from '../../src/agent-execution/context-middleware';
import { getCurrentContext } from '../../src/agent-execution/request-context';

describe('Context Middleware', () => {
  it('should create context for requests', async () => {
    const app = express();
    const agentId = 'test-agent';
    
    app.use(contextMiddleware(agentId));
    app.get('/test', (req, res) => {
      const ctx = getCurrentContext();
      res.json({
        agentId: ctx?.agentId,
        taskName: ctx?.task.name
      });
    });

    const response = await request(app).get('/test');
    expect(response.body).toEqual({
      agentId: 'test-agent',
      taskName: 'GET /test'
    });
  });

  it('should maintain context through async operations', async () => {
    const app = express();
    const agentId = 'test-agent';
    
    app.use(contextMiddleware(agentId));
    app.get('/async', async (req, res) => {
      await new Promise(resolve => setTimeout(resolve, 10));
      const ctx = getCurrentContext();
      res.json({ contextId: ctx?.contextId });
    });

    const response1 = await request(app).get('/async');
    const response2 = await request(app).get('/async');
    
    expect(response1.body.contextId).toBeDefined();
    expect(response2.body.contextId).toBeDefined();
    expect(response1.body.contextId).not.toBe(response2.body.contextId);
  });
});
