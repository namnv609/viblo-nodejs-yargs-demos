// fake-rails.js

var argv = require("yargs")
  .env("FAKE")
  .option("e", {
    alias: "env",
    default: "development",
    global: true
  })
  .command("console", "Rails console", {}, function(argv) {
    console.log("Start rails console with env %s", argv.env);
  })
  .command("server", "Rails server", {}, function(argv) {
    console.log("Start server with env %s", argv.env)
  })
  .help()
  .argv;
