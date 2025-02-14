// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//togglefunction(navbar)
document.addEventListener('DOMContentLoaded', () => {
    // Handle dropdown toggle for normal and responsive navigation
    const dropdowns = document.querySelectorAll('.nav-links .dropdown');

    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector('a'); // Assuming the dropdown's anchor is the toggle
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent link navigation
            const isActive = dropdown.classList.contains('active');
            document.querySelectorAll('.nav-links .dropdown.active').forEach((activeDropdown) => {
                activeDropdown.classList.remove('active'); // Close other open dropdowns
            });
            if (!isActive) {
                dropdown.classList.add('active'); // Open current dropdown
            }
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.nav-links .dropdown.active').forEach((activeDropdown) => {
                activeDropdown.classList.remove('active');
            });
        }
    });

    // Handle menu toggle for responsive design
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.top-nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Handle active link for the current page
    const navLinks = document.querySelectorAll(".top-nav ul li a");

    navLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");

            // Check if the active link is inside a dropdown
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const parentToggle = parentDropdown.querySelector('a');
                parentToggle.classList.add("active"); // Add active class to parent heading
            }
        }
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


function validateForm() {
    let isValid = true;

    const fields = ["FirstName", "LastName", "Email", "PhoneNumber"];

    fields.forEach(field => {
        const input = document.getElementById(field);
        const errorSpan = document.getElementById(field + "Error");

        if (!input.value.trim()) {
            input.classList.add("error");
            errorSpan.textContent = `${field.replace(/([A-Z])/g, ' $1')} is required.`;
            isValid = false;
        } else {
            input.classList.remove("error");
            errorSpan.textContent = "";
        }
    });

    return isValid;
}


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









