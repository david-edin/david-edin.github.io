let size = 20;

function draw() {
  orbitControl();

  let varWidth = width / 4;
  let varHeight = height / 4;

  for (let x = -varWidth; x <= varWidth; x += size) {
    for (let y = -varHeight; y <= varHeight; y += size) {
      fill(fillColor);
      stroke(strokeColor);
      circle(x, y, size);
    }
  }
}
