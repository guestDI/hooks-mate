[**react-hooks-mate v0.0.1**](../README.md) • **Docs**

***

[react-hooks-mate v0.0.1](../README.md) / useToggle

# Function: useToggle()

> **useToggle**(`initialValue`?): [`boolean`, () => `void`]

useToggle - custom hook for switching state (boolean).

## Parameters

• **initialValue?**: `boolean` = `false`

initial value.

## Returns

[`boolean`, () => `void`]

Initial value and function to change it.

## Example

```ts
const [isOn, toggle] = useToggle(false);
return <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>;
```

## Defined in

[useToggle.ts:13](https://github.com/guestDI/hooks-mate/blob/0ad1be308e3346f5183d8e1751c6475fdf60889b/src/hooks/useToggle.ts#L13)
