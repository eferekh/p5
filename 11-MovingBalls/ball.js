class Ball {
    constructor(posX, posY) {
        this.radius = random(20, 30);
        this.pos = createVector(posX, posY);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.red = random(100, 255);
        this.green = random(0, 255);
        this.blue = random(90, 255);
        this.alpha = 255;
        this.maxSpeed = 30;
        this.maxForce = 0.5;
        this.target = createVector(width / 2, height / 2);
    }

    show() {
        noStroke();
        fill(this.red, this.green, this.blue, this.alpha);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    clicked() {
        this.vel = createVector(random(-30, 30), random(-30, 30));
    }

    arrive(target) {
        let dir = p5.Vector.sub(target, this.pos);
        let dirMag = dir.mag();
        let speed = this.maxSpeed;

        if (dirMag < 100) {
            speed = map(dirMag, 0, 100, 0, this.maxSpeed);
        }

        dir.limit(speed);

        let steer = p5.Vector.sub(dir, this.vel);
        steer.limit(this.maxForce);

        return steer;
    }

    behavior() {
        let steer = this.arrive(this.target);
        this.applyForce(steer);
    }
}
