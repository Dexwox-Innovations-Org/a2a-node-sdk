[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / MessageSendConfiguration

# Interface: MessageSendConfiguration

[Core](../modules/Core.md).MessageSendConfiguration

Configuration options for sending messages

**`Remarks`**

Used to control message delivery behavior

## Table of contents

### Properties

- [metadata](Core.MessageSendConfiguration.md#metadata)
- [priority](Core.MessageSendConfiguration.md#priority)
- [timeout](Core.MessageSendConfiguration.md#timeout)

## Properties

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

Optional additional metadata for the message

___

### priority

• `Optional` **priority**: `number`

Optional priority level for message processing (higher numbers = higher priority)

___

### timeout

• `Optional` **timeout**: `number`

Optional timeout in milliseconds for message delivery
