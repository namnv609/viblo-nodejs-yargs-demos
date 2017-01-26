// boolean.js
var argv = require("yargs")
  .boolean("production")
  .alias("prod", "production")
  .argv;

console.log(argv);
