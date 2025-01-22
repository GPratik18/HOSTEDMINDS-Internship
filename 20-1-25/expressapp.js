const express = require('express');
//const { log } = require('node:console');


const app = express();

app.get('/', (req, res)=>{
    res.send('hello world');
});

app.listen(3000, ()=>{
    console.log("Server running at http://localhost:3000");
    
});