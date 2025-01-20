
const numSystem1 = ["Hundred ", "Thousand ", "Lakh ", "Crore ", "Arab ", "Kharab "];
const numSystem2 = ["Zero ", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", 
                    "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen ", "Twenty "];
const numSystem3 = [" ", "Ten ", "Twenty ", "Thirty ","Forty " ,"Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "];
function main(num){
    let answer = "";
    // if(isNaN(num)){
    //     console.log("Not a number");
    //     return;
    // }
    if(num == 0){
        return numSystem2[0];
    }
    answer += tenthPlace(num%100);
    num = parseInt(num/100);

    if(answer == numSystem2[0]){
        answer = "";
    }
    let tmp = tenthPlace(num%10);
    answer = ((tmp!=numSystem2[0])?tmp+ numSystem1[0]:"")+ answer;
    num = parseInt(num/10);
    let cnt = 1;
    let tmpString = "";
    while(num>0){
        let tmpNum = num%100;
        if(tmpNum!=0){
            tmp = tenthPlace(tmpNum);
            answer = (tmp!="Zero "?tmp+ numSystem1[cnt]:"")+ answer;
        }
        num = parseInt(num /100);
        cnt++;
    }
    return answer;
}
function tenthPlace(num){
    if(num<20){
        return numSystem2[num];
    }
    else{
        return z(num);
    }
}
function z(numz){
    var ansz = tenthPlace(numz%10);
    if(ansz == "Zero "){
        ansz = "";
    }
    let tmp = parseInt(numz/10);
    ansz = numSystem3[tmp] + ansz;
    return ansz;
}

let input = document.getElementById("num");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", ()=>{
    result.innerText = ""+main(input.value);
});
