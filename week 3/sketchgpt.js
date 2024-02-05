let sushiX, sushiY;
let chopstick1X, chopstick1Y, chopstick2X, chopstick2Y;
let nameX, nameY;

function setup() {
  createCanvas(400, 400);
  sushiX = random(100, 300);
  sushiY = random(50, 150);
  chopstick1X = random(20, 30);
  chopstick1Y = random(50, 200);
  chopstick2X = random(65, 75);
  chopstick2Y = random(50, 200);
  nameX = width - 100;
  nameY = height - 20;
}

function draw() {
  background(200);

  // Plate
  stroke(10);
  strokeWeight(10);
  fill(100);
  rect(100, 50, 300, 200);

  // Wasabi
  noStroke();
  fill(144, 238, 144);
  ellipse(130, 100, 40, 30);

  // Sushi shadow
  noStroke();
  fill(60);
  ellipse(sushiX + 10, sushiY + 20, 210, 140);

  // Sushi rice (rectangle)
  strokeWeight(1);
  fill(255, 255, 255);
  ellipse(sushiX, sushiY, 210, 140);

  // Salmon!
  fill(250, 128, 114);
  ellipse(sushiX, sushiY - 30, 200, 100);

  // Chopstick 2 shadow
  stroke(100);
  strokeWeight(10);
  line(chopstick2X + 5, 50, chopstick2X + 5, 200);

  // Chopstick 2
  stroke(222, 184, 135);
  strokeWeight(10);
  line(chopstick2X, 50, chopstick2X, 200);

  // Chopstick 1 shadow
  stroke(100);
  strokeWeight(10);
  line(chopstick1X + 5, 50, chopstick1X + 5, 200);

  // Chopstick 1
  stroke(222, 184, 135);
  strokeWeight(10);
  line(chopstick1X, 50, chopstick1X, 200);

  // Your name
  fill(0);
  textSize(12);
  text("Your Name", nameX, nameY);
}

function mousePressed() {
  // Move sushi and chopsticks to random locations on mouse click
  sushiX = random(100, 300);
  sushiY = random(50, 150);
  chopstick1X = random(20, 30);
  chopstick1Y = random(50, 200);
  chopstick2X = random(65, 75);
  chopstick2Y = random(50, 200);
}
