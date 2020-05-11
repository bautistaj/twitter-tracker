'use strict'
const MongoLib = require('./../lib')

class TweetService {
  constructor () {
    this.collection = 'tweets'
    this.mongoDb = new MongoLib()
  }

  async getTweets (query = {}, limit = 50) {
    const list = await this.mongoDb.getAll(this.collection, query, limit)
    return list || []
  }

  async get({ id }) {
    const list = await this.mongoDb.get(this.collection, id)
    return list || {}
  }

  async create ({ tweet }) {
    const createTweetId = await this.mongoDb.create(this.collection, tweet)
    return createTweetId
  }

  async update ({ id, tweet }) {
    const updateTweetId = await this.mongoDb.update(this.collection, id, tweet)
    return updateTweetId
  }
}

module.exports = TweetService
