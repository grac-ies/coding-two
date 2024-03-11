class Kitty {
  // constructor
  constructor(images, x, y, w, h) {
    this.characterImage = loadImage(images);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.eaten = false;
  }

  // functions
  updateX(x) {
    this.x = x;
  }

  updateFlip(flipX) {
    this.flipX = flipX;
  }

  // draw function
  draw() {
    if (!this.eaten) {
      this.characterImage.resize(this.w / 2, this.h / 2);
      if (this.flipX) {
        push();
        scale(-1, 1);
        image(this.characterImage, -this.x - this.w / 2, this.y);
        pop();
      } else {
        image(this.characterImage, this.x, this.y);
      }
    }
  }

  checkCollisionWithFood(changeX, changeY, changeW, changeH) {
   
    if (
      this.x + this.w / 4 < changeX + changeW &&
      this.x + (3 * this.w) / 4 > changeX &&
      this.y + this.h / 4 < changeY + changeH &&
      this.y + (3 * this.h) / 4 > changeY
    ) {
      return true;
    }
    return false;
  }
}