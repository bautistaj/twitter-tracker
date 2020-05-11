'use strict'
const express = require('express')
const { KeyWordService } = require('twitter-tracker-db')

function keyWordApi(app){
  const router = express.Router()
  const keyWordService = new KeyWordService()

  app.use('/api/keywords', router)

  router.get('/', async function(req, res, next){
    try {
      const result = await keyWordService.getKeyWords()

      res.status(200).json({
        data: result,
        message: 'Keywords listed'
      })
    } catch (error) {
      next(error)
    }
  })

  router.get('/:id', async function(req, res, next){
    try {
      const { id } = req.params 
      const result = await keyWordService.get({ id })

      res.status(200).json({
        data: result,
        message: 'Keyword'
      })
    } catch (error) {
      next(error)
    }
  })

  router.put('/:id', async function(req, res, next){
    try {
      const { id } = req.params 
      const { body: keyWord } = req

      const result = await keyWordService.update({ id, keyWord })

      res.status(200).json({
        data: result,
        message: 'Keyword updated'
      })

    } catch (error) {
      next(error)
    }
  })
}

module.exports = keyWordApi