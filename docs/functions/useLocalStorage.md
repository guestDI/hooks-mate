[**react-hooks-mate v0.0.1**](../README.md) • **Docs**

***

[react-hooks-mate v0.0.1](../README.md) / useLocalStorage

# Function: useLocalStorage()

> **useLocalStorage**\<`T`\>(`key`, `initialValue`): [`T`, (`value`) => `void`]

## Type Parameters

• **T**

## Parameters

• **key**: `string`

• **initialValue**: `T`

## Returns

[`T`, (`value`) => `void`]

Stored value and function to change it.

## Example

```ts
const [name, setName] = useLocalStorage('name', 'Guest');
```

## Defined in

[useLocalStorage.ts:11](https://github.com/guestDI/hooks-mate/blob/0ad1be308e3346f5183d8e1751c6475fdf60889b/src/hooks/useLocalStorage.ts#L11)
