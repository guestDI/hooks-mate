import {useState, useEffect, useRef, useCallback, RefObject} from 'react';

/**
 * useInfiniteScroll - custom hook for handling infinite scroll while fetching data.
 *
 * @param fetchData - function to load data
 * @param options - infinite scroll options: threshold, hasMore
 *
 * example
 * import { useInfiniteScroll } from './useInfiniteScroll';
 *
 * const fetchItems = async () => {
 *     // replace with API call
 *     return new Promise<string[]>((resolve) =>
 *         setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 1000)
 *     );
 * };
 *
 * const InfiniteScrollComponent: React.FC = () => {
 *     const { data, loading, error, observerRef } = useInfiniteScroll(fetchItems, {
 *         hasMore: true,
 *         threshold: 0.5,
 *     });
 *
 *     return (
 *         <div>
 *             {data.map((item, index) => (
 *                 <div key={index}>{item}</div>
 *             ))}
 *             {loading && <p>Loading...</p>}
 *             {error && <p>Error: {error.message}</p>}
 *             <div ref={observerRef} style={{ height: '20px', background: 'lightgray' }} />
 *         </div>
 *     );
 * };
 *
 */

interface UseInfiniteScrollOptions {
    threshold?: number;
    hasMore?: boolean;
}

interface UseInfiniteScrollReturn<T> {
    data: T[];
    loading: boolean;
    error: Error | null;
    observerRef: RefObject<HTMLDivElement>;
}

export function useInfiniteScroll<T>(
    fetchData: () => Promise<T[]>,
    options: UseInfiniteScrollOptions = {}
): UseInfiniteScrollReturn<T> {
    const { threshold = 0.8, hasMore = true } = options;
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        setError(null);
        try {
            const newData = await fetchData();
            setData((prevData) => [...prevData, ...newData]);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setLoading(false);
        }
    }, [fetchData, loading, hasMore]);

    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            { threshold }
        );

        const refElement = observerRef.current;
        if (refElement) observer.observe(refElement);

        return () => {
            if (refElement) observer.unobserve(refElement);
        };
    }, [loadMore, hasMore, threshold]);

    return { data, loading, error, observerRef };
}