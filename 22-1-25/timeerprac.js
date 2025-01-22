const { log } = require("console");

let imm = setImmediate(()=>{
    console.log("1: "+12);
})

console.log("2:"+imm.hasRef());
console.log("3:"+imm.ref());
console.log("4:"+imm.unref());
console.log("5:"+imm.hasRef());
console.log("6:"+imm.hasRef());
clearImmediate(imm);


let tmout = setTimeout(()=>{
    console.log("Hello");
})

console.log(tmout.hasRef());
