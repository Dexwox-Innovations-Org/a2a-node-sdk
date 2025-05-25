[A2A Node SDK - v0.1.0](../README.md) / [Modules](../modules.md) / [Core](../modules/Core.md) / TaskErrorCode

# Enumeration: TaskErrorCode

[Core](../modules/Core.md).TaskErrorCode

Error codes specific to task operations

These error codes are used to identify specific issues that can occur
when working with tasks, such as invalid state transitions or missing
required properties.

## Table of contents

### Enumeration Members

- [InvalidState](Core.TaskErrorCode.md#invalidstate)
- [InvalidTransition](Core.TaskErrorCode.md#invalidtransition)
- [MissingTaskId](Core.TaskErrorCode.md#missingtaskid)

## Enumeration Members

### InvalidState

• **InvalidState** = ``-32072``

Error code when a task state is invalid (-32072)

___

### InvalidTransition

• **InvalidTransition** = ``-32070``

Error code when a task state transition is invalid (-32070)

___

### MissingTaskId

• **MissingTaskId** = ``-32071``

Error code when a task is missing a required ID (-32071)
