const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 150;

let dino = {
    x: 50,
    y: 110,
    width: 30,
    height: 40,
    dy: 0,
    gravity: 0.6,
    jumpPower: -12,
    grounded: true
};

let obstacle = {
    x: 600,
    y: 110,
    width: 20,
    height: 40
};

let score = 0;
let gameOver = false;

function drawDino(){
    ctx.fillStyle = "green";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawObstacle(){
    ctx.fillStyle = "red";
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function update(){
    if(gameOver){
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Game Over! Refresh to Restart", 180, 70);
        return;
    }

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Dino gravity
    dino.y += dino.dy;
    dino.dy += dino.gravity;

    if(dino.y >= 110){
        dino.y = 110;
        dino.dy = 0;
        dino.grounded = true;
    }

    // Obstacle movement
    obstacle.x -= 5;
    if(obstacle.x < 0){
        obstacle.x = 600;
        score++;
    }

    // Collision
    if(
        dino.x < obstacle.x + obstacle.width &&
        dino.x + dino.width > obstacle.x &&
        dino.y < obstacle.y + obstacle.height &&
        dino.y + dino.height > obstacle.y
    ){
        gameOver = true;
    }

    drawDino();
    drawObstacle();

    ctx.fillStyle="black";
    ctx.fillText("Score: " + score, 10, 20);

    requestAnimationFrame(update);
}

document.addEventListener("keydown", function(e){
    if(e.code === "Space" && dino.grounded){
        dino.dy = dino.jumpPower;
        dino.grounded = false;
    }
});

update();
