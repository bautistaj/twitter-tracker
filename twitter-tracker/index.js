'use strict'
const TwitterConnection = require('./twitterTracker')
const { readTweets } = require('./utils')
const sendTweet = require('twitter-tracker-agent/send')
const { KeyWordService } = require('twitter-tracker-db')

/**
 * Function to share tweets through RabbitMQ
 * @param {string} tweets 
 * @param {string} keyword 
 */
function distributeTweets(tweets, keyword) {
  const cleanTweets = readTweets(tweets, keyword)
  
  cleanTweets.forEach(tweet => {
    sendTweet({tweet})
  });
}

/**
 * Function to search according keyword
 * @param {string} keyword 
 */
async function searchTweets(keyword) {
  const twitterConnection = new TwitterConnection()
  const tweets = await twitterConnection.getTweets(keyword)
  distributeTweets(tweets, keyword)
}

if (!module.parent) {
  const keyWordService = new KeyWordService()
  
  keyWordService.getKeyWords({}, 50).then(keyword => {
    keyword.map(word => {
      console.log(`Searching keword: ${word.name}`);
      searchTweets(word.name)
    })
  })  
}

module.exports = searchTweets