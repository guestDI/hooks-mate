[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useMediaQuery

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

[useMediaQuery.ts:21](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useMediaQuery.ts#L21)
