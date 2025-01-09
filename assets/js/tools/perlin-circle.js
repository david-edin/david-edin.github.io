let xOff = 0;
let radius = 25;

function draw() {
  x = map(noise(xOff), 0, 1, 0, width);

  xOff += 0.01;

  fill(fillColor);
  stroke(strokeColor);
  circle(x, mouseY, radius * 2);
}
