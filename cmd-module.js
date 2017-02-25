// cmd-module.js
require("yargs")
  // .command("install <package> [global]", "Install a package", require("./cmds/install"))
  .command(require("./cmds/install"))
  .help()
  .argv;
