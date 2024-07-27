class Ball {
  constructor() {
    this.size = 30;

    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(3, -3);

    this.red = random(100, 255);
    this.green = random(100, 255);
    this.blue = random(100, 255);
    this.alpha = 255;
  }

  rebounce() {
    this.vel.y = this.vel.y * -1;
    this.vel.mult(1.1);
  }

  getPosY() {
    return this.pos.y;
  }

  getPosX() {
    return this.pos.x;
  }

  hitBorders() {
    if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.pos.x < 0) {
      this.vel.x = this.vel.x * -1;
    }

    if (this.pos.y < 0) {
      this.vel.y = this.vel.y * -1;
    }
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
