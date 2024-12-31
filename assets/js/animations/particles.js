let balls = [];
let ballsCount = 30;

function mouseDragged() {
  const speed = map(mouseX, 0, width, 0, 5);
  const radius = map(mouseY, 0, height, 30, 50);

  let newBall = new Ball(mouseX, mouseY, radius, speed);

  if (balls.length > 1000) {
    balls.shift();
  } else {
    balls.push(newBall);
  }
}

function draw() {
  background(0);

  for (let object of balls) {
    object.move();
  }

  if (frameCount % 600 == 0) {
    balls.shift();
  }
}

class Ball {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.Xspeed = speed;
    this.Yspeed = speed;

    this.shape = circle;
  }

  move() {
    if (this.x >= width || this.x <= 0) {
      this.Xspeed = this.Xspeed * -1;
    }

    if (this.y >= height || this.y <= 0) {
      this.Yspeed = this.Yspeed * -1;
    }

    this.x += this.Xspeed;
    this.y += this.Yspeed;

    ellipseMode(CENTER);
    fill(fillColor);
    stroke(strokeColor);
    this.shape(this.x, this.y, this.radius * 2);
  }
}
