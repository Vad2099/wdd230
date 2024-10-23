// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myGraphic = document.querySelector('#graphic');
const myTemperature = document.querySelector('#temperature');

//create require variables for the url
const myKey = "a300e7586de5ba4d1a68125081b8eef2";
const myLat = "19.49";
const myLong = "-99.13";

//construct a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`


async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch(error) {
        console.log(error);
    }  
}

//display de JSON data onto my web page
function displayResults(data) {
    console.log("hello");
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}


//start the process 
apiFetch();