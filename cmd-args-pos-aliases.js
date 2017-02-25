// cmd-args-pos-aliases.js
require("yargs")
  .command("login <email|username> [password]", "Login", {}, function(argv) {
    console.log("Email: %s\nUser: %s\nPassword: %s", argv.email, argv.username, argv.password)
  })
  .help()
  .argv;
