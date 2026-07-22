// Game objects
let bird;
let floor;

// Image assets
let birdMidImg = loadImage("assets/yellowbird-midflap.png");
let background = loadImage("assets/background-day.png");
let base = loadImage("flappybird/assets/base.png");

function preload() {
    birdMidImg = loadImage("assets/yellowbird-midflap.png");
    background = loadImage("assets/background-day.png");
base = loadImage("flappybird/assets/base.png");
}

function setup() {
    new Canvas(400, 600);
    background(250);
}

function draw() {

}