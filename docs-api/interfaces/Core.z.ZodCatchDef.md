[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodCatchDef

# Interface: ZodCatchDef\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodCatchDef

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodTypeDef`](Core.z.ZodTypeDef.md)

  ↳ **`ZodCatchDef`**

## Table of contents

### Properties

- [catchValue](Core.z.ZodCatchDef.md#catchvalue)
- [description](Core.z.ZodCatchDef.md#description)
- [errorMap](Core.z.ZodCatchDef.md#errormap)
- [innerType](Core.z.ZodCatchDef.md#innertype)
- [typeName](Core.z.ZodCatchDef.md#typename)

## Properties

### catchValue

• **catchValue**: (`ctx`: \{ `error`: [`ZodError`](../classes/Core.z.ZodError.md)\<`any`\> ; `input`: `unknown`  }) => `T`[``"_input"``]

#### Type declaration

▸ (`ctx`): `T`[``"_input"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Object` |
| `ctx.error` | [`ZodError`](../classes/Core.z.ZodError.md)\<`any`\> |
| `ctx.input` | `unknown` |

##### Returns

`T`[``"_input"``]

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

• **typeName**: [`ZodCatch`](../enums/Core.z.ZodFirstPartyTypeKind.md#zodcatch)
