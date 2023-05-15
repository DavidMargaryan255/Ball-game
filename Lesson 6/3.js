let arr = [1, false, NaN, undefined, 0, "", null, "hi", true];
let empty = [];
function checks() {
  for (let start = 0; start < arr.length; start++) {
    if (arr[start]) {
        empty.push(arr[start]);
    }
  }
  return empty;
}
console.log(checks());