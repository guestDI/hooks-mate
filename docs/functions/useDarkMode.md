[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useDarkMode

# Function: useDarkMode()

> **useDarkMode**(): `object`

useDarkMode - manages dark mode toggle and persists the setting in local storage

## Returns

`object`

### isDarkMode

> **isDarkMode**: `any`

### toggleDarkMode()

> **toggleDarkMode**: () => `void`

#### Returns

`void`

## Example

```ts
function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <p>Current Mode: {isDarkMode ? "Dark" : "Light"}</p>
            <button onClick={toggleDarkMode}>
                Toggle to {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
}
```

## Defined in

[useDarkMode.ts:19](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useDarkMode.ts#L19)
