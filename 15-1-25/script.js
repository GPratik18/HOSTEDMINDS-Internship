
class Pratik {
    constructor(Name, age, lname){
        this.Name = Name;
        this.age = age;
        this.lname = lname;
        
    }
    fullname = ()=>{
        return this.Name+" "+this.lname;
    }
}

let q = new Pratik("Vishal",34,"Sandy");
document.getElementById("test").innerHTML = q.fullname();


function Vishal(Name, age){
    this.Name = Name;
    this.age = age
}

//let v = Vishal("Sandeep", 21);
let v1 = new Vishal("Sandeep", 21);

//console.log(v);
console.log(v1);
let sd = 12345670000000;
console.log(sd.toExponential());


//Arrays
let arr1 = [1,2,3,4,5,6,7,8,9,0];
arr1.length = 13;

console.log(arr1.length);
for(i in arr1){
    console.log(arr1[i]);
}