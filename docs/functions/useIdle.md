[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useIdle

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

[useIdle.ts:21](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useIdle.ts#L21)
