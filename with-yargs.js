var argv = require("yargs")
  .alias({
    'name': 'n',
    'age': 'a'
  })
  .argv;

console.log(argv);
console.log("Your name: %s\nYour age: %s years old", argv.name, argv.age);
