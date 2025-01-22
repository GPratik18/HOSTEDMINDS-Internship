//Array Methods

let a = ["sun","mon","tue","wed","fri","sat"];
a.splice(4,0,"thu")
console.log(a);
console.log(a.values());
console.log(a.join());
console.log(a.join("; "));
console.log(a.filter((word)=> word.charAt(0)=="t"));

console.log(a.map( (word)=>word.charAt(2)));

a.forEach((ele)=>{
    console.log("I am an array element: ",ele);
    
});


const arr = ["a",'b'];
arr[5] = "qwewrt";
console.log(arr);

let d = new Date ("2002-03-28");
console.log(d.getFullYear())
console.log(d.getDate())
console.log(d.getMinutes())
console.log(d.getMilliseconds())
console.log(d.getUTCDate())


//Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);


console.log("============================================");

console.log(Math.ceil(10.3));
console.log(Math.floor(10.3));
console.log(Math.ceil(10));
console.log(Math.floor(10));
console.log(Math.sign(-10));

let str = "qwertyuiopasdfghjklzxcvbnm";
// for (const element of str) {
//     console.log(element);
// }

//Sets


let s = new Set(Array("1"));
for(let x of s){
    console.log(x);
}

let brr = [...s];
console.log(brr instanceof Array);

//Map

const fruit = new Map();
fruit.set("apple",300);
fruit.set("pineapple",700);
fruit.set("banana",400);
fruit.set("grapes",3400);
fruit.set("watermelon",30);
fruit.set("dragonfruit",900);
console.log(fruit);

console.log(String(fruit));


// let {fname, lname } = person;
// console.log(person);

//Destructuring
let [z,x,c,v,b,n,...m] = [1,2,3,4,5,6,7,8];
console.log(z);
console.log(x);
console.log(c);
console.log(v);
console.log(b);
console.log(n);
console.log(m);

let [...fr] = fruit;

console.log(fr);
import {exactMatch, NAME, reg} from "./module1.js";
console.log(NAME);

//Regular expressions
let val = (reg.test("-fabdcd"));
let str1 = "abc-";
console.log("pratik.@gmail.com".match(/^[a-z0-9.]+@[a-z]+\.[a-z]/));


//"use strict"
function f(){
    console.log("From Strict");
}
console.log(this);


//Object Binding 
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
        return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.myFunction());

  const person1 = person.myFunction();
  console.log(person1);
  

  //import { user} from "./trial.json";
  let jsondata = JSON.parse( `{
    "user":[
        {
            "site": "gfg"
        }
    ]
}`);
  console.log(jsondata);
    var count = 0n;
  function callback(){
    console.log(count++);
    
  }
  let success = ()=>console.log(this,"success");
  let failure = ()=>console.log(this,"failure");
  
//   setInterval(callback, 1000).then(success, failure);

const myPromise = new Promise((resolve, reject)=>{
    setInterval(()=>{
        resolve("hello");
    }, 300);
});

// myPromise.then(success, failure);


function pro(){
    console.log("Hello");
    
}
let mpromise = new Promise((resolve, reject)=>{
    pro();
    resolve("Resolved");
});
mpromise.then(success, failure);