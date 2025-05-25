[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodCatch

# Class: ZodCatch\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodCatch

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[``"_output"``], [`ZodCatchDef`](../interfaces/Core.z.ZodCatchDef.md)\<`T`\>, `unknown`\>

  ↳ **`ZodCatch`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodCatch.md#constructor)

### Properties

- [\_def](Core.z.ZodCatch.md#_def)
- [\_input](Core.z.ZodCatch.md#_input)
- [\_output](Core.z.ZodCatch.md#_output)
- [\_type](Core.z.ZodCatch.md#_type)
- [create](Core.z.ZodCatch.md#create)
- [spa](Core.z.ZodCatch.md#spa)
- [~standard](Core.z.ZodCatch.md#~standard)

### Accessors

- [description](Core.z.ZodCatch.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodCatch.md#_getorreturnctx)
- [\_getType](Core.z.ZodCatch.md#_gettype)
- [\_parse](Core.z.ZodCatch.md#_parse)
- [\_parseAsync](Core.z.ZodCatch.md#_parseasync)
- [\_parseSync](Core.z.ZodCatch.md#_parsesync)
- [\_processInputParams](Core.z.ZodCatch.md#_processinputparams)
- [\_refinement](Core.z.ZodCatch.md#_refinement)
- [and](Core.z.ZodCatch.md#and)
- [array](Core.z.ZodCatch.md#array)
- [brand](Core.z.ZodCatch.md#brand)
- [catch](Core.z.ZodCatch.md#catch)
- [default](Core.z.ZodCatch.md#default)
- [describe](Core.z.ZodCatch.md#describe)
- [isNullable](Core.z.ZodCatch.md#isnullable)
- [isOptional](Core.z.ZodCatch.md#isoptional)
- [nullable](Core.z.ZodCatch.md#nullable)
- [nullish](Core.z.ZodCatch.md#nullish)
- [optional](Core.z.ZodCatch.md#optional)
- [or](Core.z.ZodCatch.md#or)
- [parse](Core.z.ZodCatch.md#parse)
- [parseAsync](Core.z.ZodCatch.md#parseasync)
- [pipe](Core.z.ZodCatch.md#pipe)
- [promise](Core.z.ZodCatch.md#promise)
- [readonly](Core.z.ZodCatch.md#readonly)
- [refine](Core.z.ZodCatch.md#refine)
- [refinement](Core.z.ZodCatch.md#refinement)
- [removeCatch](Core.z.ZodCatch.md#removecatch)
- [safeParse](Core.z.ZodCatch.md#safeparse)
- [safeParseAsync](Core.z.ZodCatch.md#safeparseasync)
- [superRefine](Core.z.ZodCatch.md#superrefine)
- [transform](Core.z.ZodCatch.md#transform)
- [~validate](Core.z.ZodCatch.md#~validate)

## Constructors

### constructor

• **new ZodCatch**\<`T`\>(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodCatchDef`](../interfaces/Core.z.ZodCatchDef.md)\<`T`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodCatchDef`](../interfaces/Core.z.ZodCatchDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `unknown`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`type`: `T_1`, `params`: \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `catch`: `T_1`[``"_output"``] \| () => `T_1`[``"_output"``]  }) => [`ZodCatch`](Core.z.ZodCatch.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`type`, `params`): [`ZodCatch`](Core.z.ZodCatch.md)\<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T_1` |
| `params` | \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `catch`: `T_1`[``"_output"``] \| () => `T_1`[``"_output"``]  } |

##### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`unknown`, `T`[``"_output"``]\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[``"_output"``]\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[``"_output"``]\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T`[``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `unknown`  }) => `T`[``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `unknown` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `unknown` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `T`[``"_output"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`T`[``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `RefinedOutput`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``]) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `RefinedOutput`, `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``]) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `RefinedOutput`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``]) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `RefinedOutput`, `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[``"_output"``]) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### removeCatch

▸ **removeCatch**(): `T`

#### Returns

`T`

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`unknown`, `T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `RefinedOutput`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `RefinedOutput`, `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `T`[``"_output"``], `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `NewOut`, `unknown`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `T`[``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodCatch`](Core.z.ZodCatch.md)\<`T`\>, `NewOut`, `unknown`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`T`[``"_output"``]\> \| `Promise`\<`Result`\<`T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`T`[``"_output"``]\> \| `Promise`\<`Result`\<`T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
