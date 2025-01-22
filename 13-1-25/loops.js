console.log("loops");

//while loop
let abc = 0;
while(abc<5){
    console.log("Iteration :"+ (++abc) , " of 'while loop");
}



//for loop
for(i=0;i<10;i++){
    console.log("Iteration :"+ (i+1) , " of 'for loop");
}




//do- while loop with false condition
let j=1;
do{
    console.log("Iteration :"+ j , " of 'do while loop")
}while(j>23);

//do- while loop with true condition
do{
    console.log("Iteration :"+ (++j) , " of 'do while loop")
}while(j<23);




//for-in
let arr = [1,2,3,4,5,"qwerty",7,8,9,0];
for (ele in arr){
    console.log(arr[ele]);
}




//for-of
for(ele of arr){
    console.log(ele);
}

//for-await-of async function


//continue and break statement
console.log("=============================================");
for(m=0;m<15;m++){
    if(m%7==0){
        continue;
    }
    else{
        console.log(m);
    }
    if(m==10){
        break;
    }
}