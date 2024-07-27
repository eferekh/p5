class Root {
    constructor() {
        this.posX = width / 2;
        this.posY = height;
        this.pos = createVector(this.posX, this.posY);

        this.velX = random(-0.5, 0.5);
        this.velY = random(-9, -5);
        this.vel = createVector(this.velX, this.velY);

        this.accX = 0;
        this.accY = 0;
        this.acc = createVector(this.accX, this.accY);

        this.radius = 10;

        this.colorR = random(100, 255);
        this.colorG = random(100, 255);
        this.colorB = random(100, 255);
        this.colorA = 255;
    }

    seperate() 
    {
        const newRootchildsArr = [];

        for (let i = 0; i < 20; i++) {
            const posX = this.pos.x;
            const posY = this.pos.y;
            const radius = this.radius * random(0.25, 0.75);

            const newRootchild = new Rootchild(posX, posY, radius);
            newRootchildsArr.push(newRootchild);
        }

        return newRootchildsArr;
    }

    reachedTop() 
    {
        return this.vel.y >= 0;
    }

    applyForce(force) 
    {
        this.acc.add(force);
    }

    update() 
    {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    show() 
    {
        noStroke();
        fill(this.colorR, this.colorG, this.colorB, this.colorA);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}