import React from 'react';
import Navigation from './Navigation';
import logo from '../images/logo.jpg';
import '../css/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Menadive Divecenter Logo" className="logo" />
            <Navigation />
        </header>
    );
}

export default Header;
