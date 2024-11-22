import { useMemo } from "react";

interface UseCalculateReadTimeOptions {
    wordsPerMinute?: number;
}

/**
 * This hook calculates the estimated reading time of an article based on the word count.
 * It assumes an average reading speed of 200 words per minute, which can be customized.
 * @param content - string to calculate
 * @param options - read time options. For now three only wordsPerMinute prop
 * @return {string} - read time
 * @example
 * export const Article = () => {
 *   const [content, setContent] = useState(
 *     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci et augue congue varius ut sit amet dolor."
 *   );
 *
 *   const readTime = useCalculateReadTime(content);
 *
 *   return (
 *     <div>
 *       <textarea
 *         value={content}
 *         onChange={(e) => setContent(e.target.value)}
 *         rows={10}
 *         cols={50}
 *       />
 *       <p>Estimated Reading Time: {readTime}</p>
 *     </div>
 *   );
 */

export function useCalculateReadTime(
    content: string,
    options: UseCalculateReadTimeOptions = {}
): string {
    const { wordsPerMinute = 200 } = options;

    const readTime = useMemo(() => {
        const words = content.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min read`;
    }, [content, wordsPerMinute]);

    return readTime;
}
