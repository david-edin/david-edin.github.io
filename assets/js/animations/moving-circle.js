let size = 10;
let opacity = 255;

let circleX = 100;
let circleY = 100;

// let frames = 0;

let bounceSpeed = 4;
let Xspeed = bounceSpeed;
let Yspeed = bounceSpeed;

function draw() {
  size = map(mouseX, 0, width, 0, 200);

  opacity = map(mouseY, 0, height, 0, 255);

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

  // frames++;

  // frameRate(4);

  // save("frame.svg");

  // if (frames === 10) {
  //   noLoop();
  // }
}

