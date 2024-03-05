// Timer
let myTime = 1;

// Font
let myFont;

var flipX = false;
var i = 0;
var idleStrings = [];
var walkStrings = [];
var idleArray = [];
var walkArray = [];
var objectToDraw;
let currentImageIndex = 0;
var myKitty;
let kittyX;
let kittyY;
let kittySpeed = 5;
var xImage = 50, yImage = 200;

var objectToEat;
var objectToDraw;
var score = 0;

function preload() {
  idleStrings = loadStrings("textfiles/idle.txt");
  walkStrings = loadStrings("textfiles/walk.txt");
}
// i really could not get this to work for the longest time
function preloadSuccess(data) {
  console.log("Preload successful:");
}

function preloadError(error) {
  console.error("Error during preload:");
}

function setup() {
  createCanvas(800, 600);

  for (let k = 0; k < idleStrings.length; k++) {
    idleArray.push(new Kitty(idleStrings[k], 50, 200, 680, 472));
  }
  for (let k = 0; k < walkStrings.length; k++) {
    walkArray.push(new Kitty(walkStrings[k], 50, 200, 680, 472));
  }
  // Load font
  objectToEat = new Kitty("images/cat/sushi.jpeg", random(50, width - 100), random(50, height - 100), 100, 100);
  myFont = loadFont('font/Honk-Regular.ttf');

  setInterval(changeTime, 100);
  setInterval(countDown, 1000);


  // i found this and thought it was so cool so i put it in!
  colorPicker = createColorPicker("pink");
  colorPicker.position(100, 100);
  colorPicker.size(50, 50);
}

function draw() {
  background(colorPicker.color());

  if (objectToEat != null) {
    objectToEat.draw();
  }

  if (keyIsPressed) {
    console.log("u see me")
    if (key == "w") {
      yImage -= 1;
    }
    if (key == "s") {
      yImage += 1;
    }
    if (key == "a") {
      xImage -= 1;
      flipX = true;
    }
    if (key == "d") {
      xImage += 1;
      flipX = false;
    }

    for (var ii = 0; ii < idleArray.length; ii++) {
      idleArray[ii].updateX(xImage);
      idleArray[ii].updateFlip(flipX);
      walkArray[ii].updateX(xImage);
      walkArray[ii].updateFlip(flipX);
      idleArray[ii].y = yImage;
      walkArray[ii].y = yImage;

      if (objectToEat != null) {
        if (walkArray[ii].checkCollision(objectToEat.x, objectToEat.y, objectToEat.w, objectToEat.h)) {
          objectToEat = null;
          score++;
        }
      }

    }
    objectToDraw = walkArray;
  }
  else {
    objectToDraw = idleArray;
  }

  objectToDraw[i].draw();

  fill (150);
  textSize(24);
  textFont(myFont);
  text("Score: " + score, 400, 50);

  fill(150);
  textSize(25);
  text(myTime + "   GET THE FOOD QUICK", 50, 50);
}

function changeTime() {
  i++;
  if (i > idleArray.length - 1) {
    i = 0;
  }
}

function countDown() {
  myTime--;
  if (myTime < 0) {
    myTime = 10;
    createANewFoodItem();
  }
}

function createANewFoodItem() {
  console.log("HI");
  objectToEat = new Kitty("images/cat/sushi.jpeg", random(50, width - 100), random(50, height - 100), 100, 100);
}

