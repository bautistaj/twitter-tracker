'use strict'

function parseMessage (message) {
  if (message instanceof Buffer) {
    message = message.toString('utf8')
  }

  try {
    message = JSON.parse(message)
  } catch (e) {
    message = {}
  }

  return message
}

module.exports = {
  parseMessage
}