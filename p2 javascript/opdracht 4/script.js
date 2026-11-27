// haal het element "leeftijd" op uit het html document en sla dit op in de variable outputtext
let outputText = document.getElementById("leeftijd");

// Vraag aan de gebruiker d.m.v functie prompt in welke jaar je bent geboren en sla dit op in de varible geboortejaar
let geboortejaar = prompt("in welk jaar ben je geboren?");

// maak de rekensom van het huidige jaar - het geboorte jaar van de gebruiker en sla dit op in de variable leeftijd
let leeftijd = 2026 - Number(geboortejaar);

// pak het elemet outputtext en voeg de text + leeftijd toe aan deze variable
outputText.innerHTML = "je bent ongeveer" + leeftijd + "jaar oud.";

console.log(leeftijd);