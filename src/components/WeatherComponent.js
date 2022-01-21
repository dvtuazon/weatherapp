import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import Error from './ErrorComponent';
import { Container, Row } from 'reactstrap';

function Weather({ location }) {

    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;
        const fetchWeather = () => {
            return fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(data => {
                console.log(data.name);
                console.log(data);
                // setData(data);
                setName(data.name);
                setTemp(data.main.temp);
                setIcon(data.weather[0].icon);
            })
            .catch(err => console.log(err))
        }
        fetchWeather();
    }, [])

    if (data != "undefined") {
        return (
            <Container className='vertical-center'>
                <Row>
                    <h1>Right now in {name}...</h1>
                </Row>
                <Row>
                    <h1>Temperature: {temp} F&deg;</h1>
                </Row>
            </Container>
        )
    } else return <h1>undefined</h1>
}

export default Weather;