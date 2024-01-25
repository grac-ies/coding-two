function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  //this is what chat gpt gave me

  // Sushi rice (rectangle)
  fill(255, 239, 184);
  rect(150, 150, 200, 100);

  // Nori (seaweed) wrap (rectangle)
  fill(32, 32, 32);
  rect(140, 140, 220, 120);

  // Salmon topping (ellipse)
  fill(255, 99, 71);
  ellipse(200, 180, 80, 80);

  // Avocado topping (ellipse)
  fill(144, 238, 144);
  ellipse(250, 230, 60, 60);

  // Chopsticks (lines)
  stroke(139, 69, 19);
  strokeWeight(5);
  line(100, 200, 100, 300);
  line(120, 200, 120, 300);
}
