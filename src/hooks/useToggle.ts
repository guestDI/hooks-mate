import { useState } from 'react';

export function useToggle(initialValue = false): [boolean, () => void] {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue((prev: boolean) => !prev);

    return [value, toggle];
}