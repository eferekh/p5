let canvas;
let vehicle;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.addClass("canvas");
  
  vehicle = new Vehicle();
}

function draw() {
  background(0);
  
  vehicle.behavior();
  vehicle.update();
  vehicle.show();
}
