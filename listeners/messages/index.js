const { sampleMessageCallback } = require('./sample-message');
// const { youreWelcomeCallback } = require('./youre-welcome-message');

module.exports.register = (app) => {
  app.message(/^(hi bot|hello bot|hey bot).*/, sampleMessageCallback);
  // app.message(/^(thanks|thank you).*/, youreWelcomeCallback);
};
