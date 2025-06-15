/**
 * @fileoverview gRPC server implementation for hosting A2A agents
 * @module GrpcServer
 * 
 * This module provides a gRPC server that implements the A2A service definition
 * and can host agents that communicate via the gRPC protocol. It handles
 * protocol buffer serialization/deserialization and provides handlers for
 * all A2A operations.
 * 
 * Note: This is a foundational implementation with method stubs.
 * Full gRPC functionality will be implemented in subsequent phases.
 */

import type {
  Task,
  Message,
  AgentCard,
  PushNotificationConfig
} from '@dexwox-labs/a2a-core';

import type {
  GrpcServerConfig,
  GrpcSendMessageRequest,
  GrpcSendMessageResponse,
  GrpcStreamResponse,
  GrpcGetTaskRequest,
  GrpcCancelTaskRequest,
  GrpcTaskSubscriptionRequest,
  GrpcGetAgentCardRequest,
  GrpcCreateTaskPushNotificationRequest,
  GrpcGetTaskPushNotificationRequest,
  GrpcListTaskPushNotificationRequest,
  GrpcListTaskPushNotificationResponse,
  GrpcTaskPushNotificationConfig
} from '../types/grpc-types.js';

import {
  messageToGrpc,
  messageFromGrpc,
  taskToGrpc,
  taskFromGrpc,
  agentCardToGrpc,
  agentCardFromGrpc,
  grpcErrorToA2AError
} from '../utils/type-conversion.js';

/**
 * Interface for agent implementations that can be hosted by the gRPC server
 */
export interface A2AAgent {
  /**
   * Handles incoming messages and returns responses
   */
  handleMessage(message: Message, config?: any): Promise<Task | Message>;
  
  /**
   * Handles streaming message requests
   */
  handleMessageStreaming?(message: Message, config?: any): AsyncIterable<Task | Message | any>;
  
  /**
   * Retrieves task information
   */
  getTask?(taskId: string): Promise<Task>;
  
  /**
   * Cancels a running task
   */
  cancelTask?(taskId: string): Promise<void>;
  
  /**
   * Creates push notification configuration for a task
   */
  createTaskPushNotification?(taskId: string, config: PushNotificationConfig): Promise<void>;
  
  /**
   * Retrieves push notification configuration for a task
   */
  getTaskPushNotification?(taskId: string): Promise<PushNotificationConfig | null>;
  
  /**
   * Lists push notification configurations
   */
  listTaskPushNotification?(): Promise<PushNotificationConfig[]>;
  
  /**
   * Retrieves agent card information
   */
  getAgentCard?(): Promise<AgentCard>;
  
  /**
   * Subscribes to task updates
   */
  taskSubscription?(taskId: string): AsyncIterable<Task>;
}

/**
 * Default configuration for gRPC server
 */
export const defaultGrpcServerConfig: GrpcServerConfig = {
  host: '0.0.0.0',
  port: 50051,
  options: {
    'grpc.max_receive_message_length': 4 * 1024 * 1024, // 4MB
    'grpc.max_send_message_length': 4 * 1024 * 1024, // 4MB
    'grpc.keepalive_time_ms': 30000,
    'grpc.keepalive_timeout_ms': 5000,
    'grpc.keepalive_permit_without_calls': true,
    'grpc.http2.max_pings_without_data': 0,
    'grpc.http2.min_time_between_pings_ms': 10000,
    'grpc.http2.min_ping_interval_without_data_ms': 300000
  }
};

/**
 * gRPC server implementation for hosting A2A agents
 * 
 * This class provides a gRPC server that can host A2A agents and handle
 * all protocol operations including message sending, task management,
 * and push notifications.
 */
export class A2AGrpcServer {
  private config: GrpcServerConfig;
  private agent: A2AAgent | null = null;
  private server: any = null; // Will be grpc.Server when fully implemented
  private isRunning = false;

  constructor(config: Partial<GrpcServerConfig> = {}) {
    this.config = { ...defaultGrpcServerConfig, ...config };
  }

  /**
   * Sets the agent implementation to be hosted by this server
   */
  setAgent(agent: A2AAgent): void {
    this.agent = agent;
  }

  /**
   * Starts the gRPC server
   */
  async start(): Promise<void> {
    if (this.isRunning) {
      throw new Error('Server is already running');
    }

    if (!this.agent) {
      throw new Error('No agent configured. Call setAgent() before starting the server.');
    }

    try {
      // TODO: Implement actual gRPC server startup
      // This is a stub implementation for foundational structure
      console.log(`[STUB] gRPC server would start on ${this.config.host}:${this.config.port}`);
      this.isRunning = true;
      
      // In full implementation, this would:
      // 1. Load protocol buffer definitions
      // 2. Create gRPC server instance
      // 3. Register service handlers
      // 4. Bind to port and start listening
      
    } catch (error: any) {
      throw new Error(`Failed to start gRPC server: ${error.message}`);
    }
  }

  /**
   * Stops the gRPC server
   */
  async stop(): Promise<void> {
    if (!this.isRunning) {
      return;
    }

    try {
      // TODO: Implement actual gRPC server shutdown
      console.log('[STUB] gRPC server would stop');
      this.isRunning = false;
      
      // In full implementation, this would:
      // 1. Stop accepting new connections
      // 2. Wait for existing requests to complete
      // 3. Close the server
      
    } catch (error: any) {
      throw new Error(`Failed to stop gRPC server: ${error.message}`);
    }
  }

  /**
   * Gracefully shuts down the server
   */
  async shutdown(): Promise<void> {
    await this.stop();
  }

  /**
   * Returns whether the server is currently running
   */
  isServerRunning(): boolean {
    return this.isRunning;
  }

  /**
   * Gets the server configuration
   */
  getConfig(): GrpcServerConfig {
    return { ...this.config };
  }

  // gRPC Service Method Handlers (Stubs)
  // These will be connected to actual gRPC service definitions in full implementation

  /**
   * Handles SendMessage gRPC calls
   */
  private async handleSendMessage(request: GrpcSendMessageRequest): Promise<GrpcSendMessageResponse> {
    if (!this.agent) {
      throw new Error('No agent configured');
    }

    try {
      const message = messageFromGrpc(request.message);
      const result = await this.agent.handleMessage(message);
      
      if ('id' in result) {
        // Result is a Task
        return {
          task: taskToGrpc(result as Task)
        };
      } else {
        // Result is a Message
        return {
          message: messageToGrpc(result as Message)
        };
      }
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles SendStreamingMessage gRPC calls
   */
  private async* handleSendStreamingMessage(request: GrpcSendMessageRequest): AsyncIterable<GrpcStreamResponse> {
    if (!this.agent?.handleMessageStreaming) {
      throw new Error('Agent does not support streaming');
    }

    try {
      const message = messageFromGrpc(request.message);
      const stream = this.agent.handleMessageStreaming(message);
      
      for await (const item of stream) {
        if ('id' in item) {
          // Item is a Task
          yield {
            task: taskToGrpc(item as Task)
          };
        } else if ('parts' in item) {
          // Item is a Message
          yield {
            message: messageToGrpc(item as Message)
          };
        } else {
          // Item is raw data
          yield {
            data: item
          };
        }
      }
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles GetTask gRPC calls
   */
  private async handleGetTask(request: GrpcGetTaskRequest): Promise<{ task: any }> {
    if (!this.agent?.getTask) {
      throw new Error('Agent does not support task retrieval');
    }

    try {
      const task = await this.agent.getTask(request.taskId);
      return {
        task: taskToGrpc(task)
      };
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles CancelTask gRPC calls
   */
  private async handleCancelTask(request: GrpcCancelTaskRequest): Promise<{}> {
    if (!this.agent?.cancelTask) {
      throw new Error('Agent does not support task cancellation');
    }

    try {
      await this.agent.cancelTask(request.taskId);
      return {};
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles CreateTaskPushNotification gRPC calls
   */
  private async handleCreateTaskPushNotification(request: GrpcCreateTaskPushNotificationRequest): Promise<{}> {
    if (!this.agent?.createTaskPushNotification) {
      throw new Error('Agent does not support push notifications');
    }

    try {
      // TODO: Convert gRPC push notification config to core type
      const config = request.config as any; // Placeholder conversion
      await this.agent.createTaskPushNotification(request.taskId, config);
      return {};
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles GetTaskPushNotification gRPC calls
   */
  private async handleGetTaskPushNotification(request: GrpcGetTaskPushNotificationRequest): Promise<{ config: GrpcTaskPushNotificationConfig | null }> {
    if (!this.agent?.getTaskPushNotification) {
      throw new Error('Agent does not support push notifications');
    }

    try {
      const config = await this.agent.getTaskPushNotification(request.taskId);
      return {
        config: config as any // TODO: Convert to gRPC type
      };
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles ListTaskPushNotification gRPC calls
   */
  private async handleListTaskPushNotification(): Promise<GrpcListTaskPushNotificationResponse> {
    if (!this.agent?.listTaskPushNotification) {
      throw new Error('Agent does not support push notifications');
    }

    try {
      const configs = await this.agent.listTaskPushNotification();
      return {
        configs: configs as any[] // TODO: Convert to gRPC types
      };
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles GetAgentCard gRPC calls
   */
  private async handleGetAgentCard(request: GrpcGetAgentCardRequest): Promise<{ agentCard: any }> {
    if (!this.agent?.getAgentCard) {
      throw new Error('Agent does not support agent card retrieval');
    }

    try {
      const agentCard = await this.agent.getAgentCard();
      return {
        agentCard: agentCardToGrpc(agentCard)
      };
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Handles TaskSubscription gRPC calls
   */
  private async* handleTaskSubscription(request: GrpcTaskSubscriptionRequest): AsyncIterable<{ task: any }> {
    if (!this.agent?.taskSubscription) {
      throw new Error('Agent does not support task subscriptions');
    }

    try {
      const stream = this.agent.taskSubscription(request.taskId);
      
      for await (const task of stream) {
        yield {
          task: taskToGrpc(task)
        };
      }
    } catch (error: any) {
      throw grpcErrorToA2AError(error);
    }
  }
}

/**
 * Factory function to create a new gRPC server instance
 */
export function createA2AGrpcServer(config: Partial<GrpcServerConfig> = {}): A2AGrpcServer {
  return new A2AGrpcServer(config);
}

/**
 * Default export for convenience
 */
export default A2AGrpcServer;