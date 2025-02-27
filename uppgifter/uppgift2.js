function init() {
    let asideElement = document.getElementById("aside")

    asideElement.addEventListener("mouseenter", expandera);
    asideElement.addEventListener("mouseleave" , minimera);
}

function expandera(e) {
    let asideElement = e.currentTarget;

    asideElement.style.width = "auto"
}
function minimera(e) {
    let asideElement = e.currentTarget

    asideElement.style.width = "250px"
}

window.addEventListener("load", init);