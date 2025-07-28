
# :clapper: extractEpisodes

The `extractEpisodes` function lists all episodes for a show or movie, so users can pick which one to watch. It should return a list of episode links and numbers in the correct order. :tv:


## :bookmark_tabs: Signature

```js
async function extractEpisodes(url)
```


## :pencil2: Input

- `url` (string): The URL of the show or movie to fetch episodes for.


## :outbox_tray: Output

- Stringified JSON array of objects, each representing an episode:

```json
[
    {
        "href": "https://your-source.com/episode/123",
        "number": 1
    },
    ...
]
```


> :warning: **Important:**
> Return `number` as a number, not a string. Use `parseInt(number)` if needed.


## :computer: Example Implementation

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


---

::: info :question: Need help?
If you’re having trouble with this function, check out the [Tips and Troubleshooting](https://sora.jm26.net/docs/modules/tips-and-troubleshooting) page for common issues and solutions. As always, feel free to ask for help in the [Sora Discord server](https://discord.gg/3a2c5b6):speech_balloon:
:::