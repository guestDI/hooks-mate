[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useThrottle

# Function: useThrottle()

> **useThrottle**\<`T`\>(`callback`, `delay`): (...`args`) => `void`

useThrottle: The useThrottle hook ensures the callback function is executed at most once every delay milliseconds.
Ideal for rate-limiting actions such as API calls or handling high-frequency events like scrolling or clicking.

## Type Parameters

• **T** *extends* (...`args`) => `void`

## Parameters

• **callback**: `T`

• **delay**: `number`

## Returns

`Function`

### Parameters

• ...**args**: `Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
function ThrottleExample() {
    const [count, setCount] = useState(0);
    const [clicks, setClicks] = useState(0);

    const throttledClick = useThrottle(() => {
        setCount((prev) => prev + 1);
    }, 2000);

    const handleClick = () => {
        setClicks((prev) => prev + 1);
        throttledClick();
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Throttled Count: {count}</h1>
            <h2>Total Clicks: {clicks}</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
```

## Defined in

[useThrottle.ts:33](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useThrottle.ts#L33)
