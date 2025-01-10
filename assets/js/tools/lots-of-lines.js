let strWeight = 10;

function mousePressed() {
  let dash = new Dash(mouseX, mouseY, fillColor, strokeColor);
  array.push(dash);
}

function touchEnded() {
  let dash = new Dash(mouseX, mouseY, fillColor, strokeColor);
  array.push(dash);
}

function draw() {
  background(0);

  strWeight = map(mouseX, 0, width, 10, 100);

  if (array.length != 0) {
    for (let dash of array) {
      dash.construct(mouseX, mouseY);
    }
  }
}

class Dash {
  constructor(x, y, fill, stroke) {
    this.x = x;
    this.y = y;

    this.fill = fill;
    this.stroke = stroke;
  }

  construct(x, y) {
    stroke(this.stroke);
    strokeWeight(strWeight);
    line(this.x, this.y, x, y);

    stroke(this.fill);
    strokeWeight(strWeight - 2);
    line(this.x, this.y, x, y);
  }
}
