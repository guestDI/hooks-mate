[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useFetch

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

[useFetch.ts:10](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useFetch.ts#L10)
