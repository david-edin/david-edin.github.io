let size = 10;
let circleX = 100;
let circleY = 100;

let bounceSpeed = 4;
let Xspeed = bounceSpeed;
let Yspeed = bounceSpeed+1;

function setup() {
  circleX = width / 2;
  circleY = height / 2;
}

function draw() {
  size = map(mouseX, 0, width, 0, 200);
  let opacity = map(mouseY, 0, height, 0, 255);

  if (circleX > width || circleX < 0) {
    Xspeed = Xspeed * -1;
  }

  if (circleY > height || circleY < 0) {
    Yspeed = Yspeed * -1;
  }

  circleX += Xspeed;
  circleY += Yspeed;
    
  stroke([...strokeColor, opacity]);
  fill(fillColor);
  
  rectMode(CORNERS);
  rect(circleX, circleY, size, size);
}

