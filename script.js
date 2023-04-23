// Get all the links that point to different sections of the page
const links = document.querySelectorAll('a[href^="#"]');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the section that the link points to
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the section with a smooth effect
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

const toggleButton = document.getElementById('toggle-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  toggleButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });