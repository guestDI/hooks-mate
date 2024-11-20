import { useEffect, useRef } from 'react';

/**
 *
 * @param callback Function to run on interval
 * @param delay Number
 *
 * @example
 * function Counter() {
 *     const [count, setCount] = useState(0);
 *     const [isRunning, setIsRunning] = useState(true);
 *
 *     useInterval(
 *         () => {
 *             setCount((prev) => prev + 1);
 *         },
 *         isRunning ? 1000 : null // Set to null to pause the interval
 *     );
 *
 *     return (
 *         <div style={{ textAlign: 'center', padding: '20px' }}>
 *             <h1>Count: {count}</h1>
 *             <button onClick={() => setIsRunning(!isRunning)}>
 *                 {isRunning ? 'Pause' : 'Resume'}
 *             </button>
 *             <button onClick={() => setCount(0)} style={{ marginLeft: '10px' }}>
 *                 Reset
 *             </button>
 *         </div>
 *     );
 * }
 */
export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const tick = () => {
                if (savedCallback.current) {
                    savedCallback.current();
                }
            };
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
