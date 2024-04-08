let leo; // Declare a variable to hold the texture image

function preload() {
    // Load the texture image in the preload function
    leo = loadImage('do.jpeg'); // Update the path to your image
    font = loadFont('Sixtyfour-Regular.ttf');

}

function setup() {
    createCanvas(800, 600, WEBGL);
}

function draw() {
    background(10);

    textFont(font);
    fill(255);
    textSize(32);
    

    // Display text
    text('everything..by Grace',-350,-100);

    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);

    let spacing = 150; // Spacing between shapes
    let numShapes = 5; // Number of shapes
    let angle = frameCount * 0.005; // Angle for rotation

    for (let i = 0; i < numShapes; i++) {
        push();
        noStroke();

        // Translate to a position in a line
        translate(i * spacing - (spacing * (numShapes - 1)) / 2, 0);

        // Rotate the shapes
        rotateX(angle);
        rotateY(angle);

        // Check if the texture is loaded before using it
        if (leo) {
            texture(leo);
        }

        // Draw the box
        torus(50, 35);
        pop();
    }
}
