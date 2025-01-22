let va = require("./mod1");
console.log(va);

const url = require('url');
let u1 = URL.parse("https://www.github.com/GPratik18/")
let u2 = URL.parse("https://www.geeksforgeeks.org/node-js-url-method/?ref=lbp")
console.log(u1);
console.log(u2);

console.log(u1.toString());
console.log(u2.toString());

console.log(u1.toJSON());
console.log(u2.toJSON());

let arr = [u1, u2];

console.log(JSON.stringify(u1));
console.log(JSON.stringify(arr));



