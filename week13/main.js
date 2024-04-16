var loadedModel;
var objects = [];
var textures = [];
var font;

function preload() {
    loadedModel = loadModel('untitled.obj');
    font = loadFont('Sixtyfour-Regular.ttf');


    // fruit textures
    textures.push(loadImage('t1.jpeg'));
    textures.push(loadImage('t2.jpeg'));
    textures.push(loadImage('t3.jpeg'));
    textures.push(loadImage('t4.jpeg'));
    textures.push(loadImage('t5.jpeg'));

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    for (let i = 0; i < 5; i++) {
        let obj = {
            shape: int(random(0, 2)),
            size: random(30, 100),
            x: random(-width / 2, width / 2),
            y: random(-height / 2, height / 2),
            z: random(-500, 500),
            rotationSpeed: random(-0.05, 0.05),
            textureIndex: int(random(textures.length)) // Randomly choose texture
        };
        objects.push(obj);
    }
}

function draw() {
    background(200);
    orbitControl();


    push();
    translate(0, 0, 500);
    scale(15);

    directionalLight(255, 255, 255, 0, 0, 1);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    model(loadedModel);
    pop();

    //rotate shapes
    for (let i = 0; i < objects.length; i++) {
        let obj = objects[i];
        push();
        noFill();
        noStroke();
        translate(obj.x, obj.y, obj.z);
        rotateX(frameCount * obj.rotationSpeed);
        rotateY(frameCount * obj.rotationSpeed);
        if (obj.shape === 0) {
            texture(textures[obj.textureIndex]);
            box(obj.size);
        } else {
            texture(textures[obj.textureIndex]);
            sphere(obj.size / 2);
        }
        pop();
    }

    push();
    textFont(font);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('by Grace Smith!', 0, 0); // 0 0 is center
    pop();

}

function mouseClicked() {
    // Move shapes 
    let index1 = int(random(0, objects.length));
    let index2 = int(random(0, objects.length));
    objects[index1].x = random(-width / 2, width / 2);
    objects[index1].y = random(-height / 2, height / 2);
    objects[index1].z = random(-500, 500);
    objects[index2].x = random(-width / 2, width / 2);
    objects[index2].y = random(-height / 2, height / 2);
    objects[index2].z = random(-500, 500);
}
