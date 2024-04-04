var IdlePaths = [];
var WalkPaths = [];
var myAnimation;
var random;
var sushiImage;
var ratImage;
var waterImage;
var myWalkAnimation;
var catfood1Image;
var spraybottleImage;
var score = 1;
var particles = [];

function preload() {
    IdlePaths = loadStrings("images/cat/Idle.txt");
    WalkPaths = loadStrings("images/cat/Walk.txt");
}


function setup() {
    createCanvas(1400, 600);

    //i dont think i needed to do all this
    var x = Math.random() * 1200;
    var y = Math.random() * 500;
    var a = Math.random() * 1200;
    var b = Math.random() * 400;
    var g = Math.random() * 1200;
    var s = Math.random() * 400;
    var A = Math.random() * 1200;
    var B = Math.random() * 400;
    var T = Math.random() * 1200;
    var L = Math.random() * 400;


    sushiImage = new Sprite(x, y, 50, 60, 'static');
    sushiImage.img = ("images/cat/sushi.jpeg");
    sushiImage.scale = .5;

    ratImage = new Sprite(a, b, 30, 40, 'static');
    ratImage.img = ("images/cat/rat.jpeg");
    ratImage.scale = .5;

    waterImage = new Sprite(g, s, 10, 20, 'static');
    waterImage.img = ("images/cat/water.jpeg");
    waterImage.scale = .5;

    catfood1Image = new Sprite(T, L, .5, .5, 'static');
    catfood1Image.img = ("images/cat/catfood1.jpg");
    catfood1Image.scale = .09;

    spraybottleImage = new Sprite(A, B, 10, 20, 'static');
    spraybottleImage.img = ("images/cat/spraybottle.jpeg");
    spraybottleImage.scale = .5;


    myAnimation = new Kitty(400, 300, 20, 20);
    myAnimation.myLoadAnimation('Idle', IdlePaths);
    myAnimation.myLoadAnimation('Walk', WalkPaths);

}

function draw() {
//i got this from the internet ONLY BECAUSE i wanted a cool background
    var from = color(173, 216, 230); 
    var to = color(255); 
    background(lerpColor(from, to, mouseY / height));

    textSize(25);
    text("Score: " + score, 400, 50);

    //displays and gets rid of particles 
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
    //collision
    if (kb.pressing('d')) {
        if (myAnimation.isColliding(sushiImage)) {
            sushiImage.remove();
            score++;
            magic();

        }
        else if (myAnimation.isColliding(ratImage)) {
            ratImage.remove();
            score++;
            magic();


        }
        else if (myAnimation.isColliding(waterImage)) {
            waterImage.remove();
            score++;
            magic();

        }
        else if (myAnimation.isColliding(catfood1Image)) {
            catfood1Image.remove();
            score++;
            magic();

        }
        else if (myAnimation.isColliding(spraybottleImage)) {
            spraybottleImage.remove();
            score--;
            magic();
        }

        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('Walk');

    }
    //keybinds
    else if (kb.pressing('a')) {
        {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('Walk');
    }
    else if (kb.pressing('w')) {
        {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');

        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('Walk');

    }
    else if (kb.pressing('s')) {
        {
            myAnimation.drawAnimation('Idle');
            myAnimation.updatePosition('Idle');

        }
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('Walk');
    }
    else {
        myAnimation.drawAnimation('Idle');
    }

    if (score === 10) {
        textSize(75);
        text("You win!", 600, 300);

        // Remove images when the is 10
        if (sushiImage) {
            sushiImage.remove();
            sushiImage.visible = false;
        }

        if (ratImage) {
            ratImage.remove();
            ratImage.visible = false;
        }

        if (waterImage) {
            waterImage.remove();
            waterImage.visible = false;
        }

        if (catfood1Image) {
            catfood1Image.remove();
            catfood1Image.visible = false;
        }

        if (spraybottleImage) {
            spraybottleImage.remove();
            spraybottleImage.visible = false;
        }
    } else if (score === 0) {
        textSize(75);
        text("You lose!", 600, 300);

        // Removes images when score is zero
        if (sushiImage) {
            sushiImage.remove();
            sushiImage.visible = false;
        }

        if (ratImage) {
            ratImage.remove();
            ratImage.visible = false;
        }

        if (waterImage) {
            waterImage.remove();
            waterImage.visible = false;
        }

        if (catfood1Image) {
            catfood1Image.remove();
            catfood1Image.visible = false;
        }

        if (spraybottleImage) {
            spraybottleImage.remove();
            spraybottleImage.visible = false;
        }
    }
}

function magic() {
    // they disappear!
    if (catfood1Image) {
        catfood1Image.remove();
        catfood1Image.visible = false;

    }

    if (spraybottleImage) {
        spraybottleImage.remove();
        spraybottleImage.visible = false;
    }

    if (sushiImage) {
        sushiImage.remove();
        sushiImage.visible = false;
    }

    if (ratImage) {
        ratImage.remove();
        ratImage.visible = false;
    }

    if (waterImage) {
        waterImage.remove();
        waterImage.visible = false;
    }

    // respawns images
    sushiImage = new Sprite(Math.random() * 1200, Math.random() * 400, 50, 60, 'static');
    sushiImage.img = ("images/cat/sushi.jpeg");
    sushiImage.scale = .5;

    ratImage = new Sprite(Math.random() * 1200, Math.random() * 400, 30, 40, 'static');
    ratImage.img = ("images/cat/rat.jpeg");
    ratImage.scale = .5;

    waterImage = new Sprite(Math.random() * 1200, Math.random() * 400, 10, 20, 'static');
    waterImage.img = ("images/cat/water.jpeg");
    waterImage.scale = .5;

    catfood1Image = new Sprite(Math.random() * 1200, Math.random() * 400, .5, .5, 'static');
    catfood1Image.img = ("images/cat/catfood1.jpg");
    catfood1Image.scale = .09;

    spraybottleImage = new Sprite(Math.random() * 1200, Math.random() * 400, 10, 20, 'static');
    spraybottleImage.img = ("images/cat/spraybottle.jpeg");
    spraybottleImage.scale = .5;
    //creates the particles
    for (var i = 0; i < 20; i++) {
        var p = new Particle(sushiImage.x, sushiImage.y);
        var q = new Particle(ratImage.x, ratImage.y);
        var w = new Particle(waterImage.x, waterImage.y);
        var m = new Particle(waterImage.x, waterImage.y);
        particles.push(p);
    }
}




