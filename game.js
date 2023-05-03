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