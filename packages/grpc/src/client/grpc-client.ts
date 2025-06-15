import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { EventEmitter } from 'node:events';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  Task,
  Message,
  AgentCard,
  PushNotificationConfig
} from '@dexwox-labs/a2a-core';

import type {
  GrpcClientConfig,
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
  agentCardFromGrpc,
  taskStatusUpdateEventFromGrpc,
  taskArtifactUpdateEventFromGrpc,
  grpcErrorToA2AError,
  validateGrpcResponse
} from '../utils/type-conversion.js';

/**
 * @module GrpcClient
 * @description Real gRPC client implementation for A2A protocol communication
 * 
 * This module provides a fully functional gRPC client that implements the A2A
 * protocol using actual gRPC calls with protocol buffer compilation and service
 * registration. It handles real protocol buffer serialization/deserialization
 * and provides type-safe method calls for all A2A operations.
 */

/**
 * Configuration for message sending operations
 */
export interface MessageSendParams {
  message: Message;
  configuration?: {
    acceptedOutputModes?: string[];
    pushNotification?: PushNotificationConfig;
    historyLength?: number;
    blocking?: boolean;
  };
  metadata?: Record<string, unknown>;
}

/**
 * Parameters for task queries
 */
export interface TaskQueryParams {
  id: string;
  historyLength?: number;
}

/**
 * Parameters for task operations
 */
export interface TaskIdParams {
  id: string;
}

/**
 * Event types that can be received from streaming operations
 */
export type StreamEvent = 
  | { type: 'task'; data: Task }
  | { type: 'message'; data: Message }
  | { type: 'status_update'; data: { taskId: string; status: string; final: boolean; timestamp: string } }
  | { type: 'artifact_update'; data: { taskId: string; artifact: any; append: boolean; lastChunk: boolean } };

/**
 * A2A gRPC Client for communicating with A2A agents via gRPC protocol
 * 
 * This client provides real gRPC functionality using compiled protocol buffers
 * and actual service registration, offering better performance and streaming
 * capabilities compared to the JSON-RPC implementation.
 */
export class A2AGrpcClient extends EventEmitter {
  private client: any; // gRPC client stub
  private config: GrpcClientConfig;
  private agentCard?: AgentCard;
  private packageDefinition: any;
  private protoDescriptor: any;
  private isConnected = false;

  /**
   * Creates a new A2A gRPC client instance
   * 
   * @param config - Configuration for the gRPC client
   * @param agentCard - Optional agent card for the target agent
   */
  constructor(config: GrpcClientConfig, agentCard?: AgentCard) {
    super();
    this.config = config;
    this.agentCard = agentCard;
    
    this.loadProtoDefinition();
    this.createGrpcClient();
  }

  /**
   * Loads the protocol buffer definition
   * @private
   */
  private loadProtoDefinition(): void {
    try {
      const currentDir = __dirname;
      const protoPath = join(currentDir, '../../proto/a2a.proto');
      
      // Load the protocol buffer definition
      this.packageDefinition = protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        includeDirs: [dirname(protoPath)]
      });

      // Load the gRPC object
      this.protoDescriptor = grpc.loadPackageDefinition(this.packageDefinition);
      
      console.log('✅ Protocol buffer definition loaded successfully');
    } catch (error) {
      console.error('❌ Failed to load protocol buffer definition:', error);
      throw new Error(`Failed to load proto definition: ${error}`);
    }
  }

  /**
   * Creates the gRPC client with proper service registration
   * @private
   */
  private createGrpcClient(): void {
    try {
      // Access the A2AService from the loaded proto
      const A2AService = this.protoDescriptor.a2a.v1.A2AService;
      
      if (!A2AService) {
        throw new Error('A2AService not found in proto definition');
      }

      // Create gRPC client with configuration
      this.client = new A2AService(
        this.config.endpoint,
        this.config.credentials || grpc.credentials.createInsecure(),
        this.config.options || {}
      );

      // Set up connection monitoring
      this.setupConnectionMonitoring();
      
      console.log(`✅ gRPC client created for endpoint: ${this.config.endpoint}`);
      this.isConnected = true;
      this.emit('connected');
      
    } catch (error) {
      console.error('❌ Failed to create gRPC client:', error);
      throw new Error(`Failed to create gRPC client: ${error}`);
    }
  }

  /**
   * Sets up connection monitoring and health checks
   * @private
   */
  private setupConnectionMonitoring(): void {
    // Monitor connection state changes
    this.client.getChannel().watchConnectivityState(
      grpc.connectivityState.IDLE,
      Date.now() + 30000, // 30 second timeout
      (error: Error | null) => {
        if (error) {
          console.warn('gRPC connection state change error:', error);
          this.emit('connectionError', error);
        }
      }
    );
  }

  /**
   * Sends a non-streaming message to the agent
   * 
   * @param params - Message parameters including content and configuration
   * @returns Promise resolving to either a Task or Message response
   */
  async sendMessage(params: MessageSendParams): Promise<Task | Message> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        request: messageToGrpc(params.message),
        configuration: params.configuration ? {
          accepted_output_modes: params.configuration.acceptedOutputModes || [],
          push_notification: params.configuration.pushNotification ? {
            id: params.configuration.pushNotification.endpoint || '',
            url: params.configuration.pushNotification.endpoint || '',
            token: params.configuration.pushNotification.authToken || '',
            authentication: {
              schemes: [],
              credentials: ''
            }
          } : undefined,
          history_length: params.configuration.historyLength,
          blocking: params.configuration.blocking
        } : undefined,
        metadata: params.metadata || {}
      };

      const response = await this.makeUnaryCall<any, any>(
        'SendMessage',
        grpcRequest
      );

      validateGrpcResponse(response, ['task', 'msg'] as any);

      if (response.task) {
        return taskFromGrpc(response.task);
      } else if (response.msg) {
        return messageFromGrpc(response.msg);
      } else {
        throw new Error('Invalid response: neither task nor message present');
      }
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Sends a streaming message to the agent and yields responses as they arrive
   * 
   * @param params - Message parameters including content and configuration
   * @returns AsyncIterable of stream events (tasks, messages, status updates, etc.)
   */
  async* sendMessageStreaming(params: MessageSendParams): AsyncIterable<StreamEvent> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        request: messageToGrpc(params.message),
        configuration: params.configuration ? {
          accepted_output_modes: params.configuration.acceptedOutputModes || [],
          push_notification: params.configuration.pushNotification ? {
            id: params.configuration.pushNotification.endpoint || '',
            url: params.configuration.pushNotification.endpoint || '',
            token: params.configuration.pushNotification.authToken || '',
            authentication: {
              schemes: [],
              credentials: ''
            }
          } : undefined,
          history_length: params.configuration.historyLength,
          blocking: params.configuration.blocking
        } : undefined,
        metadata: params.metadata || {}
      };

      const stream = this.makeStreamingCall<any, any>(
        'SendStreamingMessage',
        grpcRequest
      );

      for await (const response of stream) {
        if (response.task) {
          yield { type: 'task', data: taskFromGrpc(response.task) };
        } else if (response.msg) {
          yield { type: 'message', data: messageFromGrpc(response.msg) };
        } else if (response.status_update) {
          yield { 
            type: 'status_update', 
            data: taskStatusUpdateEventFromGrpc(response.status_update) 
          };
        } else if (response.artifact_update) {
          yield { 
            type: 'artifact_update', 
            data: taskArtifactUpdateEventFromGrpc(response.artifact_update) 
          };
        }
      }
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Retrieves the current state and history of a specific task
   * 
   * @param params - Task query parameters including task ID
   * @returns Promise resolving to the Task object
   */
  async getTask(params: TaskQueryParams): Promise<Task> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        name: `tasks/${params.id}`,
        history_length: params.historyLength
      };

      const response = await this.makeUnaryCall<any, any>(
        'GetTask',
        grpcRequest
      );

      return taskFromGrpc(response);
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Requests the agent to cancel a specific task
   * 
   * @param params - Task parameters including task ID
   * @returns Promise resolving to the updated Task object
   */
  async cancelTask(params: TaskIdParams): Promise<Task> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        name: `tasks/${params.id}`
      };

      const response = await this.makeUnaryCall<any, any>(
        'CancelTask',
        grpcRequest
      );

      return taskFromGrpc(response);
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Subscribes to task updates for an existing task
   * 
   * @param params - Task subscription parameters
   * @returns AsyncIterable of stream events for the task
   */
  async* subscribeToTask(params: TaskIdParams): AsyncIterable<StreamEvent> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        name: `tasks/${params.id}`
      };

      const stream = this.makeStreamingCall<any, any>(
        'TaskSubscription',
        grpcRequest
      );

      for await (const response of stream) {
        if (response.task) {
          yield { type: 'task', data: taskFromGrpc(response.task) };
        } else if (response.msg) {
          yield { type: 'message', data: messageFromGrpc(response.msg) };
        } else if (response.status_update) {
          yield { 
            type: 'status_update', 
            data: taskStatusUpdateEventFromGrpc(response.status_update) 
          };
        } else if (response.artifact_update) {
          yield { 
            type: 'artifact_update', 
            data: taskArtifactUpdateEventFromGrpc(response.artifact_update) 
          };
        }
      }
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Retrieves the agent card for the connected agent
   * 
   * @returns Promise resolving to the AgentCard object
   */
  async getAgentCard(): Promise<AgentCard> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {};

      const response = await this.makeUnaryCall<any, any>(
        'GetAgentCard',
        grpcRequest
      );

      return agentCardFromGrpc(response);
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Sets or updates push notification configuration for a task
   * 
   * @param config - Push notification configuration
   * @returns Promise resolving to the created configuration
   */
  async setTaskCallback(config: PushNotificationConfig): Promise<PushNotificationConfig> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        parent: 'tasks',
        config_id: config.endpoint || 'default',
        config: {
          name: config.endpoint || 'default',
          push_notification_config: {
            id: config.endpoint || '',
            url: config.endpoint || '',
            token: config.authToken || '',
            authentication: {
              schemes: [],
              credentials: ''
            }
          }
        }
      };

      const response = await this.makeUnaryCall<any, any>(
        'CreateTaskPushNotification',
        grpcRequest
      );

      return {
        enabled: true,
        endpoint: response.push_notification_config.url,
        authToken: response.push_notification_config.token,
        events: [],
        metadata: {}
      };
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Retrieves push notification configuration for a task
   * 
   * @param params - Task parameters
   * @returns Promise resolving to the push notification configuration
   */
  async getTaskCallback(params: TaskIdParams): Promise<PushNotificationConfig> {
    if (!this.isConnected) {
      throw new Error('gRPC client is not connected');
    }

    try {
      const grpcRequest = {
        name: `tasks/${params.id}/pushNotifications/default`
      };

      const response = await this.makeUnaryCall<any, any>(
        'GetTaskPushNotification',
        grpcRequest
      );

      return {
        enabled: true,
        endpoint: response.push_notification_config.url,
        authToken: response.push_notification_config.token,
        events: [],
        metadata: {}
      };
    } catch (error) {
      throw grpcErrorToA2AError(error);
    }
  }

  /**
   * Checks if the client is connected
   */
  isClientConnected(): boolean {
    return this.isConnected;
  }

  /**
   * Gets the current connection state
   */
  getConnectionState(): number {
    if (!this.client) return grpc.connectivityState.SHUTDOWN;
    return this.client.getChannel().getConnectivityState(false);
  }

  /**
   * Closes the gRPC client connection
   */
  async close(): Promise<void> {
    if (this.client) {
      this.client.close();
      this.isConnected = false;
      this.emit('disconnected');
      console.log('✅ gRPC client connection closed');
    }
  }

  /**
   * Makes a unary gRPC call with proper error handling and timeouts
   * 
   * @private
   */
  private async makeUnaryCall<TRequest, TResponse>(
    method: string,
    request: TRequest,
    metadata?: grpc.Metadata
  ): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      const deadline = Date.now() + (this.config.timeout || 30000);
      const callMetadata = metadata || new grpc.Metadata();
      
      // Add timeout to metadata
      callMetadata.set('deadline', deadline.toString());
      
      this.client[method](
        request,
        callMetadata,
        { deadline },
        (error: grpc.ServiceError | null, response: TResponse) => {
          if (error) {
            console.error(`gRPC ${method} error:`, error);
            reject(grpcErrorToA2AError(error));
          } else {
            resolve(response);
          }
        }
      );
    });
  }

  /**
   * Makes a streaming gRPC call with proper error handling
   * 
   * @private
   */
  private async* makeStreamingCall<TRequest, TResponse>(
    method: string,
    request: TRequest,
    metadata?: grpc.Metadata
  ): AsyncIterable<TResponse> {
    const deadline = Date.now() + (this.config.timeout || 300000); // 5 minutes for streaming
    const callMetadata = metadata || new grpc.Metadata();
    
    // Add timeout to metadata
    callMetadata.set('deadline', deadline.toString());
    
    const call = this.client[method](request, callMetadata, { deadline });
    
    try {
      // Convert gRPC stream to async iterable
      for await (const response of call) {
        yield response as TResponse;
      }
    } catch (error) {
      console.error(`gRPC ${method} streaming error:`, error);
      throw grpcErrorToA2AError(error);
    }
  }
}

/**
 * Factory function to create a new A2A gRPC client
 * 
 * @param config - gRPC client configuration
 * @param agentCard - Optional agent card
 * @returns New A2AGrpcClient instance
 */
export function createA2AGrpcClient(
  config: GrpcClientConfig,
  agentCard?: AgentCard
): A2AGrpcClient {
  return new A2AGrpcClient(config, agentCard);
}

/**
 * Default gRPC client configuration
 */
export const defaultGrpcClientConfig: Partial<GrpcClientConfig> = {
  timeout: 30000,
  keepalive: true,
  options: {
    'grpc.keepalive_time_ms': 30000,
    'grpc.keepalive_timeout_ms': 5000,
    'grpc.keepalive_permit_without_calls': true,
    'grpc.http2.max_pings_without_data': 0,
    'grpc.http2.min_time_between_pings_ms': 10000,
    'grpc.http2.min_ping_interval_without_data_ms': 300000,
    'grpc.max_receive_message_length': 4 * 1024 * 1024, // 4MB
    'grpc.max_send_message_length': 4 * 1024 * 1024 // 4MB
  }
};