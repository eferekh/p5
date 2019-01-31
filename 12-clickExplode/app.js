let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (let i = 0; i < 400; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(0, 40);
  
  for (let i = balls.length - 1; i >= 0; i--) {
    balls[i].behaviors();
    balls[i].update();
    balls[i].show();
    
    if (balls[i].stoppedMoving()) {
      balls.splice(i, 1);
    }
  }
  
  noStroke();
  fill(0, 0, 0, 255);
  ellipse(width / 2, height / 2, 5, 5);
}
