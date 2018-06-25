let canvas;
let vehicles = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.addClass("canvas");
  
  for (let i = 0; i < 50; i++) {
    vehicles.push(new Vehicle());
  }
}

function draw() {
  background(0, 30);
  
  for (let i = 0; i < vehicles.length; i++) {
    vehicles[i].behavior();
    vehicles[i].update();
    vehicles[i].show();
  }
}
