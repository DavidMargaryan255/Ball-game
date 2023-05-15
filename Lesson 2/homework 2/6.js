let a = 6;
let h = 7;
let x = "triangle"
    
    if (a > 0 && h > 0){
        if (x == "triangle"){
            console.log('"' + "Square of the triangle is " + a*h/2 + '"');
        }
        if (x == "rectangle"){
            console.log('"' + "Square of the rectangle is " + a*h + '"');
        }
    }
    else{
        console.log('"' + "Please enter only positives" + '"')
    }