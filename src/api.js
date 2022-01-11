const key = "45ee0388848fe31389ddda5caa15726b";

const weather = {};

function getWeather(city) {
  let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res;
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

export default getWeather;