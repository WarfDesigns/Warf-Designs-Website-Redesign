function loadpage(page) {
    const content = document.getElementById('content');
    if (page === 'index') {
        content.innerHTML = '<h1>We Design</h1>';
    } else if (page === 'About-Us') {
        content.innerHTML = '<h1>About Us</h1>';
    }
}

function loadTemplates(url, elementId) {
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  // Load header and footer
  document.addEventListener("DOMContentLoaded", () => {
    loadTemplate('menu.html', 'nav');
    loadTemplate('footer.html', 'footer');
    loadTemplate('app-menu.html', 'appMenu')
  });