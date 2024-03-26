var IdlePaths = [];
var WalkPaths = [];
var myAnimation;
var sushiImage;
var ratImage;
var waterImage;
var myWalkAnimation;
var random;
var catfood1Image;
var spraybottleImage;
var score = 0;
var myTime = 1;

function preload() {
    IdlePaths = loadStrings("images/cat/Idle.txt");
    WalkPaths = loadStrings("images/cat/Walk.txt");
}


function setup() {
    createCanvas(1400, 600);
    setInterval(countDown, 1000);

    let x = Math.random() * 1200;
    let y = Math.random() * 500;
    let a = Math.random() * 1200;
    let b = Math.random() * 400;
    let g = Math.random() * 1200;
    let s = Math.random() * 400;
    let A = Math.random() * 1200;
    let B = Math.random() * 400;
    let T = Math.random() * 1200;
    let L = Math.random() * 400;


    sushiImage = new Sprite(x, y, 50, 60, 'static');
    sushiImage.img = "images/cat/sushi.jpeg";
    sushiImage.scale = .5;

    ratImage = new Sprite(a, b, 30, 40, 'static');
    ratImage.img = "images/cat/rat.jpeg";
    ratImage.scale = .5;

    waterImage = new Sprite(g, s, 10, 20, 'static');
    waterImage.img = "images/cat/water.jpeg";
    waterImage.scale = .5;

    catfood1Image = new Sprite(T, L, .5, .5, 'static');
    catfood1Image.img = "images/cat/catfood1.jpg";
    catfood1Image.scale = .09;

    spraybottleImage = new Sprite(A, B, 10, 20, 'static');
    spraybottleImage.img = "images/cat/spraybottle.jpeg";
    spraybottleImage.scale = .5;


    myAnimation = new Kitty(400, 300, 20, 20);
    myAnimation.myLoadAnimation('Idle', IdlePaths);
    myAnimation.myLoadAnimation('Walk', WalkPaths);

}

function draw() {

    background(120);
   
    textSize(25);
    text("Score: " + score, 400, 50);

    if (kb.pressing('d')) {
        if (myAnimation.isColliding(sushiImage)) {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');

        }
        else if (myAnimation.isColliding(ratImage)) {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');


        }
        else if (myAnimation.isColliding(waterImage)) {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');

        }
        else if (myAnimation.isColliding(catfood1Image)) {
            catfood1Image.remove();
            score++;
            catfood1Image.visible = true;

        }
        else if (myAnimation.isColliding(spraybottleImage)) {
            spraybottleImage.remove();
            score--;
            spraybottleImage.visible = true;
        }

        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('Walk');

    }
    else if (kb.pressing('a')) {
        if (myAnimation.isColliding(sushiImage)) {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('Walk');
    }
    else if (kb.pressing('w')) {
        if (myAnimation.isColliding(sushiImage)) {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');

        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('Walk');

    }
    else if (kb.pressing('s')) {
        if (myAnimation.isColliding(sushiImage)) {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');

        }
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('Walk');
    }
    else {
        myAnimation.drawAnimation('Idle');
    }

    // scoring
    if (score == 10) {
        textSize(25);
        text("You win!", 600, 300);
    } else if (score == -1) {
        textSize(25);
        text("You lose!", 600, 300);

    }
    text(myTime, 150, 50);
}
function countDown() {
    myTime--;
    if (myTime < 0) {
        myTime = 5;

        //catfood1Image back from dead
        let T = Math.random() * 1200;
        let L = Math.random() * 400;
        catfood1Image = new Sprite(T, L, .5, .5, 'static');
        catfood1Image.img = "images/cat/catfood1.jpg";
        catfood1Image.scale = .09;

        //spraybottleImage back from dead
        let A = Math.random() * 1200;
        let B = Math.random() * 400;
        spraybottleImage = new Sprite(A, B, 10, 20, 'static');
        spraybottleImage.img = "images/cat/spraybottle.jpeg";
        spraybottleImage.scale = .5;
    }
}


    