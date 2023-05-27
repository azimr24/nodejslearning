const path = require('path');

console.log(path.sep); // set as '/'

const filePath = path.join('/content', 'subfolder', 'test.txt'); // makes string of joined paths
console.log(filePath)

const base = path.basename(filePath); // just file at path
console.log(base); 

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // makes string of joined paths all the way to Users
console.log(absolute);