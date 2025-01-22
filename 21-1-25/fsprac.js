console.clear();
const { log, count } = require('console');
const fs = require('fs');
//const { buffer } = require('stream/consumers');

// let read = fs.readFile("./data.json", (err, data)=>{
//     if(err){
//         return console.error("File error");
//     }
//     console.log("Asynchronous read:\n", data.toString());
// });
// console.log(read);

let data = fs.readFileSync("./data.json");
console.log(data.toString());

//File operations 
const buffer = Buffer.alloc(2048);
let counter = 0;
fs.open("./data.json","r", function(err, fd){
    if(err){
        return console.error("File error");
    }
    console.log("File open successfully");
    
    {fs.read(fd, buffer, 0, buffer.length, (counter++)*buffer.length, function(err, bytes){
        if(err){
            console.log("File error");  
        }
        // console.log(bytes+ "bytes read");
        if(bytes > 0){
            console.log(buffer.toString());  
        }else{
            clearInterval();
        }
        
    })}
});



