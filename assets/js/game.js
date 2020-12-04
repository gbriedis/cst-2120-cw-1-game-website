let score = 0;

const scoreText = document.getElementById("score");

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

const bubbles = [];
function spawnBubbles() {
    setInterval(() => {
        radius = 20;
        randX = randInt(radius, canvas.width - radius);
        randY = randInt(radius, canvas.height - radius);
        bubbles.push(new Bubble(randX, randY, radius, "yellow"));
    }, 700)
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubbles.forEach((bubble, index) => {
        bubble.draw();
        const dist = Math.hypot(userX - bubble.x, userY - bubble.y);
        if(dist - bubble.radius < 0.5) {
            bubbles.splice(index, 1);
            score++;
            scoreText.textContent = "Score: " + score;
        }  
        if(bubbles > 10) {
            endGame();
        }
    })
}

let userX;
let userY;
addEventListener("click", (event) => {
    let rect = canvas.getBoundingClientRect(); 
    userX = event.clientX - rect.left; 
    userY = event.clientY - rect.top; 
})

animate();
spawnBubbles();