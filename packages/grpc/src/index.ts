/**
 * @fileoverview Main entry point for the A2A gRPC package
 * @module @dexwox-labs/a2a-grpc
 * 
 * This package provides gRPC protocol support for Google's Agent-to-Agent (A2A)
 * communication protocol. It includes both client and server implementations
 * with full TypeScript support and compatibility with the existing JSON-RPC
 * implementation in the core A2A Node SDK.
 * 
 * @example
 * ```typescript
 * import { createA2AGrpcClient, createA2AGrpcServer } from '@dexwox-labs/a2a-grpc';
 * 
 * // Create a gRPC client
 * const client = createA2AGrpcClient({
 *   endpoint: 'localhost:50051'
 * });
 * 
 * // Create a gRPC server
 * const server = createA2AGrpcServer({
 *   port: 50051
 * });
 * ```
 */

// Export client functionality
export {
  A2AGrpcClient,
  createA2AGrpcClient,
  defaultGrpcClientConfig,
  type MessageSendParams,
  type TaskQueryParams,
  type TaskIdParams,
  type StreamEvent
} from './client/grpc-client.js';

// Export server functionality
export {
  A2AGrpcServer,
  createA2AGrpcServer,
  defaultGrpcServerConfig,
  type A2AAgent
} from './server/grpc-server.js';

// Export gRPC-specific types
export {
  // Core gRPC types
  type GrpcTaskState,
  type GrpcRole,
  type GrpcMessage,
  type GrpcTask,
  type GrpcArtifact,
  type GrpcAgentCard,
  type GrpcPushNotificationConfig,
  
  // Configuration types
  type GrpcClientConfig,
  type GrpcServerConfig,
  
  // Request/Response types
  type GrpcSendMessageRequest,
  type GrpcSendMessageResponse,
  type GrpcStreamResponse,
  type GrpcGetTaskRequest,
  type GrpcCancelTaskRequest,
  type GrpcTaskSubscriptionRequest,
  type GrpcGetAgentCardRequest,
  
  // Event types
  type GrpcTaskStatusUpdateEvent,
  type GrpcTaskArtifactUpdateEvent,
  type GrpcStreamEvent,
  
  // Utility types
  type GrpcUnaryCall,
  type GrpcStreamingCall,
  type GrpcError,
  
  // Type guards
  isGrpcTask,
  isGrpcMessage,
  isGrpcTaskStatusUpdateEvent,
  isGrpcTaskArtifactUpdateEvent,
  
  // Schema types
  GrpcTaskStateSchema,
  GrpcRoleSchema
} from './types/grpc-types.js';

// Export type conversion utilities
export {
  // Task state conversions
  taskStateToGrpc,
  taskStateFromGrpc,
  
  // Message part conversions
  messagePartToGrpc,
  messagePartFromGrpc,
  
  // Message conversions
  messageToGrpc,
  messageFromGrpc,
  
  // Task conversions
  taskToGrpc,
  taskFromGrpc,
  
  // Artifact conversions
  artifactToGrpc,
  artifactFromGrpc,
  
  // Agent card conversions
  agentCardToGrpc,
  agentCardFromGrpc,
  
  // Event conversions
  taskStatusUpdateEventFromGrpc,
  taskArtifactUpdateEventFromGrpc,
  
  // Metadata conversions
  metadataToGrpc,
  metadataFromGrpc,
  
  // Error handling
  grpcErrorToA2AError,
  validateGrpcResponse
} from './utils/type-conversion.js';

// Package metadata
export const PACKAGE_NAME = '@dexwox-labs/a2a-grpc';
export const PACKAGE_VERSION = '0.1.0';

/**
 * Default configuration for gRPC operations
 */
export const DEFAULT_GRPC_CONFIG = {
  client: {
    timeout: 30000,
    keepalive: true,
    options: {
      'grpc.keepalive_time_ms': 30000,
      'grpc.keepalive_timeout_ms': 5000,
      'grpc.keepalive_permit_without_calls': true,
      'grpc.http2.max_pings_without_data': 0,
      'grpc.http2.min_time_between_pings_ms': 10000,
      'grpc.http2.min_ping_interval_without_data_ms': 300000
    }
  },
  server: {
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
  }
} as const;

/**
 * gRPC protocol information
 */
export const GRPC_PROTOCOL_INFO = {
  name: 'A2A gRPC Protocol',
  version: '1.0.0',
  service: 'a2a.v1.A2AService',
  package: 'a2a.v1',
  protoFile: 'a2a.proto'
} as const;

/**
 * Supported gRPC methods
 */
export const GRPC_METHODS = {
  // Unary methods
  SEND_MESSAGE: 'SendMessage',
  GET_TASK: 'GetTask',
  CANCEL_TASK: 'CancelTask',
  CREATE_TASK_PUSH_NOTIFICATION: 'CreateTaskPushNotification',
  GET_TASK_PUSH_NOTIFICATION: 'GetTaskPushNotification',
  LIST_TASK_PUSH_NOTIFICATION: 'ListTaskPushNotification',
  GET_AGENT_CARD: 'GetAgentCard',
  
  // Streaming methods
  SEND_STREAMING_MESSAGE: 'SendStreamingMessage',
  TASK_SUBSCRIPTION: 'TaskSubscription'
} as const;

/**
 * gRPC status codes (subset of standard gRPC codes relevant to A2A)
 */
export const GRPC_STATUS_CODES = {
  OK: 0,
  CANCELLED: 1,
  UNKNOWN: 2,
  INVALID_ARGUMENT: 3,
  DEADLINE_EXCEEDED: 4,
  NOT_FOUND: 5,
  ALREADY_EXISTS: 6,
  PERMISSION_DENIED: 7,
  RESOURCE_EXHAUSTED: 8,
  FAILED_PRECONDITION: 9,
  ABORTED: 10,
  OUT_OF_RANGE: 11,
  UNIMPLEMENTED: 12,
  INTERNAL: 13,
  UNAVAILABLE: 14,
  DATA_LOSS: 15,
  UNAUTHENTICATED: 16
} as const;

/**
 * Utility function to check if gRPC is available in the current environment
 */
export function isGrpcAvailable(): boolean {
  try {
    // Simple check - assume gRPC is available if we can import the module
    // In a real implementation, this would be determined at runtime
    return true;
  } catch {
    return false;
  }
}

/**
 * Utility function to get gRPC package information
 */
export function getGrpcPackageInfo() {
  return {
    name: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    protocol: GRPC_PROTOCOL_INFO,
    methods: GRPC_METHODS,
    statusCodes: GRPC_STATUS_CODES,
    isAvailable: isGrpcAvailable()
  };
}

// Re-export core types for convenience
export type {
  Task,
  TaskState,
  Message,
  MessagePart,
  Artifact,
  AgentCard,
  PushNotificationConfig,
  A2AError
} from '@dexwox-labs/a2a-core';