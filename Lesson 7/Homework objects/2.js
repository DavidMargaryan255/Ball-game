let a = {
    name : 'David'
};
let x = (obj) => {
    if(Object.keys(obj).length === 0) {
        return "Object is empty";
    }
    else {
        return "Object is not empty";
    }
}
console.log(x(a));





    
