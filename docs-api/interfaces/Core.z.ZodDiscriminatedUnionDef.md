[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodDiscriminatedUnionDef

# Interface: ZodDiscriminatedUnionDef\<Discriminator, Options\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodDiscriminatedUnionDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `Discriminator` | extends `string` |
| `Options` | extends readonly [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`string`\>[] = [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`string`\>[] |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodDiscriminatedUnionDef`**

## Table of contents

### Properties

- [description](Core.z.ZodDiscriminatedUnionDef.md#description)
- [discriminator](Core.z.ZodDiscriminatedUnionDef.md#discriminator)
- [errorMap](Core.z.ZodDiscriminatedUnionDef.md#errormap)
- [options](Core.z.ZodDiscriminatedUnionDef.md#options)
- [optionsMap](Core.z.ZodDiscriminatedUnionDef.md#optionsmap)
- [typeName](Core.z.ZodDiscriminatedUnionDef.md#typename)

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[ZodTypeDef](Core.z.ZodTypeDef.md).[description](Core.z.ZodTypeDef.md#description)

___

### discriminator

• **discriminator**: `Discriminator`

___

### errorMap

• `Optional` **errorMap**: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap)

#### Inherited from

[ZodTypeDef](Core.z.ZodTypeDef.md).[errorMap](Core.z.ZodTypeDef.md#errormap)

___

### options

• **options**: `Options`

___

### optionsMap

• **optionsMap**: `Map`\<[`Primitive`](../modules/Core.z.md#primitive), [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`any`\>\>

___

### typeName

• **typeName**: [`ZodDiscriminatedUnion`](../enums/Core.z.ZodFirstPartyTypeKind.md#zoddiscriminatedunion)
