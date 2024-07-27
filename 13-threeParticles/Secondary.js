class Secondary extends Rootchild {
    constructor(posX, posY, radius) {
        super(posX, posY, radius);

        this.speed = random(10, 50);
        this.velX = random(-this.speed, this.speed);
        this.velY = random(-this.speed, this.speed);
        this.vel = createVector(this.velX, this.velY);

        this.maxForce = random(0.1, 0.75);
        this.maxSpeed = random(10, 50);

        this.bounceCount = 0;

        this.colorR = random(100, 255);
        this.colorG = random(0, 175);
        this.colorB = random(100, 255);
    }

    bouncedEnough()
    {
        return this.bounceCount >= 2;
    }

    rebounceY()
    {
        this.vel.y = random(-12, -6);
        this.bounceCount++;
    }

    rebounceX()
    {
        this.vel.x = -this.vel.x;
    }

    hitWalls()
    {
        if (this.pos.x <= -5) {
            return true;
        }
        if (this.pos.x >= width + 5) {
            return true;
        }

        return false;
    }

    hitFloor()
    {
        return this.pos.y >= height + 5;
    }

    behaviors(target)
    {
        const arrive = this.arrive(target);
        this.applyForce(arrive);
    }

    arrive(target)
    {
        const desired = p5.Vector.sub(target, this.pos);
        const desiredMag = desired.mag();
        let speed = this.maxSpeed;

        if (desiredMag < 100) {
            speed = map(desiredMag, 0, 100, 0, this.maxSpeed);
        }

        desired.limit(speed);

        const steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);

        return steer;
    }
}