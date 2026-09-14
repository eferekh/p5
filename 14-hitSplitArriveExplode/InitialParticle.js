class InitialParticle {
    constructor() {
        this.posX = width / 2;
        this.posY = height / 2;
        this.pos = createVector(this.posX, this.posY);

        this.velX = 0;
        this.velY = 0;
        this.vel = createVector(this.velX, this.velY);

        this.accX = 0;
        this.accY = 0;
        this.acc = createVector(this.accX, this.accY);

        this.radius = 75;

        this.colorR = random(100, 255);
        this.colorG = random(0, 255);
        this.colorB = random(90, 255);
        this.colorA = 255;

        this.isFirework = false;
    }

    splitRight() {
        const rightBallRadius = this.radius * random(0.5, 0.75);
        const rightBallPosX = this.pos.x + random(10, 60);
        const rightBallPosY = this.pos.y - rightBallRadius;
        const isFirework = false;

        const rightBall = new Particle(rightBallPosX, rightBallPosY, rightBallRadius, isFirework);
        return rightBall;
    }

    splitLeft() {
        const leftBallRadius = this.radius * random(0.5, 0.75);
        const leftBallPosX = this.pos.x - random(10, 60);
        const leftBallPosY = this.pos.y - leftBallRadius;
        const isFirework = false;

        const leftBall = new Particle(leftBallPosX, leftBallPosY, leftBallRadius, isFirework);
        return leftBall;
    }

    hitFloor() {
        return this.pos.y >= height;
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
        fill(this.colorR, this.colorG, this.colorB, this.colorA);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

        if (this.isFirework) {
            this.count -= 1;
        }
    }
}
