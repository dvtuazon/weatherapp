import React, { useState } from 'react';
import Search from './SearchComponent';
import Weather from './WeatherComponent';
import Error from './ErrorComponent';
import { Routes, Route } from 'react-router-dom';


function Main() {
    const [location, setLocation] = useState('');
    return (
        <Routes>
            <Route path='/' element={<Search setLocation={setLocation} />} />
            <Route path='/weather' element={<Weather location={location} />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Main;