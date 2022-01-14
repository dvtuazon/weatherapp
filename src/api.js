import showWeather from './components/WeatherComponent';

function fetchWeather(location) {
    console.log(location);
    const key = "45ee0388848fe31389ddda5caa15726b";
    // let url = `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    })
    .then(data => {
        console.log(data);
        showWeather(data)
    })
    .catch(err => console.log(err))
}

export default fetchWeather;