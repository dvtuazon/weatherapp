import React from 'react';
import Search from './SearchComponent';
import { Routes, Route } from 'react-router-dom';


function Main() {
    return (
        <Routes>
            <Route path='/' element={<Search />} />
        </Routes>
    )
}

export default Main;