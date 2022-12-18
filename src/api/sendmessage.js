//use axios with method post

const axios = require("axios");

async function sendMessage(message) {
  await axios.post(
    `${process.env.URL_DISCORD}/${process.env.CHANNEL_ID}/messages`,
    message,
    {
      headers: {
        Authorization: `Bot ${process.env.TOKEN}`,
      },
    }
  );
}

module.exports = sendMessage;
