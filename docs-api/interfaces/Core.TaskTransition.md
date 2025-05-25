[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / TaskTransition

# Interface: TaskTransition

[Core](../modules/Core.md).TaskTransition

Represents a transition between task states

**`Remarks`**

Used to track the history and progression of a task

## Table of contents

### Properties

- [from](Core.TaskTransition.md#from)
- [reason](Core.TaskTransition.md#reason)
- [timestamp](Core.TaskTransition.md#timestamp)
- [to](Core.TaskTransition.md#to)

## Properties

### from

• **from**: ``"submitted"`` \| ``"working"`` \| ``"input_required"`` \| ``"completed"`` \| ``"failed"`` \| ``"canceled"``

The state the task is transitioning from

___

### reason

• `Optional` **reason**: `string`

Optional explanation for why the transition occurred

___

### timestamp

• **timestamp**: `string`

ISO timestamp when the transition occurred

___

### to

• **to**: ``"submitted"`` \| ``"working"`` \| ``"input_required"`` \| ``"completed"`` \| ``"failed"`` \| ``"canceled"``

The state the task is transitioning to
