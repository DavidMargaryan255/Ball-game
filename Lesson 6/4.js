const arr1 = [1, 2, 3, 7];
const arr2 = [1, 5, 3, 9];
const result = [];

function inc(){
    for (let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}



console.log(inc());



