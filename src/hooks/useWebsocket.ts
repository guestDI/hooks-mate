import { useState, useEffect, useRef, useCallback } from 'react';

interface WebSocketOptions {
    reconnect?: boolean;
    reconnectInterval?: number;
    onOpen?: (event: Event) => void;
    onMessage?: (event: MessageEvent) => void;
    onError?: (event: Event) => void;
    onClose?: (event: CloseEvent) => void;
}

/**
 *
 * @param url
 * @param options
 * @example
 * function WebSocketExample() {
 *     const [inputMessage, setInputMessage] = useState('');
 *     const { isConnected, sendMessage, lastMessage } = useWebSocket('wss://example.com/socket', {
 *         reconnect: true,
 *         reconnectInterval: 3000,
 *         onOpen: () => console.log('WebSocket connected'),
 *         onMessage: (event) => console.log('Received message:', event.data),
 *         onError: (event) => console.error('WebSocket error:', event),
 *         onClose: () => console.log('WebSocket disconnected'),
 *     });
 *
 *     const handleSendMessage = () => {
 *         if (inputMessage.trim()) {
 *             sendMessage(inputMessage);
 *             setInputMessage('');
 *         }
 *     };
 *
 *     return (
 *         <div>
 *             <h1>WebSocket Example</h1>
 *             <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
 *             <p>Last Message: {lastMessage || 'No messages received yet'}</p>
 *             <input
 *                 type="text"
 *                 value={inputMessage}
 *                 onChange={(e) => setInputMessage(e.target.value)}
 *                 placeholder="Enter a message"
 *             />
 *             <button onClick={handleSendMessage} disabled={!isConnected}>
 *                 Send Message
 *             </button>
 *         </div>
 *     );
 * }
 * @returns {}
 */
export function useWebSocket(url: string, options: WebSocketOptions = {}) {
    const {
        reconnect = true,
        reconnectInterval = 5000,
        onOpen,
        onMessage,
        onError,
        onClose,
    } = options;

    const [isConnected, setIsConnected] = useState(false);
    const [lastMessage, setLastMessage] = useState<string | null>(null);
    const websocketRef = useRef<WebSocket | null>(null);
    const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);

    const connect = useCallback(() => {
        websocketRef.current = new WebSocket(url);

        websocketRef.current.onopen = (event) => {
            setIsConnected(true);
            onOpen?.(event);
        };

        websocketRef.current.onmessage = (event) => {
            setLastMessage(event.data);
            onMessage?.(event);
        };

        websocketRef.current.onerror = (event) => {
            onError?.(event);
        };

        websocketRef.current.onclose = (event) => {
            setIsConnected(false);
            onClose?.(event);
            if (reconnect) {
                reconnectTimeout.current = setTimeout(connect, reconnectInterval);
            }
        };
    }, [url, reconnect, reconnectInterval, onOpen, onMessage, onError, onClose]);

    const sendMessage = useCallback(
        (message: string) => {
            if (isConnected && websocketRef.current) {
                websocketRef.current.send(message);
            }
        },
        [isConnected]
    );

    useEffect(() => {
        connect();

        return () => {
            websocketRef.current?.close();
            if (reconnectTimeout.current) {
                clearTimeout(reconnectTimeout.current);
            }
        };
    }, [connect]);

    return { isConnected, sendMessage, lastMessage };
}
