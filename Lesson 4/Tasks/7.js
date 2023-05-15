a = prompt("2 + 2 * 2 = ?");

if (a == 6){
    alert("Correct!");
} else {
    while (a != 6){
        a = prompt("Wrong answer :(" + '\n' + "Please try again: 2 + 2 * 2 = ?");
        if (a == 6){
            alert("Correct!");   
        }
    }
}