[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodFunction

# Class: ZodFunction\<Args, Returns\>

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodFunction

## Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | extends [`ZodTuple`](Core.z.ZodTuple.md)\<`any`, `any`\> |
| `Returns` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`ZodFunctionDef`](../interfaces/Core.z.ZodFunctionDef.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

  ↳ **`ZodFunction`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodFunction.md#constructor)

### Properties

- [\_def](Core.z.ZodFunction.md#_def)
- [\_input](Core.z.ZodFunction.md#_input)
- [\_output](Core.z.ZodFunction.md#_output)
- [\_type](Core.z.ZodFunction.md#_type)
- [spa](Core.z.ZodFunction.md#spa)
- [validate](Core.z.ZodFunction.md#validate)
- [~standard](Core.z.ZodFunction.md#~standard)

### Accessors

- [description](Core.z.ZodFunction.md#description)

### Methods

- [\_getOrReturnCtx](Core.z.ZodFunction.md#_getorreturnctx)
- [\_getType](Core.z.ZodFunction.md#_gettype)
- [\_parse](Core.z.ZodFunction.md#_parse)
- [\_parseAsync](Core.z.ZodFunction.md#_parseasync)
- [\_parseSync](Core.z.ZodFunction.md#_parsesync)
- [\_processInputParams](Core.z.ZodFunction.md#_processinputparams)
- [\_refinement](Core.z.ZodFunction.md#_refinement)
- [and](Core.z.ZodFunction.md#and)
- [args](Core.z.ZodFunction.md#args)
- [array](Core.z.ZodFunction.md#array)
- [brand](Core.z.ZodFunction.md#brand)
- [catch](Core.z.ZodFunction.md#catch)
- [create](Core.z.ZodFunction.md#create)
- [default](Core.z.ZodFunction.md#default)
- [describe](Core.z.ZodFunction.md#describe)
- [implement](Core.z.ZodFunction.md#implement)
- [isNullable](Core.z.ZodFunction.md#isnullable)
- [isOptional](Core.z.ZodFunction.md#isoptional)
- [nullable](Core.z.ZodFunction.md#nullable)
- [nullish](Core.z.ZodFunction.md#nullish)
- [optional](Core.z.ZodFunction.md#optional)
- [or](Core.z.ZodFunction.md#or)
- [parameters](Core.z.ZodFunction.md#parameters)
- [parse](Core.z.ZodFunction.md#parse)
- [parseAsync](Core.z.ZodFunction.md#parseasync)
- [pipe](Core.z.ZodFunction.md#pipe)
- [promise](Core.z.ZodFunction.md#promise)
- [readonly](Core.z.ZodFunction.md#readonly)
- [refine](Core.z.ZodFunction.md#refine)
- [refinement](Core.z.ZodFunction.md#refinement)
- [returnType](Core.z.ZodFunction.md#returntype)
- [returns](Core.z.ZodFunction.md#returns)
- [safeParse](Core.z.ZodFunction.md#safeparse)
- [safeParseAsync](Core.z.ZodFunction.md#safeparseasync)
- [strictImplement](Core.z.ZodFunction.md#strictimplement)
- [superRefine](Core.z.ZodFunction.md#superrefine)
- [transform](Core.z.ZodFunction.md#transform)
- [~validate](Core.z.ZodFunction.md#~validate)

## Constructors

### constructor

• **new ZodFunction**\<`Args`, `Returns`\>(`def`): [`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | extends [`ZodTuple`](Core.z.ZodTuple.md)\<`any`, `any`\> |
| `Returns` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodFunctionDef`](../interfaces/Core.z.ZodFunctionDef.md)\<`Args`, `Returns`\> |

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodFunctionDef`](../interfaces/Core.z.ZodFunctionDef.md)\<`Args`, `Returns`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### validate

• **validate**: \<F\>(`func`: `F`) => `ReturnType`\<`F`\> extends `Returns`[``"_output"``] ? (...`args`: `Args`[``"_input"``]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

#### Type declaration

▸ \<`F`\>(`func`): `ReturnType`\<`F`\> extends `Returns`[``"_output"``] ? (...`args`: `Args`[``"_input"``]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[`any`]) => `Returns`[``"_input"``] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `F` |

##### Returns

`ReturnType`\<`F`\> extends `Returns`[``"_output"``] ? (...`args`: `Args`[``"_input"``]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

___

### ~standard

• **~standard**: `Props`\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

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

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### args

▸ **args**\<`Items`\>(`...items`): [`ZodFunction`](Core.z.ZodFunction.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`Items`, [`ZodUnknown`](Core.z.ZodUnknown.md)\>, `Returns`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Items` | extends [] \| [[`ZodTypeAny`](../modules/Core.z.md#zodtypeany), ...ZodTypeAny[]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `Items` |

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<`Items`, [`ZodUnknown`](Core.z.ZodUnknown.md)\>, `Returns`\>

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>  }) => [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\> |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### create

▸ **create**(): [`ZodFunction`](Core.z.ZodFunction.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<[], [`ZodUnknown`](Core.z.ZodUnknown.md)\>, [`ZodUnknown`](Core.z.ZodUnknown.md)\>

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<[`ZodTuple`](Core.z.ZodTuple.md)\<[], [`ZodUnknown`](Core.z.ZodUnknown.md)\>, [`ZodUnknown`](Core.z.ZodUnknown.md)\>

▸ **create**\<`T`\>(`args`): [`ZodFunction`](Core.z.ZodFunction.md)\<`T`, [`ZodUnknown`](Core.z.ZodUnknown.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyZodTuple`](../modules/Core.z.md#anyzodtuple) = [`ZodTuple`](Core.z.ZodTuple.md)\<[], [`ZodUnknown`](Core.z.ZodUnknown.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<`T`, [`ZodUnknown`](Core.z.ZodUnknown.md)\>

▸ **create**\<`T`, `U`\>(`args`, `returns`): [`ZodFunction`](Core.z.ZodFunction.md)\<`T`, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyZodTuple`](../modules/Core.z.md#anyzodtuple) |
| `U` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |
| `returns` | `U` |

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<`T`, `U`\>

▸ **create**\<`T`, `U`\>(`args`, `returns`, `params?`): [`ZodFunction`](Core.z.ZodFunction.md)\<`T`, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyZodTuple`](../modules/Core.z.md#anyzodtuple) = [`ZodTuple`](Core.z.ZodTuple.md)\<[], [`ZodUnknown`](Core.z.ZodUnknown.md)\> |
| `U` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) = [`ZodUnknown`](Core.z.ZodUnknown.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `T` |
| `returns` | `U` |
| `params?` | [`RawCreateParams`](../modules/Core.z.md#rawcreateparams) |

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<`T`, `U`\>

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => [`noUndefined`](../modules/Core.z.util.md#noundefined)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\> |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

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

### implement

▸ **implement**\<`F`\>(`func`): `ReturnType`\<`F`\> extends `Returns`[``"_output"``] ? (...`args`: `Args`[``"_input"``]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[`any`]) => `Returns`[``"_input"``] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `F` |

#### Returns

`ReturnType`\<`F`\> extends `Returns`[``"_output"``] ? (...`args`: `Args`[``"_input"``]) => `ReturnType`\<`ReturnType`\<`F`\>\> : [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

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

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parameters

▸ **parameters**(): `Args`

#### Returns

`Args`

___

### parse

▸ **parse**(`data`, `params?`): [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends (...`args`: `any`[`any`]) => `Returns`[``"_output"``] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends (...`args`: `any`[`any`]) => `Returns`[``"_output"``] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### returnType

▸ **returnType**(): `Returns`

#### Returns

`Returns`

___

### returns

▸ **returns**\<`NewReturnType`\>(`returnType`): [`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `NewReturnType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `NewReturnType` | extends [`ZodType`](Core.z.ZodType.md)\<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `returnType` | `NewReturnType` |

#### Returns

[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `NewReturnType`\>

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### strictImplement

▸ **strictImplement**(`func`): [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\> |

#### Returns

[`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends (...`args`: `any`[`any`]) => `Returns`[``"_output"``] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: [`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodFunction`](Core.z.ZodFunction.md)\<`Args`, `Returns`\>, `NewOut`, [`InnerTypeOfFunction`](../modules/Core.z.md#innertypeoffunction)\<`Args`, `Returns`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### ~validate

▸ **~validate**(`data`): `Result`\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\> \| `Promise`\<`Result`\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\> \| `Promise`\<`Result`\<[`OuterTypeOfFunction`](../modules/Core.z.md#outertypeoffunction)\<`Args`, `Returns`\>\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
