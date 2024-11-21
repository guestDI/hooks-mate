import { useState, useEffect } from 'react';

interface UseIdleOptions {
    timeout: number;
    onIdle?: () => void;
}

/**
 *
 * @param timeout - timeout in milliseconds
 * @param onIdle - callback when timeout is reached
 * @return {boolean} - value indicated if user is idle after specified period of time
 * @example
 * function IdleDetector() {
 *     const isIdle = useIdle({ timeout: 5000, onIdle: () => console.log('User is idle') });
 *
 *     return <div>{isIdle ? 'User is idle!' : 'User is active!'}</div>;
 * }
 */

export function useIdle({ timeout, onIdle }: UseIdleOptions): boolean {
    const [isIdle, setIsIdle] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const reset = () => {
            clearTimeout(timer);
            setIsIdle(false);
            timer = setTimeout(() => {
                setIsIdle(true);
                onIdle?.();
            }, timeout);
        };

        const events = ['mousemove', 'keydown', 'scroll', 'touchstart'];
        events.forEach((event) => window.addEventListener(event, reset));
        reset();

        return () => {
            clearTimeout(timer);
            events.forEach((event) => window.removeEventListener(event, reset));
        };
    }, [timeout, onIdle]);

    return isIdle;
}
