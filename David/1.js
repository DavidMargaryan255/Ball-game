// const ball = document.querySelector(".ball");
// let left = 0;
// let pot = 0;
// function moveRight() {
//     if(left >= 1440){
//         return;        
//     }
//     left += 20;
//     ball.style.left = `${left}px`;
// }
// function moveLeft() {
//     if(left <= 0){
//         return;        
//     }   
//     left -= 20;
//     ball.style.left = `${left}px`;
// }

// function moveDown(){
//     if(pot >= 630){
//         return;        
//     }
//     pot += 20;
//     ball.style.top = `${pot}px`;
// }
// function moveUp(){
//     if(pot <= 0){
//         return;        
//     }
//     pot -= 20;
//     ball.style.top = `${pot}px`;
// }

// let a = 150;
// function makeBigger(){
//     a += 20;
//     ball.style.width = `${a}px`;
//     ball.style.height = `${a}px`;
// }


// function makeSmaller(){
//     a -= 20;
//     ball.style.width = `${a}px`;
//     ball.style.height = `${a}px`;
// }


// document.addEventListener("keydown", (event) => {
//     switch (event.code) {
//         case "ArrowLeft":
//             console.log("left");
//             moveLeft();
//             break;
//         case "ArrowRight":
//             console.log("right");
//             moveRight();
//             break;
//         case "ArrowUp" :
//             console.log("up");
//             moveUp();
//             break;
//         case "ArrowDown":
//             console.log("down");
//             moveDown();
//             break;
//         case "Space":
//             console.log("space");
//             makeBigger();
//             break;
//         case "Enter":
//             console.log("Enter");
//             makeSmaller();
//             break;
//         default:
//     }
// });


const player1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');
const startBtn = document.querySelector('#start');
const playerParamsEl = document.querySelector('#playerParams');

startBtn.addEventListener('click', function(){
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;
    
    if(player1Name && player2Name){
        playerParamsEl.remove();
        start();
    } else {
        alert('Please feel inputs');
    }
})