const sampleMessageCallback = async ({ message, context, say }) => {
  try {
    const greeting = context.matches[0];
    const user_id = message.user_id;
    await say(`Hi ${user_id}, how are you?`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sampleMessageCallback };
