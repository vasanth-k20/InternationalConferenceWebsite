// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//togglefunction(navbar)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.top-nav ul');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Ensure dropdown menus don't overflow when toggled
    dropdownMenus.forEach(menu => {
        menu.style.position = navMenu.classList.contains('active') ? 'relative' : 'absolute';
    });
});



//for our work portfolio section
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const filterValue = filter.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



// Scroll-to-Top Functionality
document.addEventListener("DOMContentLoaded", function () {
    const toTopButton = document.getElementById("toTop");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            toTopButton.style.display = "block"; 
        } else {
            toTopButton.style.display = "none"; 
        }
    });
    // Smooth scroll to top on click
    toTopButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    });
});









