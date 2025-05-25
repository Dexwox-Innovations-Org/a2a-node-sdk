[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / [z](../modules/Core.z.md) / ParseStatus

# Class: ParseStatus

[Core](../modules/Core.md).[z](../modules/Core.z.md).ParseStatus

## Table of contents

### Constructors

- [constructor](Core.z.ParseStatus.md#constructor)

### Properties

- [value](Core.z.ParseStatus.md#value)

### Methods

- [abort](Core.z.ParseStatus.md#abort)
- [dirty](Core.z.ParseStatus.md#dirty)
- [mergeArray](Core.z.ParseStatus.md#mergearray)
- [mergeObjectAsync](Core.z.ParseStatus.md#mergeobjectasync)
- [mergeObjectSync](Core.z.ParseStatus.md#mergeobjectsync)

## Constructors

### constructor

• **new ParseStatus**(): [`ParseStatus`](Core.z.ParseStatus.md)

#### Returns

[`ParseStatus`](Core.z.ParseStatus.md)

## Properties

### value

• **value**: ``"aborted"`` \| ``"dirty"`` \| ``"valid"``

## Methods

### abort

▸ **abort**(): `void`

#### Returns

`void`

___

### dirty

▸ **dirty**(): `void`

#### Returns

`void`

___

### mergeArray

▸ **mergeArray**(`status`, `results`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`ParseStatus`](Core.z.ParseStatus.md) |
| `results` | [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>[] |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>

___

### mergeObjectAsync

▸ **mergeObjectAsync**(`status`, `pairs`): `Promise`\<[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`ParseStatus`](Core.z.ParseStatus.md) |
| `pairs` | \{ `key`: [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`any`\> ; `value`: [`ParseReturnType`](../modules/Core.z.md#parsereturntype)\<`any`\>  }[] |

#### Returns

`Promise`\<[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>\>

___

### mergeObjectSync

▸ **mergeObjectSync**(`status`, `pairs`): [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`ParseStatus`](Core.z.ParseStatus.md) |
| `pairs` | \{ `alwaysSet?`: `boolean` ; `key`: [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\> ; `value`: [`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>  }[] |

#### Returns

[`SyncParseReturnType`](../modules/Core.z.md#syncparsereturntype)\<`any`\>
