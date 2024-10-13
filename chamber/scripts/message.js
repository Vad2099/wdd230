// Get the element where the message will be displayed
const visitMessageElement = document.getElementById('visit-message');

// Get the current date in milliseconds
const currentVisitTime = Date.now();

// Check if there is a previous visit time stored in localStorage
const lastVisitTime = localStorage.getItem('lastVisitTime');

// If this is the user's first visit, there won't be a "lastVisitTime" stored
if (!lastVisitTime) {
    visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time difference in milliseconds between the last visit and the current visit
    const timeDifference = currentVisitTime - lastVisitTime;

    // Convert the time difference to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // If the difference is less than one day, display a message welcoming the user back
    if (daysDifference < 1) {
        visitMessageElement.textContent = "Back so soon! Awesome!";
    // If the difference is exactly one day, display "1 day ago"
    } else if (daysDifference === 1) {
        visitMessageElement.textContent = `You last visited 1 day ago.`;
    // Otherwise, display the number of days since the user's last visit
    } else {
        visitMessageElement.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// Store the current visit time in localStorage for future reference
localStorage.setItem('lastVisitTime', currentVisitTime);
