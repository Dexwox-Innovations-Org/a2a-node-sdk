[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodDiscriminatedUnion

# Class: ZodDiscriminatedUnion\<Discriminator, Options\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodDiscriminatedUnion

## Type parameters

| Name | Type |
| :------ | :------ |
| `Discriminator` | extends `string` |
| `Options` | extends readonly [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`Discriminator`\>[] |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`ZodDiscriminatedUnionDef`](../interfaces/Core.z.ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

  ↳ **`ZodDiscriminatedUnion`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodDiscriminatedUnion.md#constructor)

### Properties

- [\_def](Core.z.ZodDiscriminatedUnion.md#_def)
- [\_input](Core.z.ZodDiscriminatedUnion.md#_input)
- [\_output](Core.z.ZodDiscriminatedUnion.md#_output)
- [\_type](Core.z.ZodDiscriminatedUnion.md#_type)
- [spa](Core.z.ZodDiscriminatedUnion.md#spa)
- [~standard](Core.z.ZodDiscriminatedUnion.md#~standard)

### Accessors

- [description](Core.z.ZodDiscriminatedUnion.md#description)
- [discriminator](Core.z.ZodDiscriminatedUnion.md#discriminator)
- [options](Core.z.ZodDiscriminatedUnion.md#options)
- [optionsMap](Core.z.ZodDiscriminatedUnion.md#optionsmap)

### Methods

- [\_getOrReturnCtx](Core.z.ZodDiscriminatedUnion.md#_getorreturnctx)
- [\_getType](Core.z.ZodDiscriminatedUnion.md#_gettype)
- [\_parse](Core.z.ZodDiscriminatedUnion.md#_parse)
- [\_parseAsync](Core.z.ZodDiscriminatedUnion.md#_parseasync)
- [\_parseSync](Core.z.ZodDiscriminatedUnion.md#_parsesync)
- [\_processInputParams](Core.z.ZodDiscriminatedUnion.md#_processinputparams)
- [\_refinement](Core.z.ZodDiscriminatedUnion.md#_refinement)
- [and](Core.z.ZodDiscriminatedUnion.md#and)
- [array](Core.z.ZodDiscriminatedUnion.md#array)
- [brand](Core.z.ZodDiscriminatedUnion.md#brand)
- [catch](Core.z.ZodDiscriminatedUnion.md#catch)
- [create](Core.z.ZodDiscriminatedUnion.md#create)
- [default](Core.z.ZodDiscriminatedUnion.md#default)
- [describe](Core.z.ZodDiscriminatedUnion.md#describe)
- [isNullable](Core.z.ZodDiscriminatedUnion.md#isnullable)
- [isOptional](Core.z.ZodDiscriminatedUnion.md#isoptional)
- [nullable](Core.z.ZodDiscriminatedUnion.md#nullable)
- [nullish](Core.z.ZodDiscriminatedUnion.md#nullish)
- [optional](Core.z.ZodDiscriminatedUnion.md#optional)
- [or](Core.z.ZodDiscriminatedUnion.md#or)
- [parse](Core.z.ZodDiscriminatedUnion.md#parse)
- [parseAsync](Core.z.ZodDiscriminatedUnion.md#parseasync)
- [pipe](Core.z.ZodDiscriminatedUnion.md#pipe)
- [promise](Core.z.ZodDiscriminatedUnion.md#promise)
- [readonly](Core.z.ZodDiscriminatedUnion.md#readonly)
- [refine](Core.z.ZodDiscriminatedUnion.md#refine)
- [refinement](Core.z.ZodDiscriminatedUnion.md#refinement)
- [safeParse](Core.z.ZodDiscriminatedUnion.md#safeparse)
- [safeParseAsync](Core.z.ZodDiscriminatedUnion.md#safeparseasync)
- [superRefine](Core.z.ZodDiscriminatedUnion.md#superrefine)
- [transform](Core.z.ZodDiscriminatedUnion.md#transform)
- [~validate](Core.z.ZodDiscriminatedUnion.md#~validate)

## Constructors

### constructor

• **new ZodDiscriminatedUnion**\<`Discriminator`, `Options`\>(`def`): [`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Discriminator` | extends `string` |
| `Options` | extends readonly [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`Discriminator`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodDiscriminatedUnionDef`](../interfaces/Core.z.ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\> |

#### Returns

[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodDiscriminatedUnionDef`](../interfaces/Core.z.ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

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

### discriminator

• `get` **discriminator**(): `Discriminator`

#### Returns

`Discriminator`

___

### options

• `get` **options**(): `Options`

#### Returns

`Options`

___

### optionsMap

• `get` **optionsMap**(): `Map`\<[`Primitive`](../modules/Core.z.md#primitive), [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`any`\>\>

#### Returns

`Map`\<[`Primitive`](../modules/Core.z.md#primitive), [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`any`\>\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>  }) => [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### create

▸ **create**\<`Discriminator`, `Types`\>(`discriminator`, `options`, `params?`): [`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Types`\>

The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
However, it only allows a union of objects, all of which need to share a discriminator property. This property must
have a different value for each object in the union.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Discriminator` | extends `string` |
| `Types` | extends readonly [[`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`Discriminator`\>, [`ZodDiscriminatedUnionOption`](../modules/Core.z.md#zoddiscriminatedunionoption)\<`Discriminator`\>] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `discriminator` | `Discriminator` | the name of the discriminator property |
| `options` | `Types` | - |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |  |

#### Returns

[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Types`\>

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends \{ [k in string \| number]: addQuestionMarks\<baseObjectOutputType\<\{ [key in string]: ZodTypeAny } & ZodRawShape\>, any\>[k] } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends \{ [k in string \| number]: addQuestionMarks\<baseObjectOutputType\<\{ [key in string]: ZodTypeAny } & ZodRawShape\>, any\>[k] } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends \{ [k in string \| number]: addQuestionMarks\<baseObjectOutputType\<\{ [key in string]: ZodTypeAny } & ZodRawShape\>, any\>[k] } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: [`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodDiscriminatedUnion`](Core.z.ZodDiscriminatedUnion.md)\<`Discriminator`, `Options`\>, `NewOut`, [`input`](../modules/Core.z.md#input)\<`Options`[`number`]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\> \| `Promise`\<`Result`\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\> \| `Promise`\<`Result`\<[`output`](../modules/Core.z.md#output)\<`Options`[`number`]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
