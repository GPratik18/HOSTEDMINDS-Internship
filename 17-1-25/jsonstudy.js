
let fl = require("./data.json");

//console.log(fl);
let arr= [];
fl.forEach(element=>{
    arr.push(element);
})

//Age calculator from JSON
function ageCalculator(dob){
    let date = new Date();
    return date.getFullYear() - dob.getFullYear();
}

// arr.forEach(element=>{
//     console.log(ageCalculator(new Date(element["DOB"])));
// });

let searchResult = [];
const searchByName = function (param) {
    const reg = new RegExp(param);
    arr.forEach(element=>{
        if(element["name"].match(reg)){
            searchResult.push(element);
        }
    });
}


searchByName("Ak");
searchResult.forEach(element=>{
    console.log(element);
})
