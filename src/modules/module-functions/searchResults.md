# searchResults

This function searches for content by keyword and returns an array of results.

## Signature
```js
async function searchResults(keyword)
```

## Input
- `keyword` (string): The search term.

## Output
- Stringified JSON array of objects:

```json
[
    {
        "title": "Example Title",
        "image": "https://your-source.com/title/image.jpg",
        "href": "https://your-source.com/title/123/"
    },
    {
        "title": "Another Title",
        "image": "https://your-source.com/another/image.jpg",
        "href": "https://your-source.com/another/456/"
    }
]
```

## Example Implementation
```js
async function searchResults(keyword) {
    try {
        const encodedKeyword = encodeURIComponent(keyword);
        const responseText = await fetch(`https://api.your-source.com/search?q=${encodedKeyword}`);
        const data = JSON.parse(responseText);
        const filteredAnimes = data.data.animes.filter(anime => anime.episodes.dub !== null);
        const transformedResults = filteredAnimes.map(anime => ({
            title: anime.name,
            image: anime.poster,
            href: `https://your-source.com/watch/${anime.id}`
        }));
        return JSON.stringify(transformedResults);
    } catch (error) {
        console.log('Fetch error:', error);
        return JSON.stringify([{ title: 'Error', image: '', href: '' }]);
    }
}
```
