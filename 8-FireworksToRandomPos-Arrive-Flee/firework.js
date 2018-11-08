class Firework extends Root {
    constructor(x, y) {
        super();
        
        this.posX = x;
        this.posY = y;
        this.pos = createVector(this.posX, this.posY);

        this.velX = random(-20, 20);
        this.velY = random(-20, 20);
        this.vel = createVector(this.velX, this.velY);

        this.accX = 0;
        this.accY = 0;
        this.acc = createVector(this.accX, this.accY);

        this.radius = random(2, 8);

        this.maxForce = 0.1;
        this.maxSpeed = 10;

        this.target = createVector(random(0, width), random(0, height));

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
        let mousePos = createVector(mouseX, mouseY);
        let flee = this.flee(mousePos);

        arrive.mult(1);
        flee.mult(10);

        this.applyForce(arrive);
        this.applyForce(flee);
    }

    flee(target) {
        let desired = p5.Vector.sub(target, this.pos);
        let desiredMag = desired.mag();

        if (desiredMag < 100) {
            desired.limit(this.maxSpeed);
            desired.mult(-1);

            let steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxForce);
            return steer;
        } else {
            let emptyVec = createVector(0, 0);
            return emptyVec;
        }
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
