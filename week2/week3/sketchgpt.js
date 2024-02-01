let rollX, rollY; // Coordinates for sushi roll
let fishX, fishY; // Coordinates for fish
let riceX, riceY; // Coordinates for rice
let wasabiX, wasabiY; // Coordinates for wasabi
let soyX, soyY; // Coordinates for soy sauce
let nameX, nameY; // Coordinates for name

function setup() {
  createCanvas(600, 400);
  rollX = random(width);
  rollY = random(height);
  fishX = random(width);
  fishY = random(height);
  riceX = random(width);
  riceY = random(height);
  wasabiX = random(width);
  wasabiY = random(height);
  soyX = random(width);
  soyY = random(height);
  nameX = width - 150;
  nameY = height - 20;
}

function draw() {
  background(220);

  // Sushi roll
  fill(255, 166, 77);
  ellipse(rollX, rollY, 80, 40);

  // Fish
  fill(255, 0, 0);
  ellipse(fishX, fishY, 40, 40);

  // Rice
  fill(255);
  ellipse(riceX, riceY, 60, 60);

  // Wasabi
  fill(0, 255, 0);
  rect(wasabiX, wasabiY, 20, 20);

  // Soy sauce
  fill(51, 102, 255);
  rect(soyX, soyY, 40, 10);

  // Name
  fill(0);
  textSize(12);
  text("Sushi Delight by [Your Name]", 10, 20);

  // Move sushi elements randomly
  rollX += random(-1, 1);
  rollY += random(-1, 1);
  fishX += random(-1, 1);
  fishY += random(-1, 1);
  riceX += random(-1, 1);
  riceY += random(-1, 1);
  wasabiX += random(-1, 1);
  wasabiY += random(-1, 1);
  soyX += random(-1, 1);
  soyY += random(-1, 1);
}

function keyPressed() {
  // Reset positions when any key is pressed
  rollX = random(width);
  rollY = random(height);
  fishX = random(width);
  fishY = random(height);
  riceX = random(width);
  riceY = random(height);
  wasabiX = random(width);
  wasabiY = random(height);
  soyX = random(width);
  soyY = random(height);
}

function mousePressed() {
  // Randomize name position when mouse is pressed
  nameX = random(width - 150);
  nameY = random(height - 20);
}