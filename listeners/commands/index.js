const { samboCommandCallback } = require('./sambo-command');
const { chatgptCommandCallback } = require('./chatgpt-command');

module.exports.register = (app) => {
  app.command('/sambo', samboCommandCallback);
  app.command('/chatgpt', chatgptCommandCallback);
};
