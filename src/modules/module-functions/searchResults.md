
# :mag: searchResults

The `searchResults` function lets your module search for content by keyword and return a list of results for Sora to display. This is the entry point for users to discover shows, movies, or other items from your source. :sparkles:


## :bookmark_tabs: Signature

```js
async function searchResults(keyword)
```


## :pencil2: Input

- `keyword` (string): The search term entered by the user.


## :outbox_tray: Output

- Stringified JSON array of objects, each representing a search result:

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


## :computer: Example Implementation

```js
async function searchResults(keyword) {
    try {
        const encodedKeyword = encodeURIComponent(keyword);
        const responseText = await fetch(`https://api.your-source.com/search?q=${encodedKeyword}`);
        const data = JSON.parse(responseText);
        // Filter and map results to Sora's expected format
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


---

::: info :question: Need help?
If you’re having trouble with this function, check out the [Tips and Troubleshooting](https://sora.jm26.net/docs/modules/tips-and-troubleshooting) page for common issues and solutions. As always, feel free to ask for help in the [Sora Discord server](https://discord.gg/3a2c5b6):speech_balloon:
:::