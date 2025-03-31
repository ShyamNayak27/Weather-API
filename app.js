//d726e8e56326d19dbec7f0d4a9007963

const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#tempimg');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#tempmax');
const tempMin = document.querySelector('#tempmin');
const searchButton = document.querySelector('#searchIcon');
const searchInput = document.getElementById('searchbarinput');

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Set Date
const dateObj = new Date();
const month = monthNames[dateObj.getUTCMonth()];
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
date.innerHTML = `${month} ${day}, ${year}`;

// Fetch Weather Data
const getWeather = async () => {
    const cityName = searchInput.value.trim();
    
    if (cityName === "") {
        alert("Please enter a city name.");
        return;
    }

    try {
        const apiKey = "d726e8e56326d19dbec7f0d4a9007963";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d726e8e56326d19dbec7f0d4a9007963&units=metric`);


        if (!response.ok) {
            throw new Error(`City not found: ${cityName}`);
        }

        const weatherData = await response.json();
        console.log(weatherData);

        city.innerHTML = weatherData.name;
        description.innerHTML = weatherData.weather[0].description;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
        tempMax.innerHTML = `${Math.round(weatherData.main.temp_max)}°C`;
        tempMin.innerHTML = `${Math.round(weatherData.main.temp_min)}°C`;
        searchInput.value = "";

    } catch (error) {
        alert(error.message);
        console.log(error);
    }
};

// Add Event Listeners
searchButton.addEventListener('click', getWeather);

// ✅ Allow pressing "Enter" to search
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});
