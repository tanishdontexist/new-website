var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
  document.body.classList.toggle("navbar-open");
});

// Select the navbar element
const navbar = document.getElementById('navbar');

// Define the scroll threshold
const scrollThreshold = 0;

// Function to handle scroll event
function handleScroll() {
  // Check if scroll position is greater than the threshold
  if (window.pageYOffset > scrollThreshold) {
    // Add a class to the navbar
    navbar.classList.add('scrolled');
  } else {
    // Remove the class if scroll position is less than the threshold
    navbar.classList.remove('scrolled');
  }
}

// Attach the event listener to the scroll event
window.addEventListener('scroll', handleScroll);
