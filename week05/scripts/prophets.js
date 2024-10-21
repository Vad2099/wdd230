const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Function to fetch and display prophet data
async function GetProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets); // Calls display function passing the array of prophets
    }
}

// Function to display the prophets in the HTML
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // 1. Create elements to add to the #cards div
      let card = document.createElement('section'); // Create a section element
      let fullName = document.createElement('h2');  // Create an h2 element for the prophet's name
      let portrait = document.createElement('img'); // Create an img element for the prophet's portrait
      
      // 2. Create elements for birth and death dates
      let birthDate = document.createElement('p'); // Create a p element for the birth date
      let deathDate = document.createElement('p'); // Create a p element for the death date (if applicable)

      // 3. Populate the h2 with the prophet's full name
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Construct full name (ensure data matches structure)
      
      // 4. Populate birth and death dates
      birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
      
      // Check if the prophet is deceased, if yes, show the death date
      if (prophet.death) {
        deathDate.textContent = `Date of Death: ${prophet.death}`;
      } else {
        deathDate.textContent = `Still alive`; // Optional message if no death date
      }

      // 5. Build the img element by setting the attributes
      portrait.setAttribute('src', prophet.imageurl); // Set the image source
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // Use full name in the alt text
      portrait.setAttribute('loading', 'lazy'); // Set lazy loading
      portrait.setAttribute('width', '340');    // Set width of the image
      portrait.setAttribute('height', '440');   // Set height of the image
  
      // 6. Append h2, birth and death dates, and img to the section (card)
      card.appendChild(fullName);   // Add the name (h2) to the card
      card.appendChild(birthDate);  // Add the birth date (p) to the card
      card.appendChild(deathDate);  // Add the death date (p) to the card
      card.appendChild(portrait);   // Add the portrait (img) to the card
  
      // 7. Append the card (section) to the #cards div
      cards.appendChild(card);      // Add the complete card to the page
    });
}

// Call the function to fetch and display data
GetProphetData(url);
