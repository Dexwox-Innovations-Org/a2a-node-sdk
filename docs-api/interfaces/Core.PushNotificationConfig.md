[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / PushNotificationConfig

# Interface: PushNotificationConfig

[Core](../modules/Core.md).PushNotificationConfig

Configuration for push notifications

**`Remarks`**

Used to set up event subscriptions for asynchronous updates

## Table of contents

### Properties

- [authToken](Core.PushNotificationConfig.md#authtoken)
- [enabled](Core.PushNotificationConfig.md#enabled)
- [endpoint](Core.PushNotificationConfig.md#endpoint)
- [events](Core.PushNotificationConfig.md#events)
- [metadata](Core.PushNotificationConfig.md#metadata)

## Properties

### authToken

• `Optional` **authToken**: `string`

Optional authentication token for the notification endpoint

___

### enabled

• **enabled**: `boolean`

Whether push notifications are enabled

___

### endpoint

• `Optional` **endpoint**: `string`

Optional endpoint URL where notifications should be sent

___

### events

• **events**: `string`[]

List of event types to subscribe to

___

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

Optional additional metadata for the subscription
