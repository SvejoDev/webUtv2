function init() {
  let elementArray = document.getElementsByTagName("p");

  for (let i = 0; i < elementArray.length; i++) {
    elementArray[i].addEventListener("mouseenter", (e) => {
      e.currentTarget.style.background = "gray";
    });
    elementArray[i].addEventListener("mouseleave", (e) => {
      e.currentTarget.style.background = "";
    });
  }
}

window.addEventListener("load", init);
