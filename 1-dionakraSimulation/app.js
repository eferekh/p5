let canvas;
let ball;
let stick;
let p;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.addClass("canvas");
  rectMode(CENTER);
  
  ball = new Ball();
  stick = new Stick(width / 2);
  
  p = createP("The End");
  p.style("z-index", "99");
  p.style("color", "white");
  p.style("top", "50%");
  p.style("left", "50%");
  p.style("transform", "translateX(-50%)");
  p.style("transform", "translateY(-50%)");
  p.style("font-size", "26px");
  p.style("position", "absolute");
  p.style("display", "none");
}

function draw() {
    background(0);

    if (!ball.endOfGame()) {
        ball.hitBorders();
        ball.update();
        ball.show();
        stick.update(mouseX);
        stick.show();
        if (stick.ballHitStick(ball)) {
            ball.reBounceUp();
        }
    } else {
        stick.show();
        p.style("display", "block");
    }
}
