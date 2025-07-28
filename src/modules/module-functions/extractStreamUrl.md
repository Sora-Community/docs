# extractStreamUrl

This function gets the direct stream URL for an episode or movie.

## Signature
```js
async function extractStreamUrl(url)
```

## Input
- `url` (string): The URL of the episode or movie.

## Output

This function allows multiple output formats, choose the one that suits your needs.

::: tip Pro Tip
We recommend using [Global Extractor](https://github.com/JMcrafter26/sora-global-extractor).
It already supports many providers (like Voe, Filemoon, Doodstream,...), is easy to integrate and even comes with an auto update feature.
:::

::: warning
The example implementations below are only for demonstration purposes and may not work with your specific source. You will need to adapt them to your source's API or structure.
:::

## Multi Server Selector <Badge type="tip" text="Recommended" />

This is the recommended output format, which allows users to select a server.

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
    },
    {
      "title": "Server 3",
      "streamUrl": "https://another-source.com/stream3.m3u8",
      "headers": {}
    }
  ]
}
```

### Headers
The `headers` field is optional and can be used to include any required headers for the stream URL. If your source does not require headers, you can leave it as an empty object `{}`.

Headers are useful for sources that require `User-Agent`, `Referer`, or other custom headers for accessing the stream.

### Example Implementation
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


## Direct Stream URL

This is the simplest output format, which returns the direct stream URL as a string.

```
https://your-source.com/stream/video.mp4
```

### Example Implementation
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

## Subtitles

If your source provides subtitles, you can include them in the output.

::: warning
Remember to set `softsubs` to `true` in your manifest JSON if you include subtitles.
:::

### Subtitles with Multi Server Selector

This format allows you to return multiple streams along with a subtitle URL.

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
  ],
  "subtitle": "https://your-source.com/subtitles.vtt",
}
```

### Subtitles with Direct Stream URL

In this case, you need to return the subtitle URL alongside the stream URL as a (stringified) JSON object.

```json
{
  "streamUrl": "https://your-source.com/stream/video.mp4",
  "subtitle": "https://your-source.com/subtitles.vtt"
}
```