//Set up a node js server no express
require("dotenv").config();
const axios = require("axios");
const sendMessage = require("./src/api/sendmessage");
const http = require("http");
const port = process.env.PORT || 8000;
const cronJobs = require("./src/cronjobs/index.js");
const router = require("./router");

const requestHandler = (request, response) => {
  // console.log(request.url);

  const controller = router.route(request);
  controller(request, response);

  // response.end("Hello Node.js Server!");
};

cronJobs();

const server = http.createServer(requestHandler);
server.listen(port, async (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
