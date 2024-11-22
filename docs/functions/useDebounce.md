[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useDebounce

# Function: useDebounce()

> **useDebounce**\<`T`\>(`value`, `delay`): `T`

useDebounce - The useDebounce hook delays updating a value until after a specified delay has passed since the last change.

## Type Parameters

• **T**

## Parameters

• **value**: `T`

(type T): The value to debounce.

• **delay**: `number`

The debounce delay in milliseconds.

## Returns

`T`

(type T): The debounced value.

## Example

```ts
function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log(`Fetching results for: ${debouncedSearchTerm}`);
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Debounced value: {debouncedSearchTerm}</p>
        </div>
    );
}
```

## Defined in

[useDebounce.ts:35](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useDebounce.ts#L35)
