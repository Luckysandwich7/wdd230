const currentTemp = document.querySelector('#currenttemp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=3af250634d071cb3f84c2c5c48e9d30a`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //temp
            displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherdata) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = 'https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png';
    const desc = weathData.weather[0].description

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
}