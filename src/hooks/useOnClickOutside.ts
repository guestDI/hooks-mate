import { useEffect } from 'react';

/**
 *
 * @param ref
 * @param handler
 *
 * @example
 * function Dropdown() {
 *     const [isOpen, setIsOpen] = useState(false);
 *     const dropdownRef = useRef(null);
 *
 *     const closeDropdown = () => {
 *         setIsOpen(false);
 *     };
 *
 *     useOnClickOutside(dropdownRef, closeDropdown);
 *
 *     return (
 *         <div>
 *             <button onClick={() => setIsOpen((prev) => !prev)}>
 *                 Toggle Dropdown
 *             </button>
 *             {isOpen && (
 *                 <div ref={dropdownRef} style={{ border: '1px solid #ccc', padding: '10px' }}>
 *                     <p>Dropdown Content</p>
 *                 </div>
 *             )}
 *         </div>
 *     );
 * }
 */
export function useOnClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void): void {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) return;
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
