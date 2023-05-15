let x = +prompt();
let y = +prompt();

let check = true;
let count = 0;

let sum = 0;
let b = 1;
let c = 0;

if (x > 0 && x < y && y < 100) {
    check = true;
}
else {
    check = false;
}
while(x <= y && check == true){
    while (b <= x) {
        if (x % b == 0) {
            c += 1;
        }
        b++;
    }
    
    if (c == 2) {
        count += 1;
        sum += x;
            }
    c = 0;
    b = 1;
    
    x++;
    
}
alert(sum/count)
