import showWeather from './components/WeatherComponent';

function fetchWeather(location) {
    console.log(location);
    const key = "45ee0388848fe31389ddda5caa15726b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

    fetch(url)
    .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        let resjson = res.json();
        return resjson;
    })
    .then(data => {
        console.log(data);
        showWeather(data)
    })
    .catch(err => console.log(err))
}

export default fetchWeather;