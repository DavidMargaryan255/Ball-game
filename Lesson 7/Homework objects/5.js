let a = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let x = (obj) => {
    let b = Object.values(obj);
    return b.length;
}

let c = x(a); 

console.log(c);




