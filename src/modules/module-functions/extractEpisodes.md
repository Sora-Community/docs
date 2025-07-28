# extractEpisodes

This function lists episodes for a show or movie.

## Signature
```js
async function extractEpisodes(url)
```

## Input
- `url` (string): The URL of the show/movie.

## Output
- Stringified JSON array of objects:

```json
[
    {
        "href": "https://your-source.com/episode/123",
        "number": 1
    },
    ...
]
```

::: warning Important
Return `number` as a number, not a string. Use `parseInt(number)` if needed.
:::

## Example Implementation
```js
async function extractEpisodes(url) {
    try {
        const match = url.match(/https:\/\/your-source\.com\/watch\/(.+)$/);
        const encodedID = match[1];
        const response = await fetch(`https://api.your-source.com/anime/${encodedID}/episodes`);
        const data = JSON.parse(response);
        const transformedResults = data.data.episodes.map(episode => ({
            href: `https://your-source.com/watch/${encodedID}?ep=${episode.episodeId.split('?ep=')[1]}`,
            number: episode.number
        }));
        return JSON.stringify(transformedResults);
    } catch (error) {
        console.log('Fetch error:', error);
        return JSON.stringify([]);
    }
}
```
