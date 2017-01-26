// command.js

var argv = require("yargs")
  .command("install", "Install a package", {
    describe: "lorem"
  }, function(argv) {
    console.log(argv);
  })
  .help()
  .argv;
