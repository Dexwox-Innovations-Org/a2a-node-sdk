import type {
  Task,
  TaskState,
  Message,
  MessagePart,
  Artifact,
  AgentCard,
  PushNotificationConfig
} from '@dexwox-labs/a2a-core';

import type {
  GrpcTask,
  GrpcTaskState,
  GrpcMessage,
  GrpcPart,
  GrpcArtifact,
  GrpcAgentCard,
  GrpcPushNotificationConfig,
  GrpcRole,
  GrpcTaskStatus,
  GrpcSendMessageConfiguration,
  GrpcTaskStatusUpdateEvent,
  GrpcTaskArtifactUpdateEvent
} from '../types/grpc-types.js';

/**
 * @module TypeConversion
 * @description Utilities for converting between JSON-RPC and gRPC type formats
 * 
 * This module provides bidirectional conversion functions between the existing
 * JSON-RPC types used in the core package and the gRPC-specific types defined
 * for protocol buffer communication. This ensures compatibility between the
 * two protocol implementations while maintaining type safety.
 */

/**
 * Converts JSON-RPC TaskState to gRPC TaskState
 */
export function taskStateToGrpc(state: TaskState): GrpcTaskState {
  const stateMap: Record<TaskState, GrpcTaskState> = {
    'submitted': 'TASK_STATE_SUBMITTED',
    'working': 'TASK_STATE_WORKING',
    'input_required': 'TASK_STATE_INPUT_REQUIRED',
    'completed': 'TASK_STATE_COMPLETED',
    'failed': 'TASK_STATE_FAILED',
    'canceled': 'TASK_STATE_CANCELLED'
  };
  
  return stateMap[state] || 'TASK_STATE_UNSPECIFIED';
}

/**
 * Converts gRPC TaskState to JSON-RPC TaskState
 */
export function taskStateFromGrpc(state: GrpcTaskState): TaskState {
  const stateMap: Record<GrpcTaskState, TaskState> = {
    'TASK_STATE_UNSPECIFIED': 'submitted',
    'TASK_STATE_SUBMITTED': 'submitted',
    'TASK_STATE_WORKING': 'working',
    'TASK_STATE_INPUT_REQUIRED': 'input_required',
    'TASK_STATE_COMPLETED': 'completed',
    'TASK_STATE_FAILED': 'failed',
    'TASK_STATE_CANCELLED': 'canceled',
    'TASK_STATE_REJECTED': 'failed', // Map to closest equivalent
    'TASK_STATE_AUTH_REQUIRED': 'input_required' // Map to closest equivalent
  };
  
  return stateMap[state] || 'submitted';
}

/**
 * Converts JSON-RPC MessagePart to gRPC Part
 */
export function messagePartToGrpc(part: MessagePart): GrpcPart {
  switch (part.type) {
    case 'text':
      return {
        text: part.content
      };
    
    case 'file':
      return {
        file: {
          file_with_bytes: part.content instanceof Uint8Array ? part.content : new TextEncoder().encode(part.content),
          mime_type: part.mimeType
        }
      };
    
    case 'data':
      return {
        data: {
          data: part.content
        }
      };
    
    case 'heartbeat':
      return {
        text: part.content
      };
    
    default:
      throw new Error(`Unsupported message part type: ${(part as any).type}`);
  }
}

/**
 * Converts gRPC Part to JSON-RPC MessagePart
 */
export function messagePartFromGrpc(part: GrpcPart): MessagePart {
  if (part.text !== undefined) {
    return {
      type: 'text',
      content: part.text,
      format: 'plain'
    };
  }
  
  if (part.file) {
    const content = part.file.file_with_bytes || part.file.file_with_uri || '';
    return {
      type: 'file',
      content: content,
      mimeType: part.file.mime_type,
      name: 'file', // Default name since gRPC doesn't include it
      size: content instanceof Uint8Array ? content.length : undefined
    };
  }
  
  if (part.data) {
    return {
      type: 'data',
      content: part.data.data
    };
  }
  
  throw new Error('Invalid gRPC part: no recognized content type');
}

/**
 * Converts JSON-RPC Message to gRPC Message
 */
export function messageToGrpc(message: Message): GrpcMessage {
  return {
    message_id: crypto.randomUUID(), // Generate ID if not present
    context_id: message.contextId || '',
    task_id: message.taskId || '',
    role: 'ROLE_USER', // Default role
    content: message.parts.map(messagePartToGrpc),
    metadata: {},
    extensions: []
  };
}

/**
 * Converts gRPC Message to JSON-RPC Message
 */
export function messageFromGrpc(grpcMessage: GrpcMessage): Message {
  return {
    parts: grpcMessage.content.map(messagePartFromGrpc),
    taskId: grpcMessage.task_id || undefined,
    contextId: grpcMessage.context_id || undefined
  };
}

/**
 * Converts JSON-RPC Task to gRPC Task
 */
export function taskToGrpc(task: Task): GrpcTask {
  const grpcStatus: GrpcTaskStatus = {
    state: taskStateToGrpc(task.status),
    timestamp: new Date(task.updatedAt)
  };

  return {
    id: task.id,
    context_id: task.contextId || '',
    status: grpcStatus,
    artifacts: task.artifacts?.map(artifactToGrpc) || [],
    history: [], // Would need to convert if available
    metadata: task.metadata || {}
  };
}

/**
 * Converts gRPC Task to JSON-RPC Task
 */
export function taskFromGrpc(grpcTask: GrpcTask): Task {
  return {
    id: grpcTask.id,
    name: grpcTask.id, // Use ID as name if not available
    status: taskStateFromGrpc(grpcTask.status.state),
    contextId: grpcTask.context_id || undefined,
    artifacts: grpcTask.artifacts?.map(artifactFromGrpc) || [],
    createdAt: new Date().toISOString(), // Default to current time
    updatedAt: grpcTask.status.timestamp?.toISOString() || new Date().toISOString(),
    metadata: grpcTask.metadata || {}
  };
}

/**
 * Converts JSON-RPC Artifact to gRPC Artifact
 */
export function artifactToGrpc(artifact: Artifact): GrpcArtifact {
  // Convert artifact content to parts
  const parts: GrpcPart[] = [];
  
  if (artifact.type === 'text' && typeof artifact.content === 'string') {
    parts.push({ text: artifact.content });
  } else if (artifact.type === 'data') {
    parts.push({ data: { data: artifact.content } });
  }

  return {
    artifact_id: artifact.id,
    name: artifact.id, // Use ID as name
    description: '', // Default empty description
    parts: parts,
    metadata: {},
    extensions: []
  };
}

/**
 * Converts gRPC Artifact to JSON-RPC Artifact
 */
export function artifactFromGrpc(grpcArtifact: GrpcArtifact): Artifact {
  // Determine type and content from parts
  let type: 'text' | 'file' | 'data' = 'text';
  let content: any = '';

  if (grpcArtifact.parts.length > 0) {
    const firstPart = grpcArtifact.parts[0];
    if (firstPart.text !== undefined) {
      type = 'text';
      content = firstPart.text;
    } else if (firstPart.data) {
      type = 'data';
      content = firstPart.data.data;
    } else if (firstPart.file) {
      type = 'file';
      content = firstPart.file.file_with_bytes || firstPart.file.file_with_uri || '';
    }
  }

  return {
    id: grpcArtifact.artifact_id,
    type: type,
    content: content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

/**
 * Converts JSON-RPC AgentCard to gRPC AgentCard
 */
export function agentCardToGrpc(card: AgentCard): GrpcAgentCard {
  return {
    name: card.name,
    description: card.description || '',
    url: card.endpoint,
    version: card.version || '1.0.0',
    documentation_url: '',
    capabilities: {
      streaming: true, // Default capabilities
      push_notifications: true,
      extensions: []
    },
    security_schemes: {},
    security: [],
    default_input_modes: [],
    default_output_modes: [],
    skills: [],
    supports_authenticated_extended_card: false
  };
}

/**
 * Converts gRPC AgentCard to JSON-RPC AgentCard
 */
export function agentCardFromGrpc(grpcCard: GrpcAgentCard): AgentCard {
  return {
    id: grpcCard.name.toLowerCase().replace(/\s+/g, '-'), // Generate ID from name
    name: grpcCard.name,
    description: grpcCard.description,
    capabilities: [], // Would need to extract from gRPC capabilities
    endpoint: grpcCard.url,
    version: grpcCard.version,
    metadata: {}
  };
}

/**
 * Converts gRPC TaskStatusUpdateEvent to a format compatible with existing event handling
 */
export function taskStatusUpdateEventFromGrpc(event: GrpcTaskStatusUpdateEvent): {
  taskId: string;
  status: TaskState;
  final: boolean;
  timestamp: string;
} {
  return {
    taskId: event.task_id,
    status: taskStateFromGrpc(event.status.state),
    final: event.final,
    timestamp: event.status.timestamp?.toISOString() || new Date().toISOString()
  };
}

/**
 * Converts gRPC TaskArtifactUpdateEvent to a format compatible with existing event handling
 */
export function taskArtifactUpdateEventFromGrpc(event: GrpcTaskArtifactUpdateEvent): {
  taskId: string;
  artifact: Artifact;
  append: boolean;
  lastChunk: boolean;
} {
  return {
    taskId: event.task_id,
    artifact: artifactFromGrpc(event.artifact),
    append: event.append,
    lastChunk: event.last_chunk
  };
}

/**
 * Utility function to convert metadata objects
 */
export function metadataToGrpc(metadata?: Record<string, unknown>): Record<string, any> {
  if (!metadata) return {};
  
  // Convert to gRPC-compatible format
  const grpcMetadata: Record<string, any> = {};
  for (const [key, value] of Object.entries(metadata)) {
    grpcMetadata[key] = value;
  }
  return grpcMetadata;
}

/**
 * Utility function to convert metadata from gRPC
 */
export function metadataFromGrpc(grpcMetadata?: Record<string, any>): Record<string, unknown> {
  if (!grpcMetadata) return {};
  
  const metadata: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(grpcMetadata)) {
    metadata[key] = value;
  }
  return metadata;
}

/**
 * Error conversion utilities
 */
export function grpcErrorToA2AError(grpcError: any): Error {
  const error = new Error(grpcError.details || grpcError.message || 'gRPC Error');
  (error as any).code = grpcError.code;
  (error as any).metadata = grpcError.metadata;
  return error;
}

/**
 * Validates that a gRPC response contains expected fields
 */
export function validateGrpcResponse<T>(response: T, requiredFields: (keyof T)[]): T {
  for (const field of requiredFields) {
    if (response[field] === undefined || response[field] === null) {
      throw new Error(`Missing required field in gRPC response: ${String(field)}`);
    }
  }
  return response;
}