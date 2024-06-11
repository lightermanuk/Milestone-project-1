const apiKey = 'f224505bb69bcab51e39607b0c30f897';
const city = 'Portland, GB';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const temperature = data.main.temp;
        const weather = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById('weather').innerHTML = `${temperature}°C, ${weather} <img src="${iconUrl}" alt="Weather Icon">`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);