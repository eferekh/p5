class Ball {
	constructor(x, y, radius) {
		if (x) {
			this.posX = x;
			this.velX = 0;
		} else {
			this.posX = 0;
			this.velX = 0;
		}

		if (y) {
			this.posY = y;
			this.velY = random(-18, -8);
		} else {
			this.posY = 0;
			this.velY = 0;
		}

		if (radius) {
			this.radius = radius;
		} else {
			this.radius = 25;
		}

		this.pos = createVector(this.posX, this.posY);
		this.vel = createVector(this.velX, this.velY);
		this.acc = createVector(0, 0);

		this.red = random(100, 255);
		this.green = random(0, 255);
		this.blue = random(90, 255);
		this.alpha = 255;
	}

	bounceBack() {
		this.vel = createVector(0, random(-18, -8));
	}

	shouldSplit() {
		if (this.radius > 5) {
			return true;
		} else {
			return false;
		}
	}

	splitRight() {
		let rightBallRadius;

		if (this.radius > 1.25) {
			rightBallRadius = this.radius * 0.84;
		} else {
			rightBallRadius = this.radius;
		}

		let rightBallX = this.pos.x + random(20, 100);
		let rightBallY = this.pos.y - rightBallRadius;

		let rightBall = new Ball(rightBallX, rightBallY, rightBallRadius);

		return rightBall;
	}

	splitLeft() {
		let leftBallRadius;

		if (this.radius > 1.25) {
			leftBallRadius = this.radius * 0.84;
		} else {
			leftBallRadius = this.radius;
		}

		let leftBallX = this.pos.x - random(20, 100);
		let leftBallY = this.pos.y - leftBallRadius;

		let leftBall = new Ball(leftBallX, leftBallY, leftBallRadius);

		return leftBall;
	}

	hitFloor() {
		if (this.pos.y >= height) {
			return true;
		} else {
			return false;
		}
	}

	applyForce(force) {
		this.acc.add(force);
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	show() {
		noStroke();
		fill(this.red, this.green, this.blue, this.alpha);
		ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
	}
}0
