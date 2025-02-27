function init () {
    let calcButton = document.getElementById("calcBtn");

    calcButton.addEventListener("click", calcSum);
}

function calcSum () {
    let tal1 = parseInt(document.getElementById("tal1").value);
    let tal2 = parseInt(document.getElementById("tal2").value);
    let sum = tal1 + tal2;

    document.getElementById("resultat").innerHTML = sum;

}

window.addEventListener("load", init)