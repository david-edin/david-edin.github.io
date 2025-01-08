// Info button
const info = document.getElementById("info");
const pageText = document.querySelector(".page-text");

info.addEventListener("click", (e) => {
  pageText.classList.toggle("display-none");
});

// Reset button 
const reset = document.getElementById("reset");

reset.addEventListener("click", (e) => {
  console.log("reset");
  clear();

  if (window.location.href.includes("particles")) {
    bubbles = [];
  }
});

// Play button
const player = document.getElementById("player");
let isplaying = true;

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

// Save button
function saveSketch() {
  saveCanvas("sketch", "png");
}

const saveButton = document.getElementById("save");

saveButton.addEventListener("click", saveSketch);

function keyTyped() {
  if (key == "s") {
    saveSketch();
  }
}

// Display canvas and define fill and stroke color
const id = "canvas";

let fillColor;
let strokeColor;

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

// Change color input value
const input_fillColor = document.getElementById("input_fillColor");
const input_strokeColor = document.getElementById("input_strokeColor");

if (input_fillColor) {
  input_fillColor.addEventListener("input", (e) => {
    console.log(e.target.value);

    fillColor = hexToRgb(e.target.value); // Convert hex to RGB
    localStorage.setItem("fill", e.target.value);
  });
}

if (input_strokeColor) {
  input_strokeColor.addEventListener("input", (e) => {
    console.log(e.target.value);

    strokeColor = hexToRgb(e.target.value); // Convert hex to RGB
    localStorage.setItem("stroke", e.target.value);
  });
}

let savedFill,
    savedStroke;

window.addEventListener("load", (e) => {
  savedFill = localStorage.getItem("fill");
  savedStroke = localStorage.getItem("stroke");

  if (savedFill || savedStroke) {
    getLocalStorage();
  }
});

function getLocalStorage() {
  input_fillColor.value = savedFill;
  input_strokeColor.value = savedStroke;

  fillColor = hexToRgb(savedFill);
  strokeColor = hexToRgb(savedStroke);
}
