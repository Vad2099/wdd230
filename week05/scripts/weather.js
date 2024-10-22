// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.65&units=imperial&appid=a300e7586de5ba4d1a68125081b8eef2';

async function apiFetch() {
    try {
        const response = await fetch(url);
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



function displayResults(data) {
    // Muestra la temperatura en el elemento con el id 'current-temp'
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  
    // Construye la URL del ícono utilizando el código del ícono de OpenWeatherMap
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    // Obtén la descripción del clima
    let desc = data.weather[0].description;
  
    // Asigna atributos a la imagen del ícono de clima
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  
    // Muestra la descripción del clima en el elemento figcaption
    captionDesc.textContent = `${desc}`;
}
  
// Llama a la función después de obtener los datos en apiFetch()
// Reemplaza displayResults(data) en lugar del console.log(data)
  

apiFetch();

