//use axios with method post
const axios = require("axios");

async function sendMessage(message) {
  try {
    await axios.post(
      `${process.env.URL_DISCORD}/${process.env.CHANNEL_ID}/messages`,
      message,
      {
        headers: {
          Authorization: `Bot ${process.env.TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.log("error", "sendmessage.js", "sendMessage()");
  }
}

module.exports = sendMessage;
