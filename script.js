// =========================
// Pencil Beats - Version 2
// =========================

const welcomeScreen = document.getElementById("welcomeScreen");
const homePage = document.getElementById("homePage");
const backButton = document.getElementById("backButton");

// Hide Home Page on first load
homePage.style.display = "none";

// =========================
// Open Home Page
// =========================

welcomeScreen.addEventListener("click", () => {

    welcomeScreen.style.opacity = "0";

    setTimeout(() => {

        welcomeScreen.style.display = "none";
        homePage.style.display = "block";

    }, 800);

});

// =========================
// Return to Welcome Screen
// =========================

backButton.addEventListener("click", () => {

    homePage.style.display = "none";

    welcomeScreen.style.display = "flex";

    welcomeScreen.style.opacity = "1";

});