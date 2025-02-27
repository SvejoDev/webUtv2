function init () {
    let form = document.getElementById("form")

    form.addEventListener('submit', validateForm);
}

function validateForm(e) {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("passwordConf").value;

    if (username.trim() === "") {
    alert('Användarnamn får inte vara tomt');
    e.preventDefault();
    return;
}

if (password.trim() === "") {
    alert('Användarnamn får inte vara tomt');
    e.preventDefault();
    return;
}

if (confirmPassword.trim() === "") {
    alert('Användarnamn får inte vara tomt');
    e.preventDefault();
    return;
}

if (password !== confirmPassword) {
    alert('Lösen matchar ej');
    e.preventDefault();
    return;
}

}




window.addEventListener("load", init);