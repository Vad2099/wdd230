const url = "https://vad2099.github.io/wdd230/chamber/data/members.json";

// Function to fetch and display the data
async function getMembersJson() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displaySpotlightMembers(data.members); // Pass the members array to the display function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Function to get spotlight members
function getSpotlightMembers(members) {
    const silverGoldMembers = members.filter(member => 
        member.membership === "Silver" || member.membership === "Gold"
    );
    // Shuffle the array
    const shuffledMembers = silverGoldMembers.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, 3); // Get 2-3 random members
}

// Function to display spotlight members on the webpage
function displaySpotlightMembers(members) {
    const spotlightContainer = document.querySelector('.spotlight-container'); // Targeting the spotlight container
    spotlightContainer.innerHTML = ''; // Clear any existing content
    const selectedMembers = getSpotlightMembers(members); // Get spotlight members

    selectedMembers.forEach(member => {
        // Create a section for each member
        const spotlightDiv = document.createElement('div');
        spotlightDiv.classList.add('spotlight');
        spotlightDiv.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.hours}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank" class="spot-button">Visit Website</a>
            <img src="${member.image}" alt="${member.name}" loading="lazy" width="120" height="140"/>
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

// Call the functions to get the member data and display the banner
getMembersJson();
showBanner();
