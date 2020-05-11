'use strict'
const MongoLib = require('./../lib')

class KeyWordService {
  constructor () {
    this.collection = 'key-words'
    this.mongoDb = new MongoLib()
  }

  async getKeyWords (query = {}) {
    const list = await this.mongoDb.getAll(this.collection, query)
    return list || []
  }

  async get ({ id }) {
    const list = await this.mongoDb.get(this.collection, id)
    return list || {}
  }

  async create ({ keyWord }) {
    const id = await this.mongoDb.create(this.collection, keyWord)
    return id
  }

  async update ({ id, keyWord } = {}) {
    const idUpdated = await this.mongoDb.update(this.collection, id, keyWord)
    return idUpdated
  }
}

module.exports = KeyWordService
