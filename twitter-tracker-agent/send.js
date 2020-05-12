#!/usr/bin/env node
'use strict'
const amqp = require('amqplib/callback_api');

async function sendTweet({newTweet}){
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
  
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(newTweet)));
      console.log(" [x] Sent %s", newTweet.id);
    });
  
    setTimeout(function() {
      console.log('Close');
      connection.close();
    }, 500);
  });
}

module.exports = sendTweet
