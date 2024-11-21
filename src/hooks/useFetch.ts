import { useState, useEffect } from 'react';

/**
 *
 * @param url
 * @returns { data, loading, error } - fetched data, loading state and error text
 * @example
 * const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
 */
export function useFetch<T>(url: string): { data: T | null; loading: boolean; error: Error | null } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}
