// funktion som körs när sidan har laddats
function init() {
  // läser in alla li-element och konverterar till array
  let menuItems = Array.from(document.getElementsByTagName("li"));

  // skapar händelselyssnare för varje menyalternativ
  menuItems.forEach((item) => {
    // när musen går över elementet
    item.addEventListener("mouseover", function (e) {
      e.currentTarget.style.background = "green";
    });

    // när musen lämnar elementet
    item.addEventListener("mouseout", function (e) {
      e.currentTarget.style.background = "";
    });
  });
}

// lägger till händelselyssnare som körs när sidan laddats
window.addEventListener("load", init);
