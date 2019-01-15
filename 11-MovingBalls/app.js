let ball1;
let ball2;
let ball3;
let ball4;
let color1;
let color2;
let color3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball1 = new Ball(0, 0);
    ball2 = new Ball(width, 0);
    ball3 = new Ball(0, height);
    ball4 = new Ball(width, height);

    color1 = random(100, 255);
    color2 = random(100, 255);
    color3 = random(100, 255);
}

function draw() {
    background(0);

    strokeWeight(2);

    stroke(random(color1), random(color2), random(color3));
    line(ball1.pos.x, ball1.pos.y, ball2.pos.x, ball2.pos.y);
    stroke(random(color3), random(color2), random(color1));
    line(ball1.pos.x, ball1.pos.y, ball3.pos.x, ball3.pos.y);
    stroke(random(color2), random(color1), random(color3));
    line(ball4.pos.x, ball4.pos.y, ball2.pos.x, ball2.pos.y);
    stroke(random(color1), random(color3), random(color2));
    line(ball4.pos.x, ball4.pos.y, ball3.pos.x, ball3.pos.y);

    ball1.behavior();
    ball2.behavior();
    ball3.behavior();
    ball4.behavior();
    
    ball1.update();
    ball2.update();
    ball3.update();
    ball4.update();

    ball1.show();
    ball2.show();
    ball3.show();
    ball4.show();
}

function mousePressed() {
    ball1.clicked();
    ball2.clicked();
    ball3.clicked();
    ball4.clicked();
}
