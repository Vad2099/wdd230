const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navElements = document.querySelector('#animated');

// Toggle the hamburger menu when the button is clicked
hamburgerBtn.addEventListener('click', () => {
    navElements.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
});

const darkBtn = document.querySelector('#darkBtn');
const lightBtn = document.querySelector('#lightBtn');
const body = document.querySelector('body'); // Apply dark mode to the body

// Function to update the visibility of the dark and light mode buttons
function updateButtons() {
    if (body.classList.contains('dark')) {
        // Hide dark mode button and show light mode button when in dark mode
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'inline-block';
    } else {
        // Show dark mode button and hide light mode button when in light mode
        darkBtn.style.display = 'inline-block';
        lightBtn.style.display = 'none';
    }
}

// Event listener to activate dark mode
darkBtn.addEventListener('click', () => {
    body.classList.add('dark'); // Add 'dark' class to switch to dark mode on the entire body
    updateButtons(); // Update the button visibility
});

// Event listener to activate light mode
lightBtn.addEventListener('click', () => {
    body.classList.remove('dark'); // Remove 'dark' class to switch to light mode on the entire body
    updateButtons(); // Update the button visibility
});

// Initialize the button visibility on page load
updateButtons(); // Ensure the correct button is shown based on the mode

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
