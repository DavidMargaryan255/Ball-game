function inc (x) {
    let a = 1;
    let b = 0;
    while(a <= x) {
        if(x % a == 0){
            b++;
        }
        a++;
    }
    if(b == 2) {
        return "yes";
    }
    else {
        return "no";
    }
} 
alert(inc(+prompt()));