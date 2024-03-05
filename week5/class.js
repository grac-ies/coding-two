class Kitty 
{
  
  // constructor
  constructor(images, x, y, w, h) 
  
  {

    this.characterImage = loadImage(images);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }


  // functions
  updateX(x) 
  {
    this.x = x;
  }

  updateFlip(flipX) 
  {
    this.flipX = flipX;
  }

  //draw it girlll
  draw() 
  {
    this.characterImage.resize(this.w / 2, this.h / 2);
    if (this.flipX) {
      push();
      scale(-1, 1);
      image(this.characterImage, -this.x - this.w / 2, this.y);
      pop();
    }
    else {
      image(this.characterImage, this.x, this.y);

    }

  }

  checkCollision(x2, y2, w2, h2) 
  {
    if (
        this.x - this.w / 4 < x2 + w2 / 4 &&
        this.x + this.w / 4 > x2 - w2 / 4 &&
        this.y - this.h / 4 < y2 + h2 / 4 &&
        this.y + this.h / 4 > y2 - h2 / 4
    ) {
        return true; 
    } else {
        return false; 
    }
}
}