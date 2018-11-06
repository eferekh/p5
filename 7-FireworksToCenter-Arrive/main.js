let canvas;
let gravity;
let roots = [];
let fireworks = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.addClass("canvas");
    gravity = createVector(0, 0.1);
}

function draw() {
    background(0, 40);

    if (random(1) < 0.01) {
        roots.push(new Root());
    }

    for (let i = roots.length - 1; i >= 0; i--) {
        roots[i].applyForce(gravity);
        roots[i].update();
        roots[i].show();

        if (roots[i].reachedTop()) {
            let newFireworks = roots[i].explode();

            for (let j = 0; j < newFireworks.length; j++) {
                fireworks.push(newFireworks[j]);
            }

            roots.splice(i, 1);
        }
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].behaviors();
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].isFaded()) {
            fireworks.splice(i, 1);
        }
    }
}
