// ===============================
// Pencil Beats
// script.js
// ===============================

// Select elements
const welcomeScreen = document.getElementById("welcomeScreen");
const homePage = document.getElementById("homePage");

// When user clicks anywhere on the welcome screen
welcomeScreen.addEventListener("click", () => {

    // Fade out the welcome screen
    welcomeScreen.style.opacity = "0";

    // Wait for the fade animation to finish
    setTimeout(() => {

        // Hide the welcome screen completely
        welcomeScreen.style.display = "none";

        // Show the home page
        homePage.style.display = "block";

    }, 800);

});
