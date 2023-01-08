const { App, LogLevel } = require('@slack/bolt');
const { config } = require('dotenv');
const { registerListeners } = require('./listeners');

// import { App, LogLevel } from "@slack/bolt";
// import pkg from '@slack/bolt';
// const { App, LogLevel } = pkg;
// import { config } from "dotenv";
config();


/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
//   socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: process.env.PORT || 3000
});

/** Register Listeners */
registerListeners(app);

// Listens for messages containing "hi bot" and responds with an italicized "who's there?"
app.message('hi bot', async ({ message, logger }) => {
// app.message('hi <@U04G48F4U3E>', async ({ message, say }) => {
    console.log(message.channel)
    console.log(message.message)
    logger.info(message.message)
    // var msg = 'I miss you too, <@{message.user}>!'
    // console.log(message)
});

// This will match any message that contains 👋
app.message(':wave:', async ({ message, say }) => {
    await say(`Hello, <@${message.user}>`);
  });


  


(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();



// Listens for messages containing "hi bot" and responds with an italicized "who's there?"
// app.message('hi bot', async ({ message, logger }) => {
// // app.message('hi <@U04G48F4U3E>', async ({ message, say }) => {
//     console.log(message.channel)
//     console.log(message.message)
//     logger.info(message.message)
//     // var msg = 'I miss you too, <@{message.user}>!'
//     // console.log(message)
// });
// app.event('reaction_added', async ({ event, client, logger }) => {
//     if (event.reaction === 'calendar') {
//         // await say('calendar');
//         try {
//             const result = await client.chat.postMessage({
//                 channel: event.channel,
//                 text: 'oo calendar'
//             });
//             logger.info(result)
//         }
//         catch (error) {
//             logger.error(error)
//         }
//     }
// });

// /** Start Bolt App */
// (async () => {
//     try {
//         await app.start();
//         console.log('⚡️ Bolt app is running! ⚡️');
//     } catch (error) {
//         console.error('Unable to start App', error);
//     }  
// })();




// const WebSocket = require('ws')
// const ws = new WebSocket('ws://localhost:3000');

// console.log(ws._url)


// if (ws.readyState === WebSocket.OPEN) {
//     console.log('WebSocket connection is open');
//   } else {
//     console.log(`WebSocket connection is in state: ${ws.readyState}`);
//   }

// ws.onopen = function() {
//     console.log("WebSocket connection opened");
//   };
  
// ws.onclose = function() {
// console.log("WebSocket connection closed");
// };

// ws.onerror = function(error) {
// console.log("WebSocket error:", error);
// };


// app.command("/sambo", async ({ command, ack, say, logger }) => {
//     try {
//         // debug('Received command: ${command}');
//         logger.debug('Received command: ${command}');
//         // console.log(util.inspect(command, { depth: null }));
//         await ack();
//         say("Yaaay! that command works!");
//     } catch (e) {
//         // error(e);
//         console.error(e);
//     }
// });