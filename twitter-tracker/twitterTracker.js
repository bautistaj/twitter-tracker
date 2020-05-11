'use strict'
const TwitterConnection = require('twitter')
const config = require('./config')

class TwitterTracker {
  constructor () {
    this.connection = new TwitterConnection({
      consumer_key: config.twitter.consumerKey,
      consumer_secret: config.twitter.consumerSecret,
      access_token_key: config.twitter.accessToken,
      access_token_secret: config.twitter.accessTokenSecret
    })
  }

  getTweets (keyWord) {
    const tweets = this.connection.get('search/tweets', { q: `#${keyWord}` })
    return Promise.resolve(tweets)
  }
}

module.exports = TwitterTracker