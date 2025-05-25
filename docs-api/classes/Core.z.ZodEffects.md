[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodEffects

# Class: ZodEffects\<T, Output, Input\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodEffects

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Output` | [`output`](../modules/Core.z.md#output)\<`T`\> |
| `Input` | [`input`](../modules/Core.z.md#input)\<`T`\> |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`Output`, [`ZodEffectsDef`](../interfaces/Core.z.ZodEffectsDef.md)\<`T`\>, `Input`\>

  ↳ **`ZodEffects`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodEffects.md#constructor)

### Properties

- [\_def](Core.z.ZodEffects.md#_def)
- [\_input](Core.z.ZodEffects.md#_input)
- [\_output](Core.z.ZodEffects.md#_output)
- [\_type](Core.z.ZodEffects.md#_type)
- [create](Core.z.ZodEffects.md#create)
- [createWithPreprocess](Core.z.ZodEffects.md#createwithpreprocess)
- [spa](Core.z.ZodEffects.md#spa)
- [~standard](Core.z.ZodEffects.md#~standard)

### Accessors

- [description](Core.z.ZodEffects.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodEffects.md#_getorreturnctx)
- [\_getType](Core.z.ZodEffects.md#_gettype)
- [\_parse](Core.z.ZodEffects.md#_parse)
- [\_parseAsync](Core.z.ZodEffects.md#_parseasync)
- [\_parseSync](Core.z.ZodEffects.md#_parsesync)
- [\_processInputParams](Core.z.ZodEffects.md#_processinputparams)
- [\_refinement](Core.z.ZodEffects.md#_refinement)
- [and](Core.z.ZodEffects.md#and)
- [array](Core.z.ZodEffects.md#array)
- [brand](Core.z.ZodEffects.md#brand)
- [catch](Core.z.ZodEffects.md#catch)
- [default](Core.z.ZodEffects.md#default)
- [describe](Core.z.ZodEffects.md#describe)
- [innerType](Core.z.ZodEffects.md#innertype)
- [isNullable](Core.z.ZodEffects.md#isnullable)
- [isOptional](Core.z.ZodEffects.md#isoptional)
- [nullable](Core.z.ZodEffects.md#nullable)
- [nullish](Core.z.ZodEffects.md#nullish)
- [optional](Core.z.ZodEffects.md#optional)
- [or](Core.z.ZodEffects.md#or)
- [parse](Core.z.ZodEffects.md#parse)
- [parseAsync](Core.z.ZodEffects.md#parseasync)
- [pipe](Core.z.ZodEffects.md#pipe)
- [promise](Core.z.ZodEffects.md#promise)
- [readonly](Core.z.ZodEffects.md#readonly)
- [refine](Core.z.ZodEffects.md#refine)
- [refinement](Core.z.ZodEffects.md#refinement)
- [safeParse](Core.z.ZodEffects.md#safeparse)
- [safeParseAsync](Core.z.ZodEffects.md#safeparseasync)
- [sourceType](Core.z.ZodEffects.md#sourcetype)
- [superRefine](Core.z.ZodEffects.md#superrefine)
- [transform](Core.z.ZodEffects.md#transform)
- [~validate](Core.z.ZodEffects.md#~validate)

## Constructors

### constructor

• **new ZodEffects**\<`T`, `Output`, `Input`\>(`def`): [`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Output` | [`output`](../modules/Core.z.md#output)\<`T`\> |
| `Input` | [`input`](../modules/Core.z.md#input)\<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodEffectsDef`](../interfaces/Core.z.ZodEffectsDef.md)\<`T`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodEffectsDef`](../interfaces/Core.z.ZodEffectsDef.md)\<`T`\>

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

### create

▪ `Static` **create**: \<I\>(`schema`: `I`, `effect`: [`Effect`](../modules/Core.z.md#effect)\<`I`[``"_output"``]\>, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodEffects`](Core.z.ZodEffects.md)\<`I`, `I`[``"_output"``], [`input`](../modules/Core.z.md#input)\<`I`\>\>

#### Type declaration

▸ \<`I`\>(`schema`, `effect`, `params?`): [`ZodEffects`](Core.z.ZodEffects.md)\<`I`, `I`[``"_output"``], [`input`](../modules/Core.z.md#input)\<`I`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `I` |
| `effect` | [`Effect`](../modules/Core.z.md#effect)\<`I`[``"_output"``]\> |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<`I`, `I`[``"_output"``], [`input`](../modules/Core.z.md#input)\<`I`\>\>

___

### createWithPreprocess

▪ `Static` **createWithPreprocess**: \<I\>(`preprocess`: (`arg`: `unknown`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `unknown`, `schema`: `I`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodEffects`](Core.z.ZodEffects.md)\<`I`, `I`[``"_output"``], `unknown`\>

#### Type declaration

▸ \<`I`\>(`preprocess`, `schema`, `params?`): [`ZodEffects`](Core.z.ZodEffects.md)\<`I`, `I`[``"_output"``], `unknown`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `preprocess` | (`arg`: `unknown`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `unknown` |
| `schema` | `I` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<`I`, `I`[``"_output"``], `unknown`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Output` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Input`  }) => `Output` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Input`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`Input`\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

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

### innerType

▸ **innerType**(): `T`

#### Returns

`T`

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `T`]\>

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

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

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

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Output`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

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

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Output`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

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

### sourceType

▸ **sourceType**(): `T`

#### Returns

`T`

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `RefinedOutput` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `NewOut`, `Input`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `Output`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodEffects`](Core.z.ZodEffects.md)\<`T`, `Output`, `Input`\>, `NewOut`, `Input`\>

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
