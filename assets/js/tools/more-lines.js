let x, y;
let clicked = false;

let yOff = 0;

let strWeight = 10;
let angle = 0;

function draw() {
    if (specialFunction) {
      if (clicked) {
        rotate(random(-5, 5));
      }
    }

    strWeight = map(mouseX, 0, width, 10, 200);

    x = random(0, width);
    y = noise(yOff) * height;

    yOff += 0.1;
    
    if (array.length != 0) {
        for (let dash of array) {
          dash.show();
        }
    }
    
}

function mouseClicked() {
    clicked = !clicked;

    let dash = new Dash(x, y, fillColor, strokeColor);
    array.push(dash);
}

function touchEnded() {
    let dash = new Dash(x, y, fillColor, strokeColor);
    array.push(dash);
}

class Dash {
    constructor(x, y, fill, stroke) {
        this.x = x;
        this.y = y;

        this.otherX = x;
        this.otherY = y + y;
        
        this.fill = fill;
        this.stroke = stroke;
    }

    show() {
        // translate(150, 150);

        // // then rotate the grid around the pivot point by a
        // // number of degrees equal to the frame count of the sketch
        // rotate(radians(frameCount));

        stroke(this.stroke);
        strokeWeight(strWeight);
        line(this.x, this.y, this.otherX, this.otherY);

        stroke(this.fill);
        strokeWeight(strWeight - 2);
        line(this.x, this.y, this.otherX, this.otherY);
    }
}
