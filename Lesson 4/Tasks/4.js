let a = +prompt();
let b = 0;
let c = 0;
let str = "";
let t = "";
for (b = 0; b < a; b++){
    for(c = 0; c < a; c++){
        str += "*";
    }
    t += str + '\n';
    str = "";
}

console.log(t);
    