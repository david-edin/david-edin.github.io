let images1 = Macy({
  container: ".grid-1",
  trueOrder: false,
  waitForImages: true,
  margin: 10,
  columns: 3,
  breakAt: {
    520: 2,
    400: 1,
  },
});

let images2 = Macy({
  container: ".grid-2",
  trueOrder: false,
  waitForImages: true,
  margin: 10,
  columns: 2,
  breakAt: {
    400: 1,
  },
});
