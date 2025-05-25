[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodArrayDef

# Interface: ZodArrayDef\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodArrayDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodArrayDef`**

## Table of contents

### Properties

- [description](Core.z.ZodArrayDef.md#description)
- [errorMap](Core.z.ZodArrayDef.md#errormap)
- [exactLength](Core.z.ZodArrayDef.md#exactlength)
- [maxLength](Core.z.ZodArrayDef.md#maxlength)
- [minLength](Core.z.ZodArrayDef.md#minlength)
- [type](Core.z.ZodArrayDef.md#type)
- [typeName](Core.z.ZodArrayDef.md#typename)

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

### exactLength

• **exactLength**: ``null`` \| \{ `message?`: `string` ; `value`: `number`  }

___

### maxLength

• **maxLength**: ``null`` \| \{ `message?`: `string` ; `value`: `number`  }

___

### minLength

• **minLength**: ``null`` \| \{ `message?`: `string` ; `value`: `number`  }

___

### type

• **type**: `T`

___

### typeName

• **typeName**: [`ZodArray`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodarray)
