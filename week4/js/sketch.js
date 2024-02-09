//colors!
var r;
var g;
var b;
var z;

//wasabi 
var wa = 130;
var was = 90;
var wasa = 30;

//wasabi speed
var rspeed = 5;
var gspeed = 9;
var bspeed = 2;
var zspeed = 1;

//chopsticks are growing??? and shrinking I guess
var chopstick1a = 200;
var chopstick2b = 200; 

//img2 position
var img2X = 1;
var img2Y = 250;

//timer
var myTime = 10;

var speedX, speedY;
var speedX2, speedY2;


//img3 position 
var img3X = 20;
var img3Y = 30;
var img3XSpeed = 1;
var img3YSpeed = 1;

//background image
var img;

var myFont;

function preload() {
    myFont = loadFont("Honk/Honk-Regular.ttf");
    img = loadImage('images/catseating.jpeg');
    img2 = loadImage('images/crazycat.jpeg');
    img3 = loadImage('images/scarycat.jpeg');
}

function setup() {
    createCanvas(400, 400);
    r = random(255);
    g = random(255);
    b = random(255);
    z = random(255);

    setInterval(changeTime, 1000);
}

function draw() {
    background(img);

    // Update colors
    r = (r + rspeed) % 500;
    g = (g + gspeed) % 500;
    b = (b + bspeed) % 500;
    z = (z + zspeed) % 500;

    // Draw background image
    // image(img, 0, 0); // This line is not needed since we already set the background to this image

    // Draw img2
    image(img2, img2X, img2Y);
    img2.resize(150, 150);

    // Draw name
    fill(50);
    strokeWeight(0);
    rect(235, 368, 160, 30);
    rect(2, 15, 138, 30);
    rect(140, 2, 160, 30);
    stroke(0);
    strokeWeight(0);
    fill(r, g, b, z);
    textFont(myFont);
    textSize(30);
    text("Grace Smith", 240, 390);
    text('cats delight', 145, 25);

    // Draw plate
    stroke(0);
    strokeWeight(0);
    fill(100);
    rect(100, 50, 300, 200);

    // Draw wasabi
    fill(144, 238, 144);
    circle(wa, was, wasa);

    // Draw sushi shadow
    fill(60);
    ellipse(260, 170, 210, 140);

    // Draw sushi rice
    fill(255, 255, 255);
    ellipse(250, 150, 210, 140);

    // Draw salmon
    fill(250, 128, 114);
    ellipse(250, 120, 200, 100);
    moveChopsticks();

    //chopstick2 shadow
    stroke(100);
    strokeWeight(10);
    line(65,50,70,chopstick2b);

    //chopstick2
    stroke(222, 184, 135);
    strokeWeight(10);
    line(65,50,65,chopstick2b);
    
    //chopstick1 shadow
    stroke(100);
    strokeWeight(10);
    line(20,50,25,chopstick1a);
    
     //chopstick1
    stroke(222, 184, 135);
    strokeWeight(10);
    line(20,50,20,chopstick1a);

    // Draw scary cat and move
    image(img3, img3X, img3Y); 
    img3.resize(50, 50);
    img3X += img3XSpeed;
    img3Y += img3YSpeed;

    // Bounce scary cat off walls
    if (img3X >= width || img3X <= 0) {
        img3XSpeed *= -1;
    } 
    if (img3Y >= height || img3Y <= 0) {
        img3YSpeed *= -1;
    } 
    stroke(0);
    strokeWeight(0);
    fill(r, g, b, z);
    text(myTime + "seconds", 5, 40);
    if(checkCollision(img3X, img3Y, 100, 100, img2, img2, 100, 100))
{
    speedX *= -.1;
    speedX2 *= -.1;
    speedY *= -.1;
    speedY2 *= -.1;
}

function checkCollision(x, y, w, h, canvasWidth, canvasHeight) {
  if (
      x - w / 2 < 0 || // Left edge of object is to the left of the canvas left edge
      x + w / 2 > canvasWidth || // Right edge of object is to the right of the canvas right edge
      y - h / 2 < 0 || // Top edge of object is above the canvas top edge
      y + h / 2 > canvasHeight // Bottom edge of object is below the canvas bottom edge
  ) {
      return true; // Collision with canvas bounds detected
  } else {
      return false; // No collision with canvas bounds
  }
}
if (checkCollision(img3X, img3Y, 100, 100, width, height)) {
  // reset the timer
  myTime = 10;
} 

}

function changeTime() {
  myTime--;
  if (myTime < 0) {
      // resets the timer
      myTime = 10;
  }
}

function keyPressed() {
    if (key == "w") {
        was -= 5;
    } else if (key == "s") {
        was += 5;
    }
}

function moveChopsticks() {
    // Randomly update chopstick positions
    chopstick1a += random(-2, 2); // Randomly move chopstick1 vertically
    chopstick2b -= random(-2, 2); // Randomly move chopstick2 vertically
}