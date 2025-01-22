//TextEncoder
const ec = new TextEncoder();
const e = [];
e.push(ec.encode("Pratik"));
e.push(ec.encode("Sandeep"));
e.push(ec.encode("Vishal"));
e.push(ec.encode("Parth"));
e.push(ec.encode("Atharv"));
e.push(ec.encode("Abhishek"));
console.log(e);


//URL class
const url = new URL("/GPratik18","https://www.github.com/");
console.log(url);

//console.log(__dirname);

//console.log(__filename);

//Os Module

// const osinfo = require("os");
// console.log("Hostname : ",osinfo.hostname());
// console.log("Network Interface : ",osinfo.networkInterfaces());
// console.log("Type : ",osinfo.type());
// console.log("User Info : ",osinfo.userInfo());
// console.log("Up time : ",osinfo.uptime());
// console.log("Version : ",osinfo.version());
// console.log("Machine : ",osinfo.machine());

//Process module
import {add, PIr} from './mod1.js';
const ps = require('process');
//console.log(ps.cpuUsage());

//const cal = require('./mod1.js');
console.log(add());

console.log(PIr);
