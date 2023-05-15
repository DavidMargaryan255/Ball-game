let a = 3;
let b = -8; 
let c = 12;
let D = Math.pow(b, 2) - (4*a*c); 
 
if (a == 0){
    console.log('"' + "Enter valid constants" + '"');
}
if (a != 0){
    if (D < 0){
        console.log('"' + "Solution does not exists" + '"');
    }
    
    if (D == 0){
        console.log('"' + "Solution is " + (-b/(2*a)) + '"');
    }
    
    if (D > 0){
        console.log('"' + "Solutions are " + (-b + Math.sqrt(D))/(2*a) + " and " + (-b - Math.sqrt(D))/(2*a)  + '"');
    }
}
    
