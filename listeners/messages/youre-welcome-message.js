const youreWelcomeCallback = async ({ message, context, say }) => {
    try {
      const greeting = context.matches[0];
      await say(`It's no problem, y'all.  I'm running on Sam's Mac Studio so I have LOADS of spare resources laying around for whenever you need me.`);
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = { youreWelcomeCallback };
  