// hämtar referens till div-elementet där länderna ska visas
const countriesDiv = document.getElementById("countries");

// funktion för att hämta data från api:et
async function fetchCountries() {
  try {
    // använder fetch för att hämta data från api:et
    const response = await fetch(
      "https://data.egyweb.se/api/getCountry.php?name=s"
    );
    // konverterar svaret till json
    const data = await response.json();

    // loggar datan för att se strukturen
    console.log("API svar:", data);

    // loggar första landet för att se strukturen
    console.log("Första landet:", data[0]);

    // loopar igenom alla länder i svaret
    for (let i = 0; i < data.length; i++) {
      // loggar varje land för att se strukturen
      console.log("Land:", data[i]);

      // skapar ett nytt p-element för varje land
      const p = document.createElement("p");
      // sätter texten för varje land med namn och population
      // använder Name istället för Country som egenskapsnamn
      p.textContent = data[i].Name + " har " + data[i].Population + " invånare";
      // lägger till p-elementet i div:en
      countriesDiv.appendChild(p);
    }
  } catch (error) {
    // loggar eventuella fel
    console.error("Ett fel uppstod:", error);
  }
}

// anropar funktionen när sidan laddas
fetchCountries();
