let a = +prompt("Input your first nubmer");
let b = +prompt("Input your last nubmer"); 
let c = 0;

if (a > b){
    console.log("Wrong interval");
} else{
    while (a <= b){
        if (a % 2 == 0){
           c += a; 
        }
        a++;
    }
        console.log(c);
}

