[**react-hooks-mate v0.0.1**](../README.md) • **Docs**

***

[react-hooks-mate v0.0.1](../README.md) / useHover

# Function: useHover()

> **useHover**\<`T`\>(): [`MutableRefObject`\<`T` \| `null`\>, `boolean`]

useToggle - custom hook for switching state (boolean).

## Type Parameters

• **T** *extends* `HTMLElement`

## Returns

[`MutableRefObject`\<`T` \| `null`\>, `boolean`]

Ref for an element, boolean value to track if hovered.

## Example

```ts
const [hoverRef, isHovered] = useHover()
return <div ref={hoverRef} style={{ backgroundColor: isHovered ? 'blue' : 'gray' }}>
        Hover over me!
    </div>
```

## Defined in

[useHover.ts:14](https://github.com/guestDI/hooks-mate/blob/0ad1be308e3346f5183d8e1751c6475fdf60889b/src/hooks/useHover.ts#L14)
