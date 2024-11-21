import { useRef } from 'react';

/**
 * useThrottle: The useThrottle hook ensures the callback function is executed at most once every delay milliseconds.
 * Ideal for rate-limiting actions such as API calls or handling high-frequency events like scrolling or clicking.
 *
 * @param callback
 * @param delay
 *
 * @example
 * function ThrottleExample() {
 *     const [count, setCount] = useState(0);
 *     const [clicks, setClicks] = useState(0);
 *
 *     const throttledClick = useThrottle(() => {
 *         setCount((prev) => prev + 1);
 *     }, 2000);
 *
 *     const handleClick = () => {
 *         setClicks((prev) => prev + 1);
 *         throttledClick();
 *     };
 *
 *     return (
 *         <div style={{ textAlign: 'center', padding: '20px' }}>
 *             <h1>Throttled Count: {count}</h1>
 *             <h2>Total Clicks: {clicks}</h2>
 *             <button onClick={handleClick}>Click Me</button>
 *         </div>
 *     );
 * }
 */
export function useThrottle<T extends (...args: any[]) => void>(callback: T, delay: number) {
    const lastCall = useRef<number>(0);

    return (...args: Parameters<T>) => {
        const now = Date.now();

        if (now - lastCall.current >= delay) {
            lastCall.current = now;
            callback(...args);
        }
    };
}
