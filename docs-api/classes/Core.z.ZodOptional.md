[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodOptional

# Class: ZodOptional\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodOptional

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[``"_output"``] \| `undefined`, [`ZodOptionalDef`](../interfaces/Core.z.ZodOptionalDef.md)\<`T`\>, `T`[``"_input"``] \| `undefined`\>

  ↳ **`ZodOptional`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodOptional.md#constructor)

### Properties

- [\_def](Core.z.ZodOptional.md#_def)
- [\_input](Core.z.ZodOptional.md#_input)
- [\_output](Core.z.ZodOptional.md#_output)
- [\_type](Core.z.ZodOptional.md#_type)
- [create](Core.z.ZodOptional.md#create)
- [spa](Core.z.ZodOptional.md#spa)
- [~standard](Core.z.ZodOptional.md#~standard)

### Accessors

- [description](Core.z.ZodOptional.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodOptional.md#_getorreturnctx)
- [\_getType](Core.z.ZodOptional.md#_gettype)
- [\_parse](Core.z.ZodOptional.md#_parse)
- [\_parseAsync](Core.z.ZodOptional.md#_parseasync)
- [\_parseSync](Core.z.ZodOptional.md#_parsesync)
- [\_processInputParams](Core.z.ZodOptional.md#_processinputparams)
- [\_refinement](Core.z.ZodOptional.md#_refinement)
- [and](Core.z.ZodOptional.md#and)
- [array](Core.z.ZodOptional.md#array)
- [brand](Core.z.ZodOptional.md#brand)
- [catch](Core.z.ZodOptional.md#catch)
- [default](Core.z.ZodOptional.md#default)
- [describe](Core.z.ZodOptional.md#describe)
- [isNullable](Core.z.ZodOptional.md#isnullable)
- [isOptional](Core.z.ZodOptional.md#isoptional)
- [nullable](Core.z.ZodOptional.md#nullable)
- [nullish](Core.z.ZodOptional.md#nullish)
- [optional](Core.z.ZodOptional.md#optional)
- [or](Core.z.ZodOptional.md#or)
- [parse](Core.z.ZodOptional.md#parse)
- [parseAsync](Core.z.ZodOptional.md#parseasync)
- [pipe](Core.z.ZodOptional.md#pipe)
- [promise](Core.z.ZodOptional.md#promise)
- [readonly](Core.z.ZodOptional.md#readonly)
- [refine](Core.z.ZodOptional.md#refine)
- [refinement](Core.z.ZodOptional.md#refinement)
- [safeParse](Core.z.ZodOptional.md#safeparse)
- [safeParseAsync](Core.z.ZodOptional.md#safeparseasync)
- [superRefine](Core.z.ZodOptional.md#superrefine)
- [transform](Core.z.ZodOptional.md#transform)
- [unwrap](Core.z.ZodOptional.md#unwrap)
- [~validate](Core.z.ZodOptional.md#~validate)

## Constructors

### constructor

• **new ZodOptional**\<`T`\>(`def`): [`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodOptionalDef`](../interfaces/Core.z.ZodOptionalDef.md)\<`T`\> |

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodOptionalDef`](../interfaces/Core.z.ZodOptionalDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `undefined` \| `T`[``"_input"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `undefined` \| `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `undefined` \| `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`type`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodOptional`](Core.z.ZodOptional.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`type`, `params?`): [`ZodOptional`](Core.z.ZodOptional.md)\<`T_1`\>

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

[`ZodOptional`](Core.z.ZodOptional.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`undefined` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`undefined` \| `T`[``"_output"``]\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`undefined` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`undefined` \| `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`undefined` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`undefined` \| `T`[``"_output"``]\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `undefined` \| `T`[``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `undefined` \| `T`[``"_input"``]  }) => `undefined` \| `T`[``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `undefined` \| `T`[``"_output"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`undefined` \| `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`undefined` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`undefined` \| `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined` \| `T`[``"_output"``]) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `undefined` \| `T`[``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined` \| `T`[``"_output"``]) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `undefined` \| `T`[``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined` \| `T`[``"_output"``]) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `undefined` \| `T`[``"_output"``]) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`undefined` \| `T`[``"_input"``], `undefined` \| `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`[``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `RefinedOutput`, `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `undefined` \| `T`[``"_output"``], `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `NewOut`, `undefined` \| `T`[``"_input"``]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `undefined` \| `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodOptional`](Core.z.ZodOptional.md)\<`T`\>, `NewOut`, `undefined` \| `T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

___

### ~validate

▸ **~validate**(`data`): `Result`\<`undefined` \| `T`[``"_output"``]\> \| `Promise`\<`Result`\<`undefined` \| `T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`undefined` \| `T`[``"_output"``]\> \| `Promise`\<`Result`\<`undefined` \| `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
