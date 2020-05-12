'use strict'
const Twit = require('twit')
const config = require('./config')
const { generateTweet } = require('./utils')
const sendTweet = require('twitter-tracker-agent/send')
const keywords = ['node', 'platzi', 'open source']
const languages = ['en', 'es']

var T = new Twit({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret,
  timeout_ms: 60*1000,
  strictSSL: true,
})

var stream = T.stream('statuses/filter', { track: keywords, language: languages})
stream.on('tweet', function (tweet) {
  const newTweet = generateTweet(tweet, keywords)
  if(newTweet){
    console.log('Saving tweet');
    sendTweet({newTweet})
  }
})