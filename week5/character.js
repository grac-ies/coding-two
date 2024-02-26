class character {

    // Constructor function
    constructor(x, y, diameter) {
        //properties
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    }


    //functions
    drawcircle() {
        fill(120);
        circle(this.x,this.y,this.diameter)
    }

    checkCollision(wasabi) {
        let d = dist(this.x, this.y, wasabi.a, wasabi.b);
        return d < (this.diameter / 2 + wasabi.size / 2); // Check if distance is less than sum of radii
      }
}


class Wasabi {
  constructor(a, b, size, speed) {
    this.a = a;
    this.b = b;
    this.size = size;
    this.speed = speed;
  }

  // Function to move the wasabi
  move() {
    // Move the wasabi here
  }

  // Function to display the wasabi
  display() {
    fill(0, 255, 0); // Green color
    ellipse(this.a, this.b, this.size, this.size);
  }
}