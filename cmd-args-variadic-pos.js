// cmd-args-variadic-pos.js
require("yargs")
  .command("wget <files..>", "Get files", {}, function(argv) {
    console.log("Files: %s", argv.files.join(","));
  })
  .help()
  .argv;
