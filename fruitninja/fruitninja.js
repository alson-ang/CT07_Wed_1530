// Variables
let background;
let peach;
let watermelon;

function preload() {
    // Load image
    background = loadImage("assets/dojobackground.png");
    peach = loadImage("assets/dojobackground.png");
    watermelon = loadImage("assets/dojobackground.png");
}

function setup() {
    // Create canvas
    new Canvas(800, 600);
    world.gravity.y = 10;
}

function draw() {
    image(background, 0, 0, width, height); // (image, x, y, width, height)
}