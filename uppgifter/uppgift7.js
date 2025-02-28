function init() {
  // lägger till click event listeners på alla relevanta element
  document.querySelector("header").addEventListener("click", addH2);
  document.querySelector("main section").addEventListener("click", addH3);
  document.querySelector("footer").addEventListener("click", addParagraphs);
}

function addH2() {
  // kontrollerar om h2 redan finns för att undvika duplicering
  if (!document.querySelector("header h2")) {
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("Ny huvudrubrik");
    h2.appendChild(h2Text);
    document.querySelector("header").appendChild(h2);
  }
}

function addH3() {
  // kontrollerar om h3 redan finns för att undvika duplicering
  if (!document.querySelector("main section h3")) {
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("Underrubrik");
    h3.appendChild(h3Text);
    document.querySelector("main section").appendChild(h3);
  }
}

function addParagraphs() {
  // lägger till p-element i footer sections om de inte redan finns
  let sections = document.querySelectorAll("footer section");
  sections.forEach((section, index) => {
    if (!section.querySelector("p")) {
      let p = document.createElement("p");
      let pText = document.createTextNode("Paragraf " + (index + 1));
      p.appendChild(pText);
      section.appendChild(p);
    }
  });
}

window.addEventListener("load", init);
