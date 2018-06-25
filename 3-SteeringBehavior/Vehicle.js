class Vehicle {
  constructor() {
    this.target = createVector(width / 2, height / 2);
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.size = 20;
    
    this.red = random(100, 255);
    this.green = random(0, 255);
    this.blue = random(100, 255);
    this.alpha = 255;
    
    this.maxSpeed = 10;
    
    // this.vel = createVector(0, 0);
  }
  
  behavior() {
    let steer = this.arrive(this.target);
    this.applyForce(steer);
  }
  
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let desiredMag = desired.mag();
    let desiredSpeed = this.maxSpeed;
    if (desiredMag < 200) {
      desiredSpeed = map(desiredMag, 0, 200, 0, this.maxSpeed);
    }
    desired.limit(desiredSpeed);
    
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(desiredSpeed);
    
    return steer;
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
    noFill();
    stroke(this.red, this.green, this.blue, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
