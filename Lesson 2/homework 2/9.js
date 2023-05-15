let month = 15
if (month >= 1 && month <= 12) {
    switch(month) {
        case 1:
            console.log('"' + "31 days" + '"')
            break
        case 2:
            console.log('"' + "28 or 29 days" + '"')
            break
        case 3:
            console.log('"' + "31 days" + '"')
            break    
        case 4:
            console.log('"' + "30 days" + '"')
            break
        case 5:
            console.log('"' + "31 days" + '"')
            break
        case 6:
            console.log('"' + "30 days" + '"')
            break
        case 7:
            console.log('"' + "31 days" + '"')
            break
        case 8:
            console.log('"' + "31 days" + '"')
            break
        case 9:
            console.log('"' + "30 days" + '"')
            break
        case 10:
            console.log('"' + "31 days" + '"')
            break
        case 11:
            console.log('"' + "30 days" + '"')
            break
        case 12:
            console.log('"' + "31 days" + '"')
            break
    }        
}
else {
    console.log("Invalid input! Please enter month number between 1-12.")
}