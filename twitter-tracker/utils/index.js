/**
 *
 * @param {*} tweet
 */
function createTweet (tweet, keyword) {
  return {
    id: tweet.id,
    text: tweet.text.replace(/\n/g, ' '),
    createdAt: new Date(tweet.created_at),
    username: tweet.user.name,
    screen: tweet.user.screen_name,
    location: tweet.user.location,
    img: tweet.user.profile_image_url,
    lang: tweet.lang,
    keyword: keyword
  }
}

/**
 * Read and create obj with new structure
 * @param {*} tweets, keyWord
 */
function readTweets (tweets, keyword) {
  const data = []

  tweets.statuses.forEach(tweet => {
    if (tweet.text.includes(keyword)) {
      const cleanTweet = createTweet(tweet, keyword)
      data.push(cleanTweet)
    }
  })

  return data
}

module.exports = {
  createTweet,
  readTweets
}
