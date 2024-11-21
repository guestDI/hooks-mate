[**hooks-mate v0.0.1**](../README.md) • **Docs**

***

[hooks-mate v0.0.1](../README.md) / useOnClickOutside

# Function: useOnClickOutside()

> **useOnClickOutside**\<`T`\>(`ref`, `handler`): `void`

## Type Parameters

• **T** *extends* `HTMLElement`

## Parameters

• **ref**: `RefObject`\<`T`\>

• **handler**

## Returns

`void`

## Example

```ts
function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useOnClickOutside(dropdownRef, closeDropdown);

    return (
        <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                Toggle Dropdown
            </button>
            {isOpen && (
                <div ref={dropdownRef} style={{ border: '1px solid #ccc', padding: '10px' }}>
                    <p>Dropdown Content</p>
                </div>
            )}
        </div>
    );
}
```

## Defined in

[useOnClickOutside.ts:33](https://github.com/guestDI/hooks-mate/blob/350846f7dadcea6b0b5163ff1bb8b09e3085b88f/src/hooks/useOnClickOutside.ts#L33)
