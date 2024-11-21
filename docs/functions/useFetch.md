[**hooks-mate v0.0.1**](../README.md) • **Docs**

***

[hooks-mate v0.0.1](../README.md) / useFetch

# Function: useFetch()

> **useFetch**\<`T`\>(`url`): `object`

## Type Parameters

• **T**

## Parameters

• **url**: `string`

## Returns

`object`

- fetched data, loading state and error text

### data

> **data**: `T` \| `null`

### error

> **error**: `Error` \| `null`

### loading

> **loading**: `boolean`

## Example

```ts
const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
```

## Defined in

[useFetch.ts:10](https://github.com/guestDI/hooks-mate/blob/350846f7dadcea6b0b5163ff1bb8b09e3085b88f/src/hooks/useFetch.ts#L10)
