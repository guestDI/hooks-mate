import { useState, useCallback } from 'react';

/**
 *
 * @returns {[value, function]} - copied value and function to copy value
 * @example
 * function ClipboardDemo() {
 *     const [copiedText, copyToClipboard] = useClipboard();
 *     const [inputValue, setInputValue] = useState('');
 *
 *     const handleCopy = () => {
 *         copyToClipboard(inputValue);
 *     };
 *
 *     return (
 *         <div>
 *             <input
 *                 type="text"
 *                 value={inputValue}
 *                 onChange={(e) => setInputValue(e.target.value)}
 *                 placeholder="Type something to copy"
 *             />
 *             <button onClick={handleCopy}>Copy</button>
 *             {copiedText && <p>Copied: {copiedText}</p>}
 *         </div>
 *     );
 * }
 */

export function useClipboard(): [string | null, (text: string) => void] {
    const [copiedText, setCopiedText] = useState<string | null>(null);

    const copyToClipboard = useCallback((text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(text);
        }).catch(() => {
            console.error('Failed to copy text to clipboard');
        });
    }, []);

    return [copiedText, copyToClipboard];
}
