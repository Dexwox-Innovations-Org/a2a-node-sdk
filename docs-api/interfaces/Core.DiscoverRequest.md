[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / DiscoverRequest

# Interface: DiscoverRequest

[Core](../modules/Core.md).DiscoverRequest

Request format for agent discovery

**`Remarks`**

Follows JSON-RPC request format

## Table of contents

### Properties

- [id](Core.DiscoverRequest.md#id)
- [jsonrpc](Core.DiscoverRequest.md#jsonrpc)
- [method](Core.DiscoverRequest.md#method)
- [params](Core.DiscoverRequest.md#params)

## Properties

### id

• **id**: `string`

Request identifier

___

### jsonrpc

• `Optional` **jsonrpc**: `string`

JSON-RPC version (typically "2.0")

___

### method

• **method**: `string`

Method name (should be "discover")

___

### params

• `Optional` **params**: `Record`\<`string`, `unknown`\>

Optional parameters for the discovery request
