import { describe, it, expect } from 'vitest';
import {
  toJsonRpcRequest,
  fromJsonRpcResponse,
  agentCardToJson,
  jsonToAgentCard,
  taskToJson,
  jsonToTask
} from '../../src/conversion/type-converters';
import { AgentCard, Task } from '../../src/types/a2a-protocol';

describe('Type Conversion Utilities', () => {
  describe('JSON-RPC Conversions', () => {
    it('should convert DiscoverRequest to JsonRpcRequest', () => {
      const request = {
        jsonrpc: '2.0' as const,
        id: '123',
        method: 'discover' as const,
        params: { capability: 'test' }
      };
      const result = toJsonRpcRequest(request);
      expect(result).toEqual(request);
    });

    it('should convert JsonRpcResponse to typed result', () => {
      const response = {
        jsonrpc: '2.0' as const,
        id: '123',
        result: { agents: [] }
      };
      const result = fromJsonRpcResponse<{agents: AgentCard[]}>(response);
      expect(result).toEqual(response.result);
    });
  });

  describe('Agent Card Conversions', () => {
    const sampleAgent: AgentCard = {
      id: 'agent1',
      name: 'Test Agent',
      capabilities: ['cap1', 'cap2'],
      endpoint: 'https://example.com'
    };

    it('should convert AgentCard to JSON', () => {
      const json = agentCardToJson(sampleAgent);
      expect(json).toEqual(sampleAgent);
    });

    it('should convert JSON to AgentCard', () => {
      const json = {...sampleAgent};
      const agent = jsonToAgentCard(json);
      expect(agent).toEqual(sampleAgent);
    });

    it('should handle missing capabilities', () => {
      const agent = jsonToAgentCard({...sampleAgent, capabilities: undefined});
      expect(agent.capabilities).toEqual([]);
    });
  });

  describe('Task Conversions', () => {
    const sampleTask: Task = {
      id: 'task1',
      name: 'Test Task',
      description: 'Test Description',
      status: {
        state: 'submitted',
        timestamp: '2025-05-14T20:29:07.727Z'
      },
      createdAt: '2025-05-14T20:29:07.727Z',
      updatedAt: '2025-05-14T20:29:07.727Z',
      inputSchema: { type: 'object' },
      outputSchema: { type: 'string' }
    };

    it('should convert Task to JSON', () => {
      const json = taskToJson(sampleTask);
      expect(json).toEqual(sampleTask);
    });

    it('should convert JSON to Task', () => {
      const json = {...sampleTask};
      const task = jsonToTask(json);
      expect(task).toMatchObject({
        id: sampleTask.id,
        name: sampleTask.name,
        description: sampleTask.description,
        status: sampleTask.status,
        inputSchema: sampleTask.inputSchema,
        outputSchema: sampleTask.outputSchema
      });
      expect(task.createdAt).toBeDefined();
      expect(task.updatedAt).toBeDefined();
    });

    it('should handle missing schemas', () => {
      const task = jsonToTask({...sampleTask, inputSchema: undefined});
      expect(task.inputSchema).toBeUndefined();
    });
  });
});
