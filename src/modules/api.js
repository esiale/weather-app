import fetchWeather from './fetch';

// fetchWeather('London').then((response) => console.log(response));

const showLoading = () => {
  const icon = document.createElement('span');
  icon.textContent = 'sync';
  icon.className = 'material-icons-outlined loading-icon';

  const wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(icon);
};

const processData = (city) => {
  fetchWeather(city).then((data) => {
    const cityName = document.querySelector('.city');
    cityName.textContent = data.name;
    const icon = document.querySelector('.icon');
    const iconAPI = new Image();
    iconAPI.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    icon.appendChild(iconAPI);
    const temp = document.querySelector('.temp');
    temp.textContent = `${data.main.temp}\xB0`;
    const description = document.querySelector('.description');
    description.textContent = data.weather[0].description;
    const feelsLike = document.querySelector('.feels-like');
    const feelsLikePara = document.createElement('p');
    feelsLikePara.textContent = `${data.main.feels_like}\xB0`;
    feelsLike.appendChild(feelsLikePara);
    // const maxTemp = document.querySelector('.max-temp');
    // maxTemp.textContent = `${data.main.temp_max}\xB0`;
    // const minTemp = document.querySelector('.min-temp');
    // minTemp.textContent = `${data.main.temp_min}\xB0`;
    const pressure = document.querySelector('.pressure');
    const pressurePara = document.createElement('p');
    pressurePara.textContent = `${data.main.pressure} hPa`;
    pressure.appendChild(pressurePara);
    const humidity = document.querySelector('.humidity');
    const humidityPara = document.createElement('p');
    humidityPara.textContent = `${data.main.humidity}%`;
    humidity.appendChild(humidityPara);
    console.log(data);
  });
};

processData('Bialystok');
