[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ZodString

# Class: ZodString

[Core](../modules/Core.md).[z](../modules/Core.z.md).ZodString

## Hierarchy

- [`ZodType`](Core.z.ZodType.md)\<`string`, [`ZodStringDef`](../interfaces/Core.z.ZodStringDef.md), `string`\>

  ↳ **`ZodString`**

## Table of contents

### Constructors

- [constructor](Core.z.ZodString.md#constructor)

### Properties

- [\_def](Core.z.ZodString.md#_def)
- [\_input](Core.z.ZodString.md#_input)
- [\_output](Core.z.ZodString.md#_output)
- [\_type](Core.z.ZodString.md#_type)
- [create](Core.z.ZodString.md#create)
- [spa](Core.z.ZodString.md#spa)
- [~standard](Core.z.ZodString.md#~standard)

### Accessors

- [description](Core.z.ZodString.md#description)
- [isBase64](Core.z.ZodString.md#isbase64)
- [isBase64url](Core.z.ZodString.md#isbase64url)
- [isCIDR](Core.z.ZodString.md#iscidr)
- [isCUID](Core.z.ZodString.md#iscuid)
- [isCUID2](Core.z.ZodString.md#iscuid2)
- [isDate](Core.z.ZodString.md#isdate)
- [isDatetime](Core.z.ZodString.md#isdatetime)
- [isDuration](Core.z.ZodString.md#isduration)
- [isEmail](Core.z.ZodString.md#isemail)
- [isEmoji](Core.z.ZodString.md#isemoji)
- [isIP](Core.z.ZodString.md#isip)
- [isNANOID](Core.z.ZodString.md#isnanoid)
- [isTime](Core.z.ZodString.md#istime)
- [isULID](Core.z.ZodString.md#isulid)
- [isURL](Core.z.ZodString.md#isurl)
- [isUUID](Core.z.ZodString.md#isuuid)
- [maxLength](Core.z.ZodString.md#maxlength)
- [minLength](Core.z.ZodString.md#minlength)

### Methods

- [\_addCheck](Core.z.ZodString.md#_addcheck)
- [\_getOrReturnCtx](Core.z.ZodString.md#_getorreturnctx)
- [\_getType](Core.z.ZodString.md#_gettype)
- [\_parse](Core.z.ZodString.md#_parse)
- [\_parseAsync](Core.z.ZodString.md#_parseasync)
- [\_parseSync](Core.z.ZodString.md#_parsesync)
- [\_processInputParams](Core.z.ZodString.md#_processinputparams)
- [\_refinement](Core.z.ZodString.md#_refinement)
- [\_regex](Core.z.ZodString.md#_regex)
- [and](Core.z.ZodString.md#and)
- [array](Core.z.ZodString.md#array)
- [base64](Core.z.ZodString.md#base64)
- [base64url](Core.z.ZodString.md#base64url)
- [brand](Core.z.ZodString.md#brand)
- [catch](Core.z.ZodString.md#catch)
- [cidr](Core.z.ZodString.md#cidr)
- [cuid](Core.z.ZodString.md#cuid)
- [cuid2](Core.z.ZodString.md#cuid2)
- [date](Core.z.ZodString.md#date)
- [datetime](Core.z.ZodString.md#datetime)
- [default](Core.z.ZodString.md#default)
- [describe](Core.z.ZodString.md#describe)
- [duration](Core.z.ZodString.md#duration)
- [email](Core.z.ZodString.md#email)
- [emoji](Core.z.ZodString.md#emoji)
- [endsWith](Core.z.ZodString.md#endswith)
- [includes](Core.z.ZodString.md#includes)
- [ip](Core.z.ZodString.md#ip)
- [isNullable](Core.z.ZodString.md#isnullable)
- [isOptional](Core.z.ZodString.md#isoptional)
- [jwt](Core.z.ZodString.md#jwt)
- [length](Core.z.ZodString.md#length)
- [max](Core.z.ZodString.md#max)
- [min](Core.z.ZodString.md#min)
- [nanoid](Core.z.ZodString.md#nanoid)
- [nonempty](Core.z.ZodString.md#nonempty)
- [nullable](Core.z.ZodString.md#nullable)
- [nullish](Core.z.ZodString.md#nullish)
- [optional](Core.z.ZodString.md#optional)
- [or](Core.z.ZodString.md#or)
- [parse](Core.z.ZodString.md#parse)
- [parseAsync](Core.z.ZodString.md#parseasync)
- [pipe](Core.z.ZodString.md#pipe)
- [promise](Core.z.ZodString.md#promise)
- [readonly](Core.z.ZodString.md#readonly)
- [refine](Core.z.ZodString.md#refine)
- [refinement](Core.z.ZodString.md#refinement)
- [regex](Core.z.ZodString.md#regex)
- [safeParse](Core.z.ZodString.md#safeparse)
- [safeParseAsync](Core.z.ZodString.md#safeparseasync)
- [startsWith](Core.z.ZodString.md#startswith)
- [superRefine](Core.z.ZodString.md#superrefine)
- [time](Core.z.ZodString.md#time)
- [toLowerCase](Core.z.ZodString.md#tolowercase)
- [toUpperCase](Core.z.ZodString.md#touppercase)
- [transform](Core.z.ZodString.md#transform)
- [trim](Core.z.ZodString.md#trim)
- [ulid](Core.z.ZodString.md#ulid)
- [url](Core.z.ZodString.md#url)
- [uuid](Core.z.ZodString.md#uuid)
- [~validate](Core.z.ZodString.md#~validate)

## Constructors

### constructor

• **new ZodString**(`def`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | [`ZodStringDef`](../interfaces/Core.z.ZodStringDef.md) |

#### Returns

[`ZodString`](Core.z.ZodString.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[constructor](Core.z.ZodType.md#constructor)

## Properties

### \_def

• `Readonly` **\_def**: [`ZodStringDef`](../interfaces/Core.z.ZodStringDef.md)

#### Inherited from

[ZodType](Core.z.ZodType.md).[_def](Core.z.ZodType.md#_def)

___

### \_input

• `Readonly` **\_input**: `string`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_input](Core.z.ZodType.md#_input)

___

### \_output

• `Readonly` **\_output**: `string`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_output](Core.z.ZodType.md#_output)

___

### \_type

• `Readonly` **\_type**: `string`

#### Inherited from

[ZodType](Core.z.ZodType.md).[_type](Core.z.ZodType.md#_type)

___

### create

▪ `Static` **create**: (`params?`: \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: ``true``  }) => [`ZodString`](Core.z.ZodString.md)

#### Type declaration

▸ (`params?`): [`ZodString`](Core.z.ZodString.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | \{ `description?`: `string` ; `errorMap?`: [`ZodErrorMap`](../modules/Core.z.md#zoderrormap) ; `invalid_type_error?`: `string` ; `message?`: `string` ; `required_error?`: `string`  } & \{ `coerce?`: ``true``  } |

##### Returns

[`ZodString`](Core.z.ZodString.md)

___

### spa

• **spa**: (`data`: `unknown`, `params?`: `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\>) => `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>\>

Alias of safeParseAsync

#### Type declaration

▸ (`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

##### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[spa](Core.z.ZodType.md#spa)

___

### ~standard

• **~standard**: `Props`\<`string`, `string`\>

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

### isBase64

• `get` **isBase64**(): `boolean`

#### Returns

`boolean`

___

### isBase64url

• `get` **isBase64url**(): `boolean`

#### Returns

`boolean`

___

### isCIDR

• `get` **isCIDR**(): `boolean`

#### Returns

`boolean`

___

### isCUID

• `get` **isCUID**(): `boolean`

#### Returns

`boolean`

___

### isCUID2

• `get` **isCUID2**(): `boolean`

#### Returns

`boolean`

___

### isDate

• `get` **isDate**(): `boolean`

#### Returns

`boolean`

___

### isDatetime

• `get` **isDatetime**(): `boolean`

#### Returns

`boolean`

___

### isDuration

• `get` **isDuration**(): `boolean`

#### Returns

`boolean`

___

### isEmail

• `get` **isEmail**(): `boolean`

#### Returns

`boolean`

___

### isEmoji

• `get` **isEmoji**(): `boolean`

#### Returns

`boolean`

___

### isIP

• `get` **isIP**(): `boolean`

#### Returns

`boolean`

___

### isNANOID

• `get` **isNANOID**(): `boolean`

#### Returns

`boolean`

___

### isTime

• `get` **isTime**(): `boolean`

#### Returns

`boolean`

___

### isULID

• `get` **isULID**(): `boolean`

#### Returns

`boolean`

___

### isURL

• `get` **isURL**(): `boolean`

#### Returns

`boolean`

___

### isUUID

• `get` **isUUID**(): `boolean`

#### Returns

`boolean`

___

### maxLength

• `get` **maxLength**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

___

### minLength

• `get` **minLength**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

## Methods

### \_addCheck

▸ **_addCheck**(`check`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | [`ZodStringCheck`](../modules/Core.z.md#zodstringcheck) |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

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

▸ **_parse**(`input`): [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`string`\>

#### Overrides

[ZodType](Core.z.ZodType.md).[_parse](Core.z.ZodType.md#_parse)

___

### \_parseAsync

▸ **_parseAsync**(`input`): [`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`AsyncParseReturnType`](../modules/Core.z.md#asyncparsereturntype)\<`string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_parseAsync](Core.z.ZodType.md#_parseasync)

___

### \_parseSync

▸ **_parseSync**(`input`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ParseInput`](../modules/Core.z.md#parseinput) |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`string`\>

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

▸ **_refinement**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `any` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[_refinement](Core.z.ZodType.md#_refinement)

___

### \_regex

▸ **_regex**(`regex`, `validation`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `validation` | [`StringValidation`](../modules/Core.z.md#stringvalidation) |
| `message?` | `ErrMessage` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

___

### and

▸ **and**\<`T`\>(`incoming`): [`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodString`](Core.z.ZodString.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `incoming` | `T` |

#### Returns

[`ZodIntersection`](Core.z.ZodIntersection.md)\<[`ZodString`](Core.z.ZodString.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[and](Core.z.ZodType.md#and)

___

### array

▸ **array**(): [`ZodArray`](Core.z.ZodArray.md)\<[`ZodString`](Core.z.ZodString.md), ``"many"``\>

#### Returns

[`ZodArray`](Core.z.ZodArray.md)\<[`ZodString`](Core.z.ZodString.md), ``"many"``\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[array](Core.z.ZodType.md#array)

___

### base64

▸ **base64**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### base64url

▸ **base64url**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### brand

▸ **brand**\<`B`\>(`brand?`): [`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodString`](Core.z.ZodString.md), `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `brand?` | `B` |

#### Returns

[`ZodBranded`](Core.z.ZodBranded.md)\<[`ZodString`](Core.z.ZodString.md), `B`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[brand](Core.z.ZodType.md#brand)

___

### catch

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `string` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

▸ **catch**(`def`): [`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | (`ctx`: \{ `error`: [`ZodError`](Core.z.ZodError.md)\<`any`\> ; `input`: `string`  }) => `string` |

#### Returns

[`ZodCatch`](Core.z.ZodCatch.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[catch](Core.z.ZodType.md#catch)

___

### cidr

▸ **cidr**(`options?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| \{ `message?`: `string` ; `version?`: [`IpVersion`](../modules/Core.z.md#ipversion)  } |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### cuid

▸ **cuid**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### cuid2

▸ **cuid2**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### date

▸ **date**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### datetime

▸ **datetime**(`options?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| \{ `local?`: `boolean` ; `message?`: `string` ; `offset?`: `boolean` ; `precision?`: ``null`` \| `number`  } |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### default

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `string` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[default](Core.z.ZodType.md#default)

▸ **default**(`def`): [`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | () => `string` |

#### Returns

[`ZodDefault`](Core.z.ZodDefault.md)\<[`ZodString`](Core.z.ZodString.md)\>

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

### duration

▸ **duration**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### email

▸ **email**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### emoji

▸ **emoji**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### endsWith

▸ **endsWith**(`value`, `message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### includes

▸ **includes**(`value`, `options?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `options?` | `Object` |
| `options.message?` | `string` |
| `options.position?` | `number` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### ip

▸ **ip**(`options?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| \{ `message?`: `string` ; `version?`: [`IpVersion`](../modules/Core.z.md#ipversion)  } |

#### Returns

[`ZodString`](Core.z.ZodString.md)

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

### jwt

▸ **jwt**(`options?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.alg?` | `string` |
| `options.message?` | `string` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### length

▸ **length**(`len`, `message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `len` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### max

▸ **max**(`maxLength`, `message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxLength` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### min

▸ **min**(`minLength`, `message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minLength` | `number` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### nanoid

▸ **nanoid**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### nonempty

▸ **nonempty**(`message?`): [`ZodString`](Core.z.ZodString.md)

Equivalent to `.min(1)`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### nullable

▸ **nullable**(): [`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Returns

[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullable](Core.z.ZodType.md#nullable)

___

### nullish

▸ **nullish**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodString`](Core.z.ZodString.md)\>\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodNullable`](Core.z.ZodNullable.md)\<[`ZodString`](Core.z.ZodString.md)\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[nullish](Core.z.ZodType.md#nullish)

___

### optional

▸ **optional**(): [`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Returns

[`ZodOptional`](Core.z.ZodOptional.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[optional](Core.z.ZodType.md#optional)

___

### or

▸ **or**\<`T`\>(`option`): [`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodString`](Core.z.ZodString.md), `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `T` |

#### Returns

[`ZodUnion`](Core.z.ZodUnion.md)\<[[`ZodString`](Core.z.ZodString.md), `T`]\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[or](Core.z.ZodType.md#or)

___

### parse

▸ **parse**(`data`, `params?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`string`

#### Inherited from

[ZodType](Core.z.ZodType.md).[parse](Core.z.ZodType.md#parse)

___

### parseAsync

▸ **parseAsync**(`data`, `params?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<`string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[parseAsync](Core.z.ZodType.md#parseasync)

___

### pipe

▸ **pipe**\<`T`\>(`target`): [`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodString`](Core.z.ZodString.md), `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ZodTypeAny`](../modules/Core.z.md#zodtypeany) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |

#### Returns

[`ZodPipeline`](Core.z.ZodPipeline.md)\<[`ZodString`](Core.z.ZodString.md), `T`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[pipe](Core.z.ZodType.md#pipe)

___

### promise

▸ **promise**(): [`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Returns

[`ZodPromise`](Core.z.ZodPromise.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[promise](Core.z.ZodType.md#promise)

___

### readonly

▸ **readonly**(): [`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Returns

[`ZodReadonly`](Core.z.ZodReadonly.md)\<[`ZodString`](Core.z.ZodString.md)\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[readonly](Core.z.ZodType.md#readonly)

___

### refine

▸ **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `RefinedOutput`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `string`) => arg is RefinedOutput |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `string`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `RefinedOutput`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

▸ **refine**(`check`, `message?`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `string`) => `unknown` |
| `message?` | `string` \| `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> \| (`arg`: `string`) => `Partial`\<[`Omit`](../modules/Core.z.util.md#omit)\<[`ZodCustomIssue`](../interfaces/Core.z.ZodCustomIssue.md), ``"code"``\>\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refine](Core.z.ZodType.md#refine)

___

### refinement

▸ **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `RefinedOutput`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `string`) => arg is RefinedOutput |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `RefinedOutput`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

▸ **refinement**(`check`, `refinementData`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | (`arg`: `string`) => `boolean` |
| `refinementData` | [`IssueData`](../modules/Core.z.md#issuedata) \| (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => [`IssueData`](../modules/Core.z.md#issuedata) |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[refinement](Core.z.ZodType.md#refinement)

___

### regex

▸ **regex**(`regex`, `message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### safeParse

▸ **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParse](Core.z.ZodType.md#safeparse)

___

### safeParseAsync

▸ **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |
| `params?` | `Partial`\<[`ParseParams`](../modules/Core.z.md#parseparams)\> |

#### Returns

`Promise`\<[`SafeParseReturnType`](../modules/Core.z.md#safeparsereturntype)\<`string`, `string`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[safeParseAsync](Core.z.ZodType.md#safeparseasync)

___

### startsWith

▸ **startsWith**(`value`, `message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### superRefine

▸ **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `RefinedOutput`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `RefinedOutput` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => arg is RefinedOutput |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `RefinedOutput`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `void` |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

▸ **superRefine**(`refinement`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `Promise`\<`void`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `string`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[superRefine](Core.z.ZodType.md#superrefine)

___

### time

▸ **time**(`options?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `string` \| \{ `message?`: `string` ; `precision?`: ``null`` \| `number`  } |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### toLowerCase

▸ **toLowerCase**(): [`ZodString`](Core.z.ZodString.md)

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### toUpperCase

▸ **toUpperCase**(): [`ZodString`](Core.z.ZodString.md)

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### transform

▸ **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `NewOut`, `string`\>

#### Type parameters

| Name |
| :------ |
| `NewOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | (`arg`: `string`, `ctx`: [`RefinementCtx`](../interfaces/Core.z.RefinementCtx.md)) => `NewOut` \| `Promise`\<`NewOut`\> |

#### Returns

[`ZodEffects`](Core.z.ZodEffects.md)\<[`ZodString`](Core.z.ZodString.md), `NewOut`, `string`\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[transform](Core.z.ZodType.md#transform)

___

### trim

▸ **trim**(): [`ZodString`](Core.z.ZodString.md)

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### ulid

▸ **ulid**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### url

▸ **url**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### uuid

▸ **uuid**(`message?`): [`ZodString`](Core.z.ZodString.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `ErrMessage` |

#### Returns

[`ZodString`](Core.z.ZodString.md)

___

### ~validate

▸ **~validate**(`data`): `Result`\<`string`\> \| `Promise`\<`Result`\<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `unknown` |

#### Returns

`Result`\<`string`\> \| `Promise`\<`Result`\<`string`\>\>

#### Inherited from

[ZodType](Core.z.ZodType.md).[~validate](Core.z.ZodType.md#~validate)
