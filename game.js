const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

// we will need the gameCointainer to make it blurry when we display the end menu
const gameContainer = document.getElementById('game-container');

const flappyImg = new Image();
flappyImg.src = 'assets/flappy_dunk.png';

// game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

// bird variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAccelartion = 0.1;

// pipe variables
let pipeX = 400;
let pipeY = canvas.height - 200;

// score and highscore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highscore = 0;

document.body.onkeyup = function(e) {
    if (e.code == 'Space') {
        birdVelocity = FLAP_SPEED;
    }
}

function increaseScore() {
    // TODO:
}

function collisionCheck() {
    // TODO:
}

function hideEndMenu() {
    document.getElementById('end-menu').style.display = 'none';
    gameContainer.classList.remove('backdrop-blur');
}

function showEndMenu() {
    document.getElementById('end-menu').style.display = 'block';
    gameContainer.classList.add('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;
}

function resetGame() {
    // TODO:
}

function endGame() {
    // TODO:
}

function loop() {
    // reset the ctx after every loop iteration
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw flappy bird
    ctx.drawImage(flappyImg, birdX, birdY);

    // draw pipes
    ctx.fillStyle = '#333';
    ctx.fillRect(pipeX, -100, PIPE_WIDTH, pipeY);
    ctx.fillRect(pipeX, pipeY + PIPE_GAP, PIPE_WIDTH, canvas.height - pipeY);

    // move pipes
    pipeX -= 1.5;

    // reset pipes
    if (pipeX < -50) {
        pipeX = 400;
        pipeY = Math.random() * (canvas.height - PIPE_GAP) + PIPE_WIDTH;
    }

    // apply gravity to the bird + make it move
    birdVelocity += birdAccelartion;
    birdY += birdVelocity;

    requestAnimationFrame(loop);
}

loop();