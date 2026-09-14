let canvas, gravity, firstTry;
const particlesArr = [], fireworksArr = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.1);
    firstTry = true;

    particlesArr.push(new InitialParticle());
}

function draw() {
    background(0, 30);

    if (particlesArr.length > 1000 && firstTry) {
        firstTry = false;
    }

    particlesArr.forEach((particle, i) => {
        if (firstTry) {
            particle.applyForce(gravity);
            particle.update();
            particle.show();

            if (particle.hitFloor()) {
                const leftParticle = particle.splitLeft();
                const rightParticle = particle.splitRight();

                particlesArr.push(leftParticle);
                particlesArr.push(rightParticle);

                particlesArr.splice(i, 1);
            }
        } else {
            particle.behaviors();
            particle.update();
            particle.show();

            if (particle.isSteady()) {
                const newParticles = particle.explode();
                fireworksArr.push(...newParticles);

                particlesArr.splice(i, 1);
            }
        }
    });

    fireworksArr.forEach((firework, i) => {
        firework.applyForce(gravity);
        firework.update();
        firework.show();

        if (firework.isOutOfCanvas()) {
            fireworksArr.splice(i, 1);
        }
    });
}
