import { useState, useEffect } from 'react';

/**
 * @return {windowSize} (type T): window size
 *
 * @example
 * function ResponsiveComponent() {
 *     const { width, height } = useWindowSize();
 *
 *     return (
 *         <div style={{ padding: '20px', textAlign: 'center' }}>
 *             <h1>Responsive Component</h1>
 *             <p>
 *                 Current window size: {width}px x {height}px
 *             </p>
 *             {width < 768 ? (
 *                 <p style={{ color: 'blue' }}>You are on a small screen.</p>
 *             ) : (
 *                 <p style={{ color: 'green' }}>You are on a large screen.</p>
 *             )}
 *         </div>
 *     );
 * }
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}