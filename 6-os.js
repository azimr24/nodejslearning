// Useful Modules - OS, Path, FS, Http

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// property returns system uptime in secs
console.log(`The system uptime is ${os.uptime()} seconds`)

// info about current os + mem
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);
