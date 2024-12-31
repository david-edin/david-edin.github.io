const posts = document.getElementsByClassName("post-card");

const thumbnails = document.getElementsByClassName("thumbnail");
const titles = document.getElementsByClassName("round");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

posts.forEach((post, index) => {

  post.addEventListener("mouseover", (e) => {
    changeOpacity(0);
  });

  post.addEventListener("mouseleave", (e) => {
    changeOpacity(1);
  });

  function changeOpacity(num) {
    thumbnails[index].children[0].style.opacity = num.toString();
  }
});

checkPostWidth();

window.addEventListener("resize", checkPostWidth);

function checkPostWidth() {
    posts.forEach((post, index) => {
        
        let postWidth = post.clientWidth;

        if (postWidth < 260) {
            setSize("26px");
        } else if (postWidth < 280) {
            setSize("30px");
        } else if (postWidth < 330) {
            setSize("36px")
        } else if (postWidth < 380) {
            setSize("40px");
        } else if (postWidth < 439) {
            setSize("46px");
        }

        function setSize(size) {
          post.style.fontSize = size;
        }
    });
}

