const inputbox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity-h');
const wind_speed = document.querySelector('.wind-speed');


async function checkweather(city) {
    const api_key = "bd609da38d723922badef5dec4cc4530";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

   

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {

        case 'Clouds':
            weather_img.src = "./assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./assets/clear.png";
            break;

        case 'Rain':
            weather_img.src = "./assets/rain.png";
            break;

        case 'Mist':
            weather_img.src = "./assets/mist.png";
            break;

        case 'Snow':
            weather_img.src = "./assets/snow.png";
            break;

    }
}

searchBtn.addEventListener('click', () => {
    checkweather(inputbox.value);
});
