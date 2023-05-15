let a = 39;
let b = 39;
let c = 100;
if (a >= 40 && b >= 40 || a >= 40 && c >= 40 || b >= 40 && c >= 40) {
    if ((a + b + c) / 3 >= 50) {
        console.log('"' + "Passed" + '"' );
    }
    else {
        console.log('"' + "Not passed" + '"');
    }
} 
else {
    console.log('"' + "Not passed" + '"');
}