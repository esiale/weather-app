import populateDOM from './api';

const searchWeather = (e) => {
  if (e.key !== 'Enter' && e.type !== 'click') return;
  const search = document.getElementById('search');
  if (search.value === '') return;
  populateDOM(search.value);
};

const addListeners = () => {
  const icon = document.querySelector('.search-icon');
  icon.addEventListener('click', searchWeather);
  const search = document.getElementById('search');
  search.addEventListener('keyup', searchWeather);
};

addListeners();

export default addListeners;
