const player = document.getElementById("player");
let isplaying = true;

const id = "canvas";

let fillColor;
let strokeColor;

player.addEventListener("click", (e) => {
  isplaying = !isplaying;

  console.log(isplaying);

  if (isplaying === false) {
    player.innerHTML = "Play";
    noLoop();
  } else {
    player.innerHTML = "Pause";
    loop();
  }
});

function setup() {
  const element = document.getElementById(id);

  const width = element.offsetWidth;
  const height = element.offsetHeight;

  console.log(width, height);

  if (!window.location.href.includes("zooming-and-moving")) {
    let canvas = createCanvas(width, height);
    canvas.parent(id);
  } else {
    let canvas = createCanvas(width, height, WEBGL);
    canvas.parent(id);
  }

  fillColor = 4;
  strokeColor = [242, 242, 242];

  loop();
}

const saveButton = document.getElementById("save");

saveButton.addEventListener("click", saveSketch);

function saveSketch() {
  saveCanvas("sketch", "png");
}

function keyTyped() {
  if (key == "s") {
    saveCanvas("sketch", "png");
  }
}



// Convert hex to RGB
function hexToRgb(hex) {
  let r = 0,
      g = 0,
      b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }

  // 6 digits
  if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return [r, g, b];
}



const input_fillColor = document.getElementById("input_fillColor");
const input_strokeColor = document.getElementById("input_strokeColor");

if (input_fillColor) {
  input_fillColor.addEventListener("input", (e) => {
    console.log(e.target.value);

    fillColor = hexToRgb(e.target.value); // Convert hex to RGB
  });
}

if (input_strokeColor) {
  input_strokeColor.addEventListener("input", (e) => {
    console.log(e.target.value);

    strokeColor = hexToRgb(e.target.value); // Convert hex to RGB
  });
}
