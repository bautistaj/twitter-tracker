require('dotenv').config()

const config = {
  twitter: {
    consumerKey: process.env.TWIT_CONSUMER_KEY,
    consumerSecret: process.env.TWIT_CONSUMER_SECRET,
    accessToken: process.env.TWIT_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWIT_ACCESS_TOKEN_SECRET
  }
}

module.exports = config
