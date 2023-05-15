let a = +prompt("Input your positive nubmer");
let sum = 0;
if (isNaN(a)){
    console.log("Your input number is wrong");
}

while(a / 1 > 1){
    sum += a % 10;
    a = a - (a % 10);
    a = a / 10;
    
}

console.log(sum);

