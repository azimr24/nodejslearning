// CommonJS, every file is moduel by default
// Modules - encapsulated code that the user has limited access to

const names = require('./3-names'); // adds names module
const utils = require('./4-utils'); // adds utils module
console.log(names); // prints all exported functionality

const altSyntax = require('./5-alt_syntax');
console.log(altSyntax);

utils.sayHi(names.azim); // using module properties
console.log(altSyntax.items[0]);
console.log(altSyntax.myDog.name);