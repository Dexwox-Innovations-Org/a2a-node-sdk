[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodFunctionDef

# Interface: ZodFunctionDef\<Args, Returns\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodFunctionDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | extends [`ZodTuple`](../classes/Core.z.ZodTuple.md)\<`any`, `any`\> = [`ZodTuple`](../classes/Core.z.ZodTuple.md)\<`any`, `any`\> |
| `Returns` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodFunctionDef`**

## Table of contents

### Properties

- [args](Core.z.ZodFunctionDef.md#args)
- [description](Core.z.ZodFunctionDef.md#description)
- [errorMap](Core.z.ZodFunctionDef.md#errormap)
- [returns](Core.z.ZodFunctionDef.md#returns)
- [typeName](Core.z.ZodFunctionDef.md#typename)

## Properties

### args

• **args**: `Args`

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

### returns

• **returns**: `Returns`

___

### typeName

• **typeName**: [`ZodFunction`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodfunction)
