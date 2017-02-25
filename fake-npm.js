// fake-npm.js
require("yargs")
  .commandDir("./npm-cmds")
  .help()
  .argv;
