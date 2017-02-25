// command-args-positional.js
argv = require("yargs")
  .command("install <package> [global]", "Install package", function(yargs) {
    return yargs.option("global", {
      alias: "g",
      default: false
    })
  }, function(argv) {
    console.log("Install package %s with global option is: %s", argv.package, argv.global);
  })
  .help()
  .argv;
