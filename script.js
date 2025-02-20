// BURGER MENU 
function toggleMenu() {
    const menu = document.getElementById("menu"); //Henter elementer fra min html og definerer dem i const
    const menuKnap = document.querySelector(".menu-knap"); //Henter elementer fra min html og definerer dem i const
    menu.classList.toggle("vis"); // Tilføjer/fjerner "vis"-klassen, altså toggle fungerer som en stikkontakt
    menuKnap.classList.toggle("aktiv"); // Tilføjer/udskifter "aktiv"-klassen
}

// Scroll funktion
function scrollTilSektion() {
    document.querySelector(".introduktion").scrollIntoView({ //Henter min class 'introduktion' fra min html vha. queryselector
        behavior: 'smooth' //Styler transitionen, så den er smooth
    });
}