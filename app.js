const { App, LogLevel } = require('@slack/bolt');
const { config } = require('dotenv');
const { registerListeners } = require('./listeners');

config();

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: process.env.PORT || 3000
});

/** Register Listeners */
registerListeners(app);

// Listens for messages containing "hi bot" and responds with an italicized "who's there?"
// app.message('hi bot', async ({ message, logger }) => {
// // app.message('hi <@U04G48F4U3E>', async ({ message, say }) => {
//     console.log(message.channel)
//     console.log(message.message)
//     logger.info(message.message)
//     // var msg = 'I miss you too, <@{message.user}>!'
//     // console.log(message)
// });

app.event('reaction_added', async ({ event, client, logger }) => {
    if (event.reaction === 'calendar') {
        // await say('calendar');
        try {
            const result = await client.chat.postMessage({
                channel: event.channel,
                text: 'oo calendar'
            });
            logger.info(result)
        }
        catch (error) {
            logger.error(error)
        }
    }
});

/** Start Bolt App */
(async () => {
    try {
        await app.start();
        console.log('⚡️ Bolt app is running! ⚡️');
    } catch (error) {
        console.error('Unable to start App', error);
    }  
})();
