let gravity;
let balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.1);
    balls.push(new Ball());
}

function draw() {
    background(0);

    for (let i = balls.length - 1; i >= 0; i--) {
        balls[i].applyForce(gravity);
        balls[i].update();
        balls[i].show();

        if (balls[i].hitFloor()) {
            balls.push(balls[i].splitLeft());
            balls.push(balls[i].splitRight());
            balls.splice(i, 1);
        }
    }
}
