class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = random(-2, 2);
        this.velY = random(-5, -1);
        this.alpha = 255;
        //yay color!!
        this.color = color(random(255), random(255), random(255));
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;
        this.alpha -= 5;
    }

    display() {
        noStroke();
        fill(this.color, this.alpha);
        //now they are pixels!
        square(this.x, this.y, 10);
    }

    finished() {
        return this.alpha < 0;
    }
}
