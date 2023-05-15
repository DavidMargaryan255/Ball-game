
let a = {index: 0}
let b = [];
let n = +prompt("Input the lenght of the array");

let x = (n) => {
    for (let start = 0; start < n; start++) {
        a = { index: start };
        b.push(a);
    }
    return b;
}
console.log(x(n));

