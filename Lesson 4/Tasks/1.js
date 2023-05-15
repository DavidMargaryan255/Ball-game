let a = +prompt();

let b = 0;
let c = 1;

if (isNaN(a)){
    console.log("That's not a number");
}
while(c <= a){
    if(a%c == 0){
        b += 1;
    } 
    c++;
}

if (b == 2){
    console.log("yes");
}
if (b > 2){
    console.log("no");
}

if (a == 1){
    console.log("That's 1");
}

if (a == 0){
    console.log("That's 0");
}