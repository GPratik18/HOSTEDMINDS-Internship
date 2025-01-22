import { createServer } from 'http';
//const http = require('http');

const server = createServer((req, res)=>{
    //res.statusCode = 300;
    res.writeHead(200, {"Content-Type":'text/html'});
    setInterval(()=>{console.log("Running fine")},10000);
    res.end("<h1>Welcome to the Node.js Tutorial</h1>");
});

server.listen(3000,()=>{
    console.log("Server is runnig on http://localhost:3000/");
    
})

console.log(process.argv.slice(2));
