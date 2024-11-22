[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useHover

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

[useHover.ts:14](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useHover.ts#L14)
