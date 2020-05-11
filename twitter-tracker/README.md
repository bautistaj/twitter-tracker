
# twitter-tracker
App that realize the search of tweets according keywords, this keywords are stored, you can chang add more keywords through API. After search send the tweets to the application twitter-tracker-agent.

## Usage
Clone the project.
```shell
git clone git@github.com:bautistaj/twitter-tracker.git
```

cd twitter-tracker and and install dependencies.

```
npm install
```

This project depend of **twitter-tracker-db** and **twitter-tracker-agent**, so is necessary to configure them, check the README file of each project.

Configure the .env file according the example .env.example.
Is necessary to get aan account of
[twitter developer](https://developer.twitter.com/en).

Once the projects twitter-tracker-db, **twitter-tracker-agent**
and twitter-tracker correctly run the next command.


```shell
node ./twitter-tracker/index.js
```

The app search tweets according the keywords configured, the tweets will send to the app **twitter-tracker-agent**, this app stored tweets.