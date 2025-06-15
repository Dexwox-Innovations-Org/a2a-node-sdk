// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var a2a_pb = require('./a2a_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');
var google_api_client_pb = require('./google/api/client_pb.js');

function serialize_a2a_v1_AgentCard(arg) {
  if (!(arg instanceof a2a_pb.AgentCard)) {
    throw new Error('Expected argument of type a2a.v1.AgentCard');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_AgentCard(buffer_arg) {
  return a2a_pb.AgentCard.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_CancelTaskRequest(arg) {
  if (!(arg instanceof a2a_pb.CancelTaskRequest)) {
    throw new Error('Expected argument of type a2a.v1.CancelTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_CancelTaskRequest(buffer_arg) {
  return a2a_pb.CancelTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_CreateTaskPushNotificationRequest(arg) {
  if (!(arg instanceof a2a_pb.CreateTaskPushNotificationRequest)) {
    throw new Error('Expected argument of type a2a.v1.CreateTaskPushNotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_CreateTaskPushNotificationRequest(buffer_arg) {
  return a2a_pb.CreateTaskPushNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_GetAgentCardRequest(arg) {
  if (!(arg instanceof a2a_pb.GetAgentCardRequest)) {
    throw new Error('Expected argument of type a2a.v1.GetAgentCardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_GetAgentCardRequest(buffer_arg) {
  return a2a_pb.GetAgentCardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_GetTaskPushNotificationRequest(arg) {
  if (!(arg instanceof a2a_pb.GetTaskPushNotificationRequest)) {
    throw new Error('Expected argument of type a2a.v1.GetTaskPushNotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_GetTaskPushNotificationRequest(buffer_arg) {
  return a2a_pb.GetTaskPushNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_GetTaskRequest(arg) {
  if (!(arg instanceof a2a_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type a2a.v1.GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_GetTaskRequest(buffer_arg) {
  return a2a_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_ListTaskPushNotificationRequest(arg) {
  if (!(arg instanceof a2a_pb.ListTaskPushNotificationRequest)) {
    throw new Error('Expected argument of type a2a.v1.ListTaskPushNotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_ListTaskPushNotificationRequest(buffer_arg) {
  return a2a_pb.ListTaskPushNotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_ListTaskPushNotificationResponse(arg) {
  if (!(arg instanceof a2a_pb.ListTaskPushNotificationResponse)) {
    throw new Error('Expected argument of type a2a.v1.ListTaskPushNotificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_ListTaskPushNotificationResponse(buffer_arg) {
  return a2a_pb.ListTaskPushNotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_SendMessageRequest(arg) {
  if (!(arg instanceof a2a_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type a2a.v1.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_SendMessageRequest(buffer_arg) {
  return a2a_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_SendMessageResponse(arg) {
  if (!(arg instanceof a2a_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type a2a.v1.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_SendMessageResponse(buffer_arg) {
  return a2a_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_StreamResponse(arg) {
  if (!(arg instanceof a2a_pb.StreamResponse)) {
    throw new Error('Expected argument of type a2a.v1.StreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_StreamResponse(buffer_arg) {
  return a2a_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_Task(arg) {
  if (!(arg instanceof a2a_pb.Task)) {
    throw new Error('Expected argument of type a2a.v1.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_Task(buffer_arg) {
  return a2a_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_TaskPushNotificationConfig(arg) {
  if (!(arg instanceof a2a_pb.TaskPushNotificationConfig)) {
    throw new Error('Expected argument of type a2a.v1.TaskPushNotificationConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_TaskPushNotificationConfig(buffer_arg) {
  return a2a_pb.TaskPushNotificationConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_a2a_v1_TaskSubscriptionRequest(arg) {
  if (!(arg instanceof a2a_pb.TaskSubscriptionRequest)) {
    throw new Error('Expected argument of type a2a.v1.TaskSubscriptionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_a2a_v1_TaskSubscriptionRequest(buffer_arg) {
  return a2a_pb.TaskSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// A2A Service definition
var A2AServiceService = exports.A2AServiceService = {
  // Send a message to the agent. This is a blocking call that will return the
// task once it is completed, or a LRO if requested.
sendMessage: {
    path: '/a2a.v1.A2AService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.SendMessageRequest,
    responseType: a2a_pb.SendMessageResponse,
    requestSerialize: serialize_a2a_v1_SendMessageRequest,
    requestDeserialize: deserialize_a2a_v1_SendMessageRequest,
    responseSerialize: serialize_a2a_v1_SendMessageResponse,
    responseDeserialize: deserialize_a2a_v1_SendMessageResponse,
  },
  // SendStreamingMessage is a streaming call that will return a stream of
// task update events until the Task is in an interrupted or terminal state.
sendStreamingMessage: {
    path: '/a2a.v1.A2AService/SendStreamingMessage',
    requestStream: false,
    responseStream: true,
    requestType: a2a_pb.SendMessageRequest,
    responseType: a2a_pb.StreamResponse,
    requestSerialize: serialize_a2a_v1_SendMessageRequest,
    requestDeserialize: deserialize_a2a_v1_SendMessageRequest,
    responseSerialize: serialize_a2a_v1_StreamResponse,
    responseDeserialize: deserialize_a2a_v1_StreamResponse,
  },
  // Get the current state of a task from the agent.
getTask: {
    path: '/a2a.v1.A2AService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.GetTaskRequest,
    responseType: a2a_pb.Task,
    requestSerialize: serialize_a2a_v1_GetTaskRequest,
    requestDeserialize: deserialize_a2a_v1_GetTaskRequest,
    responseSerialize: serialize_a2a_v1_Task,
    responseDeserialize: deserialize_a2a_v1_Task,
  },
  // Cancel a task from the agent. If supported one should expect no
// more task updates for the task.
cancelTask: {
    path: '/a2a.v1.A2AService/CancelTask',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.CancelTaskRequest,
    responseType: a2a_pb.Task,
    requestSerialize: serialize_a2a_v1_CancelTaskRequest,
    requestDeserialize: deserialize_a2a_v1_CancelTaskRequest,
    responseSerialize: serialize_a2a_v1_Task,
    responseDeserialize: deserialize_a2a_v1_Task,
  },
  // TaskSubscription is a streaming call that will return a stream of task
// update events. This attaches the stream to an existing in process task.
// If the task is complete the stream will return the completed task (like
// GetTask) and close the stream.
taskSubscription: {
    path: '/a2a.v1.A2AService/TaskSubscription',
    requestStream: false,
    responseStream: true,
    requestType: a2a_pb.TaskSubscriptionRequest,
    responseType: a2a_pb.StreamResponse,
    requestSerialize: serialize_a2a_v1_TaskSubscriptionRequest,
    requestDeserialize: deserialize_a2a_v1_TaskSubscriptionRequest,
    responseSerialize: serialize_a2a_v1_StreamResponse,
    responseDeserialize: deserialize_a2a_v1_StreamResponse,
  },
  // Set a push notification config for a task.
createTaskPushNotification: {
    path: '/a2a.v1.A2AService/CreateTaskPushNotification',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.CreateTaskPushNotificationRequest,
    responseType: a2a_pb.TaskPushNotificationConfig,
    requestSerialize: serialize_a2a_v1_CreateTaskPushNotificationRequest,
    requestDeserialize: deserialize_a2a_v1_CreateTaskPushNotificationRequest,
    responseSerialize: serialize_a2a_v1_TaskPushNotificationConfig,
    responseDeserialize: deserialize_a2a_v1_TaskPushNotificationConfig,
  },
  // Get a push notification config for a task.
getTaskPushNotification: {
    path: '/a2a.v1.A2AService/GetTaskPushNotification',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.GetTaskPushNotificationRequest,
    responseType: a2a_pb.TaskPushNotificationConfig,
    requestSerialize: serialize_a2a_v1_GetTaskPushNotificationRequest,
    requestDeserialize: deserialize_a2a_v1_GetTaskPushNotificationRequest,
    responseSerialize: serialize_a2a_v1_TaskPushNotificationConfig,
    responseDeserialize: deserialize_a2a_v1_TaskPushNotificationConfig,
  },
  // Get a list of push notifications configured for a task.
listTaskPushNotification: {
    path: '/a2a.v1.A2AService/ListTaskPushNotification',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.ListTaskPushNotificationRequest,
    responseType: a2a_pb.ListTaskPushNotificationResponse,
    requestSerialize: serialize_a2a_v1_ListTaskPushNotificationRequest,
    requestDeserialize: deserialize_a2a_v1_ListTaskPushNotificationRequest,
    responseSerialize: serialize_a2a_v1_ListTaskPushNotificationResponse,
    responseDeserialize: deserialize_a2a_v1_ListTaskPushNotificationResponse,
  },
  // GetAgentCard returns the agent card for the agent.
getAgentCard: {
    path: '/a2a.v1.A2AService/GetAgentCard',
    requestStream: false,
    responseStream: false,
    requestType: a2a_pb.GetAgentCardRequest,
    responseType: a2a_pb.AgentCard,
    requestSerialize: serialize_a2a_v1_GetAgentCardRequest,
    requestDeserialize: deserialize_a2a_v1_GetAgentCardRequest,
    responseSerialize: serialize_a2a_v1_AgentCard,
    responseDeserialize: deserialize_a2a_v1_AgentCard,
  },
};

exports.A2AServiceClient = grpc.makeGenericClientConstructor(A2AServiceService, 'A2AService');
