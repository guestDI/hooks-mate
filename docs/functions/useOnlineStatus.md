[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useOnlineStatus

# Function: useOnlineStatus()

> **useOnlineStatus**(): `boolean`

## Returns

`boolean`

- boolean value indicated if online

## Example

```ts
function OnlineStatusIndicator() {
    const isOnline = useOnlineStatus();

    return <div>{isOnline ? 'You are online!' : 'You are offline!'}</div>;
}
```

## Defined in

[useOnlineStatus.ts:13](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useOnlineStatus.ts#L13)
