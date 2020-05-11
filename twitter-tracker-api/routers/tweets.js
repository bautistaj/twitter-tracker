'use strict'
const express = require('express')
const { TweetService } = require('twitter-tracker-db')
const { createQuery, getLimit } = require('./../utils')

function TweetApi(app){
  const router = express.Router()
  const tweetService = new TweetService()

  app.use('/api/tweets', router)

  router.get('/', async function(req, res, next){
    try {
      req.query
      const query = createQuery(req.query)
      const limit = getLimit(req.query)

      const result = await tweetService.getTweets(query, limit)

      res.status(200).json({
        data: result,
        message: 'Tweets listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id', async function(req, res, next){
    try {
      const { id } = req.params 
      const result = await tweetService.get({ id })

      res.status(200).json({
        data: result,
        message: 'Tweet'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:id', async function(req, res, next){
    try {
      const { id } = req.params 
      const { body: tweet } = req

      const result = await tweetService.update({ id, tweet })

      res.status(200).json({
        data: result,
        message: 'Tweet updated'
      })

    } catch (error) {
      next(error)
    }
  })
}

module.exports = TweetApi