let inPlay = false, gameTime;
let startBtn = document.getElementById("startBtn"),
    counterText = document.getElementById("counter");

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.style = "position:relative; left: 50%; width: 800px; margin-left: -400px; border: 5px solid #FFF06C;";

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

startBtn.addEventListener("click", function(){
    gameTime = Date.now();
    checkTimer(true);
})

function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    this.drawCircle = function() {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }

}

function checkTimer(bool) {
    if(true) {
        const diff = 30 - Math.floor((Date.now() - gameTime) / 1000);
        if(diff > -1) {
            counterText.textContent = diff;
        }
    }
    else {
        gameOver();
    }

}

// Animation
function animate() {
    requestAnimationFrame(animate);
}
setInterval(checkTimer, 100);
animate();

