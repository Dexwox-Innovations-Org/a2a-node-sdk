[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodInvalidUnionIssue

# Interface: ZodInvalidUnionIssue

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodInvalidUnionIssue

## Hierarchy

- [`ZodIssueBase`](../modules/Core.z.md#zodissuebase)

  ↳ **`ZodInvalidUnionIssue`**

## Table of contents

### Properties

- [code](Core.z.ZodInvalidUnionIssue.md#code)
- [message](Core.z.ZodInvalidUnionIssue.md#message)
- [path](Core.z.ZodInvalidUnionIssue.md#path)
- [unionErrors](Core.z.ZodInvalidUnionIssue.md#unionerrors)

## Properties

### code

• **code**: ``"invalid_union"``

___

### message

• `Optional` **message**: `string`

#### Inherited from

ZodIssueBase.message

___

### path

• **path**: (`string` \| `number`)[]

#### Inherited from

ZodIssueBase.path

___

### unionErrors

• **unionErrors**: [`ZodError`](../classes/Core.z.ZodError.md)\<`any`\>[]
