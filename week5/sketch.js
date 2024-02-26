//colors!
let r;
let g;
let b;
let z;
//wasabi 
let wa = 130;
let was = 90;
let wasa = 30;
//wasabi speed
let rspeed = 5;
let gspeed = 9;
let bspeed = 2;
let zspeed = 1;
//chopsticks are growing??? and shrinking I guess
let chopstick1a = 200;
let chopstick2b = 200;
//img2 position
let img2X = 1;
let img2Y = 450;
//timer
let myTime = 1;
let speedX, speedY;
let speedX2 = 0, speedY2 = 0; // Initialize speedX2 and speedY2
//img3 position 
let img3X = 20;
let img3Y = 30;
let img3XSpeed = 1;
let img3YSpeed = 1;
//background image
let img;
//font
let myFont;
//charcter
var Character;
//duh
var wasabi;
//see it
let wasabiVisible = true;
//cat animation
var idle = [];
var animations = [];
//animation timer
let interval = 500
//images
let i = 0;
var imageX = 50;
var imageY = 100;

function preload() {
  myFont = loadFont("font/Honk-Regular.ttf");

  img = loadImage('images/catseating.jpeg');
  img2 = loadImage('images/crazycat.jpeg');
  img3 = loadImage('images/scarycat.jpeg');
}

function setup() {
  createCanvas(600, 600);

  Idle1 = loadImage("./images/Idle (1).png");
  Idle2 = loadImage("./images/Idle (2).png");
  Idle3 = loadImage("./images/Idle (3).png");
  Idle4 = loadImage("./images/Idle (4).png");
  Idle5 = loadImage("./images/Idle (5).png");
  Idle6 = loadImage("./images/Idle (6).png");
  Idle7 = loadImage("./images/Idle (7).png");

  animations[0] = Idle1;
  animations[1] = Idle2;
  animations[2] = Idle3;
  animations[3] = Idle4;
  animations[4] = Idle5;
  animations[5] = Idle6;
  animations[6] = Idle7;

  Character = new character(100, 200, 50);

  wasabi = new Wasabi(random(width), random(height), 30, 1);

  r = random(255);
  g = random(255);
  b = random(255);
  z = random(255);
  setInterval(changeTime, 1000);

}

function draw() {
  background(img);

  // animation
  i = (i + 1) % animations.length;
  image(animations[i], imageX, imageY);

  //spawn in
  Character.drawcircle();


  if (Character.checkCollision(wasabi) && wasabiVisible) {
    wasabiVisible = false;
  }

  if (wasabiVisible) {
    wasabi.display();
    wasabi.move();
  }
  //pretty colors
  r = (r + rspeed) % 255;
  g = (g + gspeed) % 255;
  b = (b + bspeed) % 255;
  z = (z + zspeed) % 255;

  //plate
  stroke(0);
  strokeWeight(0);
  fill(100);
  rect(150, 400, 290, 200);

  //sushi shadow
  fill(60);
  ellipse(310, 570, 210, 140);

  //sushi rice
  fill(255, 255, 255);
  ellipse(300, 520, 210, 140);

  //salmon
  fill(250, 128, 114);
  ellipse(300, 490, 200, 100);

  // Chopstick1 shadow
  stroke(100);
  strokeWeight(10);
  line(120, 400, 125, chopstick1a);

  // Chopstick1
  stroke(222, 184, 135);
  strokeWeight(10);
  line(120, 400, 120, chopstick1a);

  // Chopstick2 shadow
  stroke(100);
  strokeWeight(10);
  line(450, 400, 455, chopstick2b);

  // Chopstick2
  stroke(222, 184, 135);
  strokeWeight(10);
  line(450, 400, 450, chopstick2b);


  // Draw images
  img2.resize(150, 150);
  image(img2, img2X, img2Y);

  //name stuff
  fill(50);
  strokeWeight(0);
  rect(445, 568, 170, 30);
  rect(2, 15, 138, 30);
  rect(225, 2, 160, 30);
  stroke(0);
  strokeWeight(0);
  fill(r, g, b, z);
  textFont(myFont);
  textSize(30);
  text("Grace Smith", 445, 590);
  text('cats delight', 225, 25);

  //scary cat and move
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

  // Timer display
  stroke(0);
  strokeWeight(0);
  fill(r, g, b, z);
  text(myTime + "seconds", 5, 40);

  if (wasabiVisible) {
    wasabi.move();
    wasabi.display();
  }
  if (Character.checkCollision(wasabi) && wasabiVisible) {
    wasabiVisible = false; // if wasabi isnt on screen
  }

}

function changeTime() {
  if (myTime < 10) {
    myTime++;
  } else {
    myTime = 0;
  }
}

function placeWasabiRandomly() {
  wasabi.a = random(width);
  wasabi.b = random(height);
}

function keyPressed() {
  if (key === ' ') {
    placeWasabiRandomly();
  } else if (key === 'w') {

    Character.y -= 20;
  } else if (key === 's') {

    Character.y += 20;
  } else if (key === 'a') {

    Character.x -= 20;
  } else if (key === 'd') {

    Character.x += 20;
  }
}