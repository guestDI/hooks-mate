[**hooks-mate v0.0.1**](../README.md) • **Docs**

***

[hooks-mate v0.0.1](../README.md) / useLocalStorage

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

[useLocalStorage.ts:11](https://github.com/guestDI/hooks-mate/blob/350846f7dadcea6b0b5163ff1bb8b09e3085b88f/src/hooks/useLocalStorage.ts#L11)
