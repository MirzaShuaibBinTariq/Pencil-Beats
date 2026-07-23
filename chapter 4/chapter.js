/* ==========================================
   PENCIL BEATS - Chapter JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {


    // ==========================
    // Mobile Sidebar Toggle
    // ==========================

    const menuBtn = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");


    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", () => {

            sidebar.classList.toggle("active");

        });

    }



    // ==========================
    // SAVE & RESTORE SIDEBAR POSITION
    // ==========================

    if (sidebar) {


        // Restore saved position after page loads

        window.addEventListener("load", () => {

            const savedPosition = sessionStorage.getItem("sidebarScrollPosition");


            if (savedPosition !== null) {

                sidebar.scrollTop = savedPosition;

            }

        });



        // Save position before opening another topic

        const sidebarLinks = sidebar.querySelectorAll("a");


        sidebarLinks.forEach(link => {


            link.addEventListener("click", () => {


                sessionStorage.setItem(
                    "sidebarScrollPosition",
                    sidebar.scrollTop
                );


            });


        });


    }




    // ==========================
    // Close Sidebar After Click (Mobile)
    // ==========================

    const links = document.querySelectorAll(".sidebar a");


    links.forEach(link => {


        link.addEventListener("click", () => {


            if (window.innerWidth <= 768 && sidebar) {

                sidebar.classList.remove("active");

            }


        });


    });





    // ==========================
    // Active Page Highlight
    // ==========================

    const currentPage = window.location.pathname.split("/").pop();


    links.forEach(link => {


        const href = link.getAttribute("href");


        if (href === currentPage) {

            link.classList.add("active");

        }


    });





    // ==========================
    // Fade-in Sections
    // ==========================

    const sections = document.querySelectorAll(".section");


    const observer = new IntersectionObserver(entries => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {

                entry.target.classList.add("fade");

            }


        });


    }, {

        threshold:0.15

    });



    sections.forEach(section => {

        observer.observe(section);

    });



});
