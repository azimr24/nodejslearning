// npm - global command, comes with node
// npm --version - get version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info bout project/package)
// npm init (step by step, press ente to skip)
// npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const flatItems = _.flattenDeep(items);
console.log(flatItems);