const player = document.getElementById("player");
let isplaying = true;

const id = "canvas";

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

  let canvas = createCanvas(width, height);
  canvas.parent(id);

  loop();
}