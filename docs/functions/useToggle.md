[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useToggle

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

[useToggle.ts:13](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useToggle.ts#L13)
