import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                Menadive
            </div>
            <Navigation />
        </header>
    );
}

export default Header;
