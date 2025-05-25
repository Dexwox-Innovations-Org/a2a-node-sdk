[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodPromise

# Class: ZodPromise\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodPromise

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`Promise`\<`T`[``"_output"``]\>, [`ZodPromiseDef`](../interfaces/Core.z.ZodPromiseDef.md)\<`T`\>, `Promise`\<`T`[``"_input"``]\>\>

  ↳ **`ZodPromise`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodPromise.md#constructor)

### Properties

- [\_def](Core.z.ZodPromise.md#_def)
- [\_input](Core.z.ZodPromise.md#_input)
- [\_output](Core.z.ZodPromise.md#_output)
- [\_type](Core.z.ZodPromise.md#_type)
- [create](Core.z.ZodPromise.md#create)
- [spa](Core.z.ZodPromise.md#spa)
- [~standard](Core.z.ZodPromise.md#~standard)

### Accessors

- [description](Core.z.ZodPromise.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodPromise.md#_getorreturnctx)
- [\_getType](Core.z.ZodPromise.md#_gettype)
- [\_parse](Core.z.ZodPromise.md#_parse)
- [\_parseAsync](Core.z.ZodPromise.md#_parseasync)
- [\_parseSync](Core.z.ZodPromise.md#_parsesync)
- [\_processInputParams](Core.z.ZodPromise.md#_processinputparams)
- [\_refinement](Core.z.ZodPromise.md#_refinement)
- [and](Core.z.ZodPromise.md#and)
- [array](Core.z.ZodPromise.md#array)
- [brand](Core.z.ZodPromise.md#brand)
- [catch](Core.z.ZodPromise.md#catch)
- [default](Core.z.ZodPromise.md#default)
- [describe](Core.z.ZodPromise.md#describe)
- [isNullable](Core.z.ZodPromise.md#isnullable)
- [isOptional](Core.z.ZodPromise.md#isoptional)
- [nullable](Core.z.ZodPromise.md#nullable)
- [nullish](Core.z.ZodPromise.md#nullish)
- [optional](Core.z.ZodPromise.md#optional)
- [or](Core.z.ZodPromise.md#or)
- [parse](Core.z.ZodPromise.md#parse)
- [parseAsync](Core.z.ZodPromise.md#parseasync)
- [pipe](Core.z.ZodPromise.md#pipe)
- [promise](Core.z.ZodPromise.md#promise)
- [readonly](Core.z.ZodPromise.md#readonly)
- [refine](Core.z.ZodPromise.md#refine)
- [refinement](Core.z.ZodPromise.md#refinement)
- [safeParse](Core.z.ZodPromise.md#safeparse)
- [safeParseAsync](Core.z.ZodPromise.md#safeparseasync)
- [superRefine](Core.z.ZodPromise.md#superrefine)
- [transform](Core.z.ZodPromise.md#transform)
- [unwrap](Core.z.ZodPromise.md#unwrap)
- [~validate](Core.z.ZodPromise.md#~validate)

## Constructors

### constructor

• **new ZodPromise**\<`T`\>(`def`): [`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodPromiseDef`](../interfaces/Core.z.ZodPromiseDef.md)\<`T`\> |

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodPromiseDef`](../interfaces/Core.z.ZodPromiseDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `Promise`\<`T`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `Promise`\<`T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `Promise`\<`T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`schema`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodPromise`](Core.z.ZodPromise.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`schema`, `params?`): [`ZodPromise`](Core.z.ZodPromise.md)\<`T_1`\>

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

[`ZodPromise`](Core.z.ZodPromise.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Promise`\<`T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Promise`\<`T`[``"_output"``]\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Promise`\<`T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Promise`\<`T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Promise`\<`T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Promise`\<`T`[``"_output"``]\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Promise`\<`T`[``"_output"``]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Promise`\<`T`[``"_input"``]\>  }) => `Promise`\<`T`[``"_output"``]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Promise`\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `Promise`\<`T`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `Promise`\<`T`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`Promise`\<`T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`Promise`\<`T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `RefinedOutput`, `Promise`\<`T`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Promise`\<`T`[``"_output"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Promise`\<`T`[``"_output"``]\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Promise`\<`T`[``"_output"``]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `RefinedOutput`, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Promise`\<`T`[``"_output"``]\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Promise`\<`T`[``"_output"``]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `RefinedOutput`, `Promise`\<`T`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Promise`\<`T`[``"_output"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Promise`\<`T`[``"_output"``]\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `RefinedOutput`, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Promise`\<`T`[``"_output"``]\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Promise`\<`T`[``"_input"``]\>, `Promise`\<`T`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `RefinedOutput`, `Promise`\<`T`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Promise`\<`T`[``"_output"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `RefinedOutput`, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `Promise`\<`T`[``"_output"``]\>, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `NewOut`, `Promise`\<`T`[``"_input"``]\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `Promise`\<`T`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodPromise`](Core.z.ZodPromise.md)\<`T`\>, `NewOut`, `Promise`\<`T`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### unwrap

▸ **unwrap**(): `T`

#### Returns

`T`

___

### ~validate

▸ **~validate**(`data`): `Result`\<`Promise`\<`T`[``"_output"``]\>\> \| `Promise`\<`Result`\<`Promise`\<`T`[``"_output"``]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`Promise`\<`T`[``"_output"``]\>\> \| `Promise`\<`Result`\<`Promise`\<`T`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
