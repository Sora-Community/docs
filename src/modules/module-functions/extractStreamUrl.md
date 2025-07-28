
# :arrow_forward: extractStreamUrl

The `extractStreamUrl` function provides the direct stream URL (or multiple server options) for an episode or movie. This is what Sora uses to play the video. You can return a single URL, a list of servers, or even include subtitles. :movie_camera:


## :bookmark_tabs: Signature

```js
async function extractStreamUrl(url)
```


## :pencil2: Input

- `url` (string): The URL of the episode or movie to fetch the stream for.


## :outbox_tray: Output

You can return different formats depending on your source.

> :star: **Pro Tip:**
> The [Global Extractor](https://github.com/JMcrafter26/sora-global-extractor) supports many providers, is easy to integrate, and comes with auto-update features.



## :globe_with_meridians: Multi Server Selector (Recommended)

Return a list of servers so users can pick the best one. This is the most flexible format:

```json
{
  "streams": [
    {
      "title": "Server 1",
      "streamUrl": "https://your-source.com/stream1.m3u8",
      "headers": {}
    },
    {
      "title": "Server 2",
      "streamUrl": "https://some-other-source.com/stream2.m3u8",
      "headers": {}
    }
  ]
}
```

The `headers` field is optional and can be used for sources that require custom headers (like `User-Agent` or `Referer`).


### :computer: Example Implementation

```js
async function extractStreamUrl(url) {
  try {
    const match = url.match(/https:\/\/your-source\.com\/watch\/(.+)$/);
    const encodedID = match[1];
    const response = await fetch(`https://api.your-source.com/sources?id=${encodedID}`);
    const data = JSON.parse(response);
    if (!data.data || !data.data.sources) {
      return JSON.stringify({ streams: [] });
    }
    let streams = [];
    data.data.sources.forEach(source => {
      if (source.type === 'hls') {
        streams.push({
          title: source.serverName || 'Default Server',
          streamUrl: source.url,
          headers: {} // Add any required headers here
        });
      }
    });
    return JSON.stringify({ streams });
  } catch (error) {
    console.log('Fetch error:', error);
    return JSON.stringify({ streams: [] });
  }
}
```


## :link: Direct Stream URL

Return a single stream URL as a string if your source only has one server:

```
https://your-source.com/stream/video.mp4
```


### :computer: Example Implementation

```js
async function extractStreamUrl(url) {
  try {
    const match = url.match(/https:\/\/your-source\.com\/watch\/(.+)$/);
    const encodedID = match[1];
    const response = await fetch(`https://api.your-source.com/sources?id=${encodedID}`);
    const data = JSON.parse(response);
    const hlsSource = data.data.sources.find(source => source.type === 'hls');
    return hlsSource ? hlsSource.url : null;
  } catch (error) {
    console.log('Fetch error:', error);
    return null;
  }
}
```


## :closed_book: Subtitles

If your source provides subtitles, you can include them in the output. Remember to set `softsubs` to `true` in your manifest JSON if you include subtitles.


### Subtitles with Multi Server Selector

```json
{
  "streams": [
    {
      "title": "Server 1",
      "streamUrl": "https://your-source.com/stream1.m3u8",
      "headers": {}
    }
  ],
  "subtitle": "https://your-source.com/subtitles.vtt"
}
```

### Subtitles with Direct Stream URL

Return a stringified object with both the stream and subtitle URLs:

```json
{
  "streamUrl": "https://your-source.com/stream/video.mp4",
  "subtitle": "https://your-source.com/subtitles.vtt"
}
```

---

::: info :question: Need help?
If you’re having trouble with this function, check out the [Tips and Troubleshooting](https://sora.jm26.net/docs/modules/tips-and-troubleshooting) page for common issues and solutions. As always, feel free to ask for help in the [Sora Discord server](https://discord.gg/3a2c5b6):speech_balloon:
:::