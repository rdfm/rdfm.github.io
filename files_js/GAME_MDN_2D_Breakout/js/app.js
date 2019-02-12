// Creating the canvas.
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// EXAMPLE: Print a red square on canvas
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// EXAMPLE: Print a green cirlcle on canvas
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// EXAMPLE: Print a blue stroked empty rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();


// Hold radius of drawn circle.
var ballRadius = 10;

// Ball starting point: Lower middle.
var x = canvas.width/2;
var y = canvas.height-30;

// Moving ball effect: Add a small value to x and y after every frame has been drawn. 
var dx = 2;
var dy = -2;

// Defining the paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;


// Control the paddle - variables, event listerns, and functions.
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// Draw Ball function.
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Draw Paddle function.
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// Defining a drawing loop.
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw: Ball.
    drawBall(); 
    // Draw: Paddle.
    drawPaddle();
    
    // Bouncing off the right and left walls.
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    // Bouncing off the top and bottom.
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    // Implementing game over.
    else if(y + dy > canvas.height-ballRadius) {
        // Paddle hit the ball.
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    // Paddle moving logic.
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}
var interval = setInterval(draw, 10);