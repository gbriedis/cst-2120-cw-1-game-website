const scoreText = document.getElementById("score"),
    userText = document.getElementById("user"),
    counterText = document.getElementById("counter"),
    bestScoreText = document.getElementById("highscore"),
    startBtn = document.getElementById("startBtn");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

function randInt(min, max) {
    return Math.random() * (max - min) + min;
}
// Bubble class containing its properties, draw function
class Bubble {
    constructor(x, y, radius, colour) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
}

// create Object
const obj = new Object;
obj.score = 0;
obj.gameState = false;
obj.gameEnd = false;
obj.gameTime = Date.now();


let bubbles = [];
let bubbleInterval = null;
obj.spawnBubbles = function() {
    if(obj.gameState) {
       bubbleInterval = setInterval(() => {
            radius = 20;
            randX = randInt(radius, canvas.width - radius);
            randY = randInt(radius, canvas.height - radius);
            bubbles.push(new Bubble(randX, randY, radius, "yellow"));
        }, 700) 
    }
}

let user;
obj.userLog = function() {
    user = JSON.parse(sessionStorage.getItem("username"));
    if (user == null){
        userText.textContent = "Don't forget to login";
    }
    else {
        userText.textContent = "Hey "+ user;
    }
}

obj.addToLeaderboard = function() {
    if (obj.gameEnd) {
        if(user) {
            scores = JSON.parse(localStorage.getItem("scores") || "[]")
            let score = {
                username: user,
                score: obj.score
            }

            scores.push(score);
            localStorage.setItem("scores", JSON.stringify(scores));
        }
        else {
            console.log("User not logged in")
        } 
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(obj.gameState) {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        bubbles.forEach((bubble, index) => {
            bubble.draw();
            const dist = Math.hypot(userX - bubble.x, userY - bubble.y);
            if(dist - bubble.radius < 0.5) {
                bubbles.splice(index, 1);
                obj.score++;
                scoreText.textContent = "Score: " + obj.score;
            }  
            if(bubbles.length > 10) {
                obj.endGame();
            }
        })
    }

}

obj.runGame = function() {
    obj.gameState = true;
    obj.gameTime = Date.now();
    obj.spawnBubbles();
    animate();
    checkTimer();
}

obj.endGame = function() {
    obj.gameState = false;
    obj.gameEnd = true;
    clearInterval(bubbleInterval);
    obj.addToLeaderboard();
    bubbles = [];
}

function checkTimer() {
    if(obj.gameState){
        const tLeft = 10 - Math.floor((Date.now() - obj.gameTime) / 1000);
        if(tLeft > -1) {
            counterText.textContent = "Time left: " + tLeft;
        }
        else{
            obj.endGame();
        }
    }
}

startBtn.addEventListener("click", () => {
    if(obj.gameState) return;
    obj.runGame();
})

let userX, userY;
addEventListener("click", (event) => {
    let rect = canvas.getBoundingClientRect(); 
    userX = event.clientX - rect.left; 
    userY = event.clientY - rect.top; 
})

obj.userLog();
setInterval(checkTimer, 100);