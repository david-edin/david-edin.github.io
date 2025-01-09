let strWeight = 10;

function mouseClicked() {
  let dash = new Dash(mouseX, mouseY);
  dash.createPoint();
  array.push(dash);
}

function draw() {
  // background(0);

  strWeight = map(mouseX, 0, width, 20, 40);

  if (array.length != 0) {
    if (mouseIsPressed) {
      for (let dash of array) {
        dash.construct(mouseX, mouseY);
      }
    }
  }
}

class Dash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  createPoint() {
    stroke(strokeColor);
    strokeWeight(1);
    fill(fillColor);

    circle(this.x, this.y, 30);
  }

  construct(x, y) {
    stroke(strokeColor);
    strokeWeight(strWeight);
    line(this.x, this.y, x, y);
    

    stroke(fillColor);
    strokeWeight(strWeight - 2);
    line(this.x, this.y, x, y);

    // stroke(strokeColor);
    // strokeWeight(1);
    // fill(fillColor);
    // circle(this.x, this.y, 30);

    this.x = x;
    this.y = y;
  }
}
