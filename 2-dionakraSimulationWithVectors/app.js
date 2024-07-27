let canvas;
let ball;
let stick;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.addClass("canvas");
  rectMode(CENTER);

  ball = new Ball();
  stick = new Stick();
}

function draw() {
  background(0, 50);

  if (stick.hitBall(ball.getPosX(), ball.getPosY())) {
    ball.rebounce();
  }
  stick.update(mouseX);
  stick.show();

  ball.hitBorders();
  ball.update();
  ball.show();
}
