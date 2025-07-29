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

//This function loads a template from a given URL and inserts it into an element with the specified ID
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

// Load templates when the DOM is fully loaded
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


document.getElementById("Form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting by default

  const nameInput = document.getElementById("Name");
  const phoneInput = document.getElementById("Phone");
  const nameError = document.getElementById("NameError");
  const phoneError = document.getElementById("PhoneError");
  // Name pattern: letters and spaces only
  // Example: John Doe or Jane Smith
  const namePattern = /^[A-Za-z\s]+$/;
  // Phone number pattern: 10 digits, no spaces or special characters
  // Example: 1234567890 or 1234567890
  const phonePattern = /^\d{3}\d{3}\d{4}$/;

  let valid = true;

  // Validate the name of the customer.
  if (!namePattern.test(nameInput.value.trim())) {
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate phone of the customer.
  if (!phonePattern.test(phoneInput.value.trim())) {
    phoneError.style.display = "block";
    valid = false;
  } else {
    phoneError.style.display = "none";
  }

  // If all inputs are valid, this will allow the form to submit
  if (valid) {
    //Re-directs customers to the thank you page.
    window.location.href = "/pages/Thank-You.html";
  }
});
