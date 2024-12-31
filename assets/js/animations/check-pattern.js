let limit = 50;

function draw() {
  let size1 = map(mouseX, 0, width, 20, limit);
  let size2 = map(mouseX, 0, width, limit, 20);

  for (i = 0; i <= width; i += map(mouseY, 0, height, 10, 40)) {
    circle(mouseX, i, size1);
    circle(mouseX + 50, i, size1);
    circle(mouseX - 50, i, size2);
    circle(i, mouseY, size2);
    circle(i + 40, mouseY + 100, size1);
    circle(mouseY, i, size2);
    circle(mouseY - 50, i, size2);
    circle(mouseY + 75, i + 30, size1);
    circle(mouseY, i + 45, size2);
    circle(mouseY - 20, i + 145, size1);
    circle(mouseY + 20, i + 45, size1);
    circle(i + 75, mouseY, size2);
    circle(i + 25, mouseX + 24, size2);
    circle(i + 75, mouseY, size1);
    circle(i + 45, mouseX - 55, size1);
    circle(mouseY, i - 45, size2);
    circle(i - 75, mouseX, size1);
    circle(i - 25, mouseX + 100, size2);
    circle(i - 105, mouseX, size2);
    circle(i - 145, mouseY - 30, size1);

    fill(fillColor);
    stroke(strokeColor);
  }
}
