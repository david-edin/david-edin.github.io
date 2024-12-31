const player = document.getElementById("player");
let isplaying = true;

const id = "canvas";

let fillColor = 4;
let strokeColor = 222;

player.addEventListener("click", (e) => {
  isplaying = !isplaying;

  console.log(player, isplaying);

  if (isplaying === false) {
    player.innerHTML = "Start";
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

  loop();
}