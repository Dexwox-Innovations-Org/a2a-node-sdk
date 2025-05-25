[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodEnum

# Class: ZodEnum\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodEnum

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`string`, ...string[]] |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[`number`], [`ZodEnumDef`](../interfaces/Core.z.ZodEnumDef.md)\<`T`\>, `T`[`number`]\>

  ↳ **`ZodEnum`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodEnum.md#constructor)

### Properties

- [\_def](Core.z.ZodEnum.md#_def)
- [\_input](Core.z.ZodEnum.md#_input)
- [\_output](Core.z.ZodEnum.md#_output)
- [\_type](Core.z.ZodEnum.md#_type)
- [create](Core.z.ZodEnum.md#create)
- [spa](Core.z.ZodEnum.md#spa)
- [~standard](Core.z.ZodEnum.md#~standard)

### Accessors

- [Enum](Core.z.ZodEnum.md#enum)
- [Values](Core.z.ZodEnum.md#values)
- [description](Core.z.ZodEnum.md#description)
- [enum](Core.z.ZodEnum.md#enum-1)
- [options](Core.z.ZodEnum.md#options)

### Methods

- [\_getOrReturnCtx](Core.z.ZodEnum.md#_getorreturnctx)
- [\_getType](Core.z.ZodEnum.md#_gettype)
- [\_parse](Core.z.ZodEnum.md#_parse)
- [\_parseAsync](Core.z.ZodEnum.md#_parseasync)
- [\_parseSync](Core.z.ZodEnum.md#_parsesync)
- [\_processInputParams](Core.z.ZodEnum.md#_processinputparams)
- [\_refinement](Core.z.ZodEnum.md#_refinement)
- [and](Core.z.ZodEnum.md#and)
- [array](Core.z.ZodEnum.md#array)
- [brand](Core.z.ZodEnum.md#brand)
- [catch](Core.z.ZodEnum.md#catch)
- [default](Core.z.ZodEnum.md#default)
- [describe](Core.z.ZodEnum.md#describe)
- [exclude](Core.z.ZodEnum.md#exclude)
- [extract](Core.z.ZodEnum.md#extract)
- [isNullable](Core.z.ZodEnum.md#isnullable)
- [isOptional](Core.z.ZodEnum.md#isoptional)
- [nullable](Core.z.ZodEnum.md#nullable)
- [nullish](Core.z.ZodEnum.md#nullish)
- [optional](Core.z.ZodEnum.md#optional)
- [or](Core.z.ZodEnum.md#or)
- [parse](Core.z.ZodEnum.md#parse)
- [parseAsync](Core.z.ZodEnum.md#parseasync)
- [pipe](Core.z.ZodEnum.md#pipe)
- [promise](Core.z.ZodEnum.md#promise)
- [readonly](Core.z.ZodEnum.md#readonly)
- [refine](Core.z.ZodEnum.md#refine)
- [refinement](Core.z.ZodEnum.md#refinement)
- [safeParse](Core.z.ZodEnum.md#safeparse)
- [safeParseAsync](Core.z.ZodEnum.md#safeparseasync)
- [superRefine](Core.z.ZodEnum.md#superrefine)
- [transform](Core.z.ZodEnum.md#transform)
- [~validate](Core.z.ZodEnum.md#~validate)

## Constructors

### constructor

• **new ZodEnum**\<`T`\>(`def`): [`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`string`, ...string[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodEnumDef`](../interfaces/Core.z.ZodEnumDef.md)\<`T`\> |

#### Returns

[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodEnumDef`](../interfaces/Core.z.ZodEnumDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `T`[`number`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `T`[`number`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `T`[`number`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<U, T\>(`values`: `T`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodEnum`](Core.z.ZodEnum.md)\<[`Writeable`](../modules/Core.z.md#writeable)\<`T`\>\>\<U, T\>(`values`: `T`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>

#### Type declaration

▸ \<`U`, `T`\>(`values`, `params?`): [`ZodEnum`](Core.z.ZodEnum.md)\<[`Writeable`](../modules/Core.z.md#writeable)\<`T`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |
| `T` | extends readonly [`U`, `U`] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodEnum`](Core.z.ZodEnum.md)\<[`Writeable`](../modules/Core.z.md#writeable)\<`T`\>\>

▸ \<`U`, `T`\>(`values`, `params?`): [`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `string` |
| `T` | extends [`U`, ...U[]] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `T` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~standard](Core.z.ZodType.md#~standard)

## Accessors

### Enum

• `get` **Enum**(): [`Values`](../modules/Core.z.md#values)\<`T`\>

#### Returns

[`Values`](../modules/Core.z.md#values)\<`T`\>

___

### Values

• `get` **Values**(): [`Values`](../modules/Core.z.md#values)\<`T`\>

#### Returns

[`Values`](../modules/Core.z.md#values)\<`T`\>

___

### description

• `get` **description**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ZodType.description

___

### enum

• `get` **enum**(): [`Values`](../modules/Core.z.md#values)\<`T`\>

#### Returns

[`Values`](../modules/Core.z.md#values)\<`T`\>

___

### options

• `get` **options**(): `T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[`number`]\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[`number`]\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T`[`number`] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `T`[`number`]  }) => `T`[`number`] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[`number`]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[`number`]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

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

### exclude

▸ **exclude**\<`ToExclude`\>(`values`, `newDef?`): [`ZodEnum`](Core.z.ZodEnum.md)\<[`typecast`](../modules/Core.z.md#typecast)\<[`Writeable`](../modules/Core.z.md#writeable)\<[`FilterEnum`](../modules/Core.z.md#filterenum)\<`T`, `ToExclude`[`number`]\>\>, [`string`, ...string[]]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToExclude` | extends readonly [`T`[`number`], `T`[`number`]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ToExclude` |
| `newDef?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

#### Returns

[`ZodEnum`](Core.z.ZodEnum.md)\<[`typecast`](../modules/Core.z.md#typecast)\<[`Writeable`](../modules/Core.z.md#writeable)\<[`FilterEnum`](../modules/Core.z.md#filterenum)\<`T`, `ToExclude`[`number`]\>\>, [`string`, ...string[]]\>\>

___

### extract

▸ **extract**\<`ToExtract`\>(`values`, `newDef?`): [`ZodEnum`](Core.z.ZodEnum.md)\<[`Writeable`](../modules/Core.z.md#writeable)\<`ToExtract`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ToExtract` | extends readonly [`T`[`number`], `T`[`number`]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ToExtract` |
| `newDef?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

#### Returns

[`ZodEnum`](Core.z.ZodEnum.md)\<[`Writeable`](../modules/Core.z.md#writeable)\<`ToExtract`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `T`[`number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`T`[`number`]

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`]) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[`number`]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`]) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[`number`]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`]) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`]) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`], `T`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`[`number`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `RefinedOutput`, `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `T`[`number`], `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `NewOut`, `T`[`number`]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `T`[`number`], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEnum`](Core.z.ZodEnum.md)\<`T`\>, `NewOut`, `T`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`T`[`number`]\> \| `Promise`\<`Result`\<`T`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`T`[`number`]\> \| `Promise`\<`Result`\<`T`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
