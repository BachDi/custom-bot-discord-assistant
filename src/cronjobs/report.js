const sendMessage = require("../api/sendmessage");

var CronJob = require("cron").CronJob;
var job = new CronJob(
  // "00 30 10 * * 1-5",
  "00 39 18 * * 0,6",
  // "* * * * * *",
  async function () {
    /*
     * Runs every weekday (Monday through Friday)
     * at 10:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
    console.log("Report job started");
    // await sendMessage({
    //   content: "Love you <@!466791305494659084>",
    // });
  },
  function () {
    console.log("Report job stopped");
    /* This function is executed when the job stops */
  },
  true /* Start the job right now */,
  "Asia/Ho_Chi_Minh" /* Time zone of this job. */
);
module.exports = job;
