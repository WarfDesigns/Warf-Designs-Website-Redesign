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
    case 'contact-us':
      content.innerHTML = '<h1>Contact Us</h1>';
      break;
    default:
      content.innerHTML = '<h1>Page Not Found</h1>';
      break;
  }
}

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

document.addEventListener("DOMContentLoaded", () => {
  loadTemplate('/templates/menu.html', 'nav');
  loadTemplate('/templates/footer.html', 'footer');
  loadTemplate('/templates/app-menu.html', 'appMenu');
  loadTemplate('/templates/error.html', 'error');
  loadTemplate('/templates/product-display.html', 'productDisplay');
  loadTemplate('/templates/appointment-form.html', 'appointmentForm');
  loadTemplate('/templates/website-questionnaire.html', 'websiteQuestionnaire');
  loadTemplate('/templates/contact.html', 'contact');
  loadTemplate('/templates/header.html', 'header')
});


document.getElementById("myForm").addEventListener("submit", function (e) {
  const nameInput = document.getElementById("Name");
  const error = document.getElementById("nameError");
  const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(nameInput.value.trim())) {
    e.preventDefault(); 
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});