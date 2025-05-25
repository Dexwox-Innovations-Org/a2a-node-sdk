[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodObject

# Class: ZodObject\<T, UnknownKeys, Catchall, Output, Input\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodObject

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |
| `UnknownKeys` | extends [`UnknownKeysParam`](../modules/Core.z.md#unknownkeysparam) = [`UnknownKeysParam`](../modules/Core.z.md#unknownkeysparam) |
| `Catchall` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Output` | [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, `UnknownKeys`\> |
| `Input` | [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, `UnknownKeys`\> |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`Output`, [`ZodObjectDef`](../interfaces/Core.z.ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>, `Input`\>

  ↳ **`ZodObject`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodObject.md#constructor)

### Properties

- [\_def](Core.z.ZodObject.md#_def)
- [\_input](Core.z.ZodObject.md#_input)
- [\_output](Core.z.ZodObject.md#_output)
- [\_type](Core.z.ZodObject.md#_type)
- [augment](Core.z.ZodObject.md#augment)
- [create](Core.z.ZodObject.md#create)
- [lazycreate](Core.z.ZodObject.md#lazycreate)
- [nonstrict](Core.z.ZodObject.md#nonstrict)
- [spa](Core.z.ZodObject.md#spa)
- [strictCreate](Core.z.ZodObject.md#strictcreate)
- [~standard](Core.z.ZodObject.md#~standard)

### Accessors

- [description](Core.z.ZodObject.md#description)
- [shape](Core.z.ZodObject.md#shape)

### Methods

- [\_getCached](Core.z.ZodObject.md#_getcached)
- [\_getOrReturnCtx](Core.z.ZodObject.md#_getorreturnctx)
- [\_getType](Core.z.ZodObject.md#_gettype)
- [\_parse](Core.z.ZodObject.md#_parse)
- [\_parseAsync](Core.z.ZodObject.md#_parseasync)
- [\_parseSync](Core.z.ZodObject.md#_parsesync)
- [\_processInputParams](Core.z.ZodObject.md#_processinputparams)
- [\_refinement](Core.z.ZodObject.md#_refinement)
- [and](Core.z.ZodObject.md#and)
- [array](Core.z.ZodObject.md#array)
- [brand](Core.z.ZodObject.md#brand)
- [catch](Core.z.ZodObject.md#catch)
- [catchall](Core.z.ZodObject.md#catchall)
- [deepPartial](Core.z.ZodObject.md#deeppartial)
- [default](Core.z.ZodObject.md#default)
- [describe](Core.z.ZodObject.md#describe)
- [extend](Core.z.ZodObject.md#extend)
- [isNullable](Core.z.ZodObject.md#isnullable)
- [isOptional](Core.z.ZodObject.md#isoptional)
- [keyof](Core.z.ZodObject.md#keyof)
- [merge](Core.z.ZodObject.md#merge)
- [nullable](Core.z.ZodObject.md#nullable)
- [nullish](Core.z.ZodObject.md#nullish)
- [omit](Core.z.ZodObject.md#omit)
- [optional](Core.z.ZodObject.md#optional)
- [or](Core.z.ZodObject.md#or)
- [parse](Core.z.ZodObject.md#parse)
- [parseAsync](Core.z.ZodObject.md#parseasync)
- [partial](Core.z.ZodObject.md#partial)
- [passthrough](Core.z.ZodObject.md#passthrough)
- [pick](Core.z.ZodObject.md#pick)
- [pipe](Core.z.ZodObject.md#pipe)
- [promise](Core.z.ZodObject.md#promise)
- [readonly](Core.z.ZodObject.md#readonly)
- [refine](Core.z.ZodObject.md#refine)
- [refinement](Core.z.ZodObject.md#refinement)
- [required](Core.z.ZodObject.md#required)
- [safeParse](Core.z.ZodObject.md#safeparse)
- [safeParseAsync](Core.z.ZodObject.md#safeparseasync)
- [setKey](Core.z.ZodObject.md#setkey)
- [strict](Core.z.ZodObject.md#strict)
- [strip](Core.z.ZodObject.md#strip)
- [superRefine](Core.z.ZodObject.md#superrefine)
- [transform](Core.z.ZodObject.md#transform)
- [~validate](Core.z.ZodObject.md#~validate)

## Constructors

### constructor

• **new ZodObject**\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>(`def`): [`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |
| `UnknownKeys` | extends [`UnknownKeysParam`](../modules/Core.z.md#unknownkeysparam) = [`UnknownKeysParam`](../modules/Core.z.md#unknownkeysparam) |
| `Catchall` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Output` | [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, `UnknownKeys`\> |
| `Input` | [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, `UnknownKeys`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodObjectDef`](../interfaces/Core.z.ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\> |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodObjectDef`](../interfaces/Core.z.ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `Input`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `Output`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `Output`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### augment

• **augment**: \<Augmentation\>(`augmentation`: `Augmentation`) => [`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

**`Deprecated`**

Use `.extend` instead

#### Type declaration

▸ \<`Augmentation`\>(`augmentation`): [`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Augmentation` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `augmentation` | `Augmentation` |

##### Returns

[`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

___

### create

▪ `Static` **create**: \<T_1\>(`shape`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strip"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

#### Type declaration

▸ \<`T_1`\>(`shape`, `params?`): [`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strip"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strip"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

___

### lazycreate

▪ `Static` **lazycreate**: \<T_1\>(`shape`: () => `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strip"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

#### Type declaration

▸ \<`T_1`\>(`shape`, `params?`): [`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strip"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | () => `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strip"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

___

### nonstrict

• **nonstrict**: () => [`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"passthrough"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"passthrough"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"passthrough"``\>\>

**`Deprecated`**

In most cases, this is no longer needed - unknown properties are now silently stripped.
If you want to pass through unknown properties, use `.passthrough()` instead.

#### Type declaration

▸ (): [`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"passthrough"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"passthrough"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"passthrough"``\>\>

##### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"passthrough"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"passthrough"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"passthrough"``\>\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### strictCreate

▪ `Static` **strictCreate**: \<T_1\>(`shape`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strict"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

#### Type declaration

▸ \<`T_1`\>(`shape`, `params?`): [`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strict"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `shape` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T_1`, ``"strict"``, [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`addQuestionMarks`](../modules/Core.z.objectUtil.md#addquestionmarks)\<[`baseObjectOutputType`](../modules/Core.z.md#baseobjectoutputtype)\<`T_1`\>, `any`\> extends `T_2` ? \{ [k in string \| number \| symbol]: addQuestionMarks\<addQuestionMarks\<baseObjectOutputType\<T\_1\>, any\>\>[k] } : `never`, [`baseObjectInputType`](../modules/Core.z.md#baseobjectinputtype)\<`T_1`\> extends `T_3` ? \{ [k\_1 in string \| number \| symbol]: baseObjectInputType\<baseObjectInputType\<T\_1\>\>[k\_1] } : `never`\>

___

### ~standard

• **~standard**: `Props`\<`Input`, `Output`\>

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

### shape

• `get` **shape**(): `T`

#### Returns

`T`

## Methods

### \_getCached

▸ **_getCached**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |
| `shape` | `T` |

___

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Output`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Output`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Output`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Output` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Input`  }) => `Output` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### catchall

▸ **catchall**\<`Index`\>(`index`): [`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Index`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Index` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `Index` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Index`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Index`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Index`, `UnknownKeys`\>\>

___

### deepPartial

▸ **deepPartial**(): `DeepPartial`\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

`DeepPartial`\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

**`Deprecated`**

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Input`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Input`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

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

### extend

▸ **extend**\<`Augmentation`\>(`augmentation`): [`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Augmentation` | extends [`ZodRawShape`](../modules/Core.z.md#zodrawshape) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `augmentation` | `Augmentation` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Catchall`, `UnknownKeys`\>\>

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

### keyof

▸ **keyof**(): [`ZodEnum`](Core.z.ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

#### Returns

[`ZodEnum`](Core.z.ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, []\>\>\>

___

### merge

▸ **merge**\<`Incoming`, `Augmentation`\>(`merging`): [`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Incoming`[``"_def"``][``"unknownKeys"``], `Incoming`[``"_def"``][``"catchall"``], [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Incoming`[``"_def"``][``"catchall"``], `Incoming`[``"_def"``][``"unknownKeys"``]\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Incoming`[``"_def"``][``"catchall"``], `Incoming`[``"_def"``][``"unknownKeys"``]\>\>

Prior to zod@1.0.12 there was a bug in the
inferred type of merged objects. Please
upgrade if you are experiencing issues.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Incoming` | extends [`AnyZodObject`](../modules/Core.z.md#anyzodobject) |
| `Augmentation` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `merging` | `Incoming` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Incoming`[``"_def"``][``"unknownKeys"``], `Incoming`[``"_def"``][``"catchall"``], [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Incoming`[``"_def"``][``"catchall"``], `Incoming`[``"_def"``][``"unknownKeys"``]\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<[`extendShape`](../modules/Core.z.objectUtil.md#extendshape)\<`T`, `Augmentation`\>, `Incoming`[``"_def"``][``"catchall"``], `Incoming`[``"_def"``][``"unknownKeys"``]\>\>

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### omit

▸ **omit**\<`Mask`\>(`mask`): [`ZodObject`](Core.z.ZodObject.md)\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Mask` | extends [`Exactly`](../modules/Core.z.util.md#exactly)\<\{ [k in string \| number \| symbol]?: true }, `Mask`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `Mask` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`Omit`\<`T`, keyof `Mask`\>, `Catchall`, `UnknownKeys`\>\>

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `Output`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Output`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`Output`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### partial

▸ **partial**(): [`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: ZodOptional\<T[k]\> }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: ZodOptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: ZodOptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>\>

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: ZodOptional\<T[k]\> }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: ZodOptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: ZodOptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>\>

▸ **partial**\<`Mask`\>(`mask`): [`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? ZodOptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? ZodOptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? ZodOptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Mask` | extends [`Exactly`](../modules/Core.z.util.md#exactly)\<\{ [k in string \| number \| symbol]?: true }, `Mask`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `Mask` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? ZodOptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? ZodOptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? ZodOptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>\>

___

### passthrough

▸ **passthrough**(): [`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"passthrough"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"passthrough"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"passthrough"``\>\>

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"passthrough"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"passthrough"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"passthrough"``\>\>

___

### pick

▸ **pick**\<`Mask`\>(`mask`): [`ZodObject`](Core.z.ZodObject.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Mask` | extends [`Exactly`](../modules/Core.z.util.md#exactly)\<\{ [k in string \| number \| symbol]?: true }, `Mask`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `Mask` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `Catchall`, `UnknownKeys`\>\>

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### required

▸ **required**(): [`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: deoptional\<T[k]\> }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: deoptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: deoptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>\>

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: deoptional\<T[k]\> }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: deoptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: deoptional\<T[k]\> }, `Catchall`, `UnknownKeys`\>\>

▸ **required**\<`Mask`\>(`mask`): [`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? deoptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? deoptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? deoptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Mask` | extends [`Exactly`](../modules/Core.z.util.md#exactly)\<\{ [k in string \| number \| symbol]?: true }, `Mask`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `Mask` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? deoptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? deoptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<\{ [k in string \| number \| symbol]: k extends keyof T ? \{ [k in string \| number \| symbol]: k extends keyof Mask ? deoptional\<T[k\<k\>]\> : T[k] }[k\<k\>] : never }, `Catchall`, `UnknownKeys`\>\>

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Input`, `Output`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### setKey

▸ **setKey**\<`Key`, `Schema`\>(`key`, `schema`): [`ZodObject`](Core.z.ZodObject.md)\<`T` & \{ [k in string]: Schema }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T` & \{ [k in string]: Schema }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T` & \{ [k in string]: Schema }, `Catchall`, `UnknownKeys`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends `string` |
| `Schema` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Key` |
| `schema` | `Schema` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T` & \{ [k in string]: Schema }, `UnknownKeys`, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T` & \{ [k in string]: Schema }, `Catchall`, `UnknownKeys`\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T` & \{ [k in string]: Schema }, `Catchall`, `UnknownKeys`\>\>

___

### strict

▸ **strict**(`message?`): [`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"strict"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"strict"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"strict"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"strict"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"strict"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"strict"``\>\>

___

### strip

▸ **strip**(): [`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"strip"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"strip"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"strip"``\>\>

#### Returns

[`ZodObject`](Core.z.ZodObject.md)\<`T`, ``"strip"``, `Catchall`, [`objectOutputType`](../modules/Core.z.md#objectoutputtype)\<`T`, `Catchall`, ``"strip"``\>, [`objectInputType`](../modules/Core.z.md#objectinputtype)\<`T`, `Catchall`, ``"strip"``\>\>

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodObject`](Core.z.ZodObject.md)\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
