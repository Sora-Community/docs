
# :bookmark: extractDetails

The `extractDetails` function fetches and returns detailed information about a specific item (such as an anime, movie, or show) from your source. This is used to display extra info when a user selects a result. :information_source:


## :bookmark_tabs: Signature

```js
async function extractDetails(url)
```


## :pencil2: Input

- `url` (string): The URL of the item to fetch details for.


## :outbox_tray: Output

- Stringified JSON object with details:

```json
{
    "description": "An exciting anime series about adventures.",
    "aliases": "Alternate Name",
    "airdate": "2022"
}
```


> :bulb: **Tip:**
> If your source doesn't provide certain details, you can use alternatives like Genre, Studio, etc. Just keep the keys consistent.


## :computer: Example Implementation

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


---

::: info :question: Need help?
If you’re having trouble with this function, check out the [Tips and Troubleshooting](https://sora.jm26.net/docs/modules/tips-and-troubleshooting) page for common issues and solutions. As always, feel free to ask for help in the [Sora Discord server](https://discord.gg/3a2c5b6):speech_balloon:
:::