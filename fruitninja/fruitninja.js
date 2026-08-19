// Variables
let background;
let peach;
let watermelon;

let peachWhole;
let watermelonWhole;

function preload() {
    // Load image
    background = loadImage("assets/dojobackground.png");
    peachWhole = loadImage("assets/peachwhole.png");
    watermelonWhole = loadImage("assets/watermelonwhole.png");
}

function setup() {
    // Create canvas
    new Canvas(800, 600);
    world.gravity.y = 10;

    // Sprites
    peach = new Sprite();
    
}

function draw() {
    image(background, 0, 0, width, height); // (image, x, y, width, height)
}