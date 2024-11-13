// Function to load HTML content into a specified element
function loadContent(url, elementId, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback(); // Run callback if provided
    })
    .catch(error => console.error('Error loading content:', error));
}

// Load the navbar and footer
document.addEventListener('DOMContentLoaded', function() {
  // Load navbar, then add the event listener for the toggle button
  loadContent('navbar.html', 'navbar', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      navbarToggler.addEventListener('click', function() {
        const navbarNav = document.getElementById('navbarNav');
        navbarNav.style.display = navbarNav.style.display === 'block' ? 'none' : 'block';
      });
    }
  });

  // Load footer without needing a callback
  loadContent('footer.html', 'footer');
});
