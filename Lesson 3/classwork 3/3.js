let num = +prompt();
let degree = +prompt();
let a = 1;
let sum = 1;
let k = true;



if (isNaN(num) || isNaN(degree)) {
    k = false;
    console.log("error");
}
while( a <= degree && k == true) {
    sum *= num;
    a++;
}
if (k == true) {
    console.log(sum);
}