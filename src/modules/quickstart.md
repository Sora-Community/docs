
# 🚀 Quickstart Guide for Sora Modules

Welcome! This guide gives you a quick overview of how to create a Sora module, including the required manifest JSON structure and the main functions you need to implement. :sparkles:

Every Sora module consists of a *manifest JSON* file and a *JavaScript* file that contains the logic for your module. :gear:


## :page_facing_up: Manifest JSON

```json
{
    "sourceName": "YourSourceName",
    "iconUrl": "https://your-source.com/icon.png",
    "author": {
        "name": "AuthorName",
        "icon": "https://your-source.com/author-icon.png",
        "url": "https://your-source.com/author-profile" // Optional: URL to the author's profile
    },
    "version": "1.0.0",
    "language": "English (DUB)",
    "streamType": "HLS",
    "quality": "720p",
    "baseUrl": "https://api.your-source.com/",
    "searchBaseUrl": "https://your-source.com/search=%s",
    "scriptUrl": "https://your-source.com/script.js",
    "type": "anime",
    "downloadSupport": false, // Required for the module library
    "asyncJS": true,
    "streamAsyncJS": false,
    "softsub": true
}
```


## :wrench: Module Functions

::: tip
You can download the JavaScript template file [here](https://sora.jm26.net/docs/assets/module-template.js).
:::


### :pushpin: Required Functions

| Function Name               | Input                | Output         | Description                                       |
|-----------------------------|--------------------- |--------------- |---------------------------------------------------|
| `searchResults`             | `keyword` (string)   | JSON array     | Search for content by keyword                     |
| `extractDetails`            | `url` (string)       | JSON object    | Extract detailed information from a URL           |
| `extractEpisodes`           | `url` (string)       | JSON array     | List episodes for a show/movie                    |
| `extractStreamUrl`          | `url` (string)       | Various        | Get the direct stream URL for an episode or movie |



### :bulb: Tips and Best Practices

- Always use **try/catch** blocks to handle errors gracefully.
- Use `encodeURIComponent` for user input in URLs to avoid issues with special characters.
- For easier debugging, log errors using `console.log`

::: tip
Many providers already have been reversed engineered. To make your life easier, you can check out the [Global Extractor](https://github.com/JMcrafter26/sora-global-extractor), which is easy to integrate and even comes with an auto update feature.
:::


### :warning: Common Issues

- Make sure your `scriptUrl` is correct and accessible.
- Ensure that each function returns data in the expected format (stringified JSON).
- Return episode numbers as integers, not strings. Use `parseInt(number)` if needed.
- Sora does not support multiple arguments in `console.log`. Combine them into a single string using `+`.

---

:tada: You’re ready to build your first Sora module!