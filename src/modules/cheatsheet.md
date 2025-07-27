# Cheatsheet for Sora Module Development

## 📚 Sora Module Cheatsheet

### Manifest JSON

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