// command-builder.js

var argv = require("yargs")
  .command('install', 'Install package', {
    alias: 'i'
  })
  .help()
  .argv;

console.log(argv);
