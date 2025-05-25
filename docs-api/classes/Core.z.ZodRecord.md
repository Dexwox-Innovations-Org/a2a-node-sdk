[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodRecord

# Class: ZodRecord\<Key, Value\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodRecord

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`KeySchema`](../modules/Core.z.md#keyschema) = [`ZodString`](Core.z.ZodString.md) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`ZodRecordDef`](../interfaces/Core.z.ZodRecordDef.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

  ↳ **`ZodRecord`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodRecord.md#constructor)

### Properties

- [\_def](Core.z.ZodRecord.md#_def)
- [\_input](Core.z.ZodRecord.md#_input)
- [\_output](Core.z.ZodRecord.md#_output)
- [\_type](Core.z.ZodRecord.md#_type)
- [spa](Core.z.ZodRecord.md#spa)
- [~standard](Core.z.ZodRecord.md#~standard)

### Accessors

- [description](Core.z.ZodRecord.md#description)
- [element](Core.z.ZodRecord.md#element)
- [keySchema](Core.z.ZodRecord.md#keyschema)
- [valueSchema](Core.z.ZodRecord.md#valueschema)

### Methods

- [\_getOrReturnCtx](Core.z.ZodRecord.md#_getorreturnctx)
- [\_getType](Core.z.ZodRecord.md#_gettype)
- [\_parse](Core.z.ZodRecord.md#_parse)
- [\_parseAsync](Core.z.ZodRecord.md#_parseasync)
- [\_parseSync](Core.z.ZodRecord.md#_parsesync)
- [\_processInputParams](Core.z.ZodRecord.md#_processinputparams)
- [\_refinement](Core.z.ZodRecord.md#_refinement)
- [and](Core.z.ZodRecord.md#and)
- [array](Core.z.ZodRecord.md#array)
- [brand](Core.z.ZodRecord.md#brand)
- [catch](Core.z.ZodRecord.md#catch)
- [create](Core.z.ZodRecord.md#create)
- [default](Core.z.ZodRecord.md#default)
- [describe](Core.z.ZodRecord.md#describe)
- [isNullable](Core.z.ZodRecord.md#isnullable)
- [isOptional](Core.z.ZodRecord.md#isoptional)
- [nullable](Core.z.ZodRecord.md#nullable)
- [nullish](Core.z.ZodRecord.md#nullish)
- [optional](Core.z.ZodRecord.md#optional)
- [or](Core.z.ZodRecord.md#or)
- [parse](Core.z.ZodRecord.md#parse)
- [parseAsync](Core.z.ZodRecord.md#parseasync)
- [pipe](Core.z.ZodRecord.md#pipe)
- [promise](Core.z.ZodRecord.md#promise)
- [readonly](Core.z.ZodRecord.md#readonly)
- [refine](Core.z.ZodRecord.md#refine)
- [refinement](Core.z.ZodRecord.md#refinement)
- [safeParse](Core.z.ZodRecord.md#safeparse)
- [safeParseAsync](Core.z.ZodRecord.md#safeparseasync)
- [superRefine](Core.z.ZodRecord.md#superrefine)
- [transform](Core.z.ZodRecord.md#transform)
- [~validate](Core.z.ZodRecord.md#~validate)

## Constructors

### constructor

• **new ZodRecord**\<`Key`, `Value`\>(`def`): [`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`KeySchema`](../modules/Core.z.md#keyschema) = [`ZodString`](Core.z.ZodString.md) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodRecordDef`](../interfaces/Core.z.ZodRecordDef.md)\<`Key`, `Value`\> |

#### Returns

[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodRecordDef`](../interfaces/Core.z.ZodRecordDef.md)\<`Key`, `Value`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

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

• `get` **element**(): `Value`

#### Returns

`Value`

___

### keySchema

• `get` **keySchema**(): `Key`

#### Returns

`Key`

___

### valueSchema

• `get` **valueSchema**(): `Value`

#### Returns

`Value`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>  }) => [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### create

▸ **create**\<`Value`\>(`valueType`, `params?`): [`ZodRecord`](Core.z.ZodRecord.md)\<[`ZodString`](Core.z.ZodString.md), `Value`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `valueType` | `Value` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

#### Returns

[`ZodRecord`](Core.z.ZodRecord.md)\<[`ZodString`](Core.z.ZodString.md), `Value`\>

▸ **create**\<`Keys`, `Value`\>(`keySchema`, `valueType`, `params?`): [`ZodRecord`](Core.z.ZodRecord.md)\<`Keys`, `Value`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Keys` | extends [`KeySchema`](../modules/Core.z.md#keyschema) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySchema` | `Keys` |
| `valueType` | `Value` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

#### Returns

[`ZodRecord`](Core.z.ZodRecord.md)\<`Keys`, `Value`\>

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Record`\<`Key`[``"_output"``], `Value`[``"_output"``]\> \| `Partial`\<`Record`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Record`\<`Key`[``"_output"``], `Value`[``"_output"``]\> \| `Partial`\<`Record`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Record`\<`Key`[``"_output"``], `Value`[``"_output"``]\> \| `Partial`\<`Record`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `RefinedOutput`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `NewOut`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodRecord`](Core.z.ZodRecord.md)\<`Key`, `Value`\>, `NewOut`, [`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> \| `Promise`\<`Result`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> \| `Promise`\<`Result`\<[`RecordType`](../modules/Core.z.md#recordtype)\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
