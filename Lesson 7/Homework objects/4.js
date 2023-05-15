const a = {a: 1,b: 2};
const b = {a: 1,b: 2};
let x = (num1,num2) => {
    if(JSON.stringify(num1) === JSON.stringify(num2)) {
        return "They are equal";
    } else {
        return "They are not equal";
    }
}
console.log(x(a,b))