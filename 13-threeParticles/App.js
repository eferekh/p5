let canvas, gravity, mainTarget;
const rootsArr = [], rootchildsArr = [], secondariesArr = [];


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.1);
    mainTarget = createVector(width / 2, height + 10);
}


function draw() {
    background(0, 30);

    if (rootsArr.length == 0 && rootchildsArr.length == 0 && secondariesArr.length <= 50) {
        rootsArr.push(new Root());
    }

    rootsArr.forEach((root, i) => {
        root.applyForce(gravity);
        root.update();
        root.show();

        if (root.reachedTop()) {
            const newRootchildsArr = root.seperate();
            rootchildsArr.push(...newRootchildsArr);
            rootsArr.splice(i, 1);
        }
    });

    rootchildsArr.forEach((rootchild, i) => {
        rootchild.applyForce(gravity);
        rootchild.update();
        rootchild.show();

        if (rootchild.reachedTop()) {
            const newSecondariesArr = rootchild.explode();
            secondariesArr.push(...newSecondariesArr);
            rootchildsArr.splice(i, 1);
        }
    });

    secondariesArr.forEach((secondary, i) => {
        secondary.behaviors(mainTarget);
        secondary.update();
        secondary.show();

        if (secondary.hitWalls()) {
            secondary.rebounceX();
        }
        if (secondary.hitFloor()) {
            secondary.rebounceY();
        }
        if (secondary.bouncedEnough()) {
            secondariesArr.splice(i, 1);
        }
    });
}