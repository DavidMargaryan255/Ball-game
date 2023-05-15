let a = +prompt();
let b = 1;
let c = 0;
let str = "";
let t = "";

       
for (b = 1; b <= a; b++){
    for(c = 0; c <= a; c++){
    
    if(b == 1 || b == a){
        str += "*";
    }
    else if(c == 0 || c == a){
        str += "*";
    } else{
        str += " ";
    }
    
}
    t += str + '\n';
    str = "";
}

console.log(t);