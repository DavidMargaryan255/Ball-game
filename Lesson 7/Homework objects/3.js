let input = { a: 1,b: 2,c: "hi", d: [] };
let x = (obj) => {
    let b = Object.values(obj);
    return b;
}
console.log(x(input));