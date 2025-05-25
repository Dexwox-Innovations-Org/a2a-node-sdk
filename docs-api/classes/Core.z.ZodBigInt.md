[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodBigInt

# Class: ZodBigInt

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodBigInt

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`bigint`, [`ZodBigIntDef`](../interfaces/Core.z.ZodBigIntDef.md), `bigint`\>

  ↳ **`ZodBigInt`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodBigInt.md#constructor)

### Properties

- [\_def](Core.z.ZodBigInt.md#_def)
- [\_input](Core.z.ZodBigInt.md#_input)
- [\_output](Core.z.ZodBigInt.md#_output)
- [\_type](Core.z.ZodBigInt.md#_type)
- [create](Core.z.ZodBigInt.md#create)
- [max](Core.z.ZodBigInt.md#max)
- [min](Core.z.ZodBigInt.md#min)
- [spa](Core.z.ZodBigInt.md#spa)
- [~standard](Core.z.ZodBigInt.md#~standard)

### Accessors

- [description](Core.z.ZodBigInt.md#description)
- [maxValue](Core.z.ZodBigInt.md#maxvalue)
- [minValue](Core.z.ZodBigInt.md#minvalue)

### Methods

- [\_addCheck](Core.z.ZodBigInt.md#_addcheck)
- [\_getInvalidInput](Core.z.ZodBigInt.md#_getinvalidinput)
- [\_getOrReturnCtx](Core.z.ZodBigInt.md#_getorreturnctx)
- [\_getType](Core.z.ZodBigInt.md#_gettype)
- [\_parse](Core.z.ZodBigInt.md#_parse)
- [\_parseAsync](Core.z.ZodBigInt.md#_parseasync)
- [\_parseSync](Core.z.ZodBigInt.md#_parsesync)
- [\_processInputParams](Core.z.ZodBigInt.md#_processinputparams)
- [\_refinement](Core.z.ZodBigInt.md#_refinement)
- [and](Core.z.ZodBigInt.md#and)
- [array](Core.z.ZodBigInt.md#array)
- [brand](Core.z.ZodBigInt.md#brand)
- [catch](Core.z.ZodBigInt.md#catch)
- [default](Core.z.ZodBigInt.md#default)
- [describe](Core.z.ZodBigInt.md#describe)
- [gt](Core.z.ZodBigInt.md#gt)
- [gte](Core.z.ZodBigInt.md#gte)
- [isNullable](Core.z.ZodBigInt.md#isnullable)
- [isOptional](Core.z.ZodBigInt.md#isoptional)
- [lt](Core.z.ZodBigInt.md#lt)
- [lte](Core.z.ZodBigInt.md#lte)
- [multipleOf](Core.z.ZodBigInt.md#multipleof)
- [negative](Core.z.ZodBigInt.md#negative)
- [nonnegative](Core.z.ZodBigInt.md#nonnegative)
- [nonpositive](Core.z.ZodBigInt.md#nonpositive)
- [nullable](Core.z.ZodBigInt.md#nullable)
- [nullish](Core.z.ZodBigInt.md#nullish)
- [optional](Core.z.ZodBigInt.md#optional)
- [or](Core.z.ZodBigInt.md#or)
- [parse](Core.z.ZodBigInt.md#parse)
- [parseAsync](Core.z.ZodBigInt.md#parseasync)
- [pipe](Core.z.ZodBigInt.md#pipe)
- [positive](Core.z.ZodBigInt.md#positive)
- [promise](Core.z.ZodBigInt.md#promise)
- [readonly](Core.z.ZodBigInt.md#readonly)
- [refine](Core.z.ZodBigInt.md#refine)
- [refinement](Core.z.ZodBigInt.md#refinement)
- [safeParse](Core.z.ZodBigInt.md#safeparse)
- [safeParseAsync](Core.z.ZodBigInt.md#safeparseasync)
- [setLimit](Core.z.ZodBigInt.md#setlimit)
- [superRefine](Core.z.ZodBigInt.md#superrefine)
- [transform](Core.z.ZodBigInt.md#transform)
- [~validate](Core.z.ZodBigInt.md#~validate)

## Constructors

### constructor

• **new ZodBigInt**(`def`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodBigIntDef`](../interfaces/Core.z.ZodBigIntDef.md) |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodBigIntDef`](../interfaces/Core.z.ZodBigIntDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `bigint`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `bigint`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `bigint`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  }) => [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Type declaration

▸ (`params?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  } |

##### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### max

• **max**: (`value`: `bigint`, `message?`: `ErrMessage`) => [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Type declaration

▸ (`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

##### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### min

• **min**: (`value`: `bigint`, `message?`: `ErrMessage`) => [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Type declaration

▸ (`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

##### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~standard](Core.z.ZodType.md#~standard)

## Accessors

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ZodType.description

___

### maxValue

• `get` **maxValue**(): ``null`` \| `bigint`

#### Returns

``null`` \| `bigint`

___

### minValue

• `get` **minValue**(): ``null`` \| `bigint`

#### Returns

``null`` \| `bigint`

## Methods

### \_addCheck

▸ **_addCheck**(`check`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | [`ZodBigIntCheck`](../modules/Core.z.md#zodbigintcheck) |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### \_getInvalidInput

▸ **_getInvalidInput**(`input`): [`INVALID`](../modules/Core.z.md#invalid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`INVALID`](../modules/Core.z.md#invalid)

___

### \_getOrReturnCtx

▸ **_getOrReturnCtx**(`input`, `ctx?`): [`ParseContext`](../interfaces/Core.z.ParseContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |
| `ctx?` | [`ParseContext`](../interfaces/Core.z.ParseContext.md) |

#### Returns

[`ParseContext`](../interfaces/Core.z.ParseContext.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_getOrReturnCtx](Core.z.ZodType.md#_getorreturnctx)

___

### \_getType

▸ **_getType**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

`string`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_getType](Core.z.ZodType.md#_gettype)

___

### \_parse

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`bigint`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseSync](Core.z.ZodType.md#_parsesync)

___

### \_processInputParams

▸ **_processInputParams**(`input`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `ctx` | [`ParseContext`](../interfaces/Core.z.ParseContext.md) |
| `status` | [`ParseStatus`](Core.z.ParseStatus.md) |

#### Inherited from

[ZodType](Core.z.ZodType.md).[_processInputParams](Core.z.ZodType.md#_processinputparams)

___

### \_refinement

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `bigint` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `bigint`  }) => `bigint` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `bigint` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `bigint` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

___

### describe

▸ **describe**(`description`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`this`

#### Inherited from

[ZodType](Core.z.ZodType.md).[describe](Core.z.ZodType.md#describe)

___

### gt

▸ **gt**(`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### gte

▸ **gte**(`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### isNullable

▸ **isNullable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ZodType](Core.z.ZodType.md).[isNullable](Core.z.ZodType.md#isnullable)

___

### isOptional

▸ **isOptional**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ZodType](Core.z.ZodType.md).[isOptional](Core.z.ZodType.md#isoptional)

___

### lt

▸ **lt**(`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### lte

▸ **lte**(`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### multipleOf

▸ **multipleOf**(`value`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### negative

▸ **negative**(`message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### nonnegative

▸ **nonnegative**(`message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### nonpositive

▸ **nonpositive**(`message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodBigInt`](Core.z.ZodBigInt.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodBigInt`](Core.z.ZodBigInt.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`bigint`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### positive

▸ **positive**(`message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `RefinedOutput`, `bigint`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `bigint`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `bigint`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `RefinedOutput`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `bigint`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `bigint`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `RefinedOutput`, `bigint`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `bigint`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `RefinedOutput`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `bigint`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`bigint`, `bigint`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### setLimit

▸ **setLimit**(`kind`, `value`, `inclusive`, `message?`): [`ZodBigInt`](Core.z.ZodBigInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | ``"min"`` \| ``"max"`` |
| `value` | `bigint` |
| `inclusive` | `boolean` |
| `message?` | `string` |

#### Returns

[`ZodBigInt`](Core.z.ZodBigInt.md)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `RefinedOutput`, `bigint`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `RefinedOutput`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `bigint`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `NewOut`, `bigint`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `bigint`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBigInt`](Core.z.ZodBigInt.md), `NewOut`, `bigint`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`bigint`\> \| `Promise`\<`Result`\<`bigint`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`bigint`\> \| `Promise`\<`Result`\<`bigint`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
