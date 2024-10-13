// Dynamically populate the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

