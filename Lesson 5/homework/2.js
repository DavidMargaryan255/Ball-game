
function inc(a){
    if(a >= 0){
        return "Your number is positive";
    } 
    else {
        return "Your number is negative";
    }
}

alert (inc(+prompt("Input your number")));