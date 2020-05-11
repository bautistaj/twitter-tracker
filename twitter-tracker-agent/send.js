#!/usr/bin/env node
'use strict'
const amqp = require('amqplib/callback_api');

async function sendTweet({tweet}){
  amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
      throw error0;
    }
  
    connection.createChannel(function(error1, channel) {
      if (error1) {
        throw error1;
      }
  
      const queue = 'twitter-tracker';
      
      channel.assertQueue(queue, {
        durable: false
      });
  
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(tweet)));
      console.log(" [x] Sent %s", tweet.id);
    });
  
    setTimeout(function() {
      console.log('Close');
      connection.close();
      process.exit(0);
    }, 500);
  });
}

module.exports = sendTweet
