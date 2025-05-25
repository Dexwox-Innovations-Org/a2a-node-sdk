[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodTuple

# Class: ZodTuple\<T, Rest\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodTuple

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]] \| [] = [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]] |
| `Rest` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) \| ``null`` = ``null`` |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`ZodTupleDef`](../interfaces/Core.z.ZodTupleDef.md)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

  ↳ **`ZodTuple`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodTuple.md#constructor)

### Properties

- [\_def](Core.z.ZodTuple.md#_def)
- [\_input](Core.z.ZodTuple.md#_input)
- [\_output](Core.z.ZodTuple.md#_output)
- [\_type](Core.z.ZodTuple.md#_type)
- [create](Core.z.ZodTuple.md#create)
- [spa](Core.z.ZodTuple.md#spa)
- [~standard](Core.z.ZodTuple.md#~standard)

### Accessors

- [description](Core.z.ZodTuple.md#description)
- [items](Core.z.ZodTuple.md#items)

### Methods

- [\_getOrReturnCtx](Core.z.ZodTuple.md#_getorreturnctx)
- [\_getType](Core.z.ZodTuple.md#_gettype)
- [\_parse](Core.z.ZodTuple.md#_parse)
- [\_parseAsync](Core.z.ZodTuple.md#_parseasync)
- [\_parseSync](Core.z.ZodTuple.md#_parsesync)
- [\_processInputParams](Core.z.ZodTuple.md#_processinputparams)
- [\_refinement](Core.z.ZodTuple.md#_refinement)
- [and](Core.z.ZodTuple.md#and)
- [array](Core.z.ZodTuple.md#array)
- [brand](Core.z.ZodTuple.md#brand)
- [catch](Core.z.ZodTuple.md#catch)
- [default](Core.z.ZodTuple.md#default)
- [describe](Core.z.ZodTuple.md#describe)
- [isNullable](Core.z.ZodTuple.md#isnullable)
- [isOptional](Core.z.ZodTuple.md#isoptional)
- [nullable](Core.z.ZodTuple.md#nullable)
- [nullish](Core.z.ZodTuple.md#nullish)
- [optional](Core.z.ZodTuple.md#optional)
- [or](Core.z.ZodTuple.md#or)
- [parse](Core.z.ZodTuple.md#parse)
- [parseAsync](Core.z.ZodTuple.md#parseasync)
- [pipe](Core.z.ZodTuple.md#pipe)
- [promise](Core.z.ZodTuple.md#promise)
- [readonly](Core.z.ZodTuple.md#readonly)
- [refine](Core.z.ZodTuple.md#refine)
- [refinement](Core.z.ZodTuple.md#refinement)
- [rest](Core.z.ZodTuple.md#rest)
- [safeParse](Core.z.ZodTuple.md#safeparse)
- [safeParseAsync](Core.z.ZodTuple.md#safeparseasync)
- [superRefine](Core.z.ZodTuple.md#superrefine)
- [transform](Core.z.ZodTuple.md#transform)
- [~validate](Core.z.ZodTuple.md#~validate)

## Constructors

### constructor

• **new ZodTuple**\<`T`, `Rest`\>(`def`): [`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [] \| [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]] = [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]] |
| `Rest` | extends ``null`` \| [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = ``null`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodTupleDef`](../interfaces/Core.z.ZodTupleDef.md)\<`T`, `Rest`\> |

#### Returns

[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodTupleDef`](../interfaces/Core.z.ZodTupleDef.md)\<`T`, `Rest`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`schemas`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodTuple`](Core.z.ZodTuple.md)\<`T_1`, ``null``\>

#### Type declaration

▸ \<`T_1`\>(`schemas`, `params?`): [`ZodTuple`](Core.z.ZodTuple.md)\<`T_1`, ``null``\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [] \| [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `schemas` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodTuple`](Core.z.ZodTuple.md)\<`T_1`, ``null``\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

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

### items

• `get` **items**(): `T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>  }) => [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends [...AssertArray\<\{ [k in string \| number \| symbol]: T[k\<k\>] extends ZodType\<any, any, any\> ? any[any]["\_output"] : never }\>[], ...any[]] \| `any`[] & \{ [k in string \| number \| symbol]: T[k\<k\>] extends ZodType\<any, any, any\> ? any[any]["\_output"] : never } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends [...AssertArray\<\{ [k in string \| number \| symbol]: T[k\<k\>] extends ZodType\<any, any, any\> ? any[any]["\_output"] : never }\>[], ...any[]] \| `any`[] & \{ [k in string \| number \| symbol]: T[k\<k\>] extends ZodType\<any, any, any\> ? any[any]["\_output"] : never } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### rest

▸ **rest**\<`Rest`\>(`rest`): [`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Rest` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `rest` | `Rest` |

#### Returns

[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends [...AssertArray\<\{ [k in string \| number \| symbol]: T[k\<k\>] extends ZodType\<any, any, any\> ? any[any]["\_output"] : never }\>[], ...any[]] \| `any`[] & \{ [k in string \| number \| symbol]: T[k\<k\>] extends ZodType\<any, any, any\> ? any[any]["\_output"] : never } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `RefinedOutput`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `NewOut`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: [`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`T`, `Rest`\>, `NewOut`, [`InputTypeOfTupleWithRest`](../modules/Core.z.md#inputtypeoftuplewithrest)\<`T`, `Rest`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\> \| `Promise`\<`Result`\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\> \| `Promise`\<`Result`\<[`OutputTypeOfTupleWithRest`](../modules/Core.z.md#outputtypeoftuplewithrest)\<`T`, `Rest`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
