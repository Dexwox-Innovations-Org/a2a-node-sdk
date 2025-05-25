[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodBranded

# Class: ZodBranded\<T, B\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodBranded

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `B` | extends `string` \| `number` \| `symbol` |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, [`ZodBrandedDef`](../interfaces/Core.z.ZodBrandedDef.md)\<`T`\>, `T`[``"_input"``]\>

  ↳ **`ZodBranded`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodBranded.md#constructor)

### Properties

- [\_def](Core.z.ZodBranded.md#_def)
- [\_input](Core.z.ZodBranded.md#_input)
- [\_output](Core.z.ZodBranded.md#_output)
- [\_type](Core.z.ZodBranded.md#_type)
- [spa](Core.z.ZodBranded.md#spa)
- [~standard](Core.z.ZodBranded.md#~standard)

### Accessors

- [description](Core.z.ZodBranded.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodBranded.md#_getorreturnctx)
- [\_getType](Core.z.ZodBranded.md#_gettype)
- [\_parse](Core.z.ZodBranded.md#_parse)
- [\_parseAsync](Core.z.ZodBranded.md#_parseasync)
- [\_parseSync](Core.z.ZodBranded.md#_parsesync)
- [\_processInputParams](Core.z.ZodBranded.md#_processinputparams)
- [\_refinement](Core.z.ZodBranded.md#_refinement)
- [and](Core.z.ZodBranded.md#and)
- [array](Core.z.ZodBranded.md#array)
- [brand](Core.z.ZodBranded.md#brand)
- [catch](Core.z.ZodBranded.md#catch)
- [default](Core.z.ZodBranded.md#default)
- [describe](Core.z.ZodBranded.md#describe)
- [isNullable](Core.z.ZodBranded.md#isnullable)
- [isOptional](Core.z.ZodBranded.md#isoptional)
- [nullable](Core.z.ZodBranded.md#nullable)
- [nullish](Core.z.ZodBranded.md#nullish)
- [optional](Core.z.ZodBranded.md#optional)
- [or](Core.z.ZodBranded.md#or)
- [parse](Core.z.ZodBranded.md#parse)
- [parseAsync](Core.z.ZodBranded.md#parseasync)
- [pipe](Core.z.ZodBranded.md#pipe)
- [promise](Core.z.ZodBranded.md#promise)
- [readonly](Core.z.ZodBranded.md#readonly)
- [refine](Core.z.ZodBranded.md#refine)
- [refinement](Core.z.ZodBranded.md#refinement)
- [safeParse](Core.z.ZodBranded.md#safeparse)
- [safeParseAsync](Core.z.ZodBranded.md#safeparseasync)
- [superRefine](Core.z.ZodBranded.md#superrefine)
- [transform](Core.z.ZodBranded.md#transform)
- [unwrap](Core.z.ZodBranded.md#unwrap)
- [~validate](Core.z.ZodBranded.md#~validate)

## Constructors

### constructor

• **new ZodBranded**\<`T`, `B`\>(`def`): [`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodBrandedDef`](../interfaces/Core.z.ZodBrandedDef.md)\<`T`\> |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodBrandedDef`](../interfaces/Core.z.ZodBrandedDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `T`[``"_input"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`any`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `T`[``"_input"``]  }) => `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[``"_input"``], `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `RefinedOutput`, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `NewOut`, `T`[``"_input"``]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBranded`](Core.z.ZodBranded.md)\<`T`, `B`\>, `NewOut`, `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

___

### ~validate

▸ **~validate**(`data`): `Result`\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\> \| `Promise`\<`Result`\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\> \| `Promise`\<`Result`\<`T`[``"_output"``] & [`BRAND`](../modules/Core.z.md#brand)\<`B`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
