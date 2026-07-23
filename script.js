// ===============================
// Pencil Beats Main Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const welcomeScreen = document.getElementById("welcomeScreen");
    const homePage = document.getElementById("homePage");
    const backButton = document.getElementById("backButton");


    // ===============================
    // Welcome Screen
    // ===============================

    if (welcomeScreen && homePage) {


        if (sessionStorage.getItem("pencilBeatsEntered")) {

            welcomeScreen.style.display = "none";
            homePage.style.display = "block";

        } 
        else {

            welcomeScreen.style.display = "flex";
            homePage.style.display = "none";


            welcomeScreen.onclick = function () {

                welcomeScreen.style.display = "none";
                homePage.style.display = "block";

                sessionStorage.setItem(
                    "pencilBeatsEntered",
                    "true"
                );

            };

        }

    }



    // ===============================
    // Back Button
    // ===============================

    if (backButton) {

        backButton.onclick = function () {

            window.history.back();

        };

    }



    // ===============================
    // Chapter Card Hover
    // ===============================

    const cards = document.querySelectorAll(".chapter-card");


    cards.forEach(card => {

        card.addEventListener("mouseenter", function(){

            card.style.transform="translateY(-5px)";

        });


        card.addEventListener("mouseleave", function(){

            card.style.transform="translateY(0)";

        });

    });


});