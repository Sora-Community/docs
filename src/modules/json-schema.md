# 📦 Sora Module JSON Schema


🎬 **Sora** lets you supercharge your streaming experience by integrating new modules with just a few lines of JSON. Whether you're adding anime, movies, or shows, this guide will help you craft the perfect config for your source!

---

Sora uses a simple, flexible JSON file to manage and integrate different streaming modules. You can easily configure new modules by editing this JSON file, adding details like the source name, URLs, and streaming settings. Let's make your streaming sources shine! ✨

## 📊 Fields Overview

| Field            | Type     | Description                                                                 | Required? | Variables/Options                    |
|------------------|----------|-----------------------------------------------------------------------------|-----------|--------------------------------------|
| `sourceName`     | string   | Name of the source.                                                         | ✅        |                                      |
| `author`         | object   | Information about the module's author.                                      | ✅        |                                      |
| `name`           | string   | Name of the author.                                                         | ✅        |                                      |
| `icon`           | string   | Icon of the author.                                                         | ✅        |                                      |
| `iconUrl`        | string   | URL to the module's icon.                                                   | ✅        |                                      |
| `version`        | integer  | Version of the module.                                                      | ✅        |                                      |
| `language`       | string   | Language of the module.                                                     | ✅        |                                      |
| `baseUrl`        | string   | Base URL of the source.                                                     | ✅        |                                      |
| `streamType`     | string   | Stream type of the module.                                                  | ✅        | `HLS`, `MP4`                         |
| `quality`        | string   | Quality of the stream.                                                      | ✅        | `360p`, `720p`, `1080p`              |
| `searchBaseUrl`  | string   | Search URL of the source. Must include `%s` for the search query.           | ✅        | `%s`                                 |
| `scriptUrl`      | string   | URL to the raw link of the JavaScript file.                                 | ✅        |                                      |
| `type`           | string   | Category of what the site provides. Required for the module library.        | ✅        | `anime`, `movies`, `shows`, `novels` |
| `downloadSupport`| boolean  | Set to `true` if the module supports episode downloads.                     | ❎        | `true`, `false`                      |
| `asyncJS`        | boolean  | Set to `true` to load the script asynchronously.                            | ❌        | `true`, `false`                      |
| `streamAsyncJS`  | boolean  | Set to `true` to only load the stream function asynchronously.              | ❌        | `true`, `false`                      |
| `softsub`        | boolean  | Set to `true` to load subtitles.                                            | ❌        | `true`, `false`                      |

> 📝 **Note:**
> - ✅ Required fields must be included for the module to function properly.
> - ❎ Required fields for the module library, but not mandatory for the module to work.
> - ❌ Optional fields that can be included if needed.

---

## 🧩 Full Example Format

In your module's JSON file, you need to include the following structure.
The table above provides a quick reference for the fields you can use, but here is a complete example to guide you through the process.

This is a template that you can fill in with your specific details:

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
    "type": "anime", // Required for the module library
    "downloadSupport": false, // Required for the module library
    "asyncJS": true,
    "streamAsyncJS": false,
    "softsub": true
}
```

::: info 📝 Note
- All required fields must be present for your module to work.
- Optional fields can be omitted if not needed.
:::

### In depth Explanation of Fields

#### `sourceName`
- **Type**: `string`
- **Required**: ✅
- **Description**: The name of the source you are integrating. This should be a unique identifier for your module.
- **Example**: `"sourceName": "MyAnimeSource"`

#### `author`
- **Type**: `object`
- **Required**: ✅
- **Description**: Information about the author of the module.
- **Example**: `"author": { "name": "AuthorName", "icon": "https://your-source.com/author-icon.png", "url": "https://github.com/author-profile" }`
- **Fields**:
  - `name`: Name of the author.
  - `icon`: URL to the author's icon.
  - `url`: Optional URL to the author's profile.

We recommend using the GitHub profile icon for the `icon` field, as it is widely recognized and provides a consistent look across modules.

#### `iconUrl`
- **Type**: `string`
- **Required**: ✅
- **Description**: The URL to the icon representing the source.
- **Example**: `"iconUrl": "https://your-source.com/icon.png"`
- **Note**: This should be a direct link to the image file.

We recommend using the Source icon for the `iconUrl` field, as it helps users quickly identify the source in the module library.
A quick way to do this is to use Google: `https://www.google.com/s2/favicons?sz=128&domain_url=your-source.com`

#### `version`
- **Type**: `string`
- **Required**: ✅
- **Description**: The version of the module.
- **Example**: `"version": "1.0.0"`

#### `language`
- **Type**: `string`
- **Required**: ✅
- **Description**: The language of the content provided by the source.
- **Example**: `"language": "English (SUB)"`
- **Note**: This should reflect the language of the content, such as "English (DUB)", "English (SUB)", "Japanese", etc.

#### `streamType`
- **Type**: `string`
- **Required**: ✅
- **Description**: The type of streaming used by the source.
- **Example**: `"streamType": "HLS"`
- **Options**: `HLS`, `MP4`

#### `quality`
- **Type**: `string`
- **Required**: ✅
- **Description**: The quality of the video stream.
- **Example**: `"quality": "1080p"`
- **Options**: `360p`, `720p`, `1080p`, etc.

#### `baseUrl`
- **Type**: `string`
- **Required**: ✅
- **Description**: The website url of the source.
- **Example**: `"baseUrl": "https://your-source.com/"`
- **Note**: This also serves as the video player referer URL.

#### `searchBaseUrl`
- **Type**: `string`
- **Required**: ✅
- **Description**: The base URL for the search API.
- **Example**: `"searchBaseUrl": "https://api.your-source.com/search?keyword=%s"`
- **Note**: This URL must include `%s` where the search query will be inserted. For example, if the search query is "Naruto", the final URL will be `https://api.your-source.com/search?keyword=Naruto`.

#### `scriptUrl`
- **Type**: `string`
- **Required**: ✅
- **Description**: The URL to the script file for the source.
- **Example**: `"scriptUrl": "https://github.com/author/repo/raw/main/script.js"`
- **Note**: This should be a direct link to the raw JavaScript file that contains the logic for fetching and displaying content from the source.
- **Recommendation**: Use the raw link from GitHub or any other hosting service that allows direct access to the file.

#### `type`
- **Type**: `string`
- **Required**: ✅
- **Description**: The type of content provided by the source, used for categorization.
- **Example**: `"type": "anime"`
- **Options**: `anime`, `movies`, `shows`, `novels`
- **Note**: You can set multiple types if the source provides different categories of content. For example, if a source provides both anime and movies, you can set `"type": "anime/movies"`.

#### `downloadSupport`
- **Type**: `boolean`
- **Required**: ✅
- **Description**: Indicates whether the source supports downloading content. Required for the module library.
- **Example**: `"downloadSupport": true`
- **Options**: `true`, `false`

#### `asyncJS`
- **Type**: `boolean`
- **Required**: ❌
- **Description**: Set to `true` to load the script asynchronously.
- **Note**: We will cover the difference between synchronous and asynchronous loading in a later section.

#### `streamAsyncJS`
- **Type**: `boolean`
- **Required**: ❌
- **Description**: Set to `true` to load the streaming script asynchronously.
- **Note**: We will cover the difference between synchronous and asynchronous loading in a later section.

#### `softsub`
- **Type**: `boolean`
- **Required**: ❌
- **Description**: Set to `true` if the source supports soft subtitles.
- **Example**: `"softsub": true`
- **Note**: Soft subtitles are subtitles that can be turned on or off by the user, as opposed to hardcoded subtitles that are permanently embedded in the video.



## 🎉 Real-World Example

Here is a real-world example of a module configuration for AniCrush, an anime streaming source, which provides English-subbed content. You can use this as a reference for your own module development:

```json
{
    "sourceName": "AniCrush (ENG SUB)",
    "iconUrl": "https://raw.githubusercontent.com/ShadeOfChaos/Sora-Modules/refs/heads/main/AniCrush/logo.png",
    "author": {
        "name": "ShadeOfChaos",
        "icon": "https://raw.githubusercontent.com/ShadeOfChaos/Sora-Modules/refs/heads/main/ofchaos.jpg",
        "url": "https://github.com/ShadeOfChaos/Sora-Modules"
    },
    "version": "2.2.3",
    "language": "English (SUB)",
    "streamType": "HLS",
    "quality": "1080p",
	"type": "anime",
    "downloadSupport": true,
    "baseUrl": "https://megacloud.club/",
    "searchBaseUrl": "https://ac-api.ofchaos.com/api/anime/search?keyword=%s",
    "scriptUrl": "https://raw.githubusercontent.com/ShadeOfChaos/Sora-Modules/refs/heads/main/AniCrush/subs/AniCrush.js",
    "asyncJS": true,
    "streamAsyncJS": true,
    "softsub": true,
    "downloadSupport": true
 }
```

---


You don't need to worry about the details of the script itself right now. The important part is that this JSON file provides all the necessary information for Sora to fetch and display content from your source.