menuClicked = false;

document.querySelector("#menuButton").addEventListener("click", function() {
  if (menuClicked === false) {
    list = document.querySelectorAll(".menuHide");
    draperi = document.querySelector(".draperi");
    draperi.classList.add("draperiCover");
    yo();
    /* list.forEach(li => {
      li.classList.add("menuShow");
      li.classList.remove("menuHide");
    }); */

    menuClicked = true;
  } else {
    /* let listhide = document.querySelectorAll(".menuShow"); */

    /* listhide.forEach(li => {
      li.classList.add("menuHide");
      li.classList.remove("menuShow");
    }); */

    draperi.classList.remove("draperiCover");
    menuClicked = false;
  }
});

function yo() {
  anime({
    targets: ".menuHide",
    delay: function(el, i) {
      i * 40;
    },
    translateX: {
      value: 250,
      duration: 800
    },

    translateY: {
      value: function(el, i) {
        return i * 80;
      }
    },

    delay: 250 // All properties except 'scale' inherit 250ms delay
  });
}
