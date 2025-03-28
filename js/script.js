// Dynamically inject content based on the page identifier
function loadPage(page) {
  const content = document.getElementById('content');
  if (!content) return;

  switch (page.toLowerCase()) {
    case 'index':
      content.innerHTML = '<h1>We Design</h1>';
      break;
    case 'about-us':
      content.innerHTML = '<h1>About Us</h1>';
      break;
    default:
      content.innerHTML = '<h1>Page Not Found</h1>';
      break;
  }
}

// Load an external HTML template into a specific element
function loadTemplate(url, elementId) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then(data => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data;
      } else {
        console.warn(`Element with ID "${elementId}" not found.`);
      }
    })
    .catch(error => console.error('Error loading template:', error));
}

// Load shared templates across all pages
document.addEventListener("DOMContentLoaded", () => {
  loadTemplate('/templates/menu.html', 'nav');
  loadTemplate('/templates/footer.html', 'footer');
  loadTemplate('/templates/app-menu.html', 'appMenu');
  loadTemplate('/templates/error.html', 'error');
  loadTemplate('/templates/product-display.html', 'productDisplay');
  loadTemplate('/templates/appointment-form.html', 'appointmentForm');
  loadTemplate('/templates/website-questionnaire.html', 'websiteQuestionnaire');
});
