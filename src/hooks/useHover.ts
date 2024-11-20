import { useState, useRef, useEffect, MutableRefObject } from 'react';

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

export function useHover<T extends HTMLElement>(): [MutableRefObject<T | null>, boolean] {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const handleMouseOver = () => setHovered(true);
        const handleMouseOut = () => setHovered(false);

        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            if (node) {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            }
        };
    }, []);

    return [ref, hovered];
}
