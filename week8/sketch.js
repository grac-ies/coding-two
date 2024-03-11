// Timer
var myTime = 1;

// Font
var myFont;

var flipX = false;
var i = 0;
var idleStrings = [];
var walkStrings = [];
var idleArray = [];
var walkArray = [];
var objectToDraw;
var rat;
var Sushi;
var currentImageIndex = 0;
var kittyX;
var kittyY;
var kittySpeed = 5;
var xImage = 50, yImage = 200;
var backgroundmusic;
var score = 0;
var yayaudio;
var uhohaudio;
var colorPicker;
var MyKitty;

function preload() {
  idleStrings = loadStrings("textfiles/idle.txt");
  walkStrings = loadStrings("textfiles/walk.txt");
  yayaudio = loadSound('audio/22952__acclivity__cheer.wav'); // Load sushi sound
  uhohaudio = loadSound('audio/541631__jayroo9__zombie_016.wav');
  backgroundmusic = loadSound('audio/544416__zhr__background-music.mp3');
  myFont = loadFont('font/Honk-Regular.ttf');
}

function setup() {
  createCanvas(800, 600);

  createCanvas(windowWidth, windowHeight, WEBGL);
	createEasyCam();

  for (let k = 0; k < idleStrings.length; k++) {
    idleArray.push(new Kitty(idleStrings[k], 50, 200, 600, 400));
  }

  for (let k = 0; k < walkStrings.length; k++) {
    walkArray.push(new Kitty(walkStrings[k], 50, 200, 600, 400));
  }

  Sushi = new Kitty("images/cat/sushi.jpeg", 250, 100, 50, 50);
  rat = new Kitty("images/cat/rat.jpeg", 500, 100, 50, 75);

  setInterval(changeTime, 100);
  setInterval(countDown, 1000);

  // Create color picker
  colorPicker = createColorPicker("pink");
  colorPicker.position(100, 100);
  colorPicker.size(50, 50);
}

function draw() {
  background(colorPicker.color());
  lights();
	box(200);


  if (Sushi != null) {
    Sushi.draw();
  }

  if (rat != null) {
    rat.draw();
  }

  if (keyIsPressed) {
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

      if (Sushi != null) {
        if (walkArray[ii].checkCollisionWithFood(Sushi.x, Sushi.y, Sushi.w, Sushi.h)) {
          Sushi = null;
          yayaudio.play();
          score++;
        }
      }

      if (rat != null) {
        if (walkArray[ii].checkCollisionWithFood(rat.x, rat.y, rat.w, rat.h)) {
          rat = null;
          uhohaudio.play();
          score--;
        }
      }

      objectToDraw = walkArray;
    }
  } else {
    objectToDraw = idleArray;
  }

  objectToDraw[i].draw();

  fill(150);
  textSize(40);
  textFont(myFont);
  text("Score: " + score, 400, 50);

  fill(150);
  textSize(25);
  text(myTime + " GET THE FOOD QUICK", 150, 50);
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
  if (rat == null || Sushi == null) {
    let randomSushiX = random(width - 50); 
    let randomSushiY = random(height - 50);
    let randomRatX = random(width - 50); 
    let randomRatY = random(height - 75); 

    Sushi = new Kitty("images/cat/sushi.jpeg", randomSushiX, randomSushiY, 50, 50);
    rat = new Kitty("images/cat/rat.jpeg", randomRatX, randomRatY, 50, 75);
  } else {
    
    Sushi.x = random(width - Sushi.w);
    Sushi.y = random(height - Sushi.h);
    rat.x = random(width - rat.w);
    rat.y = random(height - rat.h);
  }
}

function keyPressed() {
  if (key === " ") {
    playMySound();
  }
}

function playMySound() {
  backgroundmusic.loop();
}