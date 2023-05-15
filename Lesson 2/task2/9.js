let a = 13; 
if (a <= 0 || a >= 13){
    console.log("Invalid input! Please enter month number between 1-12.");
}
if (a >= 1 || a <= 12 ){
    if (a == 2){
        console.log("28 or 29 days");
        }
    
    if (a == 4 || a == 6 || a == 9 || a == 11){
        console.log("30 days");
        }
    
    if (a == 1 || a == 3 || a == 5 || a == 7 || a == 8 || a == 10 || a == 12){
        console.log("31 days");
    }
}