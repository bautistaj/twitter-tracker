# Twitter Tracker
Application that listen to tweets and track certain keywords and those tweets are available through an API.

This project is compound by 4 applications:

### twitter-tracker
App that realize the search of tweets according keywords, this keywords are stored, you can chang add more keywords through API. After search send the tweets to the application twitter-tracker-agent.

### twitter-tracker-agent
App that received the tweets and stored using the app twitter-tracker-db.

### twitter-tracker-api
Api contain two end points:
* keywords: The main configuration to search tweets.
* tweets: Get tweets stored according the keywords.

### twitter-tracker-db
App in charge to persist data of keywords and tweets.