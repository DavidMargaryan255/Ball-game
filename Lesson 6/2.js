const arr = [1, 2, '3', [], null, undefined];
let emptyArray = [];

    function inc() {
        for (let a = 0; a < arr.length; a++) {
            if(typeof arr[a] == "number"){
                emptyArray.push("number");          
            } 
            else if (typeof arr[a] == "string"){
                emptyArray.push("string");
            }
            else if (Array.isArray(arr[a])){
                emptyArray.push("array");
            }
            else if (arr[a] === null){
                emptyArray.push("null");
            }
            else if (typeof arr[a] == "undefined"){
                emptyArray.push("undefined");
            }
        }
        return emptyArray;
    }

console.log(inc());

