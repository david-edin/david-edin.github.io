// const player = document.getElementById("player");

// player.addEventListener("click", (e) => {
//   isplaying = !isplaying;

//     if (isplaying === true) {
//         loop();
//         player.innerHTML = "Pause";
//     } else {
//         noLoop();
//         player.innerHTML = "Start";
//     }
// });

const posts = document.querySelector('.posts');

const masonry = new Masonry(posts, {
  fitWidth: true,
  itemSelector: ".post-card",
  horizontalOrder: true,
  gutter: 10,
});

