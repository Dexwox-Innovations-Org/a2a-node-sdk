[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodSymbol

# Class: ZodSymbol

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodSymbol

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`symbol`, [`ZodSymbolDef`](../interfaces/Core.z.ZodSymbolDef.md), `symbol`\>

  ↳ **`ZodSymbol`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodSymbol.md#constructor)

### Properties

- [\_def](Core.z.ZodSymbol.md#_def)
- [\_input](Core.z.ZodSymbol.md#_input)
- [\_output](Core.z.ZodSymbol.md#_output)
- [\_type](Core.z.ZodSymbol.md#_type)
- [create](Core.z.ZodSymbol.md#create)
- [spa](Core.z.ZodSymbol.md#spa)
- [~standard](Core.z.ZodSymbol.md#~standard)

### Accessors

- [description](Core.z.ZodSymbol.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodSymbol.md#_getorreturnctx)
- [\_getType](Core.z.ZodSymbol.md#_gettype)
- [\_parse](Core.z.ZodSymbol.md#_parse)
- [\_parseAsync](Core.z.ZodSymbol.md#_parseasync)
- [\_parseSync](Core.z.ZodSymbol.md#_parsesync)
- [\_processInputParams](Core.z.ZodSymbol.md#_processinputparams)
- [\_refinement](Core.z.ZodSymbol.md#_refinement)
- [and](Core.z.ZodSymbol.md#and)
- [array](Core.z.ZodSymbol.md#array)
- [brand](Core.z.ZodSymbol.md#brand)
- [catch](Core.z.ZodSymbol.md#catch)
- [default](Core.z.ZodSymbol.md#default)
- [describe](Core.z.ZodSymbol.md#describe)
- [isNullable](Core.z.ZodSymbol.md#isnullable)
- [isOptional](Core.z.ZodSymbol.md#isoptional)
- [nullable](Core.z.ZodSymbol.md#nullable)
- [nullish](Core.z.ZodSymbol.md#nullish)
- [optional](Core.z.ZodSymbol.md#optional)
- [or](Core.z.ZodSymbol.md#or)
- [parse](Core.z.ZodSymbol.md#parse)
- [parseAsync](Core.z.ZodSymbol.md#parseasync)
- [pipe](Core.z.ZodSymbol.md#pipe)
- [promise](Core.z.ZodSymbol.md#promise)
- [readonly](Core.z.ZodSymbol.md#readonly)
- [refine](Core.z.ZodSymbol.md#refine)
- [refinement](Core.z.ZodSymbol.md#refinement)
- [safeParse](Core.z.ZodSymbol.md#safeparse)
- [safeParseAsync](Core.z.ZodSymbol.md#safeparseasync)
- [superRefine](Core.z.ZodSymbol.md#superrefine)
- [transform](Core.z.ZodSymbol.md#transform)
- [~validate](Core.z.ZodSymbol.md#~validate)

## Constructors

### constructor

• **new ZodSymbol**(`def`): [`ZodSymbol`](Core.z.ZodSymbol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodSymbolDef`](../interfaces/Core.z.ZodSymbolDef.md) |

#### Returns

[`ZodSymbol`](Core.z.ZodSymbol.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodSymbolDef`](../interfaces/Core.z.ZodSymbolDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `symbol`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `symbol`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `symbol`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodSymbol`](Core.z.ZodSymbol.md)

#### Type declaration

▸ (`params?`): [`ZodSymbol`](Core.z.ZodSymbol.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodSymbol`](Core.z.ZodSymbol.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`symbol`, `symbol`\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`symbol`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`symbol`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `symbol` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `symbol`  }) => `symbol` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `symbol` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `symbol` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodSymbol`](Core.z.ZodSymbol.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodSymbol`](Core.z.ZodSymbol.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `symbol`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`symbol`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `RefinedOutput`, `symbol`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `symbol`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `symbol`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `RefinedOutput`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `symbol`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `symbol`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `RefinedOutput`, `symbol`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `symbol`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `RefinedOutput`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `symbol`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`symbol`, `symbol`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `RefinedOutput`, `symbol`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `RefinedOutput`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `symbol`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `NewOut`, `symbol`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `symbol`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodSymbol`](Core.z.ZodSymbol.md), `NewOut`, `symbol`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`symbol`\> \| `Promise`\<`Result`\<`symbol`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`symbol`\> \| `Promise`\<`Result`\<`symbol`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
