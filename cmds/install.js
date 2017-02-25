// cmds/install.js
exports.command = "install <package> [global]";
exports.describe = "Install a package";
exports.aliases = ["i"];
exports.builder = {
  package: {
    describe: "Package name"
  },
  global: {
    alias: "g",
    describe: "Install package to global",
    default: false
  }
};
exports.handler = function(argv) {
  console.log("Install package %s with global option: %s", argv.package, argv.global);
};
