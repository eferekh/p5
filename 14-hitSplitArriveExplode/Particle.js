class Particle extends InitialParticle {
    constructor(posX, posY, radius, isFirework) {
        super();

        this.pos = createVector(posX, posY);

        this.isFirework = true;

        if (isFirework) {
            this.velX = random(-15, 15);
            this.velY = random(-15, 15);
            this.vel = createVector(this.velX, this.velY);
        } else {
            this.velX = random(-1, 1);
            this.velY = random(-12, -6);
            this.vel = createVector(this.velX, this.velY);
        }

        this.radius = radius;

        this.targetPosX = width / 2;
        this.targetPosY = height / 2;
        this.target = createVector(this.targetPosX, this.targetPosY);

        this.maxSpeed = 10;
        this.maxForce = 0.1;

        this.count = random(600, 1500);
    }

    isOutOfCanvas() {
        return this.pos.y >= height + 10;
    }

    explode() {
        const newParticles = [];

        for (let i = 0; i < 30; i++) {
            const posX = width / 2;
            const posY = height / 2;
            const radius = this.radius;
            const isFirework = true;

            const newParticle = new Particle(posX, posY, radius, isFirework);
            newParticles.push(newParticle);
        }

        return newParticles;
    }

    isSteady() {
        return this.count <= 0;
    }

    behaviors() {
        const arrive = this.arrive(this.target);
        this.applyForce(arrive);
    }

    arrive(target) {
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