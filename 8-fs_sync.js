const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8') // reads text into string, econded utf8
const second = readFileSync('./content/second.txt', 'utf8') // reads text into string, econded utf8

console.log('start');

// Writes to a file with name, param1, and text, param2.
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second},`,
    { flag: 'w'} // Overwrites any text already at the specified file; other flags available
);
console.log('done with task');
console.log('start next task');
