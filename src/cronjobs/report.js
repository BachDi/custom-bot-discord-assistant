const sendMessage = require("../api/sendmessage");

const CronJob = require("cron").CronJob;
const job = new CronJob(
  "00 30 10 * * 1-5",
  // "20 05 20 * * 0,6",
  // "* * * * * *",
  async function () {
    /*
     * Runs every weekday (Monday through Friday)
     * at 10:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
    console.log("Report job started");
    const message = {
      content: "Report HR <@!466791305494659084>",
    };
    await sendMessage(message);
  },
  function () {
    console.log("Report job stopped");
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */,
  "Asia/Ho_Chi_Minh" /* Time zone of this job. */
);
module.exports = job;
