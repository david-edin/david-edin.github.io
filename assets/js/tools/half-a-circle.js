let size = 75;
let clicked = false;

function draw() {
  circleX = map(mouseX, 0, width, width, 0);

  for (let x = 0; x <= width + 100; x += size) {
    for (let y = 0; y <= height + 100; y += size) {
      ellipseMode(CORNERS);

      if (clicked === true) {
        arc(x, y, circleX, circleX, PI, 0, CHORD);
      }
      arc(x, y, circleX, circleX, 0, PI, CHORD);

      fill(fillColor);
      stroke(strokeColor);
    }
  }
}

function mousePressed() {
  if (mouseButton === "left") {
    clicked = !clicked;
  }
}
