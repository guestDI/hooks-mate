[**react-hooks-mate v0.1.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.1.0](../README.md) / useClipboard

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

[useClipboard.ts:30](https://github.com/guestDI/hooks-mate/blob/7d47908a449d58c331b7bd1cdadbbed307af5ba7/src/hooks/useClipboard.ts#L30)
