[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodType

# Class: ZodType\<Output, Def, Input\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodType

## Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `any` |
| `Def` | extends [`ZodTypeDef`](../interfaces/Core.z.ZodTypeDef.md) = [`ZodTypeDef`](../interfaces/Core.z.ZodTypeDef.md) |
| `Input` | `Output` |

## Hierarchy

- **`ZodType`**

  ↳ [`ZodString`](Core.z.ZodString.md)

  ↳ [`ZodNumber`](Core.z.ZodNumber.md)

  ↳ [`ZodBigInt`](Core.z.ZodBigInt.md)

  ↳ [`ZodBoolean`](Core.z.ZodBoolean.md)

  ↳ [`ZodDate`](Core.z.ZodDate.md)

  ↳ [`ZodSymbol`](Core.z.ZodSymbol.md)

  ↳ [`ZodUndefined`](Core.z.ZodUndefined.md)

  ↳ [`ZodNull`](Core.z.ZodNull.md)

  ↳ [`ZodAny`](Core.z.ZodAny.md)

  ↳ [`ZodUnknown`](Core.z.ZodUnknown.md)

  ↳ [`ZodNever`](Core.z.ZodNever.md)

  ↳ [`ZodVoid`](Core.z.ZodVoid.md)

  ↳ [`ZodArray`](Core.z.ZodArray.md)

  ↳ [`ZodObject`](Core.z.ZodObject.md)

  ↳ [`ZodUnion`](Core.z.ZodUnion.md)

  ↳ [`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)

  ↳ [`ZodIntersection`](Core.z.ZodIntersection.md)

  ↳ [`ZodTuple`](Core.z.ZodTuple.md)

  ↳ [`ZodRecord`](Core.z.ZodRecord.md)

  ↳ [`ZodMap`](Core.z.ZodMap.md)

  ↳ [`ZodSet`](Core.z.ZodSet.md)

  ↳ [`ZodFunction`](Core.z.ZodFunction.md)

  ↳ [`ZodLazy`](Core.z.ZodLazy.md)

  ↳ [`ZodLiteral`](Core.z.ZodLiteral.md)

  ↳ [`ZodEnum`](Core.z.ZodEnum.md)

  ↳ [`ZodNativeEnum`](Core.z.ZodNativeEnum.md)

  ↳ [`ZodPromise`](Core.z.ZodPromise.md)

  ↳ [`ZodEffects`](Core.z.ZodEffects.md)

  ↳ [`ZodOptional`](Core.z.ZodOptional.md)

  ↳ [`ZodNullable`](Core.z.ZodNullable.md)

  ↳ [`ZodDefault`](Core.z.ZodDefault.md)

  ↳ [`ZodCatch`](Core.z.ZodCatch.md)

  ↳ [`ZodNaN`](Core.z.ZodNaN.md)

  ↳ [`ZodBranded`](Core.z.ZodBranded.md)

  ↳ [`ZodPipeline`](Core.z.ZodPipeline.md)

  ↳ [`ZodReadonly`](Core.z.ZodReadonly.md)

## Table of contents

### Constructors

- [constructor](Core.z.ZodType.md#constructor)

### Properties

- [\_def](Core.z.ZodType.md#_def)
- [\_input](Core.z.ZodType.md#_input)
- [\_output](Core.z.ZodType.md#_output)
- [\_type](Core.z.ZodType.md#_type)
- [spa](Core.z.ZodType.md#spa)
- [~standard](Core.z.ZodType.md#~standard)

### Accessors

- [description](Core.z.ZodType.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodType.md#_getorreturnctx)
- [\_getType](Core.z.ZodType.md#_gettype)
- [\_parse](Core.z.ZodType.md#_parse)
- [\_parseAsync](Core.z.ZodType.md#_parseasync)
- [\_parseSync](Core.z.ZodType.md#_parsesync)
- [\_processInputParams](Core.z.ZodType.md#_processinputparams)
- [\_refinement](Core.z.ZodType.md#_refinement)
- [and](Core.z.ZodType.md#and)
- [array](Core.z.ZodType.md#array)
- [brand](Core.z.ZodType.md#brand)
- [catch](Core.z.ZodType.md#catch)
- [default](Core.z.ZodType.md#default)
- [describe](Core.z.ZodType.md#describe)
- [isNullable](Core.z.ZodType.md#isnullable)
- [isOptional](Core.z.ZodType.md#isoptional)
- [nullable](Core.z.ZodType.md#nullable)
- [nullish](Core.z.ZodType.md#nullish)
- [optional](Core.z.ZodType.md#optional)
- [or](Core.z.ZodType.md#or)
- [parse](Core.z.ZodType.md#parse)
- [parseAsync](Core.z.ZodType.md#parseasync)
- [pipe](Core.z.ZodType.md#pipe)
- [promise](Core.z.ZodType.md#promise)
- [readonly](Core.z.ZodType.md#readonly)
- [refine](Core.z.ZodType.md#refine)
- [refinement](Core.z.ZodType.md#refinement)
- [safeParse](Core.z.ZodType.md#safeparse)
- [safeParseAsync](Core.z.ZodType.md#safeparseasync)
- [superRefine](Core.z.ZodType.md#superrefine)
- [transform](Core.z.ZodType.md#transform)
- [~validate](Core.z.ZodType.md#~validate)

## Constructors

### constructor

• **new ZodType**\<`Output`, `Def`, `Input`\>(`def`): [`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Output` | `any` |
| `Def` | extends [`ZodTypeDef`](../interfaces/Core.z.ZodTypeDef.md) = [`ZodTypeDef`](../interfaces/Core.z.ZodTypeDef.md) |
| `Input` | `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Def` |

#### Returns

[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>

## Properties

### \_def

• `Readonly` **\_def**: `Def`

___

### \_input

• `Readonly` **\_input**: `Input`

___

### \_output

• `Readonly` **\_output**: `Output`

___

### \_type

• `Readonly` **\_type**: `Output`

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

___

### ~standard

• **~standard**: `Props`\<`Input`, `Output`\>

## Accessors

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

## Methods

### \_getOrReturnCtx

▸ **_getOrReturnCtx**(`input`, `ctx?`): [`ParseContext`](../interfaces/Core.z.ParseContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |
| `ctx?` | [`ParseContext`](../interfaces/Core.z.ParseContext.md) |

#### Returns

[`ParseContext`](../interfaces/Core.z.ParseContext.md)

___

### \_getType

▸ **_getType**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

`string`

___

### \_parse

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Output`\>

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Output`\>

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Output`\>

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

___

### \_refinement

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, ``"many"``\>

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `B`\>

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Output` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Input`  }) => `Output` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Input`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Input`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

___

### describe

▸ **describe**(`description`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`this`

___

### isNullable

▸ **isNullable**(): `boolean`

#### Returns

`boolean`

___

### isOptional

▸ **isOptional**(): `boolean`

#### Returns

`boolean`

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>\>

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `T`]\>

___

### parse

▸ **parse**(`data`, `params?`): `Output`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Output`

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`Output`\>

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `T`\>

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>\>

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodType`](Core.z.ZodType.md)\<`Output`, `Def`, `Input`\>, `NewOut`, `Input`\>

___

### ~validate

▸ **~validate**(`data`): `Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>
