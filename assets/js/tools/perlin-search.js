let xOff = 0;
let xOff2 = 10;

let radius = 2;

let x, y;

function draw() {
  radius = map(mouseX, 0, width, 2, 40);

  x = map(noise(xOff), 0, 1, 0, width);
  y = map(noise(xOff2), 0, 1, 0, height);

  xOff += 0.01;
  xOff2 += 0.01;

  fill(fillColor);
  stroke(strokeColor);
  circle(x, y, radius * 2);
}
