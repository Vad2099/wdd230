const baseURL = "https://vad2099.github.io/wdd230/";
const linksURL = "https://vad2099.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    // Selecciona la sección donde van los enlaces dinámicos
    const activitySection = document.querySelector('.card ul');
    
    // Limpia el contenido estático (si es necesario)
    activitySection.innerHTML = '';

    // Itera sobre cada semana
    weeks.weeks.forEach(week => {
        // Crea el contenedor de la semana
        const weekItem = document.createElement('li');
        const weekTitle = document.createElement('a');
        weekTitle.textContent = week.week;
        weekTitle.href = "#"; // Puedes enlazar a algo relacionado con la semana si es necesario
        weekItem.appendChild(weekTitle);
        
        // Itera sobre los enlaces de cada semana
        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title + " | ";
            weekItem.appendChild(linkElement);
        });
        
        // Agrega los elementos al DOM
        activitySection.appendChild(weekItem);
    });
}

// Llama a la función para obtener y mostrar los enlaces
getLinks();
