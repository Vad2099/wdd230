const url = "https://vad2099.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector("article");

// Function to fetch and display the data
async function getMyJson() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data.members); // Calls display function passing the array of members
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

// Display the JSON data onto the web page
const displayResults = (members) => {
    cards.innerHTML = ""; // Clear any existing content
    members.forEach((member) => {
       // 1. Create elements for each card
       let card = document.createElement('section');
       let logo = document.createElement('img');
       let name = document.createElement('h3');
       let address = document.createElement('p'); 
       let phone = document.createElement('p');
       let website = document.createElement('a');
       let membership = document.createElement('p');
       let hour = document.createElement('p');

       // 2. Build the img element
       logo.setAttribute('src', member.image);
       logo.setAttribute('alt', `Logo of ${member.name}`);
       logo.setAttribute('loading', 'lazy');
       logo.setAttribute('width', '120');
       logo.setAttribute('height', '140');

       // 3. Set attributes for the website link
       website.setAttribute('href', member.website);
       website.setAttribute('target', '_blank'); // Open in a new tab

       // 4. Populate content for each element
       name.textContent = member.name;
       address.textContent = `Address: ${member.address}`;
       phone.textContent = `Phone: ${member.phone}`;
       website.textContent =  member.website
       membership.textContent = `Membership Level: ${member.membership}`;
       hour.textContent = `Hours: ${member.hours}`;

       // 5. Append elements to the card (section)
       card.appendChild(logo);
       card.appendChild(name);
       card.appendChild(address);
       card.appendChild(phone);
       card.appendChild(website);
       card.appendChild(membership);
       card.appendChild(hour);

       // 6. Append the card (section) to the #cards div
       cards.appendChild(card);
    });
}

const toggleView = (view) => {
    if (view === 'grid') {
        cards.classList.add("grid");
        cards.classList.remove("list");
        gridButton.classList.add("active-view");  // Activa el botón de grid
        listButton.classList.remove("active-view"); // Desactiva el botón de list
    } else {
        cards.classList.add("list");
        cards.classList.remove("grid");
        listButton.classList.add("active-view");   // Activa el botón de list
        gridButton.classList.remove("active-view"); // Desactiva el botón de grid
    }
}

// Eventos para botones de cambio de vista
gridButton.addEventListener("click", () => toggleView('grid'));
listButton.addEventListener("click", () => toggleView('list'));


// Fetch and display data on page load
getMyJson();
