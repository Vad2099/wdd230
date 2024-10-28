const eventsURL = "https://vad2099.github.io/wdd230/chamber/data/events.json";
const eventsContainer = document.querySelector('#events');


// Function to fetch and display the data
async function getEventsJson() {
    try {
        const response = await fetch(eventsURL);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayEvents(data.events); // Calls display function passing the array of members
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

// Display the JSON data onto the web page
const displayEvents = (events) => {
    events.forEach((event) => {
        let eventElement = document.createElement('p');
               
        eventElement.innerHTML = `${event.title} - <strong>${event.date}</strong>`;
        eventsContainer.appendChild(eventElement);
    });
}

getEventsJson();

