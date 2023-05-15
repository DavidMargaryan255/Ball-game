let a = "aaabbcccd";
let b;
let count = 0;
let empty = [];
let empty2 = [];
function repet() {
    for(let start = 0;start < a.length;start++) {
        b = a[start];
        for(let i = 0;i < a.length;i++) {
            if(a[i] === b) {
                count+= 1;
            }
        }
        if(!empty.includes(b)){    
            empty.push((b));
            empty2.push(" :" + count + " " + "times")
        }
        
        count = 0;
    }
    return empty + empty2;
}
console.log(repet())