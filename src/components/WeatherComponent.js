import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import { Container, Row, Image, Spinner } from 'react-bootstrap';

function Weather({ search, setSearch, location }) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [dt, setDt] = useState('');
    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');

    const key = process.env.REACT_APP_API_KEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`;

    const fetchWeather = () => {
        setLoading(true);
        return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        })
        .then(data => {
            console.log(data.name);
            console.log(data);
            setData(data);
            setName(data.name);
            setCountry(data.sys.country);
            setDt(data.dt);
            setTemp(data.main.temp);
            setIcon(data.weather[0].icon);
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchWeather();
    }, [])

    if (loading) {
        return (
            <Spinner animation='border' role='status' className='center' />
        )
    } else if (search.toLowerCase() !== name.toLowerCase() || !data) {
        return (
            <div className='m-5'>
                <h1>Invalid Location</h1>
                <h2>Your requested location was not found.</h2>
                <Link onClick={e => setSearch('')} to='/' className='btn btn-danger mt-3'>↩ Back</Link>
            </div>
        )
    } else if (search.toLowerCase() === name.toLowerCase() && !loading) {
        return (
            <RenderWeather name={name} country={country} dt={dt} temp={temp} icon={icon} humidity={humidity} wind={wind} setSearch={setSearch} />
        )
    }
}

function RenderWeather({ name, country, dt, temp, icon, humidity, wind, setSearch }) {

    return(
        <>
            <Container className='container-weather vertical-center'>
                <Row className='pt-4'>
                    <h3 className='text-center'>{moment(dt * 1000).format('llll')}</h3>
                </Row>
                <Row>
                    <h3 className='text-center'>Right now in {name}, {country}</h3>
                </Row>
                <Row>
                    <div className='text-center'>
                        <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} fluid/>
                    </div>
                </Row>
                <Row>
                    <h4 className='text-center'>Temperature: {Math.round(temp)} F&deg; / {Math.round((temp - 32) / 1.8)} C&deg;</h4>
                </Row>
                <Row>
                    <h4 className='text-center'>Humidity: {humidity}%</h4>
                </Row>
                <Row className='pb-4'>
                    <h4 className='text-center'>Wind Speed: {Math.round(wind * 2.237)} mph</h4>
                </Row>
                <Row>
                    <Link onClick={e => setSearch('')} to='/' className='btn btn-primary mb-2 search'>Search another location!</Link>
                </Row>
            </Container>
        </>
    )
}

export default Weather;