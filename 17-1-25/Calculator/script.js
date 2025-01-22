let keytable = document.getElementById("keytable");
let mul = document.getElementById("mul");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");
let ioscreen = document.getElementById("ioscreen");
let op = document.getElementById("op");
let reset = document.getElementById("reset");
ioscreen.focus();

var num1;
var opString ="";
keytable.addEventListener("click",(event)=>{
    if(event.target )
    if(event.target == mul){
        num1 = ioscreen.value;
        opString += num1+"*";
        op.innerText = opString;
        ioscreen.value = "";
        console.log(num1);
        ioscreen.focus();
    }
    else if(event.target == add){
        num1 = ioscreen.value;
        opString += num1+"+";
        op.innerText = opString;
        ioscreen.value = "";
        console.log("add");
        ioscreen.focus();
    }
    else if(event.target == sub){
        num1 = ioscreen.value;
        opString += num1+"-";
        op.innerText = opString;
        ioscreen.value = "";
        console.log("sub");
        ioscreen.focus();
    }
    else if(event.target == divide){
        num1 = ioscreen.value;
        opString += num1+"/";
        op.innerText = opString;
        ioscreen.value = "";
        console.log("divide");
        ioscreen.focus();
    }
    if(event.target == equal){
        opString += ioscreen.value;
        op.innerText = opString;
        ioscreen.value = eval(opString);
        opString = op.innerText;
        console.log("equal");
        ioscreen.focus();
    }
});

reset.addEventListener('click',()=>{
    // ioscreen.value = "";
    // op.value = "";
    // opString = "";
    
    // ioscreen.focus();
    location.reload();
});