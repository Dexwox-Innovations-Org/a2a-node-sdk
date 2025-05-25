import { Router, Request, Response } from 'express';
import { DefaultJsonRpcRequestHandler } from './request-handlers/default-jsonrpc-handler';
import { randomUUID } from 'crypto';
import { AgentExecutor, DefaultAgentExecutor } from './agent-execution/agent-executor';
import { TaskManager } from './tasks/task-manager';
import { InMemoryTaskStore } from './tasks/in-memory-task-store';
import {
  buildSuccessResponse,
  buildErrorResponse
} from './response-helpers';
import { PushNotificationService } from './push-notifications/push-service';
import { EventQueue } from './agent-execution/event-queue';
import { TaskEventManager } from './agent-execution/task-event-manager';
import { InMemoryQueueManager } from './queue-system/in-memory-queue-manager';
import { 
  MessagePart,
  Task,
  AgentCard,
  A2AError,
  TaskTransition,
  JsonRpcResponse
} from '@dexwox/a2a-core';
import { createRequestContext } from './agent-execution/request-context';

interface PushNotificationConfig {
  enabled: boolean;
  endpoint?: string;
  authToken?: string;
  events: string[];
}

export interface RequestHandler {
  readonly router: Router;

  // Message handling
  handleSendMessage(parts: MessagePart[], agentId: string): Promise<string>;
  handleStreamMessage(parts: MessagePart[], agentId: string): AsyncGenerator<MessagePart, void, unknown>;

  // Task management  
  handleGetTaskStatus(taskId: string): Promise<Task>;
  handleCancelTask(taskId: string): Promise<void>;
  handleTaskResubscription(taskId: string): AsyncGenerator<MessagePart, void, unknown>;

  // Push notifications
  handleSetPushConfig(taskId: string, config: PushNotificationConfig): Promise<void>;
  handleGetPushConfig(taskId: string): Promise<PushNotificationConfig>;

  // Agent discovery
  handleDiscoverAgents(capability?: string): Promise<AgentCard[]>;

  // Error handling
  normalizeError(err: unknown): A2AError;
}

export class DefaultRequestHandler extends DefaultJsonRpcRequestHandler implements RequestHandler {
  public readonly router: Router;

  private readonly eventQueue: EventQueue;
  private readonly taskEventManager: TaskEventManager;
  private readonly queueManager = new InMemoryQueueManager();

  private readonly agentExecutor: AgentExecutor;
  private readonly taskManager = new TaskManager(new InMemoryTaskStore());
  private readonly pushService = new PushNotificationService();
  private readonly agents: AgentCard[];
 
  constructor(agents: AgentCard[] = []) {
    super();
    this.router = Router();
    this.eventQueue = new EventQueue();
    this.taskEventManager = new TaskEventManager(this.eventQueue);
    this.agentExecutor = new DefaultAgentExecutor(
      new TaskManager(new InMemoryTaskStore()),
      this.taskEventManager
    );
    this.agents = agents;
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.router.post('/sendMessage', this.handleJsonRpcSendMessage.bind(this));
    this.router.post('/streamMessage', this.handleJsonRpcStreamMessage.bind(this));
    this.router.get('/tasks/:taskId', this.handleJsonRpcGetTaskStatus.bind(this));
    this.router.post('/tasks/:taskId/cancel', this.handleJsonRpcCancelTask.bind(this));
    this.router.get('/agents', this.handleJsonRpcDiscoverAgents.bind(this));
  }

  async handleSendMessage(parts: MessagePart[], agentId: string): Promise<string> {
    const task = await this.taskManager.createTask({
      name: 'MessageTask',
      agentId,
      parts: parts || [],
      expectedParts: parts.length,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    
    try {
      await this.agentExecutor.execute(
        createRequestContext(task, agentId),
        this.eventQueue
      );
    } catch (error) {
      await this.taskManager.updateTaskStatus(task.id, 'failed');
      this.taskEventManager.taskFailed(task, this.normalizeError(error));
      throw error;
    }
    
    this.taskEventManager.taskCreated(task);
    for (const part of parts) {
      if (part.type === 'file') {
        this.taskEventManager.artifactAdded(task, {
          id: randomUUID(),
          type: 'file',
          content: { data: part.content },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      } else if (part.type === 'data') {
        this.taskEventManager.artifactAdded(task, {
          id: randomUUID(),
          type: 'data',
          content: part.content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    }
    return task.id;
  }

  private createArtifactEvent(task: Task, part: MessagePart) {
    if (part.type === 'file') {
      return {
        id: randomUUID(),
        type: part.type,
        content: { data: part.content },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        metadata: {
          name: part.name,
          size: part.size,
          mimeType: part.mimeType
        }
      };
    } else if (part.type === 'data') {
      return {
        id: randomUUID(),
        type: part.type,
        content: part.content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        metadata: {
          schema: ('schema' in part) ? part.schema : 'json'
        }
      };
    }
    throw new Error(`Cannot create artifact from part type: ${part.type}`);
  }

  private createHeartbeat(): MessagePart {
    return {
      type: 'heartbeat',
      content: new Date().toISOString(),
      format: 'plain'
    };
  }

  async *handleStreamMessage(parts: MessagePart[], agentId: string): AsyncGenerator<MessagePart, void, unknown> {
    const task = await this.taskManager.createTask({
      name: 'StreamTask',
      agentId,
      parts,
      expectedParts: parts.length,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    const aggregator = this.taskManager.getAggregator(task.id);
    this.taskEventManager.taskCreated(task);
    
    for (const part of parts) {
      yield part;
      
      if (aggregator) {
        aggregator.addPart(part);
        if (part.type === 'file' || part.type === 'data') {
          try {
            this.taskEventManager.artifactAdded(task, this.createArtifactEvent(task, part));
          } catch (err) {
            console.error('Failed to create artifact:', err);
          }
        }
      }
      
      // Send heartbeat every 15 seconds
      if (Math.random() < 0.066) {  // ~1/15 chance per second
        const heartbeat = this.createHeartbeat();
        yield heartbeat;
        if (aggregator) {
          aggregator.addPart(heartbeat);
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    aggregator?.complete();
  }

  async handleGetTaskStatus(taskId: string): Promise<Task> {
    const task = await this.taskManager.getTask(taskId);
    if (!task) {
      throw this.normalizeError({ code: -32004, message: 'Task not found' });
    }
    return task;
  }

  async handleCancelTask(taskId: string): Promise<void> {
    const task = await this.taskManager.getTask(taskId);
    if (!task.agentId) {
      throw this.normalizeError({ code: -32000, message: 'Task has no agentId' });
    }
    await this.agentExecutor.cancel(
      createRequestContext(task, task.agentId),
      this.eventQueue
    );
    await this.taskManager.cancelTask(taskId);
    this.taskEventManager.taskUpdated(task);
  }


  async handleDiscoverAgents(capability?: string): Promise<AgentCard[]> {
    return capability 
      ? this.agents.filter(agent => agent.capabilities.includes(capability))
      : this.agents;
  }

  async *handleTaskResubscription(taskId: string): AsyncGenerator<MessagePart, void, unknown> {
    const task = await this.taskManager.getTask(taskId);
    if (!task) {
      throw this.normalizeError({ code: -32004, message: 'Task not found' });
    }

    // Yield existing task parts first
    const parts = task.parts ?? [];
    for (const part of parts) {
      yield part;
    }

    // Track last activity time
    let lastActivity = Date.now();
    
    // Then continue streaming new updates (mock implementation)
    while (task.status === 'working') {
      await new Promise(resolve => setTimeout(resolve, 1000));
        const update: MessagePart = {
          type: 'text',
          content: `Task ${taskId} update at ${new Date().toISOString()}`,
          format: 'plain'
        };
        yield update;
      lastActivity = Date.now();
      
      // Check if we need to send a heartbeat
      if (Date.now() - lastActivity > 15000) {
        const heartbeat: MessagePart = {
          type: 'heartbeat',
          content: new Date().toISOString(),
          format: 'plain'
        };
        yield heartbeat;
        lastActivity = Date.now();
      }
    }
  }

  async handleSetPushConfig(taskId: string, config: PushNotificationConfig): Promise<void> {
    await this.taskManager.getTask(taskId); // Verify task exists
    await this.pushService.setConfig(taskId, config);
  }

  async handleGetPushConfig(taskId: string): Promise<PushNotificationConfig> {
    await this.taskManager.getTask(taskId); // Verify task exists
    return this.pushService.getConfig(taskId);
  }

  normalizeError(err: unknown): A2AError {
    if (err instanceof A2AError) {
      return err;
    }
    if (err instanceof Error) {
      return new A2AError(err.message, -32000, { stack: err.stack });
    }
    return new A2AError('Unknown error occurred', -32000, { originalError: err });
  }
}
