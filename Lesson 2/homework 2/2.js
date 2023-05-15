let a = 420;
if (a % 3 === 0) {
    if (a % 5 === 0) {
        if (a % 7 === 0){
            console.log(a + " is a multiple of 3,5 or 7")
        }
        else {
            console.log(a + " is a multiple of 3 and 5")
        }
    }
    if (a % 7 === 0 && a % 5 != 0) { 
        console.log(a + " is a multiple of 3 and 7")
    }
    if (a % 7 != 0 && a % 5 != 0)  {
        console.log(a + " is a multiple of 3")

    }

    }
if (a % 5 === 0 && a % 3 != 0) { 
    if (a % 7 === 0) {
        console.log(a + " is a multiple of 5 and 7")
    }
    else {
        console.log(a + " is a multiple of 5")
    }
}
    
if(a % 7 === 0 && a % 5 != 0 && a % 3 != 0 ) {  
    console.log(a + " is a multiple of 7")
}
if(a % 7 != 0 && a % 5 != 0 && a % 3 != 0) {    
    console.log(a + " is a not a multiple of 3,5 or 7")
}