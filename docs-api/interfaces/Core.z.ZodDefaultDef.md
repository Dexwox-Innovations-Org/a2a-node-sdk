[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodDefaultDef

# Interface: ZodDefaultDef\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodDefaultDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodDefaultDef`**

## Table of contents

### Properties

- [defaultValue](Core.z.ZodDefaultDef.md#defaultvalue)
- [description](Core.z.ZodDefaultDef.md#description)
- [errorMap](Core.z.ZodDefaultDef.md#errormap)
- [innerType](Core.z.ZodDefaultDef.md#innertype)
- [typeName](Core.z.ZodDefaultDef.md#typename)

## Properties

### defaultValue

• **defaultValue**: () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\>

#### Type declaration

▸ (): [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\>

##### Returns

[`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\>

___

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

### innerType

• **innerType**: `T`

___

### typeName

• **typeName**: [`ZodDefault`](../enums/Core.z.ZodFirstPartyTypeKind.md#zoddefault)
