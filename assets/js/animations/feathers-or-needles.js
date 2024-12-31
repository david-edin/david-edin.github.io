let size = 115;

function draw() {
  background(0);
  circleY = map(mouseY, 0, height, height / 2, -height * 0.001);
  size = map(mouseX, 0, width, 75, 215);

  for (let x = 0; x <= width; x += size) {
    for (let y = 0; y <= height; y += size - 20) {
      ellipseMode(CORNERS);

      fill(fillColor);
      stroke(strokeColor);
      arc(x, y, width, circleY, PI / 1.1, PI, CHORD);
    }
  }
}
