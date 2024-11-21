[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useInterval

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

[useInterval.ts:33](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useInterval.ts#L33)
