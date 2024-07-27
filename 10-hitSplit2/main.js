let gravity;
let balls = [];
let rotationNum;

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.1);
	rotationNum = 0;

	balls.push(new Ball());
}

function draw() {
	background(0, 100);

	translate(width / 2, height / 2);
	scale(0.5);

	let incremental = random(0.001, 0.01);
	rotationNum += incremental;
	rotate(rotationNum);
	
	for (let i = balls.length - 1; i >= 0; i--) {
		balls[i].applyForce(gravity);
		balls[i].update();
		balls[i].show();

		if (balls[i].hitFloor()) {
			if (balls[i].shouldSplit()) {
				balls.push(balls[i].splitLeft());
				balls.push(balls[i].splitRight());
				balls.splice(i, 1);
			} else {
				balls[i].bounceBack();
			}
		}
	}
}
