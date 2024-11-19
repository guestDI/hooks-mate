import { useState, useEffect, useRef, useCallback } from 'react';

export function useInfiniteScroll(fetchData, options = {}) {
    const { threshold = 0.8, hasMore = true } = options;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const observerRef = useRef();

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);
        setError(null);
        try {
            const newData = await fetchData();
            setData((prevData) => [...prevData, ...newData]);
        } catch (err) {
            setError(err);
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

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [loadMore, hasMore, threshold]);

    return { data, loading, error, observerRef };
}