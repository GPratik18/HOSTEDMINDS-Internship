
//let n = 
//console.log(n);

// arr = [1,2,3,4,5,6,7,8,0,9];
// for(i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let ar1 = document.querySelectorAll("h1");
// // console.log(ar1);

// ar1.forEach(element => {
//     //let ele = new HTMLElement("p");
//     //ele.innerText
//     element.innerHTML = "hello";
// });

// ar1.innerHTML(ele);


let formSubmit = document.getElementById("submit");
// formSubmit.addEventListener("click",(event)=>{
//     event.preventDefault;
//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;
//     let age = document.getElementById("age").value;
//     let height = document.getElementById("height").value;
//     let pass = document.getElementById("pass").value;
//     let cpass = document.getElementById("cpass").value;
//     let result = document.getElementById("result").value;
//     var regex = /[0-9][A-Z][a-z][!@#$%^&*()]{1,}/;
//     if(fname=="" || lname == "" || age =="" || height == "" || pass =="" || cpass==""){
//         alert("Empty field");
//     }
//     else{
//         if(pass.match(regex)==null){
//             alert("Password error");
//         }
//         else if(cpass!=pass){
//             alert("Confirm password and Password must be same");
//         }
//         else{
//             alert("Form is submitted");
//             //window.open();
//         }
//     }
// });

//ajax

let ajxbtn = document.getElementById("ajxbtn");
ajxbtn.addEventListener("click",onloadDoc);
let ajxText = document.getElementById("ajxpara");
function onloadDoc(){
    const xhttp = new XMLHttpRequest();
    console.log(xhttp);
    
    xhttp.onload = function(){
        ajxText.innerText =this.responseText;
    }
    let ajxPromise = new Promise((resolve,reject)=>{
        try {
            xhttp.open("GET", "ajaxresp.txt", true);
            xhttp.send();
            resolve();
            
        } catch (error) {
            reject();
        }
        
        
    });
    ajxPromise.then(resolve =()=>{
        console.log("data Fetched");
    },
    reject =()=>{
        console.log("data not Fetched"); 
    });
    
}

//JSON
let JSONString = `{
                    "name":"Pratik",
                    "age":24,
                    "car":null
                    }`;

// fetch().then().then((data)=>{
//     console.log(data);
    
// });
var dta;
fetch("./data.json").then((res)=>{
    if(!res.ok){
        throw new Error ("Http error");
    }
    return res.json();
}).then((data)=> dta=data
).catch((error)=> console.log(error)
);

// import { arr1111 } from "./jsonstudy.js";
// let pr = document.getElementById("jsondata");
// arr1111.forEach(element=>{
//     pr.appendChild(element);
// })

//result.innerText = obj['name']+" "+obj['age']+" "+obj['car'];
