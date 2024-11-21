[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useOnlineStatus

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

[useOnlineStatus.ts:13](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useOnlineStatus.ts#L13)
