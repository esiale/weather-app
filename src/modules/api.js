import fetchWeather from './fetch';

const populateDOM = (city) => {
  fetchWeather(city).then((data) => {
    if (data.status === 404) {
      const search = document.getElementById('search');
      search.value = 'City not found!';
      return;
    }
    const cityName = document.querySelector('.city');
    cityName.textContent = data.name;
    const icon = document.querySelector('.icon img');
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    const temp = document.querySelector('.temp');
    temp.textContent = `${data.main.temp}\xB0`;
    const description = document.querySelector('.description');
    description.textContent = data.weather[0].description;
    const feelsLike = document.querySelector('.feels-like p');
    feelsLike.textContent = `${data.main.feels_like}\xB0`;
    const pressure = document.querySelector('.pressure p');
    pressure.textContent = `${data.main.pressure} hPa`;
    const humidity = document.querySelector('.humidity p');
    humidity.textContent = `${data.main.humidity}%`;
  });
};

export default populateDOM;

populateDOM('Bialystok');
