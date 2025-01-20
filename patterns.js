const n = 5;
let str = "";
const sq = (e) => e*e;
const factorial= (e) => {
    let fact = 1;
    while(e>1){
        fact = e*fact;
        e--;
    }
    return fact;
}


//Pattern 1 for *
function pattern1(e){
    console.log("Pattern 1 for *");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i>=j){
                str += e+" ";
                if(!isNaN(e)){
                    e++;
                }
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}


//Pattern 1 for squares
function pattern1sq(){
    let count = 1;
    console.log("Pattern 1 for squares");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i>=j){
                str += sq(count)+" ";
                count++;
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 1 for factorials
function pattern1fact(){
    let count = 1;
    console.log("Pattern 1 for factorials");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i>=j){
                str += factorial(count)+" ";
                count++;
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 2 for *
function pattern2(e){
    console.log("Pattern 2 for *");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i<=j){
                str += e+" ";
                if(!isNaN(e)){
                    e++;
                }
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 2 for squres
function pattern2sq(){
    let count = 1;
    console.log("Pattern 2 for squres");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i<=j){
                str += sq(count)+" ";
                count++;
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 2 for factorials
function pattern2fact(){
    let count = 1;
    console.log("Pattern 2 for factorials");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i<=j){
                str += factorial(count)+" ";
                count++;
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 3 for *
function pattern3(e){
    console.log("Pattern 3 for *");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i+j >= n-1){
                str += e+" ";
                if(!isNaN(e)){
                    e++;
                }
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 3 for squares
function pattern3sq(){
    let count = 1;
    console.log("Pattern 3 for squares");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i+j >= n-1){
                str += sq(count)+" ";
                count ++;
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 3 for factorials
function pattern3fact(){
    let count = 1;
    console.log("Pattern 3 for factorials");
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            if(i+j >= n-1){
                str += factorial(count)+" ";
                count ++;
            }
            else{
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 4 for *
function pattern4(e){
    console.log("Pattern 4 for *");
    for(i=0;i<n;i++){
        for(j=n-i-1;j>=0;j--){
            str += e+" ";
            if(!isNaN(e)){
                e++;
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 4 for suares
function pattern4sq(){
    let count = 1;
    console.log("Pattern 4 for squares");
    for(i=0;i<n;i++){
        for(j=n-i-1;j>=0;j--){
            str += sq(count)+" ";
            count ++;
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 4 for suares
function pattern4fact(){
    let count = 1;
    console.log("Pattern 4 for factorials");
    for(i=0;i<n;i++){
        for(j=n-i-1;j>=0;j--){
            str += factorial(count)+" ";
            count ++;

        }
        str += "\n";
    }
    console.log(str);
    str = "";
}


//Pattern 5 for *
function pattern5(e){
    console.log("Pattern 5");
    for(i=0;i<n;i++){
        for(j=0;j<n-i;j++){
            str += " ";
        }
        for(j=0;j<=i;j++){
            str += e+" ";
            if(!isNaN(e)){
                e++;
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 5 for squares
function pattern5sq(){
    let cnt = 1;
    let e = cnt;
    console.log("Pattern 5 for squares");
    for(i=0;i<n;i++){
        for(j=0;j<n-i;j++){
            str += " ";
        }
        for(j=0;j<=i;j++){
            str += e+" ";
            cnt++;
            e = sq(cnt);
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 5 for factorials
function pattern5fact(){
    let cnt = 1;
    let e = cnt;
    console.log("Pattern 5 for factorials");
    for(i=0;i<n;i++){
        for(j=0;j<n-i;j++){
            str += " ";
        }
        for(j=0;j<=i;j++){
            str += e+" ";
            cnt++;
            e = factorial(cnt);
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 6 for *
function pattern6(e){
    console.log("Pattern 6");
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++){
            str += " ";
        }
        
        for(j=0;j<n-i;j++){
            str += e+" ";
            if(!isNaN(e)){
                e++;
            }
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 6 for squares
function pattern6sq(){
    let cnt = 1;
    let e = cnt;
    console.log("Pattern 6 for squares");
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++){
            str += " ";
        }
        
        for(j=0;j<n-i;j++){
            str += e+" ";
            cnt++;
            e = sq(cnt);
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}

//Pattern 6 for factorials
function pattern6fact(){
    let cnt = 1;
    let e = cnt;
    console.log("Pattern 6 for factorials");
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++){
            str += " ";
        }
        
        for(j=0;j<n-i;j++){
            str += e+" ";
            cnt++;
            e = factorial(cnt);
        }
        str += "\n";
    }
    console.log(str);
    str = "";
}



pattern1("*")
pattern1(1)
pattern1sq(1);
pattern1fact(1);

pattern2("*")
pattern2(1)
pattern2sq(1);
pattern2fact(1);

pattern3("*")
pattern3(1)
pattern3sq(1);
pattern3fact(1);

pattern4("*")
pattern4(1)
pattern4sq(1);
pattern4fact(1);

pattern5("*")
pattern5(1)
pattern5sq(1);
pattern5fact(1);

pattern6("*")
pattern6(1)
pattern6sq(1);
pattern6fact(1);