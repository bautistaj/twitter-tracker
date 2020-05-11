'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const keyWordApi = require('./routers/key-words')
const tweetApi = require('./routers/tweets')

const app = express()

app.use(bodyParser.json())

keyWordApi(app)
tweetApi(app)

app.listen(3000, () => {
  console.log(`The server is listening in the port: ${3000}`);
})

