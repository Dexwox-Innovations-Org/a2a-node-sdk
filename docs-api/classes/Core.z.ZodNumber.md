[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodNumber

# Class: ZodNumber

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodNumber

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`number`, [`ZodNumberDef`](../interfaces/Core.z.ZodNumberDef.md), `number`\>

  ↳ **`ZodNumber`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodNumber.md#constructor)

### Properties

- [\_def](Core.z.ZodNumber.md#_def)
- [\_input](Core.z.ZodNumber.md#_input)
- [\_output](Core.z.ZodNumber.md#_output)
- [\_type](Core.z.ZodNumber.md#_type)
- [create](Core.z.ZodNumber.md#create)
- [max](Core.z.ZodNumber.md#max)
- [min](Core.z.ZodNumber.md#min)
- [spa](Core.z.ZodNumber.md#spa)
- [step](Core.z.ZodNumber.md#step)
- [~standard](Core.z.ZodNumber.md#~standard)

### Accessors

- [description](Core.z.ZodNumber.md#description)
- [isFinite](Core.z.ZodNumber.md#isfinite)
- [isInt](Core.z.ZodNumber.md#isint)
- [maxValue](Core.z.ZodNumber.md#maxvalue)
- [minValue](Core.z.ZodNumber.md#minvalue)

### Methods

- [\_addCheck](Core.z.ZodNumber.md#_addcheck)
- [\_getOrReturnCtx](Core.z.ZodNumber.md#_getorreturnctx)
- [\_getType](Core.z.ZodNumber.md#_gettype)
- [\_parse](Core.z.ZodNumber.md#_parse)
- [\_parseAsync](Core.z.ZodNumber.md#_parseasync)
- [\_parseSync](Core.z.ZodNumber.md#_parsesync)
- [\_processInputParams](Core.z.ZodNumber.md#_processinputparams)
- [\_refinement](Core.z.ZodNumber.md#_refinement)
- [and](Core.z.ZodNumber.md#and)
- [array](Core.z.ZodNumber.md#array)
- [brand](Core.z.ZodNumber.md#brand)
- [catch](Core.z.ZodNumber.md#catch)
- [default](Core.z.ZodNumber.md#default)
- [describe](Core.z.ZodNumber.md#describe)
- [finite](Core.z.ZodNumber.md#finite)
- [gt](Core.z.ZodNumber.md#gt)
- [gte](Core.z.ZodNumber.md#gte)
- [int](Core.z.ZodNumber.md#int)
- [isNullable](Core.z.ZodNumber.md#isnullable)
- [isOptional](Core.z.ZodNumber.md#isoptional)
- [lt](Core.z.ZodNumber.md#lt)
- [lte](Core.z.ZodNumber.md#lte)
- [multipleOf](Core.z.ZodNumber.md#multipleof)
- [negative](Core.z.ZodNumber.md#negative)
- [nonnegative](Core.z.ZodNumber.md#nonnegative)
- [nonpositive](Core.z.ZodNumber.md#nonpositive)
- [nullable](Core.z.ZodNumber.md#nullable)
- [nullish](Core.z.ZodNumber.md#nullish)
- [optional](Core.z.ZodNumber.md#optional)
- [or](Core.z.ZodNumber.md#or)
- [parse](Core.z.ZodNumber.md#parse)
- [parseAsync](Core.z.ZodNumber.md#parseasync)
- [pipe](Core.z.ZodNumber.md#pipe)
- [positive](Core.z.ZodNumber.md#positive)
- [promise](Core.z.ZodNumber.md#promise)
- [readonly](Core.z.ZodNumber.md#readonly)
- [refine](Core.z.ZodNumber.md#refine)
- [refinement](Core.z.ZodNumber.md#refinement)
- [safe](Core.z.ZodNumber.md#safe)
- [safeParse](Core.z.ZodNumber.md#safeparse)
- [safeParseAsync](Core.z.ZodNumber.md#safeparseasync)
- [setLimit](Core.z.ZodNumber.md#setlimit)
- [superRefine](Core.z.ZodNumber.md#superrefine)
- [transform](Core.z.ZodNumber.md#transform)
- [~validate](Core.z.ZodNumber.md#~validate)

## Constructors

### constructor

• **new ZodNumber**(`def`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodNumberDef`](../interfaces/Core.z.ZodNumberDef.md) |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodNumberDef`](../interfaces/Core.z.ZodNumberDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `number`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `number`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `number`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  }) => [`ZodNumber`](Core.z.ZodNumber.md)

#### Type declaration

▸ (`params?`): [`ZodNumber`](Core.z.ZodNumber.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  } |

##### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### max

• **max**: (`value`: `number`, `message?`: `ErrMessage`) => [`ZodNumber`](Core.z.ZodNumber.md)

#### Type declaration

▸ (`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

##### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### min

• **min**: (`value`: `number`, `message?`: `ErrMessage`) => [`ZodNumber`](Core.z.ZodNumber.md)

#### Type declaration

▸ (`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

##### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### step

• **step**: (`value`: `number`, `message?`: `ErrMessage`) => [`ZodNumber`](Core.z.ZodNumber.md)

#### Type declaration

▸ (`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

##### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### ~standard

• **~standard**: `Props`\<`number`, `number`\>

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

### isFinite

• `get` **isFinite**(): `boolean`

#### Returns

`boolean`

___

### isInt

• `get` **isInt**(): `boolean`

#### Returns

`boolean`

___

### maxValue

• `get` **maxValue**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

___

### minValue

• `get` **minValue**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

## Methods

### \_addCheck

▸ **_addCheck**(`check`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | [`ZodNumberCheck`](../modules/Core.z.md#zodnumbercheck) |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`number`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`number`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodNumber`](Core.z.ZodNumber.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodNumber`](Core.z.ZodNumber.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `number` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `number`  }) => `number` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `number` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `number` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

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

### finite

▸ **finite**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### gt

▸ **gt**(`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### gte

▸ **gte**(`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### int

▸ **int**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

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

▸ **lt**(`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### lte

▸ **lte**(`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### multipleOf

▸ **multipleOf**(`value`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### negative

▸ **negative**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### nonnegative

▸ **nonnegative**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### nonpositive

▸ **nonpositive**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodNumber`](Core.z.ZodNumber.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodNumber`](Core.z.ZodNumber.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`number`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### positive

▸ **positive**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodNumber`](Core.z.ZodNumber.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `RefinedOutput`, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `number`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `number`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `RefinedOutput`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `number`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `number`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `RefinedOutput`, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `number`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `RefinedOutput`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `number`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safe

▸ **safe**(`message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`number`, `number`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### setLimit

▸ **setLimit**(`kind`, `value`, `inclusive`, `message?`): [`ZodNumber`](Core.z.ZodNumber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind` | ``"min"`` \| ``"max"`` |
| `value` | `number` |
| `inclusive` | `boolean` |
| `message?` | `string` |

#### Returns

[`ZodNumber`](Core.z.ZodNumber.md)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `RefinedOutput`, `number`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `RefinedOutput`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `number`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `NewOut`, `number`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `number`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNumber`](Core.z.ZodNumber.md), `NewOut`, `number`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`number`\> \| `Promise`\<`Result`\<`number`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`number`\> \| `Promise`\<`Result`\<`number`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
