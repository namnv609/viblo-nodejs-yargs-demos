// array.js
var argv = require("yargs")
  .array("id")
  .argv;

console.log(argv.id);
console.log("SELECT * FROM users WHERE id IN (%s)", argv.id.join(","));
