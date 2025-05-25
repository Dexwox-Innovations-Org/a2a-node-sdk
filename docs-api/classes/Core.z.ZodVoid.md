[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodVoid

# Class: ZodVoid

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodVoid

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`void`, [`ZodVoidDef`](../interfaces/Core.z.ZodVoidDef.md), `void`\>

  ↳ **`ZodVoid`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodVoid.md#constructor)

### Properties

- [\_def](Core.z.ZodVoid.md#_def)
- [\_input](Core.z.ZodVoid.md#_input)
- [\_output](Core.z.ZodVoid.md#_output)
- [\_type](Core.z.ZodVoid.md#_type)
- [create](Core.z.ZodVoid.md#create)
- [spa](Core.z.ZodVoid.md#spa)
- [~standard](Core.z.ZodVoid.md#~standard)

### Accessors

- [description](Core.z.ZodVoid.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodVoid.md#_getorreturnctx)
- [\_getType](Core.z.ZodVoid.md#_gettype)
- [\_parse](Core.z.ZodVoid.md#_parse)
- [\_parseAsync](Core.z.ZodVoid.md#_parseasync)
- [\_parseSync](Core.z.ZodVoid.md#_parsesync)
- [\_processInputParams](Core.z.ZodVoid.md#_processinputparams)
- [\_refinement](Core.z.ZodVoid.md#_refinement)
- [and](Core.z.ZodVoid.md#and)
- [array](Core.z.ZodVoid.md#array)
- [brand](Core.z.ZodVoid.md#brand)
- [catch](Core.z.ZodVoid.md#catch)
- [default](Core.z.ZodVoid.md#default)
- [describe](Core.z.ZodVoid.md#describe)
- [isNullable](Core.z.ZodVoid.md#isnullable)
- [isOptional](Core.z.ZodVoid.md#isoptional)
- [nullable](Core.z.ZodVoid.md#nullable)
- [nullish](Core.z.ZodVoid.md#nullish)
- [optional](Core.z.ZodVoid.md#optional)
- [or](Core.z.ZodVoid.md#or)
- [parse](Core.z.ZodVoid.md#parse)
- [parseAsync](Core.z.ZodVoid.md#parseasync)
- [pipe](Core.z.ZodVoid.md#pipe)
- [promise](Core.z.ZodVoid.md#promise)
- [readonly](Core.z.ZodVoid.md#readonly)
- [refine](Core.z.ZodVoid.md#refine)
- [refinement](Core.z.ZodVoid.md#refinement)
- [safeParse](Core.z.ZodVoid.md#safeparse)
- [safeParseAsync](Core.z.ZodVoid.md#safeparseasync)
- [superRefine](Core.z.ZodVoid.md#superrefine)
- [transform](Core.z.ZodVoid.md#transform)
- [~validate](Core.z.ZodVoid.md#~validate)

## Constructors

### constructor

• **new ZodVoid**(`def`): [`ZodVoid`](Core.z.ZodVoid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodVoidDef`](../interfaces/Core.z.ZodVoidDef.md) |

#### Returns

[`ZodVoid`](Core.z.ZodVoid.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodVoidDef`](../interfaces/Core.z.ZodVoidDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `void`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `void`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `void`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodVoid`](Core.z.ZodVoid.md)

#### Type declaration

▸ (`params?`): [`ZodVoid`](Core.z.ZodVoid.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodVoid`](Core.z.ZodVoid.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`void`, `void`\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`void`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`void`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodVoid`](Core.z.ZodVoid.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodVoid`](Core.z.ZodVoid.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `void` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `void`  }) => `void` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `void` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `void` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodVoid`](Core.z.ZodVoid.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodVoid`](Core.z.ZodVoid.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`void`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodVoid`](Core.z.ZodVoid.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `RefinedOutput`, `void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `void`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `void`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `RefinedOutput`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `void`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `void`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `RefinedOutput`, `void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `void`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `RefinedOutput`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `void`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`void`, `void`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `RefinedOutput`, `void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `void` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `RefinedOutput`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `void`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `NewOut`, `void`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `void`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodVoid`](Core.z.ZodVoid.md), `NewOut`, `void`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`void`\> \| `Promise`\<`Result`\<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`void`\> \| `Promise`\<`Result`\<`void`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
