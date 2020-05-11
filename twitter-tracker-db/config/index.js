require('dotenv').config()

const config = {
  db: {
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER || 'bautistaj',
    password: process.env.DB_PASSWORD || 'Zd3kXKz8ZrmEwEU7',
    host: process.env.DB_HOST || 'cluster0-j6wui.mongodb.net',
    name: process.env.DB_NAME || 'tweeter-tracker'
  }
}

module.exports = config
