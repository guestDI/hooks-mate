[**react-hooks-mate v0.0.1**](../README.md) • **Docs**

***

[react-hooks-mate v0.0.1](../README.md) / useInterval

# Function: useInterval()

> **useInterval**(`callback`, `delay`): `void`

## Parameters

• **callback**

Function to run on interval

• **delay**: `null` \| `number`

Number

## Returns

`void`

## Example

```ts
function Counter() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useInterval(
        () => {
            setCount((prev) => prev + 1);
        },
        isRunning ? 1000 : null // Set to null to pause the interval
    );

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Count: {count}</h1>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Resume'}
            </button>
            <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
                Reset
            </button>
        </div>
    );
}
```

## Defined in

[useInterval.ts:33](https://github.com/guestDI/hooks-mate/blob/0ad1be308e3346f5183d8e1751c6475fdf60889b/src/hooks/useInterval.ts#L33)
