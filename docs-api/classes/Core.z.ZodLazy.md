[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodLazy

# Class: ZodLazy\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodLazy

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<[`output`](../modules/Core.z.md#output)\<`T`\>, [`ZodLazyDef`](../interfaces/Core.z.ZodLazyDef.md)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

  ↳ **`ZodLazy`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodLazy.md#constructor)

### Properties

- [\_def](Core.z.ZodLazy.md#_def)
- [\_input](Core.z.ZodLazy.md#_input)
- [\_output](Core.z.ZodLazy.md#_output)
- [\_type](Core.z.ZodLazy.md#_type)
- [create](Core.z.ZodLazy.md#create)
- [spa](Core.z.ZodLazy.md#spa)
- [~standard](Core.z.ZodLazy.md#~standard)

### Accessors

- [description](Core.z.ZodLazy.md#description)
- [schema](Core.z.ZodLazy.md#schema)

### Methods

- [\_getOrReturnCtx](Core.z.ZodLazy.md#_getorreturnctx)
- [\_getType](Core.z.ZodLazy.md#_gettype)
- [\_parse](Core.z.ZodLazy.md#_parse)
- [\_parseAsync](Core.z.ZodLazy.md#_parseasync)
- [\_parseSync](Core.z.ZodLazy.md#_parsesync)
- [\_processInputParams](Core.z.ZodLazy.md#_processinputparams)
- [\_refinement](Core.z.ZodLazy.md#_refinement)
- [and](Core.z.ZodLazy.md#and)
- [array](Core.z.ZodLazy.md#array)
- [brand](Core.z.ZodLazy.md#brand)
- [catch](Core.z.ZodLazy.md#catch)
- [default](Core.z.ZodLazy.md#default)
- [describe](Core.z.ZodLazy.md#describe)
- [isNullable](Core.z.ZodLazy.md#isnullable)
- [isOptional](Core.z.ZodLazy.md#isoptional)
- [nullable](Core.z.ZodLazy.md#nullable)
- [nullish](Core.z.ZodLazy.md#nullish)
- [optional](Core.z.ZodLazy.md#optional)
- [or](Core.z.ZodLazy.md#or)
- [parse](Core.z.ZodLazy.md#parse)
- [parseAsync](Core.z.ZodLazy.md#parseasync)
- [pipe](Core.z.ZodLazy.md#pipe)
- [promise](Core.z.ZodLazy.md#promise)
- [readonly](Core.z.ZodLazy.md#readonly)
- [refine](Core.z.ZodLazy.md#refine)
- [refinement](Core.z.ZodLazy.md#refinement)
- [safeParse](Core.z.ZodLazy.md#safeparse)
- [safeParseAsync](Core.z.ZodLazy.md#safeparseasync)
- [superRefine](Core.z.ZodLazy.md#superrefine)
- [transform](Core.z.ZodLazy.md#transform)
- [~validate](Core.z.ZodLazy.md#~validate)

## Constructors

### constructor

• **new ZodLazy**\<`T`\>(`def`): [`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodLazyDef`](../interfaces/Core.z.ZodLazyDef.md)\<`T`\> |

#### Returns

[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodLazyDef`](../interfaces/Core.z.ZodLazyDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: [`input`](../modules/Core.z.md#input)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: [`output`](../modules/Core.z.md#output)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: [`output`](../modules/Core.z.md#output)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`getter`: () => `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodLazy`](Core.z.ZodLazy.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`getter`, `params?`): [`ZodLazy`](Core.z.ZodLazy.md)\<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | () => `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodLazy`](Core.z.ZodLazy.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>

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

### schema

• `get` **schema**(): `T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`output`](../modules/Core.z.md#output)\<`T`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: [`input`](../modules/Core.z.md#input)\<`T`\>  }) => [`output`](../modules/Core.z.md#output)\<`T`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`input`](../modules/Core.z.md#input)\<`T`\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`input`](../modules/Core.z.md#input)\<`T`\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): [`output`](../modules/Core.z.md#output)\<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`output`](../modules/Core.z.md#output)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, [`output`](../modules/Core.z.md#output)\<`T`\>, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `NewOut`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: [`output`](../modules/Core.z.md#output)\<`T`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodLazy`](Core.z.ZodLazy.md)\<`T`\>, `NewOut`, [`input`](../modules/Core.z.md#input)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<[`output`](../modules/Core.z.md#output)\<`T`\>\> \| `Promise`\<`Result`\<[`output`](../modules/Core.z.md#output)\<`T`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<[`output`](../modules/Core.z.md#output)\<`T`\>\> \| `Promise`\<`Result`\<[`output`](../modules/Core.z.md#output)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
