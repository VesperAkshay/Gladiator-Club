// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset as needed
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu for mobile devices
const toggleNav = () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Add an event listener to the menu icon (for mobile devices)
document.getElementById('menu-icon').addEventListener('click', toggleNav);
