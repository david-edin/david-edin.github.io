const posts = document.querySelector('.posts');

const masonry = new Masonry(posts, {
  fitWidth: true,
  itemSelector: ".post-card",
  horizontalOrder: true,
  gutter: 10,
});
