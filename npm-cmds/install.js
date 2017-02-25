// npm-cmds/install.js
exports.command = "install <packages..>";
exports.describe = "Install package(s)";
exports.aliases = ["i"];
exports.builder = {
  packages: {
    describe: "Packages name"
  }
};
exports.handler = function(argv) {
  console.log("Install packages %s", argv.packages.join(","));
};
