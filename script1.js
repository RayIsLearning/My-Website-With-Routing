function loadPage(page) {
    // Load Grid Content
    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            document.getElementById('grid-container').innerHTML = html;
            applyGridStyles(); // Reapply grid styles
        })
        .catch(error => console.error('Error loading grid:', error));

    // Load Footer Content
    fetch(`pages/footer-${page}.html`)
        .then(response => {
            if (!response.ok) throw new Error("Footer not found");
            return response.text();
        })
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Update URL without reloading
    window.history.pushState({ page: page }, "", `#${page}`);
}

// Handle back/forward navigation
window.onpopstate = function(event) {
    if (event.state && event.state.page) {
        loadPage(event.state.page);
    }
};

// Load page based on URL on initial load
document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.hash.replace("#", "") || "home";
    loadPage(page);
});

// Function to reload CSS
function reloadCSS() {
    const cssLink = document.querySelector('link[href="homestyle.css"]');
    if (cssLink) {
        cssLink.href = "homestyle.css?v=" + new Date().getTime(); // Force reload
    }
}

// Apply grid styles dynamically after content loads
function applyGridStyles() {
    const grid = document.getElementById('grid-container');
    if (grid) {
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = '1fr 1fr 1fr'; // Ensure 3 columns
        grid.style.gap = '20px';
        grid.style.justifyContent = 'center';
        grid.style.textAlign = 'center';
    }
}

// Ensure content is loaded dynamically
document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.hash.replace("#", "") || "home";
    loadPage(page);
});
