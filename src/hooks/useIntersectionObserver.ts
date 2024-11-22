import { useEffect, useRef } from 'react';

type IntersectionObserverOptions = {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
};

/**
 * useIntersectionObserver - Observe when elements are visible in the viewport.
 * @param callback - to run on element become visible
 * @param options - object with options
 * @return returns a {ref} that is attached to the element to be observed.
 * @example
 * const App: React.FC = () => {
 *     const [isVisible, setIsVisible] = useState(false);
 *
 *     const callback: IntersectionObserverCallback = (entries) => {
 *         const [entry] = entries;
 *         setIsVisible(entry.isIntersecting);
 *     };
 *
 *     const targetRef = useIntersectionObserver(callback, { threshold: 0.5 });
 *
 *     return (
 *         <div>
 *             <h1>Scroll down to see the magic!</h1>
 *             <div style={{ height: '100vh' }} />
 *             <div
 *                 ref={targetRef}
 *                 style={{
 *                     height: '200px',
 *                     backgroundColor: isVisible ? 'lightgreen' : 'lightcoral',
 *                 }}
 *             >
 *                 {isVisible ? 'I am visible!' : 'Scroll more to see me!'}
 *             </div>
 *             <div style={{ height: '100vh' }} />
 *         </div>
 *     );
 * };
 */

export function useIntersectionObserver(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverOptions = {}
) {
    const targetRef = useRef<Element | null>(null);

    useEffect(() => {
        if (!targetRef.current) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(targetRef.current);

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [callback, options]);

    return targetRef;
}
