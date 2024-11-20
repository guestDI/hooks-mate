import { useRef, useEffect } from 'react';

/**
 * useToggle - custom hook for switching state (boolean).
 *
 * @param value initial value.
 * @returns previous value.
 *
 * @example
 * const previousCount = usePrevious(count);
 */
export function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}
