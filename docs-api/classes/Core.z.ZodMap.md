[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodMap

# Class: ZodMap\<Key, Value\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, [`ZodMapDef`](../interfaces/Core.z.ZodMapDef.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

  ↳ **`ZodMap`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodMap.md#constructor)

### Properties

- [\_def](Core.z.ZodMap.md#_def)
- [\_input](Core.z.ZodMap.md#_input)
- [\_output](Core.z.ZodMap.md#_output)
- [\_type](Core.z.ZodMap.md#_type)
- [create](Core.z.ZodMap.md#create)
- [spa](Core.z.ZodMap.md#spa)
- [~standard](Core.z.ZodMap.md#~standard)

### Accessors

- [description](Core.z.ZodMap.md#description)
- [keySchema](Core.z.ZodMap.md#keyschema)
- [valueSchema](Core.z.ZodMap.md#valueschema)

### Methods

- [\_getOrReturnCtx](Core.z.ZodMap.md#_getorreturnctx)
- [\_getType](Core.z.ZodMap.md#_gettype)
- [\_parse](Core.z.ZodMap.md#_parse)
- [\_parseAsync](Core.z.ZodMap.md#_parseasync)
- [\_parseSync](Core.z.ZodMap.md#_parsesync)
- [\_processInputParams](Core.z.ZodMap.md#_processinputparams)
- [\_refinement](Core.z.ZodMap.md#_refinement)
- [and](Core.z.ZodMap.md#and)
- [array](Core.z.ZodMap.md#array)
- [brand](Core.z.ZodMap.md#brand)
- [catch](Core.z.ZodMap.md#catch)
- [default](Core.z.ZodMap.md#default)
- [describe](Core.z.ZodMap.md#describe)
- [isNullable](Core.z.ZodMap.md#isnullable)
- [isOptional](Core.z.ZodMap.md#isoptional)
- [nullable](Core.z.ZodMap.md#nullable)
- [nullish](Core.z.ZodMap.md#nullish)
- [optional](Core.z.ZodMap.md#optional)
- [or](Core.z.ZodMap.md#or)
- [parse](Core.z.ZodMap.md#parse)
- [parseAsync](Core.z.ZodMap.md#parseasync)
- [pipe](Core.z.ZodMap.md#pipe)
- [promise](Core.z.ZodMap.md#promise)
- [readonly](Core.z.ZodMap.md#readonly)
- [refine](Core.z.ZodMap.md#refine)
- [refinement](Core.z.ZodMap.md#refinement)
- [safeParse](Core.z.ZodMap.md#safeparse)
- [safeParseAsync](Core.z.ZodMap.md#safeparseasync)
- [superRefine](Core.z.ZodMap.md#superrefine)
- [transform](Core.z.ZodMap.md#transform)
- [~validate](Core.z.ZodMap.md#~validate)

## Constructors

### constructor

• **new ZodMap**\<`Key`, `Value`\>(`def`): [`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Value` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodMapDef`](../interfaces/Core.z.ZodMapDef.md)\<`Key`, `Value`\> |

#### Returns

[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodMapDef`](../interfaces/Core.z.ZodMapDef.md)\<`Key`, `Value`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: \<Key_1, Value_1\>(`keyType`: `Key_1`, `valueType`: `Value_1`, `params?`: [`RawCreateParams`](../modules/Core.z.md#rawcreateparams)) => [`ZodMap`](Core.z.ZodMap.md)\<`Key_1`, `Value_1`\>

#### Type declaration

▸ \<`Key_1`, `Value_1`\>(`keyType`, `valueType`, `params?`): [`ZodMap`](Core.z.ZodMap.md)\<`Key_1`, `Value_1`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Key_1` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |
| `Value_1` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `keyType` | `Key_1` |
| `valueType` | `Value_1` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

##### Returns

[`ZodMap`](Core.z.ZodMap.md)\<`Key_1`, `Value_1`\>

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

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

### keySchema

• `get` **keySchema**(): `Key`

#### Returns

`Key`

___

### valueSchema

• `get` **valueSchema**(): `Value`

#### Returns

`Value`

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>  }) => `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `RefinedOutput`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `NewOut`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodMap`](Core.z.ZodMap.md)\<`Key`, `Value`\>, `NewOut`, `Map`\<`Key`[``"_input"``], `Value`[``"_input"``]\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> \| `Promise`\<`Result`\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\> \| `Promise`\<`Result`\<`Map`\<`Key`[``"_output"``], `Value`[``"_output"``]\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
