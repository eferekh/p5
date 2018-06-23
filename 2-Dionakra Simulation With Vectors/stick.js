class Stick {
  constructor() {
    this.width = 300;
    this.height = 300;

    this.pos = createVector(width / 2, height + 130);

    this.red = random(100, 255);
    this.green = random(0, 100);
    this.blue = random(100, 255);
    this.alpha = 255;
  }

  hitBall(x, y) {
    let distance = dist(this.pos.x, this.pos.y, x, y);

    if (distance <= 165) {
      return true;
    }
  }

  update(x) {
    this.pos.x = x;
  }

  show() {
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
