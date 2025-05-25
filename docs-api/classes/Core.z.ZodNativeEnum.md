[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodNativeEnum

# Class: ZodNativeEnum\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodNativeEnum

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EnumLike`](../modules/Core.z.md#enumlike) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[keyof `T`], [`ZodNativeEnumDef`](../interfaces/Core.z.ZodNativeEnumDef.md)\<`T`\>, `T`[keyof `T`]\>

  ↳ **`ZodNativeEnum`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodNativeEnum.md#constructor)

### Properties

- [\_def](Core.z.ZodNativeEnum.md#_def)
- [\_input](Core.z.ZodNativeEnum.md#_input)
- [\_output](Core.z.ZodNativeEnum.md#_output)
- [\_type](Core.z.ZodNativeEnum.md#_type)
- [create](Core.z.ZodNativeEnum.md#create)
- [spa](Core.z.ZodNativeEnum.md#spa)
- [~standard](Core.z.ZodNativeEnum.md#~standard)

### Accessors

- [description](Core.z.ZodNativeEnum.md#description)
- [enum](Core.z.ZodNativeEnum.md#enum)

### Methods

- [\_getOrReturnCtx](Core.z.ZodNativeEnum.md#_getorreturnctx)
- [\_getType](Core.z.ZodNativeEnum.md#_gettype)
- [\_parse](Core.z.ZodNativeEnum.md#_parse)
- [\_parseAsync](Core.z.ZodNativeEnum.md#_parseasync)
- [\_parseSync](Core.z.ZodNativeEnum.md#_parsesync)
- [\_processInputParams](Core.z.ZodNativeEnum.md#_processinputparams)
- [\_refinement](Core.z.ZodNativeEnum.md#_refinement)
- [and](Core.z.ZodNativeEnum.md#and)
- [array](Core.z.ZodNativeEnum.md#array)
- [brand](Core.z.ZodNativeEnum.md#brand)
- [catch](Core.z.ZodNativeEnum.md#catch)
- [default](Core.z.ZodNativeEnum.md#default)
- [describe](Core.z.ZodNativeEnum.md#describe)
- [isNullable](Core.z.ZodNativeEnum.md#isnullable)
- [isOptional](Core.z.ZodNativeEnum.md#isoptional)
- [nullable](Core.z.ZodNativeEnum.md#nullable)
- [nullish](Core.z.ZodNativeEnum.md#nullish)
- [optional](Core.z.ZodNativeEnum.md#optional)
- [or](Core.z.ZodNativeEnum.md#or)
- [parse](Core.z.ZodNativeEnum.md#parse)
- [parseAsync](Core.z.ZodNativeEnum.md#parseasync)
- [pipe](Core.z.ZodNativeEnum.md#pipe)
- [promise](Core.z.ZodNativeEnum.md#promise)
- [readonly](Core.z.ZodNativeEnum.md#readonly)
- [refine](Core.z.ZodNativeEnum.md#refine)
- [refinement](Core.z.ZodNativeEnum.md#refinement)
- [safeParse](Core.z.ZodNativeEnum.md#safeparse)
- [safeParseAsync](Core.z.ZodNativeEnum.md#safeparseasync)
- [superRefine](Core.z.ZodNativeEnum.md#superrefine)
- [transform](Core.z.ZodNativeEnum.md#transform)
- [~validate](Core.z.ZodNativeEnum.md#~validate)

## Constructors

### constructor

• **new ZodNativeEnum**\<`T`\>(`def`): [`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EnumLike`](../modules/Core.z.md#enumlike) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodNativeEnumDef`](../interfaces/Core.z.ZodNativeEnumDef.md)\<`T`\> |

#### Returns

[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodNativeEnumDef`](../interfaces/Core.z.ZodNativeEnumDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `T`[keyof `T`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `T`[keyof `T`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `T`[keyof `T`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`values`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`values`, `params?`): [`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`EnumLike`](../modules/Core.z.md#enumlike) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`T`[keyof `T`], `T`[keyof `T`]\>

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

### enum

• `get` **enum**(): `T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[keyof `T`]\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[keyof `T`]\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T`[keyof `T`] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `T`[keyof `T`]  }) => `T`[keyof `T`] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[keyof `T`]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[keyof `T`]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `T`[keyof `T`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`T`[keyof `T`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `RefinedOutput`, `T`[keyof `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[keyof `T`]) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[keyof `T`]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `RefinedOutput`, `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[keyof `T`]) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[keyof `T`]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `RefinedOutput`, `T`[keyof `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[keyof `T`]) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `RefinedOutput`, `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[keyof `T`]) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[keyof `T`], `T`[keyof `T`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `RefinedOutput`, `T`[keyof `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` \| `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `RefinedOutput`, `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `T`[keyof `T`], `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `NewOut`, `T`[keyof `T`]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `T`[keyof `T`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNativeEnum`](Core.z.ZodNativeEnum.md)\<`T`\>, `NewOut`, `T`[keyof `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`T`[keyof `T`]\> \| `Promise`\<`Result`\<`T`[keyof `T`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`T`[keyof `T`]\> \| `Promise`\<`Result`\<`T`[keyof `T`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
