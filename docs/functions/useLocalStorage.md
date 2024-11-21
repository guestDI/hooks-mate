[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useLocalStorage

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

[useLocalStorage.ts:11](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useLocalStorage.ts#L11)
