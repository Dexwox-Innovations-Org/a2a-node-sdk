// package: a2a.v1
// file: a2a.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as a2a_pb from "./a2a_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as google_api_client_pb from "./google/api/client_pb";

interface IA2AServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMessage: IA2AServiceService_ISendMessage;
    sendStreamingMessage: IA2AServiceService_ISendStreamingMessage;
    getTask: IA2AServiceService_IGetTask;
    cancelTask: IA2AServiceService_ICancelTask;
    taskSubscription: IA2AServiceService_ITaskSubscription;
    createTaskPushNotification: IA2AServiceService_ICreateTaskPushNotification;
    getTaskPushNotification: IA2AServiceService_IGetTaskPushNotification;
    listTaskPushNotification: IA2AServiceService_IListTaskPushNotification;
    getAgentCard: IA2AServiceService_IGetAgentCard;
}

interface IA2AServiceService_ISendMessage extends grpc.MethodDefinition<a2a_pb.SendMessageRequest, a2a_pb.SendMessageResponse> {
    path: "/a2a.v1.A2AService/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<a2a_pb.SendMessageResponse>;
    responseDeserialize: grpc.deserialize<a2a_pb.SendMessageResponse>;
}
interface IA2AServiceService_ISendStreamingMessage extends grpc.MethodDefinition<a2a_pb.SendMessageRequest, a2a_pb.StreamResponse> {
    path: "/a2a.v1.A2AService/SendStreamingMessage";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<a2a_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<a2a_pb.StreamResponse>;
    responseDeserialize: grpc.deserialize<a2a_pb.StreamResponse>;
}
interface IA2AServiceService_IGetTask extends grpc.MethodDefinition<a2a_pb.GetTaskRequest, a2a_pb.Task> {
    path: "/a2a.v1.A2AService/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.GetTaskRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.GetTaskRequest>;
    responseSerialize: grpc.serialize<a2a_pb.Task>;
    responseDeserialize: grpc.deserialize<a2a_pb.Task>;
}
interface IA2AServiceService_ICancelTask extends grpc.MethodDefinition<a2a_pb.CancelTaskRequest, a2a_pb.Task> {
    path: "/a2a.v1.A2AService/CancelTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.CancelTaskRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.CancelTaskRequest>;
    responseSerialize: grpc.serialize<a2a_pb.Task>;
    responseDeserialize: grpc.deserialize<a2a_pb.Task>;
}
interface IA2AServiceService_ITaskSubscription extends grpc.MethodDefinition<a2a_pb.TaskSubscriptionRequest, a2a_pb.StreamResponse> {
    path: "/a2a.v1.A2AService/TaskSubscription";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<a2a_pb.TaskSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.TaskSubscriptionRequest>;
    responseSerialize: grpc.serialize<a2a_pb.StreamResponse>;
    responseDeserialize: grpc.deserialize<a2a_pb.StreamResponse>;
}
interface IA2AServiceService_ICreateTaskPushNotification extends grpc.MethodDefinition<a2a_pb.CreateTaskPushNotificationRequest, a2a_pb.TaskPushNotificationConfig> {
    path: "/a2a.v1.A2AService/CreateTaskPushNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.CreateTaskPushNotificationRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.CreateTaskPushNotificationRequest>;
    responseSerialize: grpc.serialize<a2a_pb.TaskPushNotificationConfig>;
    responseDeserialize: grpc.deserialize<a2a_pb.TaskPushNotificationConfig>;
}
interface IA2AServiceService_IGetTaskPushNotification extends grpc.MethodDefinition<a2a_pb.GetTaskPushNotificationRequest, a2a_pb.TaskPushNotificationConfig> {
    path: "/a2a.v1.A2AService/GetTaskPushNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.GetTaskPushNotificationRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.GetTaskPushNotificationRequest>;
    responseSerialize: grpc.serialize<a2a_pb.TaskPushNotificationConfig>;
    responseDeserialize: grpc.deserialize<a2a_pb.TaskPushNotificationConfig>;
}
interface IA2AServiceService_IListTaskPushNotification extends grpc.MethodDefinition<a2a_pb.ListTaskPushNotificationRequest, a2a_pb.ListTaskPushNotificationResponse> {
    path: "/a2a.v1.A2AService/ListTaskPushNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.ListTaskPushNotificationRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.ListTaskPushNotificationRequest>;
    responseSerialize: grpc.serialize<a2a_pb.ListTaskPushNotificationResponse>;
    responseDeserialize: grpc.deserialize<a2a_pb.ListTaskPushNotificationResponse>;
}
interface IA2AServiceService_IGetAgentCard extends grpc.MethodDefinition<a2a_pb.GetAgentCardRequest, a2a_pb.AgentCard> {
    path: "/a2a.v1.A2AService/GetAgentCard";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<a2a_pb.GetAgentCardRequest>;
    requestDeserialize: grpc.deserialize<a2a_pb.GetAgentCardRequest>;
    responseSerialize: grpc.serialize<a2a_pb.AgentCard>;
    responseDeserialize: grpc.deserialize<a2a_pb.AgentCard>;
}

export const A2AServiceService: IA2AServiceService;

export interface IA2AServiceServer extends grpc.UntypedServiceImplementation {
    sendMessage: grpc.handleUnaryCall<a2a_pb.SendMessageRequest, a2a_pb.SendMessageResponse>;
    sendStreamingMessage: grpc.handleServerStreamingCall<a2a_pb.SendMessageRequest, a2a_pb.StreamResponse>;
    getTask: grpc.handleUnaryCall<a2a_pb.GetTaskRequest, a2a_pb.Task>;
    cancelTask: grpc.handleUnaryCall<a2a_pb.CancelTaskRequest, a2a_pb.Task>;
    taskSubscription: grpc.handleServerStreamingCall<a2a_pb.TaskSubscriptionRequest, a2a_pb.StreamResponse>;
    createTaskPushNotification: grpc.handleUnaryCall<a2a_pb.CreateTaskPushNotificationRequest, a2a_pb.TaskPushNotificationConfig>;
    getTaskPushNotification: grpc.handleUnaryCall<a2a_pb.GetTaskPushNotificationRequest, a2a_pb.TaskPushNotificationConfig>;
    listTaskPushNotification: grpc.handleUnaryCall<a2a_pb.ListTaskPushNotificationRequest, a2a_pb.ListTaskPushNotificationResponse>;
    getAgentCard: grpc.handleUnaryCall<a2a_pb.GetAgentCardRequest, a2a_pb.AgentCard>;
}

export interface IA2AServiceClient {
    sendMessage(request: a2a_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: a2a_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: a2a_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendStreamingMessage(request: a2a_pb.SendMessageRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    sendStreamingMessage(request: a2a_pb.SendMessageRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    getTask(request: a2a_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: a2a_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: a2a_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    cancelTask(request: a2a_pb.CancelTaskRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    cancelTask(request: a2a_pb.CancelTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    cancelTask(request: a2a_pb.CancelTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    taskSubscription(request: a2a_pb.TaskSubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    taskSubscription(request: a2a_pb.TaskSubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    createTaskPushNotification(request: a2a_pb.CreateTaskPushNotificationRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    createTaskPushNotification(request: a2a_pb.CreateTaskPushNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    createTaskPushNotification(request: a2a_pb.CreateTaskPushNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    getTaskPushNotification(request: a2a_pb.GetTaskPushNotificationRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    getTaskPushNotification(request: a2a_pb.GetTaskPushNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    getTaskPushNotification(request: a2a_pb.GetTaskPushNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    listTaskPushNotification(request: a2a_pb.ListTaskPushNotificationRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.ListTaskPushNotificationResponse) => void): grpc.ClientUnaryCall;
    listTaskPushNotification(request: a2a_pb.ListTaskPushNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.ListTaskPushNotificationResponse) => void): grpc.ClientUnaryCall;
    listTaskPushNotification(request: a2a_pb.ListTaskPushNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.ListTaskPushNotificationResponse) => void): grpc.ClientUnaryCall;
    getAgentCard(request: a2a_pb.GetAgentCardRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.AgentCard) => void): grpc.ClientUnaryCall;
    getAgentCard(request: a2a_pb.GetAgentCardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.AgentCard) => void): grpc.ClientUnaryCall;
    getAgentCard(request: a2a_pb.GetAgentCardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.AgentCard) => void): grpc.ClientUnaryCall;
}

export class A2AServiceClient extends grpc.Client implements IA2AServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendMessage(request: a2a_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: a2a_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: a2a_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendStreamingMessage(request: a2a_pb.SendMessageRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    public sendStreamingMessage(request: a2a_pb.SendMessageRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    public getTask(request: a2a_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: a2a_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: a2a_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    public cancelTask(request: a2a_pb.CancelTaskRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    public cancelTask(request: a2a_pb.CancelTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    public cancelTask(request: a2a_pb.CancelTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.Task) => void): grpc.ClientUnaryCall;
    public taskSubscription(request: a2a_pb.TaskSubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    public taskSubscription(request: a2a_pb.TaskSubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<a2a_pb.StreamResponse>;
    public createTaskPushNotification(request: a2a_pb.CreateTaskPushNotificationRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    public createTaskPushNotification(request: a2a_pb.CreateTaskPushNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    public createTaskPushNotification(request: a2a_pb.CreateTaskPushNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    public getTaskPushNotification(request: a2a_pb.GetTaskPushNotificationRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    public getTaskPushNotification(request: a2a_pb.GetTaskPushNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    public getTaskPushNotification(request: a2a_pb.GetTaskPushNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.TaskPushNotificationConfig) => void): grpc.ClientUnaryCall;
    public listTaskPushNotification(request: a2a_pb.ListTaskPushNotificationRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.ListTaskPushNotificationResponse) => void): grpc.ClientUnaryCall;
    public listTaskPushNotification(request: a2a_pb.ListTaskPushNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.ListTaskPushNotificationResponse) => void): grpc.ClientUnaryCall;
    public listTaskPushNotification(request: a2a_pb.ListTaskPushNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.ListTaskPushNotificationResponse) => void): grpc.ClientUnaryCall;
    public getAgentCard(request: a2a_pb.GetAgentCardRequest, callback: (error: grpc.ServiceError | null, response: a2a_pb.AgentCard) => void): grpc.ClientUnaryCall;
    public getAgentCard(request: a2a_pb.GetAgentCardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: a2a_pb.AgentCard) => void): grpc.ClientUnaryCall;
    public getAgentCard(request: a2a_pb.GetAgentCardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: a2a_pb.AgentCard) => void): grpc.ClientUnaryCall;
}
