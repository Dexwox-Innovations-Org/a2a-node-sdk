import { AgentCard, Task, DiscoverRequest, DiscoverResponse } from '../types/a2a-protocol';
import { JsonRpcRequest, JsonRpcResponse } from '../types/jsonrpc';

export function toJsonRpcRequest(request: DiscoverRequest): JsonRpcRequest {
  return {
    jsonrpc: '2.0',
    id: request.id,
    method: request.method,
    params: request.params
  };
}

export function fromJsonRpcResponse<T>(response: JsonRpcResponse): T {
  if (response.error) {
    throw new Error(response.error.message);
  }
  return response.result as T;
}

export function agentCardToJson(agent: AgentCard): Record<string, any> {
  return {
    ...agent,
    capabilities: [...agent.capabilities]
  };
}

export function jsonToAgentCard(json: Record<string, any>): AgentCard {
  return {
    id: json.id,
    name: json.name,
    capabilities: Array.isArray(json.capabilities) ? [...json.capabilities] : [],
    endpoint: json.endpoint
  };
}

export function taskToJson(task: Task): Record<string, any> {
  return {
    ...task,
    inputSchema: task.inputSchema ? {...task.inputSchema} : undefined,
    outputSchema: task.outputSchema ? {...task.outputSchema} : undefined
  };
}

export function jsonToTask(json: Record<string, any>): Task {
  return {
    id: json.id,
    name: json.name,
    description: json.description,
    status: 'submitted',
    inputSchema: json.inputSchema,
    outputSchema: json.outputSchema,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}
