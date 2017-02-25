// npm-cmds/remove.js
exports.command = "remove <packages..>";
exports.describe = "Remove package(s)";
exports.aliases = ["rm"];
exports.builder = {
  packages: {
    describe: "Packages name"
  }
};
exports.handler = function(argv) {
  console.log("Remove packages %s", argv.packages.join(","));
};
