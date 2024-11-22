[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useWebSocket

# Function: useWebSocket()

> **useWebSocket**(`url`, `options`): `object`

## Parameters

• **url**: `string`

• **options**: `WebSocketOptions` = `{}`

## Returns

`object`

### isConnected

> **isConnected**: `boolean`

### lastMessage

> **lastMessage**: `null` \| `string`

### sendMessage()

> **sendMessage**: (`message`) => `void`

#### Parameters

• **message**: `string`

#### Returns

`void`

## Example

```ts
function WebSocketExample() {
    const [inputMessage, setInputMessage] = useState('');
    const { isConnected, sendMessage, lastMessage } = useWebSocket('wss://example.com/socket', {
        reconnect: true,
        reconnectInterval: 3000,
        onOpen: () => console.log('WebSocket connected'),
        onMessage: (event) => console.log('Received message:', event.data),
        onError: (event) => console.error('WebSocket error:', event),
        onClose: () => console.log('WebSocket disconnected'),
    });

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            sendMessage(inputMessage);
            setInputMessage('');
        }
    };

    return (
        <div>
            <h1>WebSocket Example</h1>
            <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
            <p>Last Message: {lastMessage || 'No messages received yet'}</p>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Enter a message"
            />
            <button onClick={handleSendMessage} disabled={!isConnected}>
                Send Message
            </button>
        </div>
    );
}
```

## Defined in

[useWebsocket.ts:54](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useWebsocket.ts#L54)
