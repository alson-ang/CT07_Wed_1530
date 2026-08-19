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
    watermelon = new Sprite();
    watermelon.img = watermelonWhole;
    watermelon.width = 100;
    watermelon.height = 100;
    watermelon.scale = watermelon.width / watermelonWhole.width;
    watermelon.mass = 2;
    watermelon.drag = 0.02;
    watermelon.collider = "dynamic";

    // Group
    peachGroup = new Group();
}

function draw() {
    image(background, 0, 0, width, height); // (image, x, y, width, height)

    // Debug text
    fill("#ba0000");   // Text colour
    textSize(50);
    text("frameCount: " + frameCount, 10, 40);

    if (frameCount / 60 =) {
        spawnPeach();   
    }
}

function spawnPeach() {
    // Create peach sprite
    peach = new peachGroup.Sprite()
    peach.img = peachWhole;
    peach.width = 100;
    peach.height = 100;
    peach.scale = peach.width / peachWhole.width;
    peach.mass = 2;  // How heavy, heavier = affected by gravity more
    peach.drag = 0.02;   // Air resistance, higher = more resistance
    peach.collider = "dynamic";  // Collidable, movable and affected by physics
}