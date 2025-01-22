//Declaration & variable statements
let a = 10;
const b = 20;
console.log(a);
console.log(b);

//Empty statement : returns empty

//Expression statement
a= b/2;
console.log(a);

//if statement :- conditions.js
//Iteration statements : loops.js

//Continue and break statements

//return statement
function trialFunction(){
    return "From trial function";
}
console.log(trialFunction());

//with statement

//switch statement
a=50;
switch(a){
    case 10: console.log("Ten"); break;
    case 20: console.log("Twenty"); break;
    case 30: console.log("Thirty"); break;
    case 40: console.log("Forty"); break;
    case 50: console.log("Fifty"); break;
    case 60: console.log("Sixty"); break;
    case 70: console.log("Seventy"); break;
    case 80: console.log("Eighty"); break;
    case 90: console.log("Ninety"); break;
    case 100: console.log("Hundred"); break;
}


//Labelled statements

//Throw statement 
function divide(a,b){
    if(b==0){
        throw new Error("Cannot be divided by 0");
    }
    return a/b;
}
console.log(divide(10,2));
//console.log(divide(10,0));
//Try statement
try{
    console.log(divide(10,0));
}
catch(error){
    console.log("Cannot be divided by zero");
}
//Debugger statement