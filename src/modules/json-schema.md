# 📦 Sora Module JSON Schema


🎬 **Sora** lets you supercharge your streaming experience by integrating new modules with just a few lines of JSON. Whether you're adding anime, movies, or shows, this guide will help you craft the perfect config for your source!

---

Sora uses a simple, flexible JSON file to manage and integrate different streaming modules. You can easily configure new modules by editing this JSON file, adding details like the source name, URLs, and streaming settings. Let's make your streaming sources shine! ✨

## 📊 Fields Overview

| Field            | Type     | Description                                                                 | Required? | Variables/Options                |
|------------------|----------|-----------------------------------------------------------------------------|-----------|----------------------------------|
| `sourceName`     | string   | Name of the source.                                                         | ✅        |                                  |
| `author`         | object   | Information about the module's author.                                      | ✅        |                                  |
| `name`           | string   | Name of the author.                                                         | ✅        |                                  |
| `icon`           | string   | Icon of the author.                                                         | ✅        |                                  |
| `iconUrl`        | string   | URL to the module's icon.                                                   | ✅        |                                  |
| `version`        | integer  | Version of the module.                                                      | ✅        |                                  |
| `language`       | string   | Language of the module.                                                     | ✅        |                                  |
| `baseUrl`        | string   | Base URL of the source.                                                     | ✅        |                                  |
| `streamType`     | string   | Stream type of the module.                                                  | ✅        | `HLS`, `MP4`                     |
| `quality`        | string   | Quality of the stream.                                                      | ✅        | `360p`, `720p`, `1080p`          |
| `searchBaseUrl`  | string   | Search URL of the source. Must include `%s` for the search query.           | ✅        | `%s`                             |
| `scriptUrl`      | string   | URL to the raw link of the JavaScript file.                                 | ✅        |                                  |
| `type`           | string   | Category of what the site provides. Required for the module library.        | ❎        | `anime`, `movies`, `shows`       |
| `downloadSupport`| boolean  | Set to `true` if the module supports episode downloads.                     | ❎        | `true`, `false`                  |
| `asyncJS`        | boolean  | Set to `true` to load the script asynchronously.                            | ❌        | `true`, `false`                  |
| `streamAsyncJS`  | boolean  | Set to `true` to only load the stream function asynchronously.              | ❌        | `true`, `false`                  |
| `softsub`        | boolean  | Set to `true` to load subtitles.                                            | ❌        | `true`, `false`                  |

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

> 📝 **Note:**
> - All required fields must be present for your module to work.
> - Optional fields can be omitted if not needed.

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
