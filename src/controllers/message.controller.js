const sendMessage = require("../api/sendmessage");

async function sendMessageReport(request, response) {
  const message = request.body;
  try {
    await sendMessage(message);
    response.statusCode = 200;
    response.end("Send message successfully");
  } catch (error) {
    response.statusCode = 400;
    response.end("Send message failed");
  }
}

module.exports = {
  sendMessageReport,
};
