// Select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myGraphic = document.querySelector('#graphic');
const myTemperature = document.querySelector('#temperature');
const myForecast = document.querySelector('#forecast');

// Define required variables for the OpenWeatherMap API URL
const myKey = "a300e7586de5ba4d1a68125081b8eef2";
const myLat = "19.49";
const myLong = "-99.13";

// Construct URLs for current weather and 5-day forecast data
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const myForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

// Fetch current weather data from OpenWeatherMap API
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);  // Call function to display the data on the webpage
        } else {
            throw Error(await response.text()); // Throw error if response is not ok
        }
    } catch (error) {
        console.log(error); // Log any errors in the console
    }
}

// Fetch 5-day forecast data from OpenWeatherMap API
async function apiForecastFetch() {
    try {
        const response = await fetch(myForecastURL);
        if (response.ok) {
            const forecastData = await response.json();
            displayForecast(forecastData); // Call function to display the forecast on the webpage
        } else {
            throw Error(await response.text()); // Throw error if response is not ok
        }
    } catch (error) {
        console.log(error); // Log any errors in the console
    }
}

// Display current weather data on the webpage
function displayResults(data) {
    myTown.innerHTML = data.name; // Show the location name
    myDescription.innerHTML = data.weather[0].description; // Display weather description
    myTemperature.innerHTML = `${data.main.temp}&deg;C`; // Display temperature in Celsius
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; // Set the weather icon URL
    myGraphic.setAttribute('src', iconsrc); // Display the weather icon
    myGraphic.setAttribute('alt', data.weather[0].description); // Set alt text for the icon
}

// Display 3-day forecast on the webpage
function displayForecast(forecastData) {
    // Filter the data to get entries around noon (12:00:00) to represent daily temperatures
    const dailyForecast = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
    
    // Prepare HTML content for the 3-day forecast
    let forecastHTML = "";
    dailyForecast.slice(0, 3).forEach(day => { // Limit to 3 days
        const date = new Date(day.dt * 1000); // Convert Unix timestamp to Date object
        const options = { weekday: 'long', month: 'short', day: 'numeric' }; // Date formatting options
        const dayName = date.toLocaleDateString('en-US', options); // Get formatted date string
        const temp = day.main.temp; // Temperature for the day
        const icon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`; // Icon URL for the forecast
        
        // Construct HTML content for each day’s forecast
        forecastHTML += `
            <div class="forecast-day">
                <p>${dayName}</p>
                <img src="${icon}" alt="${day.weather[0].description}">
                <p>${temp}&deg;C</p>
            </div>
        `;
    });
    
    // Insert the forecast HTML content into the forecast container
    myForecast.innerHTML = forecastHTML;
}

// Initialize the process by calling fetch functions for current weather and forecast
apiFetch();
apiForecastFetch();
