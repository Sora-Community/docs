# 📚 JavaScript Module Functions

This page explains the overall structure for Sora module scripts and links to detailed guides for each required function.

::: tip
Download the JavaScript template file [here](/module-template.js) to get started quickly.
:::

## 🚦 Quick Overview

Every Sora module script must export four async functions:

| Function           | Input                | Output         | Purpose                                 |
|--------------------|--------------------- |--------------- |-----------------------------------------|
| [`searchResults`](/modules/module-functions/searchResults.md)    | `keyword` (string)   | JSON array     | Search for content by keyword           |
| [`extractDetails`](/modules/module-functions/extractDetails.md)   | `url` (string)       | JSON object    | Get details for a specific item         |
| [`extractEpisodes`](/modules/module-functions/extractEpisodes.md)  | `url` (string)       | JSON array     | List episodes for a show/movie          |
| [`extractStreamUrl`](/modules/module-functions/extractStreamUrl.md) | `url` (string)       | URL (string)   | Get the direct stream URL               |


## ⚡ Async JavaScript Mode

In **async JavaScript mode**, Sora:
- Calls `searchResults` with only the search keyword.
- Calls the other three functions with only the target URL.

**Each function must return data in the required format.**

### Other JavaScript Modes

::: warning
Starting with Sora 2.0.0, non-async modules will no longer be supported.
:::

Sora supports other JavaScript modes, but they are not recommended. Async mode is the most efficient and straightforward approach for building Sora modules.

If you still want to use other modes (not recommended), you can find more information in the [legacy documentation](/modules/legacy-documentation).

<!-- 
## 📝 Tips & Best Practices

- Always return data in the expected format (see table above).
- Use `try/catch` to handle errors gracefully and return fallback values.
- Use `encodeURIComponent` for user input in URLs.
- Test your module with real data before publishing.
- Log errors to help with debugging.

---

## ❓ Troubleshooting

- **Nothing shows up in Sora?**
    - Check your function names and return formats.
    - Make sure your script is accessible at the `scriptUrl` in your module JSON.
- **Errors in the console?**
    - Use `console.log` to debug and check for typos or network issues. -->

---

See the linked pages above for detailed explanations and code examples for each function.
Happy coding! 🎉

::: tip
The function examples provided in this guide are simplified for clarity. You may need to adjust them based on your specific source's API and requirements.
Take a look at the [Module Library](https://library.cufiy.net) for more examples and inspiration.
:::
