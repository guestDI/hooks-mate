[**hooks-mate v0.0.1**](../README.md) • **Docs**

***

[hooks-mate v0.0.1](../README.md) / useHover

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

[useHover.ts:14](https://github.com/guestDI/hooks-mate/blob/350846f7dadcea6b0b5163ff1bb8b09e3085b88f/src/hooks/useHover.ts#L14)
