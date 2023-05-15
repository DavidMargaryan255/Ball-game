
let a = 15;
let x = "years";

    if (x == "months"){
        if (a >= 1 && a<= 12){
            console.log('"' + "baby" + '"');
        }
        else {
            console.log("Wrong data");
        }
    } 

    if (x == "years"){
        if (a >= 1 && a<=2){
            console.log('"' + "toddler" + '"');
        }

        if (a>= 3 && a<=12){
            console.log('"' + "child" + '"');
        }
        if (a>=13 && a<=17){
            console.log('"' + "teenager" + '"');
        }
        if (a>=18){
            console.log('"' + "adult" + '"');
        }
    }

