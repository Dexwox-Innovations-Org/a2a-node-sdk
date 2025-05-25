[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodUndefined

# Class: ZodUndefined

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodUndefined

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`undefined`, [`ZodUndefinedDef`](../interfaces/Core.z.ZodUndefinedDef.md), `undefined`\>

  ↳ **`ZodUndefined`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodUndefined.md#constructor)

### Properties

- [\_def](Core.z.ZodUndefined.md#_def)
- [\_input](Core.z.ZodUndefined.md#_input)
- [\_output](Core.z.ZodUndefined.md#_output)
- [\_type](Core.z.ZodUndefined.md#_type)
- [create](Core.z.ZodUndefined.md#create)
- [params](Core.z.ZodUndefined.md#params)
- [spa](Core.z.ZodUndefined.md#spa)
- [~standard](Core.z.ZodUndefined.md#~standard)

### Accessors

- [description](Core.z.ZodUndefined.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodUndefined.md#_getorreturnctx)
- [\_getType](Core.z.ZodUndefined.md#_gettype)
- [\_parse](Core.z.ZodUndefined.md#_parse)
- [\_parseAsync](Core.z.ZodUndefined.md#_parseasync)
- [\_parseSync](Core.z.ZodUndefined.md#_parsesync)
- [\_processInputParams](Core.z.ZodUndefined.md#_processinputparams)
- [\_refinement](Core.z.ZodUndefined.md#_refinement)
- [and](Core.z.ZodUndefined.md#and)
- [array](Core.z.ZodUndefined.md#array)
- [brand](Core.z.ZodUndefined.md#brand)
- [catch](Core.z.ZodUndefined.md#catch)
- [default](Core.z.ZodUndefined.md#default)
- [describe](Core.z.ZodUndefined.md#describe)
- [isNullable](Core.z.ZodUndefined.md#isnullable)
- [isOptional](Core.z.ZodUndefined.md#isoptional)
- [nullable](Core.z.ZodUndefined.md#nullable)
- [nullish](Core.z.ZodUndefined.md#nullish)
- [optional](Core.z.ZodUndefined.md#optional)
- [or](Core.z.ZodUndefined.md#or)
- [parse](Core.z.ZodUndefined.md#parse)
- [parseAsync](Core.z.ZodUndefined.md#parseasync)
- [pipe](Core.z.ZodUndefined.md#pipe)
- [promise](Core.z.ZodUndefined.md#promise)
- [readonly](Core.z.ZodUndefined.md#readonly)
- [refine](Core.z.ZodUndefined.md#refine)
- [refinement](Core.z.ZodUndefined.md#refinement)
- [safeParse](Core.z.ZodUndefined.md#safeparse)
- [safeParseAsync](Core.z.ZodUndefined.md#safeparseasync)
- [superRefine](Core.z.ZodUndefined.md#superrefine)
- [transform](Core.z.ZodUndefined.md#transform)
- [~validate](Core.z.ZodUndefined.md#~validate)

## Constructors

### constructor

• **new ZodUndefined**(`def`): [`ZodUndefined`](Core.z.ZodUndefined.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodUndefinedDef`](../interfaces/Core.z.ZodUndefinedDef.md) |

#### Returns

[`ZodUndefined`](Core.z.ZodUndefined.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodUndefinedDef`](../interfaces/Core.z.ZodUndefinedDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `undefined`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `undefined`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `undefined`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodUndefined`](Core.z.ZodUndefined.md)

#### Type declaration

▸ (`params?`): [`ZodUndefined`](Core.z.ZodUndefined.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodUndefined`](Core.z.ZodUndefined.md)

___

### params

• `Optional` **params**: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~standard](Core.z.ZodType.md#~standard)

## Accessors

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ZodType.description

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`undefined`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`undefined`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `undefined` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `undefined`  }) => `undefined` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `never` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `never` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

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

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodUndefined`](Core.z.ZodUndefined.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodUndefined`](Core.z.ZodUndefined.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`undefined`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `RefinedOutput`, `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `undefined`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `RefinedOutput`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `undefined`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `RefinedOutput`, `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `RefinedOutput`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined`, `undefined`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `RefinedOutput`, `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `RefinedOutput`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `undefined`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `NewOut`, `undefined`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `undefined`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUndefined`](Core.z.ZodUndefined.md), `NewOut`, `undefined`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`undefined`\> \| `Promise`\<`Result`\<`undefined`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`undefined`\> \| `Promise`\<`Result`\<`undefined`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
