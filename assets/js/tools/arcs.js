let size = 75;
let clicked = false;

let circleX,
    userX;

function draw() {
  circleX = map(mouseY, 0, height, width, -width);
  userX = map(mouseX, 0, width, -2000, width);

  for (let x = 0; x <= width + 100; x += size) {
    for (let y = 0; y <= height + 100; y += size) {
      ellipseMode(CORNERS);

      if (clicked === true) {
        arc(x + userX, y, circleX, circleX, PI, 0, CHORD);
      }

      rotate(22)
      arc(x + userX, y, circleX, circleX, 0, PI, CHORD);

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
