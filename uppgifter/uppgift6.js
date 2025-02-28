function init() {
  createElements();
}

function createElements() {
  let main = document.querySelector("main");

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("Underrubrik");
  h2.appendChild(h2Text);

  main.prepend(h2);

  for (let i = 0; i < 3; i++) {
    let section = document.createElement("section");
    let sectionText = document.createTextNode("Sektion " + (i + 1));
    section.appendChild(sectionText);
    main.appendChild(section);
  }
}

window.addEventListener("load", init);
