// check.js
var argv = require("yargs")
  .check(function(argv) {
    if (typeof argv.id !== "number") {
      throw(new Error("ID must be a number"));
    }

    return true;
  })
  .argv;

console.log("ID: %d", argv.id);
