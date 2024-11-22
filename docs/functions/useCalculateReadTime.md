[**react-hooks-mate v0.2.0**](../README.md) • **Docs**

***

[react-hooks-mate v0.2.0](../README.md) / useCalculateReadTime

# Function: useCalculateReadTime()

> **useCalculateReadTime**(`content`, `options`): `string`

This hook calculates the estimated reading time of an article based on the word count.
It assumes an average reading speed of 200 words per minute, which can be customized.

## Parameters

• **content**: `string`

string to calculate

• **options**: `UseCalculateReadTimeOptions` = `{}`

read time options. For now three only wordsPerMinute prop

## Returns

`string`

- read time

## Example

```ts
export const Article = () => {
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac orci et augue congue varius ut sit amet dolor."
  );

  const readTime = useCalculateReadTime(content);

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        cols={50}
      />
      <p>Estimated Reading Time: {readTime}</p>
    </div>
  );
```

## Defined in

[useCalculateReadTime.ts:34](https://github.com/guestDI/hooks-mate/blob/7fcffaab145279ba879492f8d016e618100679c0/src/hooks/useCalculateReadTime.ts#L34)
