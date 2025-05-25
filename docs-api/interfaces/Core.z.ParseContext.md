[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ParseContext

# Interface: ParseContext

[Core](../modules/Core.md).[z](../modules/Core.z.md).ParseContext

## Table of contents

### Properties

- [common](Core.z.ParseContext.md#common)
- [data](Core.z.ParseContext.md#data)
- [parent](Core.z.ParseContext.md#parent)
- [parsedType](Core.z.ParseContext.md#parsedtype)
- [path](Core.z.ParseContext.md#path)
- [schemaErrorMap](Core.z.ParseContext.md#schemaerrormap)

## Properties

### common

• `Readonly` **common**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `async` | `boolean` |
| `contextualErrorMap?` | [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) |
| `issues` | [`ZodIssue`](../modules/Core.z.md#zodissue)[] |

___

### data

• `Readonly` **data**: `any`

___

### parent

• `Readonly` **parent**: ``null`` \| [`ParseContext`](Core.z.ParseContext.md)

___

### parsedType

• `Readonly` **parsedType**: ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` \| ``"map"`` \| ``"nan"`` \| ``"integer"`` \| ``"float"`` \| ``"date"`` \| ``"null"`` \| ``"array"`` \| ``"unknown"`` \| ``"promise"`` \| ``"void"`` \| ``"never"`` \| ``"set"``

___

### path

• `Readonly` **path**: [`ParsePath`](../modules/Core.z.md#parsepath)

___

### schemaErrorMap

• `Optional` `Readonly` **schemaErrorMap**: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap)
