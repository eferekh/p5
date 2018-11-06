class Root {
    constructor() {
        this.posX = random(0, width);
        this.posY = height;
        this.pos = createVector(this.posX, this.posY);

        this.velX = 0;
        this.velY = random(-12, -4);
        this.vel = createVector(this.velX, this.velY);

        this.accX = 0;
        this.accY = 0;
        this.acc = createVector(this.accX, this.accY);

        this.radius = random(15, 30);

        this.red = random(100, 255);
        this.green = random(0, 255);
        this.blue = random(90, 255);
        this.alpha = 255;

        this.isFirework = false;
    }

    explode() {
        let newFireworks = [];

        for (let i = 0; i < 100; i++) {
            newFireworks.push(new Firework(this.pos.x, this.pos.y));
        }

        return newFireworks;
    }

    reachedTop() {
        if (this.vel.y >= 0) {
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
        if (this.isFirework) {
            this.alpha--;
        }
        noStroke();
        fill(this.red, this.green, this.blue, this.alpha);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}
