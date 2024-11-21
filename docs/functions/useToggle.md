[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useToggle

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

[useToggle.ts:13](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useToggle.ts#L13)
