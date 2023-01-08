const { Configuration, OpenAIApi } = require('openai');
const { config } = require('dotenv');
config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// This function takes in a message text and sends it to the OpenAI API to get a response
async function getOpenAiResponse(message) {
    try {
        // Send the message to OpenAI
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            max_tokens: 2048,
            n: 1,
            temperature: 0.5,
        });

        // Return the first response from OpenAI
        // console.log(response)
        return response.data.choices[0].text;
    } catch (error) {
        console.error(error.message);
        console.error(error.response.status);
        console.error(error.response.data);
    }

}

const chatgptCommandCallback = async ({ command, ack, respond, say }) => {
    try {
        await ack();
        // await respond('I got your command.  Sam only allows my response to be only visible to you though!');

        // Get the message text from the command
        const message = command.text;
        console.log(message)

        // Respond to the user with a message saying that the request is being sent to ChatGPT
        await respond({
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `Asking ChatGPT the following: ${message}`,
                    },
                },
            ],
        });

        // Send the message to OpenAI and get the response
        const openaiResponse = await getOpenAiResponse(message);

        // Respond to the user with the OpenAI response
        await respond({
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: openaiResponse,
                    },
                },
            ],
        });
    } catch (error) {
        // Log the error message
        console.error(error);

        // Respond to the user with an error message
        respond({
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: "Sorry, something went wrong when trying to get a response from OpenAI.",
                    },
                },
            ],
        });
    }
};

module.exports = { chatgptCommandCallback };
