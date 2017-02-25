// command-builder-fn.js
var argv = require("yargs")
  .command("install", "Install package", function(yargs) {
    return yargs.option("name", {
      alias: "n",
      describe: "Package name"
    });
  })
  .help()
  .argv;
