


// Function to get spotlight members
function getSpotlightMembers() {
    const silverGoldMembers = data.members.filter(member => member.membership === "Silver" || member.membership === "Gold");
    const shuffledMembers = silverGoldMembers.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, 3); // Get 2-3 random members
}

// Function to display spotlight members on the webpage
function displaySpotlightMembers() {
    const spotlightContainer = document.querySelector('.card:nth-of-type(4)'); // Adjust to the correct section
    const members = getSpotlightMembers();

    members.forEach(member => {
        const spotlightDiv = document.createElement('div');
        spotlightDiv.classList.add('spotlight');
        spotlightDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.hours}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank" class="spot-button">Visit Website</a>
            <img src="${member.image}" alt="${member.name}" />
        `;
        spotlightContainer.appendChild(spotlightDiv);
    });
}

// Function to show the banner on specific days
function showBanner() {
    const today = new Date();
    const day = today.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday

    if (day >= 1 && day <= 3) { // Monday, Tuesday, Wednesday
        const banner = document.createElement('div');
        banner.classList.add('banner');
        banner.innerHTML = `
            <p>Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 PM!</p>
            <button id="closeBanner">❌</button>
        `;
        document.body.prepend(banner);

        // Add event listener to close the banner
        document.getElementById('closeBanner').addEventListener('click', () => {
            banner.style.display = 'none';
        });
    }
}

// Call functions to display spotlight members and show the banner
displaySpotlightMembers();
showBanner();
