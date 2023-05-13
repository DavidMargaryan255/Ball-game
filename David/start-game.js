function start(){
    const ball = new Ball({
        color : 'white',
        speed : 20,
        controls : {
            up : "KeyW",
            down : "KeyS",
            left : "KeyA",
            right : "KeyD",
       } 
    });
    
    console.log(ball);
    
    const ball2 = new Ball({
        color : 'black',
        speed : 30,
        controls : {
            up : "ArrowUp",
            down : "ArrowDown",
            left : "ArrowLeft",
            right : "ArrowRight"
        } 
    });
    
    console.log(ball2);
}