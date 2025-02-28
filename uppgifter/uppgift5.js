function init() {
  let elementArray = document.getElementsByTagName("p");

  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].addEventListener("mouseenter", changeBackground);
    elementArray[i].addEventListener("mouseleave", resetBackground);
  }
}

function changeBackground(e) {
  e.currentTarget.style.background = "green";
}

function resetBackground(e) {
  e.currentTarget.style.background = "";
}

window.addEventListener("load", init);
