import React from 'react';
import { Navbar, NavLink } from 'react-bootstrap';

function Header() {
    return (
        <Navbar className='navbar'>
            <NavLink href='https://openweathermap.org/api' target='_blank' className='link'>Powered by OpenWeatherMap API</NavLink>
            <NavLink href='https://github.com/dvtuazon/weatherapp' target='_blank' className='link ms-auto'><i className='fa fa-github fa-fw'></i>GitHub</NavLink>
        </Navbar>
    )
}

export default Header;