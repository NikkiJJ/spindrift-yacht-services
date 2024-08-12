// load-content.js

// Function to load HTML content into a specified element
function loadContent(url, elementId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
}

// Load the navbar and footer
document.addEventListener('DOMContentLoaded', function() {
  loadContent('navbar.html', 'navbar');
  loadContent('footer.html', 'footer');
});
