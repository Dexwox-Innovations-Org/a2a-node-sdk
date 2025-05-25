[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodBoolean

# Class: ZodBoolean

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodBoolean

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`boolean`, [`ZodBooleanDef`](../interfaces/Core.z.ZodBooleanDef.md), `boolean`\>

  ↳ **`ZodBoolean`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodBoolean.md#constructor)

### Properties

- [\_def](Core.z.ZodBoolean.md#_def)
- [\_input](Core.z.ZodBoolean.md#_input)
- [\_output](Core.z.ZodBoolean.md#_output)
- [\_type](Core.z.ZodBoolean.md#_type)
- [create](Core.z.ZodBoolean.md#create)
- [spa](Core.z.ZodBoolean.md#spa)
- [~standard](Core.z.ZodBoolean.md#~standard)

### Accessors

- [description](Core.z.ZodBoolean.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodBoolean.md#_getorreturnctx)
- [\_getType](Core.z.ZodBoolean.md#_gettype)
- [\_parse](Core.z.ZodBoolean.md#_parse)
- [\_parseAsync](Core.z.ZodBoolean.md#_parseasync)
- [\_parseSync](Core.z.ZodBoolean.md#_parsesync)
- [\_processInputParams](Core.z.ZodBoolean.md#_processinputparams)
- [\_refinement](Core.z.ZodBoolean.md#_refinement)
- [and](Core.z.ZodBoolean.md#and)
- [array](Core.z.ZodBoolean.md#array)
- [brand](Core.z.ZodBoolean.md#brand)
- [catch](Core.z.ZodBoolean.md#catch)
- [default](Core.z.ZodBoolean.md#default)
- [describe](Core.z.ZodBoolean.md#describe)
- [isNullable](Core.z.ZodBoolean.md#isnullable)
- [isOptional](Core.z.ZodBoolean.md#isoptional)
- [nullable](Core.z.ZodBoolean.md#nullable)
- [nullish](Core.z.ZodBoolean.md#nullish)
- [optional](Core.z.ZodBoolean.md#optional)
- [or](Core.z.ZodBoolean.md#or)
- [parse](Core.z.ZodBoolean.md#parse)
- [parseAsync](Core.z.ZodBoolean.md#parseasync)
- [pipe](Core.z.ZodBoolean.md#pipe)
- [promise](Core.z.ZodBoolean.md#promise)
- [readonly](Core.z.ZodBoolean.md#readonly)
- [refine](Core.z.ZodBoolean.md#refine)
- [refinement](Core.z.ZodBoolean.md#refinement)
- [safeParse](Core.z.ZodBoolean.md#safeparse)
- [safeParseAsync](Core.z.ZodBoolean.md#safeparseasync)
- [superRefine](Core.z.ZodBoolean.md#superrefine)
- [transform](Core.z.ZodBoolean.md#transform)
- [~validate](Core.z.ZodBoolean.md#~validate)

## Constructors

### constructor

• **new ZodBoolean**(`def`): [`ZodBoolean`](Core.z.ZodBoolean.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodBooleanDef`](../interfaces/Core.z.ZodBooleanDef.md) |

#### Returns

[`ZodBoolean`](Core.z.ZodBoolean.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodBooleanDef`](../interfaces/Core.z.ZodBooleanDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `boolean`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `boolean`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `boolean`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  }) => [`ZodBoolean`](Core.z.ZodBoolean.md)

#### Type declaration

▸ (`params?`): [`ZodBoolean`](Core.z.ZodBoolean.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: `boolean`  } |

##### Returns

[`ZodBoolean`](Core.z.ZodBoolean.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`boolean`, `boolean`\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`boolean`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`boolean`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `boolean` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `boolean`  }) => `boolean` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `boolean` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `boolean` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodBoolean`](Core.z.ZodBoolean.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodBoolean`](Core.z.ZodBoolean.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`boolean`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `RefinedOutput`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `boolean`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `boolean`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `RefinedOutput`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `boolean`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `boolean`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `RefinedOutput`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `boolean`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `RefinedOutput`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `boolean`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`boolean`, `boolean`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `RefinedOutput`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `RefinedOutput`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `boolean`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `NewOut`, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `boolean`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodBoolean`](Core.z.ZodBoolean.md), `NewOut`, `boolean`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`boolean`\> \| `Promise`\<`Result`\<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`boolean`\> \| `Promise`\<`Result`\<`boolean`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
