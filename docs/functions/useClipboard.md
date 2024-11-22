[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useClipboard

# Function: useClipboard()

> **useClipboard**(): [`string` \| `null`, (`text`) => `void`]

## Returns

[`string` \| `null`, (`text`) => `void`]

- copied value and function to copy value

## Example

```ts
function ClipboardDemo() {
    const [copiedText, copyToClipboard] = useClipboard();
    const [inputValue, setInputValue] = useState('');

    const handleCopy = () => {
        copyToClipboard(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something to copy"
            />
            <button onClick={handleCopy}>Copy</button>
            {copiedText && <p>Copied: {copiedText}</p>}
        </div>
    );
}
```

## Defined in

[useClipboard.ts:30](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useClipboard.ts#L30)
