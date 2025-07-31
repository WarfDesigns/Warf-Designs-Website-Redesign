
// This function loads a specific page content into the 'content' element
function loadPage(page) {
  const content = document.getElementById('content');
  if (!content) return;

  document.querySelectorAll('.HostingLogin').forEach(HostingLogin => {HostingLogin.style.display = 'none';
  });
  
  switch (page.toLowerCase()) {
    case 'index':
      content.innerHTML = '<h1>We Design</h1>';
      document.getElementById('HostingLogin').style.display = 'block';
      break;
    case 'website-hosting':
      content.innerHTML = '<h1>Website Hosting</h1>';
      document.getElementById('HostingLogin').style.display = 'block';
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
  loadTemplate('/templates/contact.html', 'contact');
  loadTemplate('/templates/header.html', 'header')
});

//This function loads more videos when the button is clicked
const videos = "Q-8yeKt1ULU,fKqzXpnBDZc,aTNzEcOokZc,D0t36FouM7M,GzP5RCDAgrI,z7X6Gq2ZC1k,A1Ut3-ANOvY,P4ABCX63pFQ".split(",");
  let loaded = 0;
  const step = 4;
  const section = document.getElementById("load-more-videos");
  const btn = document.getElementById("load-more-videos");

  function loadVideos() {
    const next = videos.slice(loaded, loaded + step);
    next.forEach((id, i) => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${id}?mute=1&loop=1&playlist=${id}` + (loaded === 0 && i === 0 ? "&autoplay=1" : "");
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.frameBorder = 0;
      iframe.style.marginBottom = "30px";
      container.appendChild(iframe);
    });
    loaded += step;
    if (loaded >= videos.length) btn.style.display = "none";
  }

  btn.addEventListener("click", loadVideos);
  loadVideos();

        async function loadRepos() {
            const endpoint = "https://api.github.com/users/warfdesigns/repos";
            const container = document.getElementById("projects-container");

            try {
                const response = await fetch(endpoint);
                const repos = await response.json();

                if (!Array.isArray(repos)) {
                    container.innerHTML = "<p>Sorry! We can't find the projects! Please try again later. :-)</p>";
                    return;
                }

                container.innerHTML = "";

                repos
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) 
                    .forEach(repo => {
                        const card = document.createElement("div");
                        card.className = "repo-card";
                        card.innerHTML = `
                            <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
                            <p>${repo.description || "No description provided."}</p>
                            <p class="repo-meta">🍴 ${repo.forks_count}</p>
                        `;
                        container.appendChild(card);
                    });
            } catch (error) {
                console.error("Error loading repositories:", error);
                container.innerHTML = "<p>Error loading projects.</p>";
            }
        }

        loadRepos();