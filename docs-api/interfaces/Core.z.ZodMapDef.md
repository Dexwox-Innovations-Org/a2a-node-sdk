[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodMapDef

# Interface: ZodMapDef\<Key, Value\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodMapDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodMapDef`**

## Table of contents

### Properties

- [description](Core.z.ZodMapDef.md#description)
- [errorMap](Core.z.ZodMapDef.md#errormap)
- [keyType](Core.z.ZodMapDef.md#keytype)
- [typeName](Core.z.ZodMapDef.md#typename)
- [valueType](Core.z.ZodMapDef.md#valuetype)

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

### keyType

• **keyType**: `Key`

___

### typeName

• **typeName**: [`ZodMap`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodmap)

___

### valueType

• **valueType**: `Value`
