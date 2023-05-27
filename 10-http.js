const http = require('http');

/* Create server with incoming request req, outgoing response res, and callback function */
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('hello world');
    } else if (req.url === '/mathu') {
        res.end('All about Mathu');
    } else {
        // This counter works in Chrome and when using inline js
        res.end(`
            <button id="curry" onclick="incrNum()">Click Curry Counter</button>
            <script>
                let init = 0;
                function incrNum(){
                    init++;
                    document.getElementById('curry').innerHTML = \`Curry \${init}\`;
                };
            </script>
        `);
    }
});

// Listen to port 3000 for client requests
server.listen(3000)
