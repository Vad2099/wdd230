// Get the element where the visit counter will be displayed
const visitCountElement = document.getElementById('visitCount');

// Retrieve the visit count stored in localStorage
let visitCount = localStorage.getItem('visitCount');

// If there's no visit count in localStorage, initialize it to 0
if (!visitCount) {
    visitCount = 0;
} else {
    // If visit count exists, convert the stored string to a number
    visitCount = parseInt(visitCount);
}

// Increment the visit count by 1
visitCount++;

// Store the new visit count in localStorage
localStorage.setItem('visitCount', visitCount);

// Display the updated visit count in the HTML element
visitCountElement.textContent = visitCount;
