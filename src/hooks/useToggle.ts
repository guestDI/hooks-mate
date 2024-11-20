import { useState } from 'react';

/**
 * useToggle - custom hook for switching state (boolean).
 *
 * @param {boolean} [initialValue=false] initial value.
 * @returns {[boolean, () => void]} Initial value and function to change it.
 *
 * @example
 * const [isOn, toggle] = useToggle(false);
 * return <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>;
 */
export function useToggle(initialValue = false): [boolean, () => void] {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue((prev: boolean) => !prev);

    return [value, toggle];
}