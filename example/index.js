// Dependencies
var DoubleLast = require("../lib");

console.log(DoubleLast("coffe"));
// => "coffee"

console.log(DoubleLast("coffe", ["t"]));
// => "coffe"

console.log(DoubleLast("coffe", ["e"]));
// => "coffee"
