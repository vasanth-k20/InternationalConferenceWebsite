// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//togglefunction(navbar)

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});


// Scroll-to-Top Functionality
document.addEventListener("DOMContentLoaded", function () {
    const toTopButton = document.getElementById("toTop");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            toTopButton.style.display = "block"; // Show button
        } else {
            toTopButton.style.display = "none"; // Hide button
        }
    });

    // Smooth scroll to top on click
    toTopButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll
        });
    });
});


//for countrycode
document.getElementById('country-code').addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex].text;
    document.getElementById('contact-number').placeholder = selectedOption;
});


//for testimonal curosel
$(document).ready(function () {
    $("#owl-demo2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        animateOut: 'fadeOut'
    });
});
