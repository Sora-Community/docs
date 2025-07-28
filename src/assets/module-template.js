/** Sora Module Template
 * This template is designed to help you create a module for Sora.
 * It includes functions for searching, extracting details, episodes, and stream URLs.
 * You can modify these functions to suit your needs.
 * 
 * For more information, visit the Sora documentation at https://sora.jm26.net/docs
 */


/** searchResults
 * Searches for anime/shows/movies based on a keyword.
 * @param {string} keyword - The search keyword.
 * @returns {Promise<string>} - A JSON string of search results.
 */
async function searchResults(keyword) {
    try {
        const encodedKeyword = encodeURIComponent(keyword);
        const responseText = await soraFetch(`https://api.animemundo.net/api/v2/hianime/search?q=${encodedKeyword}&language=dub`);
        const data = JSON.parse(responseText);

        const filteredAnimes = data.data.animes.filter(anime => anime.episodes.dub !== null); 
        
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

/** extractDetails
 * Extracts details of an anime from its page URL.
 * @param {string} url - The URL of the anime page.
 * @returns {Promise<string>} - A JSON string of the anime details.
 */
async function extractDetails(url) {
    try {
        const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
        const encodedID = match[1];
        const response = await soraFetch(`https://api.animemundo.net/api/v2/hianime/anime/${encodedID}`);
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

/** extractEpisodes
 * Extracts episodes of an anime from its page URL.
 * @param {string} url - The URL of the anime page.
 * @returns {Promise<string>} - A JSON string of the anime episodes.
 */
async function extractEpisodes(url) {
    try {
        const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
        const encodedID = match[1];
        const response = await soraFetch(`https://api.animemundo.net/api/v2/hianime/anime/${encodedID}/episodes`);
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

/** extractStreamUrl
 * Extracts the stream URL of an anime episode from its page URL.
 * @param {string} url - The URL of the anime episode page.
 * @returns {Promise<string|null>} - The stream URL or null if not found.
 */
async function extractStreamUrl(url) {
    try {
       const match = url.match(/https:\/\/hianime\.to\/watch\/(.+)$/);
       const encodedID = match[1];
       const response = await soraFetch(`https://api.animemundo.net/api/v2/hianime/episode/sources?animeEpisodeId=${encodedID}&category=dub`);
       const data = JSON.parse(response);
       
       const hlsSource = data.data.sources.find(source => source.type === 'hls');
       
       return hlsSource ? hlsSource.url : null;
    } catch (error) {
       console.log('Fetch error:', error);
       return null;
    }
}


/** Fetch function that tries to use a custom fetch implementation first,
 * and falls back to the native fetch if it fails.
 * @param {string} url - The URL to fetch.
 * @param {Object} options - The options for the fetch request.
 * @returns {Promise<Response|null>} - The response object or null if an error occurs.
 * @note This function is designed to provide Node.js compatibility
 */
async function soraFetch(url, options = { headers: {}, method: 'GET', body: null }) {
    try {
        return await fetchv2(url, options.headers ?? {}, options.method ?? 'GET', options.body ?? null);
    } catch(e) {
        try {
            return await fetch(url, options);
        } catch(error) {
            await console.log('soraFetch error: ' + error.message);
            return null;
        }
    }
}