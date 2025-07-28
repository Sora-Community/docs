# Legacy Documentation

This page contains legacy documentation for Sora modules. It is recommended to use the latest documentation for new projects.

[[toc]]

## Main JSON
Sora uses a simple JSON file to manage and integrate different streaming modules. You can easily configure new modules by editing this JSON file, adding details like the source name, URLs, and streaming settings.

### JSON Fields

#### Fields Overview

| Field          | Type   | Description                                     | Required?      | Variables
|----------------|--------|-------------------------------------------------|----------------|----------|
| `sourceName`   | string | Name of the source.                                 |[x]    |
| `author`       | object | Information about the module's author.              |[x]    |
| `name`         | string | Name of the author.                                 |[x]    |
| `icon`         | string | Icon of the author.                                 |[x]    |
| `iconUrl`      | string | URL to the module's icon.                           |[x]    |
| `version`      | integer| Version of the module.                              |[x]    |
| `language`     | string | Language of the module.                             |[x]    |
| `baseUrl`      | string | Base URL of the source.                             |[x]    |
| `streamType`   | string | Stream type of the module.                          |[x]    |`HLS`, `MP4`   |
| `quality`      | string | Quality of the stream.                              |[x]    |`360p`, `720p`, `1080p` |
| `searchBaseUrl`| string | Search URL of the source. Must include `%s` where the search query will go. |[x]    |`%s` |
| `scriptUrl`    | string | URL to the raw link of the JavaScript file.         |[x]    |
| `asyncJS`      | boolean| Set to `true` to load the script asynchronously.    |[ ]    | `true`, `false` |
| `streamAsyncJS`| boolean| Set to `true` to only load the stream function asynchronously. |[ ] | `true`, `false` |
| `softsub`      | boolean| Set to `true` to load subtitles.                    |[ ]   | `true`, `false` |
| `type`      | string| Category of what the site provides. Required for the module library. |[ ]   | `anime`, `movies`, `shows` |

---

#### Full Format

```json
{
    "sourceName": "YourSourceName",
    "iconUrl": "https://your-source.com/icon.png",
    "author": {
         "name": "AuthorName",
         "icon": "https://your-source.com/author-icon.png"
    },
    "version": "1.0.0",
    "language": "English (DUB)",
    "streamType": "HLS",
    "quality": "720p",
    "baseUrl": "https://api.your-source.com/",
    "searchBaseUrl": "https://your-source.com/search=%s",
    "scriptUrl": "https://your-source.com/script.js",
    "asyncJS": true,
    "streamAsyncJS": false,
    "softsub": true
}
```

#### Example
```json
{
    "sourceName": "Hianime",
    "iconUrl": "https://raw.githubusercontent.com/50n50/maisgay/refs/heads/main/hianime/icon.png",
    "author": {
         "name": "50/50",
         "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:&s"
    },
    "version": "1.0.1",
    "language": "English (DUB)",
    "streamType": "HLS",
    "quality": "720p",
    "baseUrl": "https://api.animemundo.net/",
    "searchBaseUrl": "https://api.animemundo.net/api/v2/hianime/search?q=%s",
    "scriptUrl": "https://raw.githubusercontent.com/50n50/maisgay/refs/heads/main/hianime/hianime.js",
    "asyncJS": true
}
```

## Available Javascript Methods

Due to the limitations of Swift's JavaScriptCore framework, certain JavaScript functions that are commonly available in Node.js are not compatible with Sora. JavaScriptCore is designed to run JavaScript code in a sandboxed environment, primarily for web-related tasks, and does not provide built-in support for many Node.js-specific features. We are actively working to add additional methods and will keep this documentation updated with new additions while exploring possible workarounds for these limitations.

### Methods

---

- [fetch() (DEPRECATED)](#fetchurl-headers-deprecated)
- [fetchv2()](#fetchv2httpexampleorg-headers)
- [atob()](#atobbase64string)
- [btoa()](#btostring)


---

#### fetch(URL, headers) (DEPRECATED)

```
This function will be deprecated soon. Please use fetchv2() instead.
```

Returns the fetched URL as a `String`

```
Do not use .json() or .text() methods as those will not work with this fetch! 
If you want to use these functions, than look at the fetchv2() documentation.
```

For .json(), instead use:
```javascript
const response = await fetch("http://example.org");
const data = await JSON.parse(response);
```

For .text(), Instead assign the value directly:
```javascript
const response = fetch("http://example.org");
const data = await response;
```

##### Example Usage:
```javascript
const url = "http://example.org";
const headers = { // Optional
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Content-Type': 'application/json',
    'Referer': 'http://example.org'
}

const response = await fetch(url, headers);
const data = await JSON.parse(response);
```

Goes without saying that this applies to StreamAsync mode too. You shouldn't need these methods in normal mode but if you do, use the above mentioned way.

---

#### fetchv2(URL, headers, method, body)

This function is an improved version of fetch, designed to compensate for the lack of the JavaScriptCore framework in Swift. It returns a Promise with an enhanced response object that includes .text() and .json() methods for easier parsing.
It supports GET, POST, PUT and PATCH methods.

##### Usage:

Parameters:

- `url (String)`: The URL to fetch.

- `headers (Object, optional)`: An object containing key-value pairs for HTTP headers.

- `method (String, optional)`: The HTTP method to use. Defaults to "GET".

- `body (Object, optional)`: The body of the request. Only used for POST, PUT, and PATCH requests.


##### Response Object:

The returned response object contains:

- `.text()`: Returns a Promise that resolves to the response as a String.

- `.json()`: Returns a Promise that resolves to the response parsed as a JSON object.


##### Example Usage for GET Request:
```javascript

const url = "http://example.org";
const headers = { // Optional
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Content-Type': 'application/json',
    'Referer': 'http://example.org'
}

const response = await fetchv2(url, headers);
const data = await response.json(); // or response.text();

```

##### Example Usage for POST Request:
```javascript

const url = "http://example.org";
const headers = { // Optional
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Content-Type': 'application/json',
    'Referer': 'http://example.org'
}
const method = "POST";
const body = {
    key: "value",
    key2: "value2"
}

const response = await fetchv2(url, headers, method, body);
const data = await response.json(); // or response.text();

```

---

#### atob(base64String)

Decodes a Base64-encoded ASCII `string` back into a binary string.

##### Returns:
A String containing the decoded data.

##### Example Usage:
```javascript
const decoded = atob("SGVsbG8sIHdvcmxkIQ=="); 
console.log(decoded); // Outputs: "Hello, world!"
```

##### Error Handling`
Returns null if the input is not a valid Base64 string.

---

#### btoa(string)

Encodes a given binary string into a Base64-encoded ASCII string.

##### Returns:
A `string` containing the Base64 representation of the input.

##### Example Usage:
```javascript
const encoded = btoa("Hello, world!"); 
console.log(encoded); // Outputs: "SGVsbG8sIHdvcmxkIQ=="
```

##### Error Handling`
Returns null if the input is not a valid Base64 string.



## Normal JavaScript mode

```{note}
For more examples see the [Modules Repo](https://github.com/50n50/sources)
```

In the normal Javascript mode Sora will scrape the HTML of a link and provide it to the function. You are then required to scrape the necessary detail from the HTML and rewrite it into the follow specified JSON format.


### Functions

#### searchResults
Input: `HTML` \
Output:`JSON`

Extracts the search results from the provided HTML.

```json
{
    "title": "Example Title",
    "image": "https://example.com/image.jpg",
    "href": "https://grani.me/example"
}
```

#### extractDetails
Input: `HTML` \
Output:`JSON`

Extracts the details from the provided HTML.

```json
{
    "description": "An exciting anime series about adventures.",
    "aliases": "Alternate Name",
    "airdate": "2022"
}
```

#### extractEpisodes
Input: `HTML` \
Output:`JSON`

Extracts the episodes from the provided HTML.

```json
{
    "href": "https://grani.me/episode/123",
    "number": "1"
}
```

#### extractStreamUrl
Input: `HTML` \
Output:`URL`

Extracts the stream from the provided HTML.

```txt
https://example.com/stream/video.mp4
```

### Example

```javascript 
function cleanTitle(title) {
     //Module specefic function, ignore
     return title
          .replace(/&#8217;/g, "'")  
          .replace(/&#8211;/g, "-")  
          .replace(/&#[0-9]+;/g, ""); 
}

function searchResults(html) {
     const results = [];
     const baseUrl = "https://grani.me/";

     const filmListRegex = /<div class="content_episode"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
     const items = html.match(filmListRegex) || [];


     items.forEach((itemHtml, index) => {
        const titleMatch = itemHtml.match(/<a class="cona" href="([^"]+)">([^<]+)<\/a>/);
        const href = titleMatch ? titleMatch[1] : '';
        let title = titleMatch ? titleMatch[2] : '';  
        title = cleanTitle(title);
        const imgMatch = itemHtml.match(/<img[^>]*class="coveri"[^>]*src="([^"]+)"[^>]*>/);
        const imageUrl = imgMatch ? imgMatch[1] : '';
        
        if (title && href) {
             results.push({
                  title: title.trim(),
                  image: imageUrl.trim(),
                  href: href.trim()
             });
        }
  });
  
  return results;
}

function extractDetails(html) {
    const details = [];

    const descriptionMatch = html.match(/<div class="infodes2 entry-content entry-content-single" itemprop="description">[\s\S]*?<p>([\s\S]*?)<\/p>/);
    let description = descriptionMatch ? descriptionMatch[1] : '';

    const aliasesMatch = html.match(/<h1 class="entry-title" itemprop="name""([^"]+)">/);
    let aliases = aliasesMatch ? aliasesMatch[1] : '';

    const airdateMatch = html.match(/<div class="textd">Year:<\/div>\s*<div class="textc">([^<]+)<\/div>/);
    let airdate = airdateMatch ? airdateMatch[1] : '';

    if (description && airdate) {
         details.push({
              description: description,
              aliases: aliases || 'N/A',
              airdate: airdate
         });
    }

    return details;
}

function extractEpisodes(html) {
    const episodes = [];
    const baseUrl = "https://grani.me/";

    const episodeLinks = html.match(/<a class="infovan"[^>]*href="([^"]+)"[\s\S]*?<div class="centerv">(\d+)<\/div>/g);
    
    if (!episodeLinks) {
         return episodes;
    }

    episodeLinks.forEach(link => {
         const hrefMatch = link.match(/href="([^"]+)"/);
         const numberMatch = link.match(/<div class="centerv">(\d+)<\/div>/);

         if (hrefMatch && numberMatch) {
              let href = hrefMatch[1];
              const number = numberMatch[1];

              if (!href.startsWith("https")) {
                    href = href.startsWith("/") ? baseUrl + href.slice(1) : baseUrl + href;
              }

              episodes.push({
                    href: href,
                    number: number
              });
         }
    });
    episodes.reverse();
    return episodes;
}

function extractStreamUrl(html) {
     const sourceRegex = /<source[^>]+id="iframevideo"[^>]+src="([^"]+)"/;
     const match = html.match(sourceRegex);
     return match ? match[1] : null;
}

```


## StreamAsync Javascript mode

```{note}
For more examples see the [Modules Repo](https://github.com/50n50/sources)
```

In the streamAsyncJS mode you extract the stream URL asynchronously instead of regular scraping. The function will still be provided with an HTML code. 


### Functions

#### searchResults
Input: `HTML` \
Output:`JSON`

Extracts the search results from the provided HTML.

```json
{
    "title": "Example Title",
    "image": "https://example.com/image.jpg",
    "href": "https://grani.me/example"
}
```

#### extractDetails
Input: `HTML` \
Output:`JSON`

Extracts the details from the provided HTML.

```json
{
    "description": "An exciting anime series about adventures.",
    "aliases": "Alternate Name",
    "airdate": "2022"
}
```

#### extractEpisodes
Input: `HTML` \
Output:`JSON`

Extracts the episodes from the provided HTML.

```json
{
    "href": "https://grani.me/episode/123",
    "number": "1"
}
```

#### extractStreamUrl
Input: `HTML` \
Output:`URL`

Extracts the stream from the provided URL.

```txt
https://example.com/stream/video.mp4
```

### Example


```javascript 
function searchResults(html) {
    const results = [];


    const titleRegex = /<h2[^>]*>(.*?)<\/h2>/;
    const hrefRegex = /<a\s+href="([^"]+)"\s*[^>]*>/;
    const imgRegex = /<img[^>]*src="([^"]+)"[^>]*>/;

    const itemRegex = /<div class="my-2 w-64[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
    const items = html.match(itemRegex) || [];

    items.forEach((itemHtml) => {
        const titleMatch = itemHtml.match(titleRegex);
        const title = titleMatch ? titleMatch[1].trim() : '';

        const hrefMatch = itemHtml.match(hrefRegex);
        const href = hrefMatch ? hrefMatch[1].trim() : '';

        const imgMatch = itemHtml.match(imgRegex);
        const imageUrl = imgMatch ? imgMatch[1].trim() : '';

        if (title && href) {
            results.push({
                title: title,
                image: imageUrl,
                href: href
            });
        }
    });
    return results;
}

function extractDetails(html) {
    const details = [];

    const descriptionMatch = html.match(/<p class="sm:text-\[1\.05rem\] leading-loose text-justify">([\s\S]*?)<\/p>/);
    let description = descriptionMatch ? descriptionMatch[1].trim() : '';

    const airdateMatch = html.match(/<td[^>]*title="([^"]+)">[^<]+<\/td>/);
    let airdate = airdateMatch ? airdateMatch[1].trim() : '';

    if (description && airdate) {
        details.push({
            description: description,
            aliases: 'N/A',
            airdate: airdate
        });
    }
    console.log(details);
    return details;
}

function extractEpisodes(html) {
    const episodes = [];
    const htmlRegex = /<a\s+[^>]*href="([^"]*?\/episode\/[^"]*?)"[^>]*>[\s\S]*?الحلقة\s+(\d+)[\s\S]*?<\/a>/gi;
    const plainTextRegex = /الحلقة\s+(\d+)/g;

    let matches;

    if ((matches = html.match(htmlRegex))) {
        matches.forEach(link => {
            const hrefMatch = link.match(/href="([^"]+)"/);
            const numberMatch = link.match(/الحلقة\s+(\d+)/);
            if (hrefMatch && numberMatch) {
                const href = hrefMatch[1];
                const number = numberMatch[1];
                episodes.push({
                    href: href,
                    number: number
                });
            }
        });
    } else if ((matches = html.match(plainTextRegex))) {
        matches.forEach(match => {
            const numberMatch = match.match(/\d+/);
            if (numberMatch) {
                episodes.push({
                    href: null,
                    number: numberMatch[0]
                });
            }
        });
    }

    console.log(episodes);
    return episodes;
}

async function extractStreamUrl(html) {
    try {
        const sourceMatch = html.match(/data-source="([^"]+)"/);
        const embedUrl = sourceMatch?.[1]?.replace(/&amp;/g, '&');
        if (!embedUrl) return null;

        const response = await fetch(embedUrl);
        const data = await response;
        const videoUrl = data.match(/src:\s*'(https:\/\/[^']+\.mp4[^']*)'/)?.[1];
        console.log(videoUrl);
        return videoUrl || null;
    } catch (error) {
        return null;
    }
}
```

## SoftSubs Javascript mode

```{note}
For more examples see the [Modules Repo](https://github.com/50n50/sources)
```

In the softsub mode you extract the subtitles alongside the stream, usually you'd need to have async or streamAsync mode activated for this too.


### Functions

#### searchResults
Input: `HTML/Keyword (Depending on the mode)` \
Output:`JSON`

Extracts the search results from the provided keyword.

```json
{
    "title": "Example Title",
    "image": "https://example.com/image.jpg",
    "href": "https://grani.me/example"
}
```

#### extractDetails
Input: `HTML/URL (Depending on the mode)` \
Output:`JSON`

Extracts the details from the provided URL.

```json
{
    "description": "An exciting anime series about adventures.",
    "aliases": "Alternate Name",
    "airdate": "2022"
}
```

#### extractEpisodes
Input: `HTML/URL (Depending on the mode)` \
Output:`JSON`

Extracts the expisodes from the provided URL.

```json
{
    "href": "https://grani.me/episode/123",
    "number": "1"
}
```

#### extractStreamUrl
Input: `URL` \
Output:`URL`

Extracts the stream url from the provided URL.

```json
{
  "stream": "https://example.com/stream/video.mp4",
  "subtitles": "https://example.com/subtitles/english.vtt"
}
```

### Example

```javascript 
async function searchResults(keyword) {
     try {
          const encodedKeyword = encodeURIComponent(keyword);
          const responseText = await fetch(`https://api.animemundo.net/api/v2/hianime/search?q=${encodedKeyword}&language=sub`);
          const data = JSON.parse(responseText);

          const transformedResults = data.data.animes.map(anime => ({
                title: anime.name,
                image: anime.poster,
                href: `https://hianime.to/watch/${anime.id}`
          }));
          
          return JSON.stringify(transformedResults);
          
     } catch (error) {
          console.log('Fetch error:', error);
          return JSON.stringify([{ title: 'Error', image: '', href: '' }]);
     }
}


async function extractDetails(url) {
     try {
          const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
          const encodedID = match[1];
          const response = await fetch(`https://api.animemundo.net/api/v2/hianime/anime/${encodedID}`);
          const data = JSON.parse(response);
          
          const animeInfo = data.data.anime.info;
          const moreInfo = data.data.anime.moreInfo;

          const transformedResults = [{
                description: animeInfo.description || 'No description available',
                aliases: `Duration: ${animeInfo.stats?.duration || 'Unknown'}`,
                airdate: `Aired: ${moreInfo?.aired || 'Unknown'}`
          }];
          
          return JSON.stringify(transformedResults);
     } catch (error) {
          console.log('Details error:', error);
          return JSON.stringify([{
          description: 'Error loading description',
          aliases: 'Duration: Unknown',
          airdate: 'Aired: Unknown'
          }]);
  }
}

async function extractEpisodes(url) {
     try {
          const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
          const encodedID = match[1];
          const response = await fetch(`https://api.animemundo.net/api/v2/hianime/anime/${encodedID}/episodes`);
          const data = JSON.parse(response);

          const transformedResults = data.data.episodes.map(episode => ({
                href: `https://hianime.to/watch/${encodedID}?ep=${episode.episodeId.split('?ep=')[1]}`,
                number: episode.number
          }));
          
          return JSON.stringify(transformedResults);
          
     } catch (error) {
          console.log('Fetch error:', error);
     }    
}

async function extractStreamUrl(url) {
     try {
         const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
         const encodedID = match[1];
         const response = await fetch(`https://api.animemundo.net/api/v2/hianime/episode/sources?animeEpisodeId=${encodedID}&category=sub`);
         const data = JSON.parse(response);
         
         const hlsSource = data.data.sources.find(source => source.type === 'hls');
          const subtitleTrack = data.data.tracks.find(track => track.label === 'English' && track.kind === 'captions');
          
          const result = {
                stream: hlsSource ? hlsSource.url : null,
                subtitles: subtitleTrack ? subtitleTrack.file : null
          };
          console.log(result);
          return JSON.stringify(result);
     } catch (error) {
          console.log('Fetch error:', error);
          return JSON.stringify({ stream: null, subtitles: null });
     }
}
```

## Deobfuscator

We will provide you a Deobfuscator function that will help with scraping providers like streamwish and others. This Deobfuscator is not built into Sora so will be needed to be implemented in your code, this is as simple as copying and pasting. 

### Functions

#### unpack
Input: `obfuscated code` \
Output:`deobfuscated code`

##### Example Usage

```javascript
const unpackedScript = unpack(obfuscatedScript[1]);
```

##### Example input

```javascript
eval(function(p,a,c,k,e,d){while(c--)if(k[c])p=p
...
```

##### Example output

```javascript
jwplayer("vplayer").setup({
    debug: "1",
    sources: [{
        file: "[STREAM LINK]"
    }],
    ...
```

#### unbaser
TBD

#### detect
TBD

### Code

The deobfuscator can with an example usage can be found below:

```javascript
//Example usage
function placeholder(html) {
            const obfuscatedScript = html.match(/<script[^>]*>\s*(eval\(function\(p,a,c,k,e,d.*?\)[\s\S]*?)<\/script>/);
            const unpackedScript = unpack(obfuscatedScript[1]);
            console.log(unpackedScript);
            return unpackedScript;
}

/*
 * DEOBFUSCATOR CODE
 * 
 * Copy the below code fully and paste it in your
 * code. No need to modify anything.
 */

class Unbaser {
    constructor(base) {
        this.ALPHABET = {
            62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            95: "' !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'",
        };
        this.dictionary = {};
        this.base = base;
        if (36 < base && base < 62) {
            this.ALPHABET[base] = this.ALPHABET[base] ||
                this.ALPHABET[62].substr(0, base);
        }
        if (2 <= base && base <= 36) {
            this.unbase = (value) => parseInt(value, base);
        }
        else {
            try {
                [...this.ALPHABET[base]].forEach((cipher, index) => {
                    this.dictionary[cipher] = index;
                });
            }
            catch (er) {
                throw Error("Unsupported base encoding.");
            }
            this.unbase = this._dictunbaser;
        }
    }
    _dictunbaser(value) {
        let ret = 0;
        [...value].reverse().forEach((cipher, index) => {
            ret = ret + ((Math.pow(this.base, index)) * this.dictionary[cipher]);
        });
        return ret;
    }
}

function detect(source) {
    return source.replace(" ", "").startsWith("eval(function(p,a,c,k,e,");
}

function unpack(source) {
    let { payload, symtab, radix, count } = _filterargs(source);
    if (count != symtab.length) {
        throw Error("Malformed p.a.c.k.e.r. symtab.");
    }
    let unbase;
    try {
        unbase = new Unbaser(radix);
    }
    catch (e) {
        throw Error("Unknown p.a.c.k.e.r. encoding.");
    }
    function lookup(match) {
        const word = match;
        let word2;
        if (radix == 1) {
            word2 = symtab[parseInt(word)];
        }
        else {
            word2 = symtab[unbase.unbase(word)];
        }
        return word2 || word;
    }
    source = payload.replace(/\b\w+\b/g, lookup);
    return _replacestrings(source);
    function _filterargs(source) {
        const juicers = [
            /}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\), *(\d+), *(.*)\)\)/,
            /}\('(.*)', *(\d+|\[\]), *(\d+), *'(.*)'\.split\('\|'\)/,
        ];
        for (const juicer of juicers) {
            const args = juicer.exec(source);
            if (args) {
                let a = args;
                if (a[2] == "[]") {
                }
                try {
                    return {
                        payload: a[1],
                        symtab: a[4].split("|"),
                        radix: parseInt(a[2]),
                        count: parseInt(a[3]),
                    };
                }
                catch (ValueError) {
                    throw Error("Corrupted p.a.c.k.e.r. data.");
                }
            }
        }
        throw Error("Could not make sense of p.a.c.k.e.r data (unexpected code structure)");
    }
    function _replacestrings(source) {
        return source;
    }
}
```

```{note}
Credit to GitHub user [@mnsrulz](https://github.com/mnsrulz/unpacker) for Unpacker Node library

Credits to [@jcpiccodev](https://github.com/jcpicco) for writing the full deobfuscator
```


## How to test?

There are a couple ways to test your module:

### In Browser

Huge thanks to [@JMcrafter26](https://github.com/jmcrafter26) for making this website, it simulates Sora's frontend, a great way to quickly test your modules on PC in case you don't own a Mac.

The website and FAQ can be found here: [Sora Web-UI](https://sora.jm26.net/web-ui/)

### With Sora on Mac

Get the Sora app for Mac from [here](https://github.com/cranci1/Sora/releases/).
Or clone the code and start it from XCode to have the latest update.

This is the fastest way to test it in the app, seeing as Github raw often takes some time to update it's faster to directly edit the Sora cached modules.

To add the module to the app, host your java script file and JSON on your preferred file hoster (needs to support viewing the raw file), it is recommended to use GitHub. Also [npoint.io](http://npoint.io/) is great for paste bin json files.

Once you've hosted the file, you will need to copy the raw link of the java script file and add it to your JSON, after doing this you will need to copy the raw link of your JSON, which will look something like this:

```text
https://raw.githubusercontent.com/50n50/maisgay/refs/heads/main/hianime/hianime.json
```

To find the cached scripts, head over to this file path on your Mac:

```
/Users/[Your username]/Library/Containers/me.cranci.sulfur/Data/Documents/
```

Note: If you used XCode and build the code yourself, then use the your choosen Bundle Identifier instead of "me.cranci.sulfur"

You will find all the modules there, unfortunately they will have some gibberish name so you will need to which is the one you want to edit. Once you've found it you can easily edit anything you want and restart the Sora app to quickly test the changes.

#### Live logs (MacOS)
##### Terminal
To have live logs, use the following command in your MacOS terminal:

```
tail -f [PATH TO LOG.TXT FILE IN THE SULFUR DOCUMENTS FOLDER]
```

For example:

```
tail -f /Users/paul/Library/Containers/me.cranci.sulfur/Data/Documents/logs.txt
```

This will enable you to have logs open simultaneously whilst testing in the app. 

##### XCode
The latest Sora/Sulfur build should route logs to the XCode console allowing you to test and monitor the logs simultaneously.

### With Sora on a IDevice

To test in Sora, you will obviously need to first sideload the app, join the official discord for help if needed!

To add the module to the app, host your java script file and JSON on your preferred file hoster (needs to support viewing the raw file), it is recommended to use GitHub.

Once you've hosted the file, you will need to copy the raw link of the java script file and add it to your JSON, after doing this you will need to copy the raw link of your JSON, which will look something like this:

```text
https://raw.githubusercontent.com/50n50/maisgay/refs/heads/main/hianime/hianime.json
```

Please make sure you are copying the raw link!

After making modifications, remove the module from Sora and restart to app before re-adding it!
