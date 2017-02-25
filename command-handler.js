// command-handler.js
require("yargs")
  .command("install", "Install a package", function(yargs) {
    return yargs.option("name", {
      alias: "n",
      describe: "Package name"
    })
  }, function(argv) {
    console.log("Installing package %s...", argv.n);
  })
  .help()
  .argv;
