menuClicked = false;

document.querySelector("#menuButton").addEventListener("click", function() {
  let hideMe = document.querySelectorAll(".hideMe");
  if (menuClicked === false) {
    list = document.querySelectorAll(".menuHide");

    hideMe.forEach(element => {
      element.classList.add("hideElement");
      element.classList.remove("showElement");
    });

    showMenu();
    menuClicked = true;
  } else {
    menuClicked = false;
    hideMenu();
    hideMe.forEach(element => {
      element.classList.remove("hideElement");
      element.classList.add("showElement");
    });
    //document.querySelector(".").classList.remove("hideElement");
  }
});

function showMenu() {
  anime({
    targets: ".menuHide",

    translateX: {
      value: 1000,
      duration: 4000
    },
    scale: 4,

    translateY: {
      value: function(el, i) {
        return i * 40;
      }
    },
    delay: function(el, i) {
      return i * 100;
    }
  });
}

function hideMenu() {
  anime({
    targets: ".menuHide",

    delay: function(el, i) {
      return i * 100;
    },

    translateX: {
      value: -250,
      duration: 4000
    },
    translateY: {
      value: function(el, i) {
        return i * 80;
      }
    }
  });
}
