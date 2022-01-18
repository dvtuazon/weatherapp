import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

// export function fetchWeather(location) {
    
//     const key = "45ee0388848fe31389ddda5caa15726b";
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

//     fetch(url)
//     .then(res => {
//         if (!res.ok) throw new Error(res.statusText);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data.name);
//         console.log(data);
//     })
//     .catch(err => console.log(err))
// }

function Weather({ location }) {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const key = "45ee0388848fe31389ddda5caa15726b";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
        fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        })
        .then(data => {
            console.log(data.name);
            console.log(data);
            setData(data);
        })
        .catch(err => console.log(err))
    }, [])
    
    const name = data.name;
    // const weather = data.weather[0];
    // const icon = data.weather[0].icon;
    // const main = data.main;

    if (!data) {
        return navigate('/');
    } else {
        return (
            // <Card>
            //     <CardImg src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
            //     <CardTitle>Right now in {data.name}</CardTitle>
            // </Card>
            <h1>Right now in {name}</h1>
        )
    }
}
    

export default Weather;