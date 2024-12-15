const id = "moving-circle";

let size;
let circleX = 100;
let circleY = 100;

let bounceSpeed = 4;
let Xspeed = bounceSpeed;
let Yspeed = bounceSpeed;

function setup() {
  const element = document.getElementById(id);
  
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  const canvas = createCanvas(width, height);
  canvas.parent(id);

  background(12, 124, 89);

  circleX = width / 2;
  circleY = height / 2;

}

function draw() {
  size = map(mouseX, 0, width, 0, 200);

  let opacity = map(mouseY, 0, height, 0, 255);

  let fillColor = 4;
  let strokeColor = 222;

  if (circleX > width || circleX < 0) {
    Xspeed = Xspeed * -1;
  }

  if (circleY > height || circleY < 0) {
    Yspeed = Yspeed * -1;
  }

  circleX += Xspeed;
  circleY += Yspeed;
    
  stroke(strokeColor, opacity);
  fill(fillColor);
  circle(circleX, circleY, size);
}

