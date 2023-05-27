const { readFile, writeFile } = require('fs');

console.log('start');
/* async readFile func, outputs the result of a callback function, taking an err 
   and buffer result, which can be encoded and rexpressed as different things */ 
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        /* async writeFile func, outputs the result of a callback function, 
           taking an err and buffer result, which can be encoded and rexpressed as different things */ 
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                } else {
                    console.log('done');
                }
            }
        )
    });
});
console.log('starting next task');
