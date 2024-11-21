[**hooks-mate v0.0.1**](../README.md) • **Docs**

***

[hooks-mate v0.0.1](../README.md) / useToggle

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

[useToggle.ts:13](https://github.com/guestDI/hooks-mate/blob/350846f7dadcea6b0b5163ff1bb8b09e3085b88f/src/hooks/useToggle.ts#L13)
