const GOOGLE_API_KEY = "AIzaSyAoO3KuLKPq2q5sl5l4ApXbP6K4T5k03z0"

export const YOUTUBE_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=10&key=" +
    GOOGLE_API_KEY

export const YOUTUBE_COMMENTS_API = (videoId) =>
    `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_API = (
    query
) => `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}
`

export const LIVE_CHAT_COUNT = 20
