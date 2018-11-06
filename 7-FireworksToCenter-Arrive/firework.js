class Firework extends Root {
    constructor(x, y) {
        super();

        this.posX = x;
        this.posY = y;
        this.pos = createVector(this.posX, this.posY);

        this.speed = random(10, 20);

        this.velX = random(-this.speed, this.speed);
        this.velY = random(-this.speed, this.speed);
        this.vel = createVector(this.velX, this.velY);

        this.accX = 0;
        this.accY = 0;
        this.acc = createVector(this.accX, this.accY);

        this.radius = random(2, 12);

        this.maxForce = 0.2;
        this.maxSpeed = 10;

        this.target = createVector(width / 2, height / 2);

        this.isFirework = true;
    }

    isFaded() {
        if (this.alpha <= 0) {
            return true;
        } else {
            return false;
        }
    }

    behaviors() {
        let arrive = this.arrive(this.target);
        this.applyForce(arrive);
    }

    arrive(target) {
        let desired = p5.Vector.sub(target, this.pos);
        let desiredMag = desired.mag();
        let speed = this.maxSpeed;

        if (desiredMag < 100) {
            speed = map(desiredMag, 0, 100, 0, this.maxSpeed);
        }

        desired.limit(speed);
        
        let steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        return steer;
    }
}
