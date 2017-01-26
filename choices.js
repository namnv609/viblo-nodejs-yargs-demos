// choices.js

var argv = require("yargs")
  .choices("service", ["Gmail", "Hotmail", "Yahoo!Mail"])
  .alias("s", "service")
  .help()
  .argv;

console.log("Your choice service: %s", argv.service);
