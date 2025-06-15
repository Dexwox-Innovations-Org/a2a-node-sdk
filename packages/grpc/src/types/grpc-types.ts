import { z } from 'zod';
import type {
  Task,
  TaskState,
  Message,
  MessagePart,
  Artifact,
  AgentCard,
  PushNotificationConfig,
  A2AError
} from '@dexwox-labs/a2a-core';

/**
 * @module GrpcTypes
 * @description TypeScript types and interfaces for gRPC protocol support
 * 
 * This module defines the TypeScript types that correspond to the Protocol Buffer
 * definitions in the A2A gRPC service. These types provide type safety for gRPC
 * communication while maintaining compatibility with the existing JSON-RPC types.
 */

// Enhanced Task States for gRPC (includes additional states from Python SDK)
export const GrpcTaskStateSchema = z.enum([
  'TASK_STATE_UNSPECIFIED',
  'TASK_STATE_SUBMITTED',
  'TASK_STATE_WORKING',
  'TASK_STATE_COMPLETED',
  'TASK_STATE_FAILED',
  'TASK_STATE_CANCELLED',
  'TASK_STATE_INPUT_REQUIRED',
  'TASK_STATE_REJECTED',
  'TASK_STATE_AUTH_REQUIRED'
]);

export type GrpcTaskState = z.infer<typeof GrpcTaskStateSchema>;

// Role enumeration for gRPC messages
export const GrpcRoleSchema = z.enum([
  'ROLE_UNSPECIFIED',
  'ROLE_USER',
  'ROLE_AGENT'
]);

export type GrpcRole = z.infer<typeof GrpcRoleSchema>;

// gRPC-specific message part types
export interface GrpcTextPart {
  text: string;
}

export interface GrpcFilePart {
  file_with_uri?: string;
  file_with_bytes?: Uint8Array;
  mime_type: string;
}

export interface GrpcDataPart {
  data: Record<string, any>;
}

export interface GrpcPart {
  text?: string;
  file?: GrpcFilePart;
  data?: GrpcDataPart;
}

// gRPC Message structure
export interface GrpcMessage {
  message_id: string;
  context_id: string;
  task_id: string;
  role: GrpcRole;
  content: GrpcPart[];
  metadata?: Record<string, any>;
  extensions?: string[];
}

// gRPC Task Status
export interface GrpcTaskStatus {
  state: GrpcTaskState;
  update?: GrpcMessage;
  timestamp?: Date;
}

// gRPC Task structure
export interface GrpcTask {
  id: string;
  context_id: string;
  status: GrpcTaskStatus;
  artifacts?: GrpcArtifact[];
  history?: GrpcMessage[];
  metadata?: Record<string, any>;
}

// gRPC Artifact structure
export interface GrpcArtifact {
  artifact_id: string;
  name: string;
  description: string;
  parts: GrpcPart[];
  metadata?: Record<string, any>;
  extensions?: string[];
}

// gRPC Send Message Configuration
export interface GrpcSendMessageConfiguration {
  accepted_output_modes?: string[];
  push_notification?: GrpcPushNotificationConfig;
  history_length?: number;
  blocking?: boolean;
}

// gRPC Push Notification Configuration
export interface GrpcPushNotificationConfig {
  id: string;
  url: string;
  token: string;
  authentication?: GrpcAuthenticationInfo;
}

// gRPC Authentication Information
export interface GrpcAuthenticationInfo {
  schemes: string[];
  credentials: string;
}

// gRPC Agent Card structure (enhanced from JSON-RPC version)
export interface GrpcAgentCard {
  name: string;
  description: string;
  url: string;
  provider?: GrpcAgentProvider;
  version: string;
  documentation_url?: string;
  capabilities?: GrpcAgentCapabilities;
  security_schemes?: Record<string, GrpcSecurityScheme>;
  security?: GrpcSecurity[];
  default_input_modes?: string[];
  default_output_modes?: string[];
  skills?: GrpcAgentSkill[];
  supports_authenticated_extended_card?: boolean;
}

// gRPC Agent Provider
export interface GrpcAgentProvider {
  url: string;
  organization: string;
}

// gRPC Agent Capabilities
export interface GrpcAgentCapabilities {
  streaming: boolean;
  push_notifications: boolean;
  extensions?: GrpcAgentExtension[];
}

// gRPC Agent Extension
export interface GrpcAgentExtension {
  uri: string;
  description: string;
  required: boolean;
  params?: Record<string, any>;
}

// gRPC Agent Skill
export interface GrpcAgentSkill {
  id: string;
  name: string;
  description: string;
  tags?: string[];
  examples?: string[];
  input_modes?: string[];
  output_modes?: string[];
}

// gRPC Security structures
export interface GrpcSecurity {
  schemes: Record<string, GrpcStringList>;
}

export interface GrpcStringList {
  list: string[];
}

export interface GrpcSecurityScheme {
  api_key_security_scheme?: GrpcAPIKeySecurityScheme;
  http_auth_security_scheme?: GrpcHTTPAuthSecurityScheme;
  oauth2_security_scheme?: GrpcOAuth2SecurityScheme;
  open_id_connect_security_scheme?: GrpcOpenIdConnectSecurityScheme;
}

export interface GrpcAPIKeySecurityScheme {
  description: string;
  location: string;
  name: string;
}

export interface GrpcHTTPAuthSecurityScheme {
  description: string;
  scheme: string;
  bearer_format?: string;
}

export interface GrpcOAuth2SecurityScheme {
  description: string;
  flows: GrpcOAuthFlows;
}

export interface GrpcOpenIdConnectSecurityScheme {
  description: string;
  open_id_connect_url: string;
}

export interface GrpcOAuthFlows {
  authorization_code?: GrpcAuthorizationCodeOAuthFlow;
  client_credentials?: GrpcClientCredentialsOAuthFlow;
  implicit?: GrpcImplicitOAuthFlow;
  password?: GrpcPasswordOAuthFlow;
}

export interface GrpcAuthorizationCodeOAuthFlow {
  authorization_url: string;
  token_url: string;
  refresh_url?: string;
  scopes: Record<string, string>;
}

export interface GrpcClientCredentialsOAuthFlow {
  token_url: string;
  refresh_url?: string;
  scopes: Record<string, string>;
}

export interface GrpcImplicitOAuthFlow {
  authorization_url: string;
  refresh_url?: string;
  scopes: Record<string, string>;
}

export interface GrpcPasswordOAuthFlow {
  token_url: string;
  refresh_url?: string;
  scopes: Record<string, string>;
}

// gRPC Event types for streaming
export interface GrpcTaskStatusUpdateEvent {
  task_id: string;
  context_id: string;
  status: GrpcTaskStatus;
  final: boolean;
  metadata?: Record<string, any>;
}

export interface GrpcTaskArtifactUpdateEvent {
  task_id: string;
  context_id: string;
  artifact: GrpcArtifact;
  append: boolean;
  last_chunk: boolean;
  metadata?: Record<string, any>;
}

// gRPC Request/Response types
export interface GrpcSendMessageRequest {
  message: GrpcMessage;
  configuration?: GrpcSendMessageConfiguration;
  metadata?: Record<string, any>;
}

export interface GrpcSendMessageResponse {
  task?: GrpcTask;
  message?: GrpcMessage;
}

export interface GrpcStreamResponse {
  task?: GrpcTask;
  message?: GrpcMessage;
  data?: any;
  status_update?: GrpcTaskStatusUpdateEvent;
  artifact_update?: GrpcTaskArtifactUpdateEvent;
}

export interface GrpcGetTaskRequest {
  taskId: string;
  history_length?: number;
}

export interface GrpcCancelTaskRequest {
  taskId: string;
}

export interface GrpcTaskSubscriptionRequest {
  taskId: string;
}

export interface GrpcGetAgentCardRequest {
  // Empty request for getting agent card
}

// gRPC Task Push Notification types
export interface GrpcTaskPushNotificationConfig {
  name: string;
  push_notification_config: GrpcPushNotificationConfig;
}

export interface GrpcCreateTaskPushNotificationRequest {
  taskId: string;
  config_id: string;
  config: GrpcTaskPushNotificationConfig;
}

export interface GrpcGetTaskPushNotificationRequest {
  taskId: string;
}

export interface GrpcListTaskPushNotificationRequest {
  parent: string;
  page_size?: number;
  page_token?: string;
}

export interface GrpcListTaskPushNotificationResponse {
  configs: GrpcTaskPushNotificationConfig[];
  next_page_token?: string;
}

// Union types for streaming responses
export type GrpcStreamEvent = 
  | GrpcTask 
  | GrpcMessage 
  | GrpcTaskStatusUpdateEvent 
  | GrpcTaskArtifactUpdateEvent;

// Configuration interfaces for gRPC client/server
export interface GrpcClientConfig {
  /** gRPC server endpoint */
  endpoint: string;
  /** Optional credentials for authentication */
  credentials?: any;
  /** Optional channel options */
  options?: Record<string, any>;
  /** Connection timeout in milliseconds */
  timeout?: number;
  /** Enable keepalive */
  keepalive?: boolean;
}

export interface GrpcServerConfig {
  /** Port to listen on */
  port: number;
  /** Host to bind to */
  host?: string;
  /** Server credentials */
  credentials?: any;
  /** Server options */
  options?: Record<string, any>;
  /** Maximum message size */
  maxMessageSize?: number;
}

// Error types for gRPC
export interface GrpcError extends Error {
  code: number;
  details: string;
  metadata?: Record<string, any>;
}

// Utility type for gRPC method signatures
export type GrpcUnaryCall<TRequest, TResponse> = (
  request: TRequest,
  metadata?: Record<string, any>
) => Promise<TResponse>;

export type GrpcStreamingCall<TRequest, TResponse> = (
  request: TRequest,
  metadata?: Record<string, any>
) => AsyncIterable<TResponse>;

// Type guards for gRPC response discrimination
export function isGrpcTask(obj: any): obj is GrpcTask {
  return obj && typeof obj.id === 'string' && obj.status;
}

export function isGrpcMessage(obj: any): obj is GrpcMessage {
  return obj && typeof obj.message_id === 'string' && Array.isArray(obj.content);
}

export function isGrpcTaskStatusUpdateEvent(obj: any): obj is GrpcTaskStatusUpdateEvent {
  return obj && typeof obj.task_id === 'string' && obj.status && typeof obj.final === 'boolean';
}

export function isGrpcTaskArtifactUpdateEvent(obj: any): obj is GrpcTaskArtifactUpdateEvent {
  return obj && typeof obj.task_id === 'string' && obj.artifact && typeof obj.append === 'boolean';
}