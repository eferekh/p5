class Vehicle {
  constructor() {
    this.target = createVector(width / 2, height / 2);
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    
    this.maxSpeed = 5;
    
    this.size = random(5, 30);
    
    this.red = random(100, 255);
    this.green = random(0, 255);
    this.blue = random(100, 255);
    this.alpha = 255;
  }
  
  show() {
    noFill();
    stroke(this.red, this.green, this.blue, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  
  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let desiredMag = desired.mag();
    let speed = 10;
    
    if (desiredMag < 200) {
      speed = map(desiredMag, 0, 200, 0, this.maxSpeed);
    }
    
    desired.limit(speed);
    
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(speed);
    
    return steer;
  }
  
  behavior() {
    let steer = this.arrive(this.target);
    this.applyForce(steer);
  }
}
