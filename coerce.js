// coerce.js

var argv = require("yargs")
  // .coerce("date", function(date) {
  //   return new Date(date).getTime();
  // })
  // .coerce(["date", "bod"], function(value) {
  //   return new Date(value).getTime();
  // })
  .coerce({
    "date": function(date) {
      return new Date(date).getTime();
    },
    // "bod": function(bod) {
    //   return new Date(bod).getTime();
    // }
  })
  .argv;

console.log("Miliseconds since 1979/01/01: %s", argv.date);
// console.log("Miliseconds since 1979/01/01 to your birthday: %s", argv.bod);
