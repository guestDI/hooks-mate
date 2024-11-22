[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useWindowSize

# Function: useWindowSize()

> **useWindowSize**(): `object`

## Returns

`object`

(type T): window size

### height

> **height**: `number` = `window.innerHeight`

### width

> **width**: `number` = `window.innerWidth`

## Example

```ts
function ResponsiveComponent() {
    const { width, height } = useWindowSize();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Responsive Component</h1>
            <p>
                Current window size: {width}px x {height}px
            </p>
            {width < 768 ? (
                <p style={{ color: 'blue' }}>You are on a small screen.</p>
            ) : (
                <p style={{ color: 'green' }}>You are on a large screen.</p>
            )}
        </div>
    );
}
```

## Defined in

[useWindowSize.ts:25](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useWindowSize.ts#L25)
