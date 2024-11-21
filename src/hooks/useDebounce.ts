import { useState, useEffect } from 'react';

/**
 * useDebounce - The useDebounce hook delays updating a value until after a specified delay has passed since the last change.
 *
 * @param value (type T): The value to debounce.
 * @param delay The debounce delay in milliseconds.
 *
 * @returns {debouncedValue} (type T): The debounced value.
 *
 * @example
 * function SearchComponent() {
 *     const [searchTerm, setSearchTerm] = useState('');
 *     const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 *     useEffect(() => {
 *         if (debouncedSearchTerm) {
 *             console.log(`Fetching results for: ${debouncedSearchTerm}`);
 *         }
 *     }, [debouncedSearchTerm]);
 *
 *     return (
 *         <div>
 *             <input
 *                 type="text"
 *                 placeholder="Search..."
 *                 value={searchTerm}
 *                 onChange={(e) => setSearchTerm(e.target.value)}
 *             />
 *             <p>Debounced value: {debouncedSearchTerm}</p>
 *         </div>
 *     );
 * }
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}
