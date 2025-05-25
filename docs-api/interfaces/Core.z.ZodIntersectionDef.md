[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodIntersectionDef

# Interface: ZodIntersectionDef\<T, U\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodIntersectionDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `U` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodIntersectionDef`**

## Table of contents

### Properties

- [description](Core.z.ZodIntersectionDef.md#description)
- [errorMap](Core.z.ZodIntersectionDef.md#errormap)
- [left](Core.z.ZodIntersectionDef.md#left)
- [right](Core.z.ZodIntersectionDef.md#right)
- [typeName](Core.z.ZodIntersectionDef.md#typename)

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

### left

• **left**: `T`

___

### right

• **right**: `U`

___

### typeName

• **typeName**: [`ZodIntersection`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodintersection)
