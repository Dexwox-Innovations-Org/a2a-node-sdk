[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodUnionDef

# Interface: ZodUnionDef\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodUnionDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodUnionOptions`](../modules/Core.z.md#zodunionoptions) = `Readonly`\<[[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]]\> |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodUnionDef`**

## Table of contents

### Properties

- [description](Core.z.ZodUnionDef.md#description)
- [errorMap](Core.z.ZodUnionDef.md#errormap)
- [options](Core.z.ZodUnionDef.md#options)
- [typeName](Core.z.ZodUnionDef.md#typename)

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

### options

• **options**: `T`

___

### typeName

• **typeName**: [`ZodUnion`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodunion)
