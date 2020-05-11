#!/usr/bin/env node
'use strict'
const { TweetService } = require('twitter-tracker-db')
const { parseMessage } = require('./utils')

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'twitter-tracker';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      channel.consume(queue, async function(message) {
        try {
          const tweetService = new TweetService()
          const tweet = parseMessage(message.content)
          console.log(`[x] Tweet ${tweet.id}`);
          
          const query = {
            id: tweet.id
          }
        
          const exist = await tweetService.getTweets(query)
          
          if(exist.length === 0){
            const id = await tweetService.create({tweet})
            console.log(`Tweet saved`);
          }else {
            console.log(`Tweet with id: ${tweet.id} already exist`);
          }
        } catch (error) {
          console.log(error);
        }
      }, 
      {
        noAck: true
      });
  });
});