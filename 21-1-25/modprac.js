console.clear();
const mod2   = require("./mod2.js");
mod2.welcome();
console.log(mod2.writer);


//Assert module
const assert = require ("assert");
let x =69;
let y =69.09;
// try {
//     assert(x==y);
// } catch (error) {
//     console.log(`${x} is not equal to ${y}`);
    
// }

// assert(0);

assert.ifError();
assert.deepStrictEqual(0, 0, "This was required");

assert.match("ABCD",/[AB]/,"Does not match");

// const ubuf = Buffer.alloc(26, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// console.log(ubuf);
// const ubuf1 = new Buffer("PRATIKGhute", "ascii");
// console.log(ubuf1);
// const ubuf2 = Buffer.alloc(10, [1,2,3,4,5,6,7,8,9,0]);
// console.log(ubuf2);
// const ubuf3 = Buffer.alloc(26, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// console.log(ubuf3);



let buffer1 = Buffer.from("for");

let buffer2 = Buffer.from("GeekandGeek");

buffer1.copy(buffer2,4,0);
console.log(buffer1.toString());
console.log(buffer2.toString());

let buf1 = Buffer.from("GEEKS");
let buf2 = Buffer.allocUnsafe(5);

for(i=0;i<5;i++){
    buf2[i]= i+97;
}
buf2.copy(buf1, 2);
console.log(buf1.toString());

const b1 = Buffer.from([0x11, 0x12, 0x13, 0x14, 0x15, 0x54]);
console.log(b1.readIntBE(0,5).toString(16));
console.log(b1.readIntBE(0,4).toString(16));
console.log(b1.readIntBE(0,3).toString(16));
console.log(b1.readIntBE(0,2).toString(16));
console.log(b1.readIntBE(0,1).toString(16));

buf1.write("qwerty", 3);
console.log(buf1.toString());

let obj = console.log("xkc");
obj;

const fs = require('fs');
const out = fs.createWriteStream("./stdout.log");
const err = fs.createWriteStream("./stderr.log");
let obj1 = new console.Console(out, err);

obj1.log("Aaaoge jab tum");
obj1.error("sdkj");

console.assert(0,"Khwahishat adhuri nu");
console.dir(obj1);
console.time();
// for(i = 0;i<100;i++){
//     console.log(i);
    
// }
console.timeEnd();

let arr = [1,2,3,4,5,6,7,8,9,0];
console.table(arr);

let object1 = {
    name : "Pratik",
    age: 23
}
console.table(object1)

const jsonData = require ("./data.json");
// console.table(jsonData);
obj1.table(jsonData);

jsonData.forEach((ele)=>{
    console.table(ele);
});
console.timeStamp();