import React, { useState } from 'react';
import Header from './HeaderComponent';
import Search from './SearchComponent';
import Weather from './WeatherComponent';
import Error from './ErrorComponent';
import { Routes, Route } from 'react-router-dom';


function Main() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Search search={search} setSearch={setSearch} setLocation={setLocation} />} />
                <Route path='/weather' element={<Weather search={search} location={location} />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default Main;