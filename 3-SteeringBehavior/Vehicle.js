class Vehicle {
  constructor() {
    this.target = createVector(width / 2, height / 2);
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    
    this.size = 30;
    this.maxSpeed = 5;
  }
  
  behavior() {
    let steer = this.arrive(this.target);
    this.applyForce(steer);
  }
  
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let desiredMag = desired.mag();
    let speed = this.maxSpeed;
    
    if (desiredMag < 200) {
      speed = map(desiredMag, 0, 200, 0, this.maxSpeed);
    }
    
    desired.limit(speed);
    
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(speed);
    
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
    fill(255, 120);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
