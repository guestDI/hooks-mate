[**react-hooks-mate v0.0.1**](../README.md) • **Docs**

***

[react-hooks-mate v0.0.1](../README.md) / useMediaQuery

# Function: useMediaQuery()

> **useMediaQuery**(`query`): `boolean`

## Parameters

• **query**: `string`

## Returns

`boolean`

## Example

```ts
function MediaQueryExample() {
    const isLargeScreen = useMediaQuery('(min-width: 1024px)');
    const isPortrait = useMediaQuery('(orientation: portrait)');

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Responsive Design Checker</h1>
            <p>Screen size: {isLargeScreen ? 'Large (≥ 1024px)' : 'Small (< 1024px)'}</p>
            <p>Orientation: {isPortrait ? 'Portrait' : 'Landscape'}</p>
        </div>
    );
}
```

## Defined in

[useMediaQuery.ts:21](https://github.com/guestDI/hooks-mate/blob/0ad1be308e3346f5183d8e1751c6475fdf60889b/src/hooks/useMediaQuery.ts#L21)
