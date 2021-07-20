const fetchWeather = (city) => {
  const data = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=dda37b8a9a1924fb4180ffe90b49fe2b`,
    {
      mode: 'cors'
    }
  )
    .then((response) => {
      if (!response.ok) throw response;
      return response.json();
    })
    .then((response) => response)
    .catch((error) => error);
  return data;
};

export default fetchWeather;
