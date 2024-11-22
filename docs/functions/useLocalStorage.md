[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useLocalStorage

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

[useLocalStorage.ts:11](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useLocalStorage.ts#L11)
