let arr = [1, 2, 3, 3, 4, 4, 5, 6];
let empty = [];

    function inc() {
        for(let a = 0; a < arr.length; a++){
            if(!empty.includes(arr[a])) {
                empty.push(arr[a])
            }
        }
        return empty;
    }

console.log(inc());


  