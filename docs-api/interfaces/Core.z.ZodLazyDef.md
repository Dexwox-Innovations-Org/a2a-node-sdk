[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodLazyDef

# Interface: ZodLazyDef\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodLazyDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodLazyDef`**

## Table of contents

### Properties

- [description](Core.z.ZodLazyDef.md#description)
- [errorMap](Core.z.ZodLazyDef.md#errormap)
- [getter](Core.z.ZodLazyDef.md#getter)
- [typeName](Core.z.ZodLazyDef.md#typename)

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

### getter

• **getter**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

___

### typeName

• **typeName**: [`ZodLazy`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodlazy)
