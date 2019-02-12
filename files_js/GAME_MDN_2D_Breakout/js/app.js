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

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

// BOUNCING OFF - TOP AND BOTTOM
// if(y + dy < 0) {
//     dy = -dy;
// }
// AND
// if(y + dy > canvas.height) {
//     dy = -dy;
// }

// COMBINED - BOUNCING OFF TOP AND BOTTOM
// if(y + dy > canvas.height || y + dy < 0) {
//     dy = -dy;
// }

// BOUNCING - BOUNCING OFF LEFT AND RIGHT
// if(x + dx > canvas.width || x + dx < 0) {
//     dx = -dx;
// }

// if(y + dy > canvas.height || y + dy < 0) {
//     dy = -dy;
// }

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
};
setInterval(draw, 10);








