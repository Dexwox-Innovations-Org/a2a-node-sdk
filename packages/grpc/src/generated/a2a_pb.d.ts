// package: a2a.v1
// file: a2a.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as google_api_client_pb from "./google/api/client_pb";

export class SendMessageConfiguration extends jspb.Message { 
    clearAcceptedOutputModesList(): void;
    getAcceptedOutputModesList(): Array<string>;
    setAcceptedOutputModesList(value: Array<string>): SendMessageConfiguration;
    addAcceptedOutputModes(value: string, index?: number): string;

    hasPushNotification(): boolean;
    clearPushNotification(): void;
    getPushNotification(): PushNotificationConfig | undefined;
    setPushNotification(value?: PushNotificationConfig): SendMessageConfiguration;
    getHistoryLength(): number;
    setHistoryLength(value: number): SendMessageConfiguration;
    getBlocking(): boolean;
    setBlocking(value: boolean): SendMessageConfiguration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageConfiguration.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageConfiguration): SendMessageConfiguration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageConfiguration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageConfiguration;
    static deserializeBinaryFromReader(message: SendMessageConfiguration, reader: jspb.BinaryReader): SendMessageConfiguration;
}

export namespace SendMessageConfiguration {
    export type AsObject = {
        acceptedOutputModesList: Array<string>,
        pushNotification?: PushNotificationConfig.AsObject,
        historyLength: number,
        blocking: boolean,
    }
}

export class Task extends jspb.Message { 
    getId(): string;
    setId(value: string): Task;
    getContextId(): string;
    setContextId(value: string): Task;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): TaskStatus | undefined;
    setStatus(value?: TaskStatus): Task;
    clearArtifactsList(): void;
    getArtifactsList(): Array<Artifact>;
    setArtifactsList(value: Array<Artifact>): Task;
    addArtifacts(value?: Artifact, index?: number): Artifact;
    clearHistoryList(): void;
    getHistoryList(): Array<Message>;
    setHistoryList(value: Array<Message>): Task;
    addHistory(value?: Message, index?: number): Message;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: string,
        contextId: string,
        status?: TaskStatus.AsObject,
        artifactsList: Array<Artifact.AsObject>,
        historyList: Array<Message.AsObject>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class TaskStatus extends jspb.Message { 
    getState(): TaskState;
    setState(value: TaskState): TaskStatus;

    hasUpdate(): boolean;
    clearUpdate(): void;
    getUpdate(): Message | undefined;
    setUpdate(value?: Message): TaskStatus;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TaskStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TaskStatus): TaskStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskStatus;
    static deserializeBinaryFromReader(message: TaskStatus, reader: jspb.BinaryReader): TaskStatus;
}

export namespace TaskStatus {
    export type AsObject = {
        state: TaskState,
        update?: Message.AsObject,
        timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class Part extends jspb.Message { 

    hasText(): boolean;
    clearText(): void;
    getText(): string;
    setText(value: string): Part;

    hasFile(): boolean;
    clearFile(): void;
    getFile(): FilePart | undefined;
    setFile(value?: FilePart): Part;

    hasData(): boolean;
    clearData(): void;
    getData(): DataPart | undefined;
    setData(value?: DataPart): Part;

    getPartCase(): Part.PartCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Part.AsObject;
    static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Part;
    static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
}

export namespace Part {
    export type AsObject = {
        text: string,
        file?: FilePart.AsObject,
        data?: DataPart.AsObject,
    }

    export enum PartCase {
        PART_NOT_SET = 0,
        TEXT = 1,
        FILE = 2,
        DATA = 3,
    }

}

export class FilePart extends jspb.Message { 

    hasFileWithUri(): boolean;
    clearFileWithUri(): void;
    getFileWithUri(): string;
    setFileWithUri(value: string): FilePart;

    hasFileWithBytes(): boolean;
    clearFileWithBytes(): void;
    getFileWithBytes(): Uint8Array | string;
    getFileWithBytes_asU8(): Uint8Array;
    getFileWithBytes_asB64(): string;
    setFileWithBytes(value: Uint8Array | string): FilePart;
    getMimeType(): string;
    setMimeType(value: string): FilePart;

    getFileCase(): FilePart.FileCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilePart.AsObject;
    static toObject(includeInstance: boolean, msg: FilePart): FilePart.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilePart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilePart;
    static deserializeBinaryFromReader(message: FilePart, reader: jspb.BinaryReader): FilePart;
}

export namespace FilePart {
    export type AsObject = {
        fileWithUri: string,
        fileWithBytes: Uint8Array | string,
        mimeType: string,
    }

    export enum FileCase {
        FILE_NOT_SET = 0,
        FILE_WITH_URI = 1,
        FILE_WITH_BYTES = 2,
    }

}

export class DataPart extends jspb.Message { 

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_struct_pb.Struct | undefined;
    setData(value?: google_protobuf_struct_pb.Struct): DataPart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataPart.AsObject;
    static toObject(includeInstance: boolean, msg: DataPart): DataPart.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataPart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataPart;
    static deserializeBinaryFromReader(message: DataPart, reader: jspb.BinaryReader): DataPart;
}

export namespace DataPart {
    export type AsObject = {
        data?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class Message extends jspb.Message { 
    getMessageId(): string;
    setMessageId(value: string): Message;
    getContextId(): string;
    setContextId(value: string): Message;
    getTaskId(): string;
    setTaskId(value: string): Message;
    getRole(): Role;
    setRole(value: Role): Message;
    clearContentList(): void;
    getContentList(): Array<Part>;
    setContentList(value: Array<Part>): Message;
    addContent(value?: Part, index?: number): Part;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): Message;
    clearExtensionsList(): void;
    getExtensionsList(): Array<string>;
    setExtensionsList(value: Array<string>): Message;
    addExtensions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        messageId: string,
        contextId: string,
        taskId: string,
        role: Role,
        contentList: Array<Part.AsObject>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        extensionsList: Array<string>,
    }
}

export class Artifact extends jspb.Message { 
    getArtifactId(): string;
    setArtifactId(value: string): Artifact;
    getName(): string;
    setName(value: string): Artifact;
    getDescription(): string;
    setDescription(value: string): Artifact;
    clearPartsList(): void;
    getPartsList(): Array<Part>;
    setPartsList(value: Array<Part>): Artifact;
    addParts(value?: Part, index?: number): Part;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): Artifact;
    clearExtensionsList(): void;
    getExtensionsList(): Array<string>;
    setExtensionsList(value: Array<string>): Artifact;
    addExtensions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Artifact.AsObject;
    static toObject(includeInstance: boolean, msg: Artifact): Artifact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Artifact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Artifact;
    static deserializeBinaryFromReader(message: Artifact, reader: jspb.BinaryReader): Artifact;
}

export namespace Artifact {
    export type AsObject = {
        artifactId: string,
        name: string,
        description: string,
        partsList: Array<Part.AsObject>,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
        extensionsList: Array<string>,
    }
}

export class TaskStatusUpdateEvent extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): TaskStatusUpdateEvent;
    getContextId(): string;
    setContextId(value: string): TaskStatusUpdateEvent;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): TaskStatus | undefined;
    setStatus(value?: TaskStatus): TaskStatusUpdateEvent;
    getFinal(): boolean;
    setFinal(value: boolean): TaskStatusUpdateEvent;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): TaskStatusUpdateEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskStatusUpdateEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TaskStatusUpdateEvent): TaskStatusUpdateEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskStatusUpdateEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskStatusUpdateEvent;
    static deserializeBinaryFromReader(message: TaskStatusUpdateEvent, reader: jspb.BinaryReader): TaskStatusUpdateEvent;
}

export namespace TaskStatusUpdateEvent {
    export type AsObject = {
        taskId: string,
        contextId: string,
        status?: TaskStatus.AsObject,
        pb_final: boolean,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class TaskArtifactUpdateEvent extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): TaskArtifactUpdateEvent;
    getContextId(): string;
    setContextId(value: string): TaskArtifactUpdateEvent;

    hasArtifact(): boolean;
    clearArtifact(): void;
    getArtifact(): Artifact | undefined;
    setArtifact(value?: Artifact): TaskArtifactUpdateEvent;
    getAppend(): boolean;
    setAppend(value: boolean): TaskArtifactUpdateEvent;
    getLastChunk(): boolean;
    setLastChunk(value: boolean): TaskArtifactUpdateEvent;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): TaskArtifactUpdateEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskArtifactUpdateEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TaskArtifactUpdateEvent): TaskArtifactUpdateEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskArtifactUpdateEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskArtifactUpdateEvent;
    static deserializeBinaryFromReader(message: TaskArtifactUpdateEvent, reader: jspb.BinaryReader): TaskArtifactUpdateEvent;
}

export namespace TaskArtifactUpdateEvent {
    export type AsObject = {
        taskId: string,
        contextId: string,
        artifact?: Artifact.AsObject,
        append: boolean,
        lastChunk: boolean,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class PushNotificationConfig extends jspb.Message { 
    getId(): string;
    setId(value: string): PushNotificationConfig;
    getUrl(): string;
    setUrl(value: string): PushNotificationConfig;
    getToken(): string;
    setToken(value: string): PushNotificationConfig;

    hasAuthentication(): boolean;
    clearAuthentication(): void;
    getAuthentication(): AuthenticationInfo | undefined;
    setAuthentication(value?: AuthenticationInfo): PushNotificationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PushNotificationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: PushNotificationConfig): PushNotificationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PushNotificationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PushNotificationConfig;
    static deserializeBinaryFromReader(message: PushNotificationConfig, reader: jspb.BinaryReader): PushNotificationConfig;
}

export namespace PushNotificationConfig {
    export type AsObject = {
        id: string,
        url: string,
        token: string,
        authentication?: AuthenticationInfo.AsObject,
    }
}

export class AuthenticationInfo extends jspb.Message { 
    clearSchemesList(): void;
    getSchemesList(): Array<string>;
    setSchemesList(value: Array<string>): AuthenticationInfo;
    addSchemes(value: string, index?: number): string;
    getCredentials(): string;
    setCredentials(value: string): AuthenticationInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticationInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticationInfo): AuthenticationInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticationInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticationInfo;
    static deserializeBinaryFromReader(message: AuthenticationInfo, reader: jspb.BinaryReader): AuthenticationInfo;
}

export namespace AuthenticationInfo {
    export type AsObject = {
        schemesList: Array<string>,
        credentials: string,
    }
}

export class AgentCard extends jspb.Message { 
    getName(): string;
    setName(value: string): AgentCard;
    getDescription(): string;
    setDescription(value: string): AgentCard;
    getUrl(): string;
    setUrl(value: string): AgentCard;

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): AgentProvider | undefined;
    setProvider(value?: AgentProvider): AgentCard;
    getVersion(): string;
    setVersion(value: string): AgentCard;
    getDocumentationUrl(): string;
    setDocumentationUrl(value: string): AgentCard;

    hasCapabilities(): boolean;
    clearCapabilities(): void;
    getCapabilities(): AgentCapabilities | undefined;
    setCapabilities(value?: AgentCapabilities): AgentCard;

    getSecuritySchemesMap(): jspb.Map<string, SecurityScheme>;
    clearSecuritySchemesMap(): void;
    clearSecurityList(): void;
    getSecurityList(): Array<Security>;
    setSecurityList(value: Array<Security>): AgentCard;
    addSecurity(value?: Security, index?: number): Security;
    clearDefaultInputModesList(): void;
    getDefaultInputModesList(): Array<string>;
    setDefaultInputModesList(value: Array<string>): AgentCard;
    addDefaultInputModes(value: string, index?: number): string;
    clearDefaultOutputModesList(): void;
    getDefaultOutputModesList(): Array<string>;
    setDefaultOutputModesList(value: Array<string>): AgentCard;
    addDefaultOutputModes(value: string, index?: number): string;
    clearSkillsList(): void;
    getSkillsList(): Array<AgentSkill>;
    setSkillsList(value: Array<AgentSkill>): AgentCard;
    addSkills(value?: AgentSkill, index?: number): AgentSkill;
    getSupportsAuthenticatedExtendedCard(): boolean;
    setSupportsAuthenticatedExtendedCard(value: boolean): AgentCard;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentCard.AsObject;
    static toObject(includeInstance: boolean, msg: AgentCard): AgentCard.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentCard, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentCard;
    static deserializeBinaryFromReader(message: AgentCard, reader: jspb.BinaryReader): AgentCard;
}

export namespace AgentCard {
    export type AsObject = {
        name: string,
        description: string,
        url: string,
        provider?: AgentProvider.AsObject,
        version: string,
        documentationUrl: string,
        capabilities?: AgentCapabilities.AsObject,

        securitySchemesMap: Array<[string, SecurityScheme.AsObject]>,
        securityList: Array<Security.AsObject>,
        defaultInputModesList: Array<string>,
        defaultOutputModesList: Array<string>,
        skillsList: Array<AgentSkill.AsObject>,
        supportsAuthenticatedExtendedCard: boolean,
    }
}

export class AgentProvider extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): AgentProvider;
    getOrganization(): string;
    setOrganization(value: string): AgentProvider;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentProvider.AsObject;
    static toObject(includeInstance: boolean, msg: AgentProvider): AgentProvider.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentProvider, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentProvider;
    static deserializeBinaryFromReader(message: AgentProvider, reader: jspb.BinaryReader): AgentProvider;
}

export namespace AgentProvider {
    export type AsObject = {
        url: string,
        organization: string,
    }
}

export class AgentCapabilities extends jspb.Message { 
    getStreaming(): boolean;
    setStreaming(value: boolean): AgentCapabilities;
    getPushNotifications(): boolean;
    setPushNotifications(value: boolean): AgentCapabilities;
    clearExtensionsList(): void;
    getExtensionsList(): Array<AgentExtension>;
    setExtensionsList(value: Array<AgentExtension>): AgentCapabilities;
    addExtensions(value?: AgentExtension, index?: number): AgentExtension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentCapabilities.AsObject;
    static toObject(includeInstance: boolean, msg: AgentCapabilities): AgentCapabilities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentCapabilities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentCapabilities;
    static deserializeBinaryFromReader(message: AgentCapabilities, reader: jspb.BinaryReader): AgentCapabilities;
}

export namespace AgentCapabilities {
    export type AsObject = {
        streaming: boolean,
        pushNotifications: boolean,
        extensionsList: Array<AgentExtension.AsObject>,
    }
}

export class AgentExtension extends jspb.Message { 
    getUri(): string;
    setUri(value: string): AgentExtension;
    getDescription(): string;
    setDescription(value: string): AgentExtension;
    getRequired(): boolean;
    setRequired(value: boolean): AgentExtension;

    hasParams(): boolean;
    clearParams(): void;
    getParams(): google_protobuf_struct_pb.Struct | undefined;
    setParams(value?: google_protobuf_struct_pb.Struct): AgentExtension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentExtension.AsObject;
    static toObject(includeInstance: boolean, msg: AgentExtension): AgentExtension.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentExtension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentExtension;
    static deserializeBinaryFromReader(message: AgentExtension, reader: jspb.BinaryReader): AgentExtension;
}

export namespace AgentExtension {
    export type AsObject = {
        uri: string,
        description: string,
        required: boolean,
        params?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class AgentSkill extends jspb.Message { 
    getId(): string;
    setId(value: string): AgentSkill;
    getName(): string;
    setName(value: string): AgentSkill;
    getDescription(): string;
    setDescription(value: string): AgentSkill;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): AgentSkill;
    addTags(value: string, index?: number): string;
    clearExamplesList(): void;
    getExamplesList(): Array<string>;
    setExamplesList(value: Array<string>): AgentSkill;
    addExamples(value: string, index?: number): string;
    clearInputModesList(): void;
    getInputModesList(): Array<string>;
    setInputModesList(value: Array<string>): AgentSkill;
    addInputModes(value: string, index?: number): string;
    clearOutputModesList(): void;
    getOutputModesList(): Array<string>;
    setOutputModesList(value: Array<string>): AgentSkill;
    addOutputModes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentSkill.AsObject;
    static toObject(includeInstance: boolean, msg: AgentSkill): AgentSkill.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgentSkill, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgentSkill;
    static deserializeBinaryFromReader(message: AgentSkill, reader: jspb.BinaryReader): AgentSkill;
}

export namespace AgentSkill {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        tagsList: Array<string>,
        examplesList: Array<string>,
        inputModesList: Array<string>,
        outputModesList: Array<string>,
    }
}

export class TaskPushNotificationConfig extends jspb.Message { 
    getName(): string;
    setName(value: string): TaskPushNotificationConfig;

    hasPushNotificationConfig(): boolean;
    clearPushNotificationConfig(): void;
    getPushNotificationConfig(): PushNotificationConfig | undefined;
    setPushNotificationConfig(value?: PushNotificationConfig): TaskPushNotificationConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskPushNotificationConfig.AsObject;
    static toObject(includeInstance: boolean, msg: TaskPushNotificationConfig): TaskPushNotificationConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskPushNotificationConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskPushNotificationConfig;
    static deserializeBinaryFromReader(message: TaskPushNotificationConfig, reader: jspb.BinaryReader): TaskPushNotificationConfig;
}

export namespace TaskPushNotificationConfig {
    export type AsObject = {
        name: string,
        pushNotificationConfig?: PushNotificationConfig.AsObject,
    }
}

export class StringList extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<string>;
    setListList(value: Array<string>): StringList;
    addList(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringList.AsObject;
    static toObject(includeInstance: boolean, msg: StringList): StringList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringList;
    static deserializeBinaryFromReader(message: StringList, reader: jspb.BinaryReader): StringList;
}

export namespace StringList {
    export type AsObject = {
        listList: Array<string>,
    }
}

export class Security extends jspb.Message { 

    getSchemesMap(): jspb.Map<string, StringList>;
    clearSchemesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Security.AsObject;
    static toObject(includeInstance: boolean, msg: Security): Security.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Security, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Security;
    static deserializeBinaryFromReader(message: Security, reader: jspb.BinaryReader): Security;
}

export namespace Security {
    export type AsObject = {

        schemesMap: Array<[string, StringList.AsObject]>,
    }
}

export class SecurityScheme extends jspb.Message { 

    hasApiKeySecurityScheme(): boolean;
    clearApiKeySecurityScheme(): void;
    getApiKeySecurityScheme(): APIKeySecurityScheme | undefined;
    setApiKeySecurityScheme(value?: APIKeySecurityScheme): SecurityScheme;

    hasHttpAuthSecurityScheme(): boolean;
    clearHttpAuthSecurityScheme(): void;
    getHttpAuthSecurityScheme(): HTTPAuthSecurityScheme | undefined;
    setHttpAuthSecurityScheme(value?: HTTPAuthSecurityScheme): SecurityScheme;

    hasOauth2SecurityScheme(): boolean;
    clearOauth2SecurityScheme(): void;
    getOauth2SecurityScheme(): OAuth2SecurityScheme | undefined;
    setOauth2SecurityScheme(value?: OAuth2SecurityScheme): SecurityScheme;

    hasOpenIdConnectSecurityScheme(): boolean;
    clearOpenIdConnectSecurityScheme(): void;
    getOpenIdConnectSecurityScheme(): OpenIdConnectSecurityScheme | undefined;
    setOpenIdConnectSecurityScheme(value?: OpenIdConnectSecurityScheme): SecurityScheme;

    getSchemeCase(): SecurityScheme.SchemeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityScheme.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityScheme): SecurityScheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityScheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityScheme;
    static deserializeBinaryFromReader(message: SecurityScheme, reader: jspb.BinaryReader): SecurityScheme;
}

export namespace SecurityScheme {
    export type AsObject = {
        apiKeySecurityScheme?: APIKeySecurityScheme.AsObject,
        httpAuthSecurityScheme?: HTTPAuthSecurityScheme.AsObject,
        oauth2SecurityScheme?: OAuth2SecurityScheme.AsObject,
        openIdConnectSecurityScheme?: OpenIdConnectSecurityScheme.AsObject,
    }

    export enum SchemeCase {
        SCHEME_NOT_SET = 0,
        API_KEY_SECURITY_SCHEME = 1,
        HTTP_AUTH_SECURITY_SCHEME = 2,
        OAUTH2_SECURITY_SCHEME = 3,
        OPEN_ID_CONNECT_SECURITY_SCHEME = 4,
    }

}

export class APIKeySecurityScheme extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): APIKeySecurityScheme;
    getLocation(): string;
    setLocation(value: string): APIKeySecurityScheme;
    getName(): string;
    setName(value: string): APIKeySecurityScheme;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): APIKeySecurityScheme.AsObject;
    static toObject(includeInstance: boolean, msg: APIKeySecurityScheme): APIKeySecurityScheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: APIKeySecurityScheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): APIKeySecurityScheme;
    static deserializeBinaryFromReader(message: APIKeySecurityScheme, reader: jspb.BinaryReader): APIKeySecurityScheme;
}

export namespace APIKeySecurityScheme {
    export type AsObject = {
        description: string,
        location: string,
        name: string,
    }
}

export class HTTPAuthSecurityScheme extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): HTTPAuthSecurityScheme;
    getScheme(): string;
    setScheme(value: string): HTTPAuthSecurityScheme;
    getBearerFormat(): string;
    setBearerFormat(value: string): HTTPAuthSecurityScheme;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HTTPAuthSecurityScheme.AsObject;
    static toObject(includeInstance: boolean, msg: HTTPAuthSecurityScheme): HTTPAuthSecurityScheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HTTPAuthSecurityScheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HTTPAuthSecurityScheme;
    static deserializeBinaryFromReader(message: HTTPAuthSecurityScheme, reader: jspb.BinaryReader): HTTPAuthSecurityScheme;
}

export namespace HTTPAuthSecurityScheme {
    export type AsObject = {
        description: string,
        scheme: string,
        bearerFormat: string,
    }
}

export class OAuth2SecurityScheme extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): OAuth2SecurityScheme;

    hasFlows(): boolean;
    clearFlows(): void;
    getFlows(): OAuthFlows | undefined;
    setFlows(value?: OAuthFlows): OAuth2SecurityScheme;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OAuth2SecurityScheme.AsObject;
    static toObject(includeInstance: boolean, msg: OAuth2SecurityScheme): OAuth2SecurityScheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OAuth2SecurityScheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OAuth2SecurityScheme;
    static deserializeBinaryFromReader(message: OAuth2SecurityScheme, reader: jspb.BinaryReader): OAuth2SecurityScheme;
}

export namespace OAuth2SecurityScheme {
    export type AsObject = {
        description: string,
        flows?: OAuthFlows.AsObject,
    }
}

export class OpenIdConnectSecurityScheme extends jspb.Message { 
    getDescription(): string;
    setDescription(value: string): OpenIdConnectSecurityScheme;
    getOpenIdConnectUrl(): string;
    setOpenIdConnectUrl(value: string): OpenIdConnectSecurityScheme;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenIdConnectSecurityScheme.AsObject;
    static toObject(includeInstance: boolean, msg: OpenIdConnectSecurityScheme): OpenIdConnectSecurityScheme.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenIdConnectSecurityScheme, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenIdConnectSecurityScheme;
    static deserializeBinaryFromReader(message: OpenIdConnectSecurityScheme, reader: jspb.BinaryReader): OpenIdConnectSecurityScheme;
}

export namespace OpenIdConnectSecurityScheme {
    export type AsObject = {
        description: string,
        openIdConnectUrl: string,
    }
}

export class OAuthFlows extends jspb.Message { 

    hasAuthorizationCode(): boolean;
    clearAuthorizationCode(): void;
    getAuthorizationCode(): AuthorizationCodeOAuthFlow | undefined;
    setAuthorizationCode(value?: AuthorizationCodeOAuthFlow): OAuthFlows;

    hasClientCredentials(): boolean;
    clearClientCredentials(): void;
    getClientCredentials(): ClientCredentialsOAuthFlow | undefined;
    setClientCredentials(value?: ClientCredentialsOAuthFlow): OAuthFlows;

    hasImplicit(): boolean;
    clearImplicit(): void;
    getImplicit(): ImplicitOAuthFlow | undefined;
    setImplicit(value?: ImplicitOAuthFlow): OAuthFlows;

    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): PasswordOAuthFlow | undefined;
    setPassword(value?: PasswordOAuthFlow): OAuthFlows;

    getFlowCase(): OAuthFlows.FlowCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OAuthFlows.AsObject;
    static toObject(includeInstance: boolean, msg: OAuthFlows): OAuthFlows.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OAuthFlows, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OAuthFlows;
    static deserializeBinaryFromReader(message: OAuthFlows, reader: jspb.BinaryReader): OAuthFlows;
}

export namespace OAuthFlows {
    export type AsObject = {
        authorizationCode?: AuthorizationCodeOAuthFlow.AsObject,
        clientCredentials?: ClientCredentialsOAuthFlow.AsObject,
        implicit?: ImplicitOAuthFlow.AsObject,
        password?: PasswordOAuthFlow.AsObject,
    }

    export enum FlowCase {
        FLOW_NOT_SET = 0,
        AUTHORIZATION_CODE = 1,
        CLIENT_CREDENTIALS = 2,
        IMPLICIT = 3,
        PASSWORD = 4,
    }

}

export class AuthorizationCodeOAuthFlow extends jspb.Message { 
    getAuthorizationUrl(): string;
    setAuthorizationUrl(value: string): AuthorizationCodeOAuthFlow;
    getTokenUrl(): string;
    setTokenUrl(value: string): AuthorizationCodeOAuthFlow;
    getRefreshUrl(): string;
    setRefreshUrl(value: string): AuthorizationCodeOAuthFlow;

    getScopesMap(): jspb.Map<string, string>;
    clearScopesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorizationCodeOAuthFlow.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorizationCodeOAuthFlow): AuthorizationCodeOAuthFlow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorizationCodeOAuthFlow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorizationCodeOAuthFlow;
    static deserializeBinaryFromReader(message: AuthorizationCodeOAuthFlow, reader: jspb.BinaryReader): AuthorizationCodeOAuthFlow;
}

export namespace AuthorizationCodeOAuthFlow {
    export type AsObject = {
        authorizationUrl: string,
        tokenUrl: string,
        refreshUrl: string,

        scopesMap: Array<[string, string]>,
    }
}

export class ClientCredentialsOAuthFlow extends jspb.Message { 
    getTokenUrl(): string;
    setTokenUrl(value: string): ClientCredentialsOAuthFlow;
    getRefreshUrl(): string;
    setRefreshUrl(value: string): ClientCredentialsOAuthFlow;

    getScopesMap(): jspb.Map<string, string>;
    clearScopesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientCredentialsOAuthFlow.AsObject;
    static toObject(includeInstance: boolean, msg: ClientCredentialsOAuthFlow): ClientCredentialsOAuthFlow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientCredentialsOAuthFlow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientCredentialsOAuthFlow;
    static deserializeBinaryFromReader(message: ClientCredentialsOAuthFlow, reader: jspb.BinaryReader): ClientCredentialsOAuthFlow;
}

export namespace ClientCredentialsOAuthFlow {
    export type AsObject = {
        tokenUrl: string,
        refreshUrl: string,

        scopesMap: Array<[string, string]>,
    }
}

export class ImplicitOAuthFlow extends jspb.Message { 
    getAuthorizationUrl(): string;
    setAuthorizationUrl(value: string): ImplicitOAuthFlow;
    getRefreshUrl(): string;
    setRefreshUrl(value: string): ImplicitOAuthFlow;

    getScopesMap(): jspb.Map<string, string>;
    clearScopesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImplicitOAuthFlow.AsObject;
    static toObject(includeInstance: boolean, msg: ImplicitOAuthFlow): ImplicitOAuthFlow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImplicitOAuthFlow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImplicitOAuthFlow;
    static deserializeBinaryFromReader(message: ImplicitOAuthFlow, reader: jspb.BinaryReader): ImplicitOAuthFlow;
}

export namespace ImplicitOAuthFlow {
    export type AsObject = {
        authorizationUrl: string,
        refreshUrl: string,

        scopesMap: Array<[string, string]>,
    }
}

export class PasswordOAuthFlow extends jspb.Message { 
    getTokenUrl(): string;
    setTokenUrl(value: string): PasswordOAuthFlow;
    getRefreshUrl(): string;
    setRefreshUrl(value: string): PasswordOAuthFlow;

    getScopesMap(): jspb.Map<string, string>;
    clearScopesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PasswordOAuthFlow.AsObject;
    static toObject(includeInstance: boolean, msg: PasswordOAuthFlow): PasswordOAuthFlow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PasswordOAuthFlow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PasswordOAuthFlow;
    static deserializeBinaryFromReader(message: PasswordOAuthFlow, reader: jspb.BinaryReader): PasswordOAuthFlow;
}

export namespace PasswordOAuthFlow {
    export type AsObject = {
        tokenUrl: string,
        refreshUrl: string,

        scopesMap: Array<[string, string]>,
    }
}

export class SendMessageRequest extends jspb.Message { 

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): Message | undefined;
    setRequest(value?: Message): SendMessageRequest;

    hasConfiguration(): boolean;
    clearConfiguration(): void;
    getConfiguration(): SendMessageConfiguration | undefined;
    setConfiguration(value?: SendMessageConfiguration): SendMessageRequest;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): google_protobuf_struct_pb.Struct | undefined;
    setMetadata(value?: google_protobuf_struct_pb.Struct): SendMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        request?: Message.AsObject,
        configuration?: SendMessageConfiguration.AsObject,
        metadata?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class GetTaskRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetTaskRequest;
    getHistoryLength(): number;
    setHistoryLength(value: number): GetTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
    static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
    export type AsObject = {
        name: string,
        historyLength: number,
    }
}

export class CancelTaskRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CancelTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelTaskRequest): CancelTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelTaskRequest;
    static deserializeBinaryFromReader(message: CancelTaskRequest, reader: jspb.BinaryReader): CancelTaskRequest;
}

export namespace CancelTaskRequest {
    export type AsObject = {
        name: string,
    }
}

export class GetTaskPushNotificationRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): GetTaskPushNotificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskPushNotificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskPushNotificationRequest): GetTaskPushNotificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskPushNotificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskPushNotificationRequest;
    static deserializeBinaryFromReader(message: GetTaskPushNotificationRequest, reader: jspb.BinaryReader): GetTaskPushNotificationRequest;
}

export namespace GetTaskPushNotificationRequest {
    export type AsObject = {
        name: string,
    }
}

export class CreateTaskPushNotificationRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): CreateTaskPushNotificationRequest;
    getConfigId(): string;
    setConfigId(value: string): CreateTaskPushNotificationRequest;

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): TaskPushNotificationConfig | undefined;
    setConfig(value?: TaskPushNotificationConfig): CreateTaskPushNotificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskPushNotificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskPushNotificationRequest): CreateTaskPushNotificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskPushNotificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskPushNotificationRequest;
    static deserializeBinaryFromReader(message: CreateTaskPushNotificationRequest, reader: jspb.BinaryReader): CreateTaskPushNotificationRequest;
}

export namespace CreateTaskPushNotificationRequest {
    export type AsObject = {
        parent: string,
        configId: string,
        config?: TaskPushNotificationConfig.AsObject,
    }
}

export class TaskSubscriptionRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): TaskSubscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskSubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskSubscriptionRequest): TaskSubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskSubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskSubscriptionRequest;
    static deserializeBinaryFromReader(message: TaskSubscriptionRequest, reader: jspb.BinaryReader): TaskSubscriptionRequest;
}

export namespace TaskSubscriptionRequest {
    export type AsObject = {
        name: string,
    }
}

export class ListTaskPushNotificationRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ListTaskPushNotificationRequest;
    getPageSize(): number;
    setPageSize(value: number): ListTaskPushNotificationRequest;
    getPageToken(): string;
    setPageToken(value: string): ListTaskPushNotificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTaskPushNotificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTaskPushNotificationRequest): ListTaskPushNotificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTaskPushNotificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTaskPushNotificationRequest;
    static deserializeBinaryFromReader(message: ListTaskPushNotificationRequest, reader: jspb.BinaryReader): ListTaskPushNotificationRequest;
}

export namespace ListTaskPushNotificationRequest {
    export type AsObject = {
        parent: string,
        pageSize: number,
        pageToken: string,
    }
}

export class GetAgentCardRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAgentCardRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAgentCardRequest): GetAgentCardRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAgentCardRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAgentCardRequest;
    static deserializeBinaryFromReader(message: GetAgentCardRequest, reader: jspb.BinaryReader): GetAgentCardRequest;
}

export namespace GetAgentCardRequest {
    export type AsObject = {
    }
}

export class SendMessageResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): SendMessageResponse;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): Message | undefined;
    setMsg(value?: Message): SendMessageResponse;

    getPayloadCase(): SendMessageResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
    static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
    export type AsObject = {
        task?: Task.AsObject,
        msg?: Message.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        TASK = 1,
        MSG = 2,
    }

}

export class StreamResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): StreamResponse;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): Message | undefined;
    setMsg(value?: Message): StreamResponse;

    hasStatusUpdate(): boolean;
    clearStatusUpdate(): void;
    getStatusUpdate(): TaskStatusUpdateEvent | undefined;
    setStatusUpdate(value?: TaskStatusUpdateEvent): StreamResponse;

    hasArtifactUpdate(): boolean;
    clearArtifactUpdate(): void;
    getArtifactUpdate(): TaskArtifactUpdateEvent | undefined;
    setArtifactUpdate(value?: TaskArtifactUpdateEvent): StreamResponse;

    getPayloadCase(): StreamResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamResponse;
    static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
    export type AsObject = {
        task?: Task.AsObject,
        msg?: Message.AsObject,
        statusUpdate?: TaskStatusUpdateEvent.AsObject,
        artifactUpdate?: TaskArtifactUpdateEvent.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        TASK = 1,
        MSG = 2,
        STATUS_UPDATE = 3,
        ARTIFACT_UPDATE = 4,
    }

}

export class ListTaskPushNotificationResponse extends jspb.Message { 
    clearConfigsList(): void;
    getConfigsList(): Array<TaskPushNotificationConfig>;
    setConfigsList(value: Array<TaskPushNotificationConfig>): ListTaskPushNotificationResponse;
    addConfigs(value?: TaskPushNotificationConfig, index?: number): TaskPushNotificationConfig;
    getNextPageToken(): string;
    setNextPageToken(value: string): ListTaskPushNotificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTaskPushNotificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTaskPushNotificationResponse): ListTaskPushNotificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTaskPushNotificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTaskPushNotificationResponse;
    static deserializeBinaryFromReader(message: ListTaskPushNotificationResponse, reader: jspb.BinaryReader): ListTaskPushNotificationResponse;
}

export namespace ListTaskPushNotificationResponse {
    export type AsObject = {
        configsList: Array<TaskPushNotificationConfig.AsObject>,
        nextPageToken: string,
    }
}

export enum TaskState {
    TASK_STATE_UNSPECIFIED = 0,
    TASK_STATE_SUBMITTED = 1,
    TASK_STATE_WORKING = 2,
    TASK_STATE_COMPLETED = 3,
    TASK_STATE_FAILED = 4,
    TASK_STATE_CANCELLED = 5,
    TASK_STATE_INPUT_REQUIRED = 6,
    TASK_STATE_REJECTED = 7,
    TASK_STATE_AUTH_REQUIRED = 8,
}

export enum Role {
    ROLE_UNSPECIFIED = 0,
    ROLE_USER = 1,
    ROLE_AGENT = 2,
}
