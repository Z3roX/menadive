import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        // Implement search functionality or API call
    };
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/divesites">Dive Sites</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={handleSearchChange} 
            />
        </nav>
    );
}

export default Navigation;
