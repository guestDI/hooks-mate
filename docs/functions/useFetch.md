[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useFetch

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

[useFetch.ts:10](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useFetch.ts#L10)
