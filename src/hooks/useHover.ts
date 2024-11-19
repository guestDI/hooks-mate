import { useState, useRef, useEffect, MutableRefObject } from 'react';

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
