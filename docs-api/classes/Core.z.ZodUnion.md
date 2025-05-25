[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodUnion

# Class: ZodUnion\<T\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodUnion

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodUnionOptions`](../modules/Core.z.md#zodunionoptions) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`T`[`number`][``"_output"``], [`ZodUnionDef`](../interfaces/Core.z.ZodUnionDef.md)\<`T`\>, `T`[`number`][``"_input"``]\>

  ↳ **`ZodUnion`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodUnion.md#constructor)

### Properties

- [\_def](Core.z.ZodUnion.md#_def)
- [\_input](Core.z.ZodUnion.md#_input)
- [\_output](Core.z.ZodUnion.md#_output)
- [\_type](Core.z.ZodUnion.md#_type)
- [create](Core.z.ZodUnion.md#create)
- [spa](Core.z.ZodUnion.md#spa)
- [~standard](Core.z.ZodUnion.md#~standard)

### Accessors

- [description](Core.z.ZodUnion.md#description)
- [options](Core.z.ZodUnion.md#options)

### Methods

- [\_getOrReturnCtx](Core.z.ZodUnion.md#_getorreturnctx)
- [\_getType](Core.z.ZodUnion.md#_gettype)
- [\_parse](Core.z.ZodUnion.md#_parse)
- [\_parseAsync](Core.z.ZodUnion.md#_parseasync)
- [\_parseSync](Core.z.ZodUnion.md#_parsesync)
- [\_processInputParams](Core.z.ZodUnion.md#_processinputparams)
- [\_refinement](Core.z.ZodUnion.md#_refinement)
- [and](Core.z.ZodUnion.md#and)
- [array](Core.z.ZodUnion.md#array)
- [brand](Core.z.ZodUnion.md#brand)
- [catch](Core.z.ZodUnion.md#catch)
- [default](Core.z.ZodUnion.md#default)
- [describe](Core.z.ZodUnion.md#describe)
- [isNullable](Core.z.ZodUnion.md#isnullable)
- [isOptional](Core.z.ZodUnion.md#isoptional)
- [nullable](Core.z.ZodUnion.md#nullable)
- [nullish](Core.z.ZodUnion.md#nullish)
- [optional](Core.z.ZodUnion.md#optional)
- [or](Core.z.ZodUnion.md#or)
- [parse](Core.z.ZodUnion.md#parse)
- [parseAsync](Core.z.ZodUnion.md#parseasync)
- [pipe](Core.z.ZodUnion.md#pipe)
- [promise](Core.z.ZodUnion.md#promise)
- [readonly](Core.z.ZodUnion.md#readonly)
- [refine](Core.z.ZodUnion.md#refine)
- [refinement](Core.z.ZodUnion.md#refinement)
- [safeParse](Core.z.ZodUnion.md#safeparse)
- [safeParseAsync](Core.z.ZodUnion.md#safeparseasync)
- [superRefine](Core.z.ZodUnion.md#superrefine)
- [transform](Core.z.ZodUnion.md#transform)
- [~validate](Core.z.ZodUnion.md#~validate)

## Constructors

### constructor

• **new ZodUnion**\<`T`\>(`def`): [`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends readonly [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`ZodTypeAny`](../modules/Core.z.md#zodtypeany)] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodUnionDef`](../interfaces/Core.z.ZodUnionDef.md)\<`T`\> |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodUnionDef`](../interfaces/Core.z.ZodUnionDef.md)\<`T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `T`[`number`][``"_input"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `T`[`number`][``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `T`[`number`][``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<T_1\>(`types`: `T_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodUnion`](Core.z.ZodUnion.md)\<`T_1`\>

#### Type declaration

▸ \<`T_1`\>(`types`, `params?`): [`ZodUnion`](Core.z.ZodUnion.md)\<`T_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T_1` | extends readonly [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`ZodTypeAny`](../modules/Core.z.md#zodtypeany), [`ZodTypeAny`](../modules/Core.z.md#zodtypeany)] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `types` | `T_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<`T_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>

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

### options

• `get` **options**(): `T`

#### Returns

`T`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[`number`][``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`T`[`number`][``"_output"``]\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[`number`][``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`T`[`number`][``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[`number`][``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`T`[`number`][``"_output"``]\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `T`[`number`][``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `T`[`number`][``"_input"``]  }) => `T`[`number`][``"_output"``] |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[`number`][``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<`T`[`number`][``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `T`[`number`][``"_output"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`T`[`number`][``"_output"``]

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`T`[`number`][``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`T`[`number`][``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `RefinedOutput`, `T`[`number`][``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`][``"_output"``]) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[`number`][``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `RefinedOutput`, `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`][``"_output"``]) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `T`[`number`][``"_output"``]) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `RefinedOutput`, `T`[`number`][``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`][``"_output"``]) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `RefinedOutput`, `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `T`[`number`][``"_output"``]) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`T`[`number`][``"_input"``], `T`[`number`][``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `RefinedOutput`, `T`[`number`][``"_input"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `RefinedOutput`, `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `T`[`number`][``"_output"``], `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `NewOut`, `T`[`number`][``"_input"``]\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `T`[`number`][``"_output"``], `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodUnion`](Core.z.ZodUnion.md)\<`T`\>, `NewOut`, `T`[`number`][``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`T`[`number`][``"_output"``]\> \| `Promise`\<`Result`\<`T`[`number`][``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`T`[`number`][``"_output"``]\> \| `Promise`\<`Result`\<`T`[`number`][``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
