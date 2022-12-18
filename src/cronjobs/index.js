const reportCron = require("./report");

const cronJobs = [reportCron];

function startCronJobs() {
  cronJobs.forEach((cronJob) => cronJob.start());
}

module.exports = startCronJobs;
