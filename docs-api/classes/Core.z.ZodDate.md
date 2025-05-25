[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodDate

# Class: ZodDate

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodDate

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`Date`, [`ZodDateDef`](../interfaces/Core.z.ZodDateDef.md), `Date`\>

  ↳ **`ZodDate`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodDate.md#constructor)

### Properties

- [\_def](Core.z.ZodDate.md#_def)
- [\_input](Core.z.ZodDate.md#_input)
- [\_output](Core.z.ZodDate.md#_output)
- [\_type](Core.z.ZodDate.md#_type)
- [create](Core.z.ZodDate.md#create)
- [spa](Core.z.ZodDate.md#spa)
- [~standard](Core.z.ZodDate.md#~standard)

### Accessors

- [description](Core.z.ZodDate.md#description)
- [maxDate](Core.z.ZodDate.md#maxdate)
- [minDate](Core.z.ZodDate.md#mindate)

### Methods

- [\_addCheck](Core.z.ZodDate.md#_addcheck)
- [\_getOrReturnCtx](Core.z.ZodDate.md#_getorreturnctx)
- [\_getType](Core.z.ZodDate.md#_gettype)
- [\_parse](Core.z.ZodDate.md#_parse)
- [\_parseAsync](Core.z.ZodDate.md#_parseasync)
- [\_parseSync](Core.z.ZodDate.md#_parsesync)
- [\_processInputParams](Core.z.ZodDate.md#_processinputparams)
- [\_refinement](Core.z.ZodDate.md#_refinement)
- [and](Core.z.ZodDate.md#and)
- [array](Core.z.ZodDate.md#array)
- [brand](Core.z.ZodDate.md#brand)
- [catch](Core.z.ZodDate.md#catch)
- [default](Core.z.ZodDate.md#default)
- [describe](Core.z.ZodDate.md#describe)
- [isNullable](Core.z.ZodDate.md#isnullable)
- [isOptional](Core.z.ZodDate.md#isoptional)
- [max](Core.z.ZodDate.md#max)
- [min](Core.z.ZodDate.md#min)
- [nullable](Core.z.ZodDate.md#nullable)
- [nullish](Core.z.ZodDate.md#nullish)
- [optional](Core.z.ZodDate.md#optional)
- [or](Core.z.ZodDate.md#or)
- [parse](Core.z.ZodDate.md#parse)
- [parseAsync](Core.z.ZodDate.md#parseasync)
- [pipe](Core.z.ZodDate.md#pipe)
- [promise](Core.z.ZodDate.md#promise)
- [readonly](Core.z.ZodDate.md#readonly)
- [refine](Core.z.ZodDate.md#refine)
- [refinement](Core.z.ZodDate.md#refinement)
- [safeParse](Core.z.ZodDate.md#safeparse)
- [safeParseAsync](Core.z.ZodDate.md#safeparseasync)
- [superRefine](Core.z.ZodDate.md#superrefine)
- [transform](Core.z.ZodDate.md#transform)
- [~validate](Core.z.ZodDate.md#~validate)

## Constructors

### constructor

• **new ZodDate**(`def`): [`ZodDate`](Core.z.ZodDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodDateDef`](../interfaces/Core.z.ZodDateDef.md) |

#### Returns

[`ZodDate`](Core.z.ZodDate.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodDateDef`](../interfaces/Core.z.ZodDateDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `Date`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `Date`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `Date`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  }) => [`ZodDate`](Core.z.ZodDate.md)

#### Type declaration

▸ (`params?`): [`ZodDate`](Core.z.ZodDate.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  } |

##### Returns

[`ZodDate`](Core.z.ZodDate.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`Date`, `Date`\>

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

### maxDate

• `get` **maxDate**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

___

### minDate

• `get` **minDate**(): ``null`` \| `Date`

#### Returns

``null`` \| `Date`

## Methods

### \_addCheck

▸ **_addCheck**(`check`): [`ZodDate`](Core.z.ZodDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | [`ZodDateCheck`](../modules/Core.z.md#zoddatecheck) |

#### Returns

[`ZodDate`](Core.z.ZodDate.md)

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Date`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Date`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodDate`](Core.z.ZodDate.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodDate`](Core.z.ZodDate.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodDate`](Core.z.ZodDate.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodDate`](Core.z.ZodDate.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodDate`](Core.z.ZodDate.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodDate`](Core.z.ZodDate.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Date` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Date`  }) => `Date` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Date` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `Date` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

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

### max

▸ **max**(`maxDate`, `message?`): [`ZodDate`](Core.z.ZodDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxDate` | `Date` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodDate`](Core.z.ZodDate.md)

___

### min

▸ **min**(`minDate`, `message?`): [`ZodDate`](Core.z.ZodDate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minDate` | `Date` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodDate`](Core.z.ZodDate.md)

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDate`](Core.z.ZodDate.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDate`](Core.z.ZodDate.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodDate`](Core.z.ZodDate.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodDate`](Core.z.ZodDate.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Date`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodDate`](Core.z.ZodDate.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodDate`](Core.z.ZodDate.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodDate`](Core.z.ZodDate.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `RefinedOutput`, `Date`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Date` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Date`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Date`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `RefinedOutput`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Date`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Date`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `RefinedOutput`, `Date`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Date` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Date`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `RefinedOutput`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Date`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Date`, `Date`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `RefinedOutput`, `Date`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Date` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `RefinedOutput`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `Date`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `NewOut`, `Date`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `Date`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDate`](Core.z.ZodDate.md), `NewOut`, `Date`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`Date`\> \| `Promise`\<`Result`\<`Date`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`Date`\> \| `Promise`\<`Result`\<`Date`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
