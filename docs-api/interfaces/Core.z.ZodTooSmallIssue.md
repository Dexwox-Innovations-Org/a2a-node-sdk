[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodTooSmallIssue

# Interface: ZodTooSmallIssue

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodTooSmallIssue

## Hierarchy

- [`ZodIssueBase`](../modules/Core.z.md#zodissuebase)

  ↳ **`ZodTooSmallIssue`**

## Table of contents

### Properties

- [code](Core.z.ZodTooSmallIssue.md#code)
- [exact](Core.z.ZodTooSmallIssue.md#exact)
- [inclusive](Core.z.ZodTooSmallIssue.md#inclusive)
- [message](Core.z.ZodTooSmallIssue.md#message)
- [minimum](Core.z.ZodTooSmallIssue.md#minimum)
- [path](Core.z.ZodTooSmallIssue.md#path)
- [type](Core.z.ZodTooSmallIssue.md#type)

## Properties

### code

• **code**: ``"too_small"``

___

### exact

• `Optional` **exact**: `boolean`

___

### inclusive

• **inclusive**: `boolean`

___

### message

• `Optional` **message**: `string`

#### Inherited from

ZodIssueBase.message

___

### minimum

• **minimum**: `number` \| `bigint`

___

### path

• **path**: (`string` \| `number`)[]

#### Inherited from

ZodIssueBase.path

___

### type

• **type**: ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"date"`` \| ``"array"`` \| ``"set"``
