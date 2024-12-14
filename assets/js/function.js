const player = document.getElementById("player");

player.addEventListener("click", (e) => {
  isplaying = !isplaying;

    if (isplaying === true) {
        loop();
        player.innerHTML = "Pause";
    } else {
        noLoop();
        player.innerHTML = "Start";
    }
});

