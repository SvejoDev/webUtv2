// hämtar referens till ul-elementet
const countryList = document.getElementById("countryList");

// funktion för att hämta data från api:et
function fetchCountries() {
  // använder fetch för att hämta data från api:et
  fetch("countries-api.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // loopar igenom varje land i datan
      data.forEach(function (country) {
        // skapar ett nytt li-element
        const li = document.createElement("li");
        // lägger till landets namn och befolkning i li-elementet
        li.textContent =
          country.name + ", " + country.population.toLocaleString();
        // lägger till li-elementet i ul-listan
        countryList.appendChild(li);
      });
    })
    .catch(function (error) {
      console.log("ett fel uppstod:", error);
    });
}

// anropar funktionen när sidan laddas
fetchCountries();
