[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodLiteral

# Class: ZodLiteral\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodLiteral

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`, [`ZodLiteralDef`](../interfaces/Core.z.ZodLiteralDef.md)\<`T`\>, `T`\>

  ↳ **`ZodLiteral`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodLiteral.md#constructor)

### Properties

- [\_def](Core.z.ZodLiteral.md#_def)
- [\_input](Core.z.ZodLiteral.md#_input)
- [\_output](Core.z.ZodLiteral.md#_output)
- [\_type](Core.z.ZodLiteral.md#_type)
- [create](Core.z.ZodLiteral.md#create)
- [spa](Core.z.ZodLiteral.md#spa)
- [~standard](Core.z.ZodLiteral.md#~standard)

### Accessors

- [description](Core.z.ZodLiteral.md#description)
- [value](Core.z.ZodLiteral.md#value)

### Methods

- [\_getOrReturnCtx](Core.z.ZodLiteral.md#_getorreturnctx)
- [\_getType](Core.z.ZodLiteral.md#_gettype)
- [\_parse](Core.z.ZodLiteral.md#_parse)
- [\_parseAsync](Core.z.ZodLiteral.md#_parseasync)
- [\_parseSync](Core.z.ZodLiteral.md#_parsesync)
- [\_processInputParams](Core.z.ZodLiteral.md#_processinputparams)
- [\_refinement](Core.z.ZodLiteral.md#_refinement)
- [and](Core.z.ZodLiteral.md#and)
- [array](Core.z.ZodLiteral.md#array)
- [brand](Core.z.ZodLiteral.md#brand)
- [catch](Core.z.ZodLiteral.md#catch)
- [default](Core.z.ZodLiteral.md#default)
- [describe](Core.z.ZodLiteral.md#describe)
- [isNullable](Core.z.ZodLiteral.md#isnullable)
- [isOptional](Core.z.ZodLiteral.md#isoptional)
- [nullable](Core.z.ZodLiteral.md#nullable)
- [nullish](Core.z.ZodLiteral.md#nullish)
- [optional](Core.z.ZodLiteral.md#optional)
- [or](Core.z.ZodLiteral.md#or)
- [parse](Core.z.ZodLiteral.md#parse)
- [parseAsync](Core.z.ZodLiteral.md#parseasync)
- [pipe](Core.z.ZodLiteral.md#pipe)
- [promise](Core.z.ZodLiteral.md#promise)
- [readonly](Core.z.ZodLiteral.md#readonly)
- [refine](Core.z.ZodLiteral.md#refine)
- [refinement](Core.z.ZodLiteral.md#refinement)
- [safeParse](Core.z.ZodLiteral.md#safeparse)
- [safeParseAsync](Core.z.ZodLiteral.md#safeparseasync)
- [superRefine](Core.z.ZodLiteral.md#superrefine)
- [transform](Core.z.ZodLiteral.md#transform)
- [~validate](Core.z.ZodLiteral.md#~validate)

## Constructors

### constructor

• **new ZodLiteral**\<`T`\>(`def`): [`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodLiteralDef`](../interfaces/Core.z.ZodLiteralDef.md)\<`T`\> |

#### Returns

[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodLiteralDef`](../interfaces/Core.z.ZodLiteralDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `T`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `T`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `T`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`value`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodLiteral`](Core.z.ZodLiteral.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`value`, `params?`): [`ZodLiteral`](Core.z.ZodLiteral.md)\<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`Primitive`](../modules/Core.z.md#primitive) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`T`, `T`\>

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

### value

• `get` **value**(): `T`

#### Returns

`T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `T`  }) => `T` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`T`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `RefinedOutput`, `T`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `RefinedOutput`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `RefinedOutput`, `T`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `RefinedOutput`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`, `T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `RefinedOutput`, `T`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `RefinedOutput`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `T`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `NewOut`, `T`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `T`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLiteral`](Core.z.ZodLiteral.md)\<`T`\>, `NewOut`, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`T`\> \| `Promise`\<`Result`\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`T`\> \| `Promise`\<`Result`\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
