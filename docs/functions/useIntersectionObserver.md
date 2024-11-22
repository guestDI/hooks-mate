[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useIntersectionObserver

# Function: useIntersectionObserver()

> **useIntersectionObserver**(`callback`, `options`): `MutableRefObject`\<`null` \| `Element`\>

useIntersectionObserver - Observe when elements are visible in the viewport.

## Parameters

• **callback**: `IntersectionObserverCallback`

to run on element become visible

• **options**: `IntersectionObserverOptions` = `{}`

object with options

## Returns

`MutableRefObject`\<`null` \| `Element`\>

returns a {ref} that is attached to the element to be observed.

## Example

```ts
const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const callback: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const targetRef = useIntersectionObserver(callback, { threshold: 0.5 });

    return (
        <div>
            <h1>Scroll down to see the magic!</h1>
            <div style={{ height: '100vh' }} />
            <div
                ref={targetRef}
                style={{
                    height: '200px',
                    backgroundColor: isVisible ? 'lightgreen' : 'lightcoral',
                }}
            >
                {isVisible ? 'I am visible!' : 'Scroll more to see me!'}
            </div>
            <div style={{ height: '100vh' }} />
        </div>
    );
};
```

## Defined in

[useIntersectionObserver.ts:44](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useIntersectionObserver.ts#L44)
