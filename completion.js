// completion.js
require("yargs")
  .completion("completion", function(current, argv, done) {
    setTimeout(function() {
      done([
        "apple",
        "banana",
      ])
    }, 500)
  })
  .argv;
