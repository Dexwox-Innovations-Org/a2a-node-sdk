[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodTupleDef

# Interface: ZodTupleDef\<T, Rest\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodTupleDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTupleItems`](../modules/Core.z.md#zodtupleitems) \| [] = [`ZodTupleItems`](../modules/Core.z.md#zodtupleitems) |
| `Rest` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) \| ``null`` = ``null`` |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodTupleDef`**

## Table of contents

### Properties

- [description](Core.z.ZodTupleDef.md#description)
- [errorMap](Core.z.ZodTupleDef.md#errormap)
- [items](Core.z.ZodTupleDef.md#items)
- [rest](Core.z.ZodTupleDef.md#rest)
- [typeName](Core.z.ZodTupleDef.md#typename)

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[ZodTypeDef](Core.z.ZodTypeDef.md).[description](Core.z.ZodTypeDef.md#description)

___

### errorMap

• `Optional` **errorMap**: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap)

#### Inherited from

[ZodTypeDef](Core.z.ZodTypeDef.md).[errorMap](Core.z.ZodTypeDef.md#errormap)

___

### items

• **items**: `T`

___

### rest

• **rest**: `Rest`

___

### typeName

• **typeName**: [`ZodTuple`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodtuple)
