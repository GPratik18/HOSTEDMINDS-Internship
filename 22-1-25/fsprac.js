let consoleObj = require('console');
let fs = require('fs');
let out = fs.createWriteStream("./data.json");

let obj = consoleObj.Console(out);

let arr = [
    {
        name: "Pratik",
        age: 23
    },
    {
        name: "Vishal",
        age: 24
    },
    {
        name: "Sandeep",
        age: 27
    }
];

obj.log(JSON.stringify(arr, null, 4));  