const samboCommandCallback = async ({ ack, respond, say }) => {
    try {
      await ack();
      await respond('I got your command.  Sam only allows my response to be only visible to you though!');
    //   await say("Yaay!  that command did something!"); // only use this if you want public response from bot.
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = { samboCommandCallback };
