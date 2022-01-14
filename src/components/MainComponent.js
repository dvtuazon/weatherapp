import React from 'react';
import Search from './SearchComponent';
import Weather from './WeatherComponent';
import { Routes, Route } from 'react-router-dom';


function Main() {
    return (
        <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/weather' element={<Weather />} />
        </Routes>
    )
}

export default Main;