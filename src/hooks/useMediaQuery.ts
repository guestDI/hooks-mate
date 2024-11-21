import { useEffect, useState } from 'react';

/**
 *
 * @param query
 *
 * @example
 * function MediaQueryExample() {
 *     const isLargeScreen = useMediaQuery('(min-width: 1024px)');
 *     const isPortrait = useMediaQuery('(orientation: portrait)');
 *
 *     return (
 *         <div style={{ textAlign: 'center', padding: '20px' }}>
 *             <h1>Responsive Design Checker</h1>
 *             <p>Screen size: {isLargeScreen ? 'Large (≥ 1024px)' : 'Small (< 1024px)'}</p>
 *             <p>Orientation: {isPortrait ? 'Portrait' : 'Landscape'}</p>
 *         </div>
 *     );
 * }
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
}
