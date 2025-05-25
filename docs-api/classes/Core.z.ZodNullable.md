[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodNullable

# Class: ZodNullable\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodNullable

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[``"_output"``] \| ``null``, [`ZodNullableDef`](../interfaces/Core.z.ZodNullableDef.md)\<`T`\>, `T`[``"_input"``] \| ``null``\>

  ↳ **`ZodNullable`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodNullable.md#constructor)

### Properties

- [\_def](Core.z.ZodNullable.md#_def)
- [\_input](Core.z.ZodNullable.md#_input)
- [\_output](Core.z.ZodNullable.md#_output)
- [\_type](Core.z.ZodNullable.md#_type)
- [create](Core.z.ZodNullable.md#create)
- [spa](Core.z.ZodNullable.md#spa)
- [~standard](Core.z.ZodNullable.md#~standard)

### Accessors

- [description](Core.z.ZodNullable.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodNullable.md#_getorreturnctx)
- [\_getType](Core.z.ZodNullable.md#_gettype)
- [\_parse](Core.z.ZodNullable.md#_parse)
- [\_parseAsync](Core.z.ZodNullable.md#_parseasync)
- [\_parseSync](Core.z.ZodNullable.md#_parsesync)
- [\_processInputParams](Core.z.ZodNullable.md#_processinputparams)
- [\_refinement](Core.z.ZodNullable.md#_refinement)
- [and](Core.z.ZodNullable.md#and)
- [array](Core.z.ZodNullable.md#array)
- [brand](Core.z.ZodNullable.md#brand)
- [catch](Core.z.ZodNullable.md#catch)
- [default](Core.z.ZodNullable.md#default)
- [describe](Core.z.ZodNullable.md#describe)
- [isNullable](Core.z.ZodNullable.md#isnullable)
- [isOptional](Core.z.ZodNullable.md#isoptional)
- [nullable](Core.z.ZodNullable.md#nullable)
- [nullish](Core.z.ZodNullable.md#nullish)
- [optional](Core.z.ZodNullable.md#optional)
- [or](Core.z.ZodNullable.md#or)
- [parse](Core.z.ZodNullable.md#parse)
- [parseAsync](Core.z.ZodNullable.md#parseasync)
- [pipe](Core.z.ZodNullable.md#pipe)
- [promise](Core.z.ZodNullable.md#promise)
- [readonly](Core.z.ZodNullable.md#readonly)
- [refine](Core.z.ZodNullable.md#refine)
- [refinement](Core.z.ZodNullable.md#refinement)
- [safeParse](Core.z.ZodNullable.md#safeparse)
- [safeParseAsync](Core.z.ZodNullable.md#safeparseasync)
- [superRefine](Core.z.ZodNullable.md#superrefine)
- [transform](Core.z.ZodNullable.md#transform)
- [unwrap](Core.z.ZodNullable.md#unwrap)
- [~validate](Core.z.ZodNullable.md#~validate)

## Constructors

### constructor

• **new ZodNullable**\<`T`\>(`def`): [`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodNullableDef`](../interfaces/Core.z.ZodNullableDef.md)\<`T`\> |

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodNullableDef`](../interfaces/Core.z.ZodNullableDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: ``null`` \| `T`[``"_input"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: ``null`` \| `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: ``null`` \| `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`type`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodNullable`](Core.z.ZodNullable.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`type`, `params?`): [`ZodNullable`](Core.z.ZodNullable.md)\<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<``null`` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<``null`` \| `T`[``"_output"``]\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<``null`` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<``null`` \| `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<``null`` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<``null`` \| `T`[``"_output"``]\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | ``null`` \| `T`[``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: ``null`` \| `T`[``"_input"``]  }) => ``null`` \| `T`[``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | ``null`` \| [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => ``null`` \| [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): ``null`` \| `T`[``"_output"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

``null`` \| `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<``null`` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<``null`` \| `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `RefinedOutput`, ``null`` \| `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: ``null`` \| `T`[``"_output"``]) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: ``null`` \| `T`[``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `RefinedOutput`, ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: ``null`` \| `T`[``"_output"``]) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: ``null`` \| `T`[``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `RefinedOutput`, ``null`` \| `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: ``null`` \| `T`[``"_output"``]) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `RefinedOutput`, ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: ``null`` \| `T`[``"_output"``]) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<``null`` \| `T`[``"_input"``], ``null`` \| `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `RefinedOutput`, ``null`` \| `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `RefinedOutput`, ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, ``null`` \| `T`[``"_output"``], ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `NewOut`, ``null`` \| `T`[``"_input"``]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: ``null`` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<`T`\>, `NewOut`, ``null`` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

___

### ~validate

▸ **~validate**(`data`): `Result`\<``null`` \| `T`[``"_output"``]\> \| `Promise`\<`Result`\<``null`` \| `T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<``null`` \| `T`[``"_output"``]\> \| `Promise`\<`Result`\<``null`` \| `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
