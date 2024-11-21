[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useIdle

# Function: useIdle()

> **useIdle**(`__namedParameters`): `boolean`

## Parameters

• **\_\_namedParameters**: `UseIdleOptions`

## Returns

`boolean`

- value indicated if user is idle after specified period of time

## Example

```ts
function IdleDetector() {
    const isIdle = useIdle({ timeout: 5000, onIdle: () => console.log('User is idle') });

    return <div>{isIdle ? 'User is idle!' : 'User is active!'}</div>;
}
```

## Defined in

[useIdle.ts:21](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useIdle.ts#L21)
