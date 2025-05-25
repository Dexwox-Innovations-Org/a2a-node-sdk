[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodRecordDef

# Interface: ZodRecordDef\<Key, Value\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodRecordDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`KeySchema`](../modules/Core.z.md#keyschema) = [`ZodString`](../classes/Core.z.ZodString.md) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodRecordDef`**

## Table of contents

### Properties

- [description](Core.z.ZodRecordDef.md#description)
- [errorMap](Core.z.ZodRecordDef.md#errormap)
- [keyType](Core.z.ZodRecordDef.md#keytype)
- [typeName](Core.z.ZodRecordDef.md#typename)
- [valueType](Core.z.ZodRecordDef.md#valuetype)

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

• **typeName**: [`ZodRecord`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodrecord)

___

### valueType

• **valueType**: `Value`
