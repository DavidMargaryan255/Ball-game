let a = 45;
let b = 26;
let c = 78;

    if (a > b && a > c && b > c){
        console.log(c, b, a);
    }
    if (a > b && a > c && c > b){
        console.log(b, c, a);
    }
    if (b > a && b > c && a > c){
        console.log(c, a ,b);
    }
    if (b > a && b > c && c > a){
        console.log(a, c ,b);
    }
    if (c > a && c > b && b > a){
        console.log(a, b, c);
    }
    if (c > a && c > b && a > b){
        console.log(b, a, c);
    }