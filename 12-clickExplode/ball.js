class Ball {
  constructor() {
    this.posX = width / 2;
    this.posY = height / 2;
    this.pos = createVector(this.posX, this.posY);
    
    this.speed = 10;
    this.velX = random(-this.speed, this.speed);
    this.velY = random(-this.speed, this.speed);
    this.vel = createVector(this.velX, this.velY);
    
    this.accX = 0;
    this.accY = 0;
    this.acc = createVector(this.accX, this.accY);
    
    this.red = random(100, 255);
    this.green = random(0, 255);
    this.blue = random(90, 255);
    this.alpha = 180;
    
    this.maxSpeed = 10;
    this.maxForce = 0.1;
    
    this.theTargetX = width / 2;
    this.theTargetY = height / 2;
    this.theTarget = createVector(this.theTargetX, this.theTargetY);
    
    this.radius = random(5, 15);
  }
  
  stoppedMoving() {
    if (Math.round(this.pos.x) == width / 2 && Math.round(this.pos.y) == height / 2) {
      return true;
    } else {
      return false;
    }
  }

  behaviors() {
    let arrive = this.arrive(this.theTarget);
    this.applyForce(arrive);
  }

  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let desiredMag = desired.mag();
    let speed = this.maxSpeed;

    if (desiredMag < 150) {
      speed = map(desiredMag, 0, 150, 0, this.maxSpeed);
    }

    desired.limit(speed);

    let dir = p5.Vector.sub(desired, this.vel);
    dir.limit(this.maxForce);

    return dir;
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
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
}
