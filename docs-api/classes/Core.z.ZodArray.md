[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodArray

# Class: ZodArray\<T, Cardinality\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Cardinality` | extends [`ArrayCardinality`](../modules/Core.z.md#arraycardinality) = ``"many"`` |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, [`ZodArrayDef`](../interfaces/Core.z.ZodArrayDef.md)\<`T`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

  ↳ **`ZodArray`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodArray.md#constructor)

### Properties

- [\_def](Core.z.ZodArray.md#_def)
- [\_input](Core.z.ZodArray.md#_input)
- [\_output](Core.z.ZodArray.md#_output)
- [\_type](Core.z.ZodArray.md#_type)
- [create](Core.z.ZodArray.md#create)
- [spa](Core.z.ZodArray.md#spa)
- [~standard](Core.z.ZodArray.md#~standard)

### Accessors

- [description](Core.z.ZodArray.md#description)
- [element](Core.z.ZodArray.md#element)

### Methods

- [\_getOrReturnCtx](Core.z.ZodArray.md#_getorreturnctx)
- [\_getType](Core.z.ZodArray.md#_gettype)
- [\_parse](Core.z.ZodArray.md#_parse)
- [\_parseAsync](Core.z.ZodArray.md#_parseasync)
- [\_parseSync](Core.z.ZodArray.md#_parsesync)
- [\_processInputParams](Core.z.ZodArray.md#_processinputparams)
- [\_refinement](Core.z.ZodArray.md#_refinement)
- [and](Core.z.ZodArray.md#and)
- [array](Core.z.ZodArray.md#array)
- [brand](Core.z.ZodArray.md#brand)
- [catch](Core.z.ZodArray.md#catch)
- [default](Core.z.ZodArray.md#default)
- [describe](Core.z.ZodArray.md#describe)
- [isNullable](Core.z.ZodArray.md#isnullable)
- [isOptional](Core.z.ZodArray.md#isoptional)
- [length](Core.z.ZodArray.md#length)
- [max](Core.z.ZodArray.md#max)
- [min](Core.z.ZodArray.md#min)
- [nonempty](Core.z.ZodArray.md#nonempty)
- [nullable](Core.z.ZodArray.md#nullable)
- [nullish](Core.z.ZodArray.md#nullish)
- [optional](Core.z.ZodArray.md#optional)
- [or](Core.z.ZodArray.md#or)
- [parse](Core.z.ZodArray.md#parse)
- [parseAsync](Core.z.ZodArray.md#parseasync)
- [pipe](Core.z.ZodArray.md#pipe)
- [promise](Core.z.ZodArray.md#promise)
- [readonly](Core.z.ZodArray.md#readonly)
- [refine](Core.z.ZodArray.md#refine)
- [refinement](Core.z.ZodArray.md#refinement)
- [safeParse](Core.z.ZodArray.md#safeparse)
- [safeParseAsync](Core.z.ZodArray.md#safeparseasync)
- [superRefine](Core.z.ZodArray.md#superrefine)
- [transform](Core.z.ZodArray.md#transform)
- [~validate](Core.z.ZodArray.md#~validate)

## Constructors

### constructor

• **new ZodArray**\<`T`, `Cardinality`\>(`def`): [`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Cardinality` | extends [`ArrayCardinality`](../modules/Core.z.md#arraycardinality) = ``"many"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodArrayDef`](../interfaces/Core.z.ZodArrayDef.md)\<`T`\> |

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodArrayDef`](../interfaces/Core.z.ZodArrayDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`schema`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodArray`](Core.z.ZodArray.md)\<`T_1`, ``"many"``\>

#### Type declaration

▸ \<`T_1`\>(`schema`, `params?`): [`ZodArray`](Core.z.ZodArray.md)\<`T_1`, ``"many"``\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodArray`](Core.z.ZodArray.md)\<`T_1`, ``"many"``\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

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

### element

• `get` **element**(): `T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]  }) => [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

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

### length

▸ **length**(`len`, `message?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `len` | `number` |
| `message?` | `ErrMessage` |

#### Returns

`this`

___

### max

▸ **max**(`maxLength`, `message?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLength` | `number` |
| `message?` | `ErrMessage` |

#### Returns

`this`

___

### min

▸ **min**(`minLength`, `message?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minLength` | `number` |
| `message?` | `ErrMessage` |

#### Returns

`this`

___

### nonempty

▸ **nonempty**(`message?`): [`ZodArray`](Core.z.ZodArray.md)\<`T`, ``"atleastone"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<`T`, ``"atleastone"``\>

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends [`T`[``"_output"``], ...T["\_output"][]] \| `T`[``"_output"``][] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends [`T`[``"_output"``], ...T["\_output"][]] \| `T`[``"_output"``][] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][], [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends [`T`[``"_output"``], ...T["\_output"][]] \| `T`[``"_output"``][] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `NewOut`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: [`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodArray`](Core.z.ZodArray.md)\<`T`, `Cardinality`\>, `NewOut`, `Cardinality` extends ``"atleastone"`` ? [`T`[``"_input"``], ...T["\_input"][]] : `T`[``"_input"``][]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\> \| `Promise`\<`Result`\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\> \| `Promise`\<`Result`\<[`arrayOutputType`](../modules/Core.z.md#arrayoutputtype)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
