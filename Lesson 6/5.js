const arr = [1, 2, 3, 4, 5];
let oddArray = [];

function inc (){
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 1) {
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}


console.log(inc());