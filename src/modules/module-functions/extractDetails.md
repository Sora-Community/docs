# extractDetails

This function extracts details for a specific item (e.g., anime, movie, show).

## Signature
```js
async function extractDetails(url)
```

## Input
- `url` (string): The URL of the item.

## Output
- Stringified JSON object:

```json
{
    "description": "An exciting anime series about adventures.",
    "aliases": "Alternate Name",
    "airdate": "2022"
}
```

> **Tip:**
> If your source doesn't provide certain details, you can use alternatives like Genre, Studio, etc. Just keep the keys consistent.

## Example Implementation
```js
async function extractDetails(url) {
    try {
        const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
        const encodedID = match[1];
        const response = await fetch(`https://your-source.com/anime/${encodedID}`);
        const data = JSON.parse(response);
        const animeInfo = data.data.anime.info;
        const moreInfo = data.data.anime.moreInfo;
        return JSON.stringify({
            description: animeInfo.description || 'No description available',
            aliases: `Duration: ${animeInfo.stats?.duration || 'Unknown'}`,
            airdate: `Aired: ${moreInfo?.aired || 'Unknown'}`
        });
    } catch (error) {
        console.log('Details error:', error);
        return JSON.stringify({
            description: 'Error loading description',
            aliases: 'Duration: Unknown',
            airdate: 'Aired: Unknown'
        });
    }
}
```
