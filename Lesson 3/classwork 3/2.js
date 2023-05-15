
for (let a = +prompt("Please input nubmer 7!!!"); a <= 98 ; a += 7){
    if(a % 7 === 0 ){
        console.log(a);
    }
    if(a % 7 != 0){
        console.log("I told you to right number 7 :(");
        break;
    }
}