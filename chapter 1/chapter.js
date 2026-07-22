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
    // Close sidebar after click
    // ==========================

    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 768) {
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

                entry.classList.add("fade");

            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {

        observer.observe(section);

    });

});