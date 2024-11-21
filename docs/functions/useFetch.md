[**react-hooks-mate v0.0.1**](../README.md) • **Docs**

***

[react-hooks-mate v0.0.1](../README.md) / useFetch

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

[useFetch.ts:10](https://github.com/guestDI/hooks-mate/blob/0ad1be308e3346f5183d8e1751c6475fdf60889b/src/hooks/useFetch.ts#L10)
