let size = 10;
let squareX = 100;
let squareY = 100;

let bounceSpeed = 4;
let Xspeed = bounceSpeed;
let Yspeed = bounceSpeed;

function draw() {
  size = map(mouseX, 0, width, 0, 200);

  let opacity = map(mouseY, 0, height, 0, 255);

  if (squareX > width || squareX < 0) {
    Xspeed = Xspeed * -1;
  }

  if (squareY > height || squareY < 0) {
    Yspeed = Yspeed * -1;
  }

  squareX += Xspeed;
  squareY += Yspeed;
    
  stroke([...strokeColor, opacity]);
  fill(fillColor);
  square(squareX, squareY, size);
}

