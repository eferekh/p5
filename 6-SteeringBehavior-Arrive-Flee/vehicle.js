class Vehicle {
  constructor() {
    this.target = createVector(width / 2, height / 2);
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    
    this.maxSpeed = 10;
    this.maxForce = 1;
    
    this.size = 30;
  }
  
  behaviors() {
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);
    
    arrive.mult(1);
    flee.mult(10);
    
    this.applyForce(arrive);
    this.applyForce(flee);
  }
  
  flee(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let desiredMag = desired.mag();
    
    if (desiredMag < 100) {
      desired.limit(this.maxSpeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      let emptyVector = createVector(0, 0);
      return emptyVector;
    }
  }
  
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let desiredMag = desired.mag();
    let speed = this.maxSpeed;
    
    if (desiredMag < 100) {
      speed = map(desiredMag, 0, 100, 0, this.maxSpeed);
    }
    
    desired.limit(speed);
    
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    
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
    noStroke();
    fill(255, 255);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
