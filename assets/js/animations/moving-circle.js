let size = 10;
let circleX = 100;
let circleY = 100;

// let frames = 0;

let bounceSpeed = 4;
let Xspeed = bounceSpeed;
let Yspeed = bounceSpeed;

function setup() {
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

  // frames++;

  // frameRate(4);

  // save("frame.svg");

  // if (frames === 10) {
  //   noLoop();
  // }
}

