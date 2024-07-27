class Rootchild extends Root {
    constructor(posX, posY, radius) {
        super();

        this.posX = posX;
        this.posY = posY;
        this.pos = createVector(this.posX, this.posY);

        this.velX = random(-5, 5);
        this.velY = random(-9, -5);
        this.vel = createVector(this.velX, this.velY);

        this.radius = radius;

        this.colorR = random(50, 200);
        this.colorG = random(0, 150);
        this.colorB = random(100, 255);
    }

    explode() 
    {
        const newSecondariesArr = [];

        for (let i = 0; i < 120; i++) {
            const posX = this.pos.x;
            const posY = this.pos.y;
            const radius = this.radius * random(0.25, 0.75);

            const newSecondary = new Secondary(posX, posY, radius);
            newSecondariesArr.push(newSecondary);
        }

        return newSecondariesArr;
    }
}