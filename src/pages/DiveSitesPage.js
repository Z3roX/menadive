import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiveSitesPage = () => {
    const [allDiveSites, setAllDiveSites] = useState([]);
    const [filteredSites, setFilteredSites] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState({ depth: '', difficulty: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/diveSites')
            .then(response => {
                setAllDiveSites(response.data);
                setFilteredSites(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        applyFilters(event.target.value, filter);
    };

    const handleFilterChange = (event) => {
        const newFilter = { ...filter, [event.target.name]: event.target.value };
        setFilter(newFilter);
        applyFilters(searchTerm, newFilter);
    };

    const applyFilters = (searchTerm, filter) => {
        const maxDepth = filter.depth === '40m' ? 40 : (filter.depth === '20m' ? 20 : Infinity);
    
        let filtered = allDiveSites.filter(site => {
            const siteDepth = parseInt(site.depth, 10); // Assuming site.depth is like '20m', '40m', etc.
            return site.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                   siteDepth <= maxDepth &&
                   (filter.difficulty === '' || site.difficulty === filter.difficulty);
        });
        setFilteredSites(filtered);
    };
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="dive-sites-page">
            <h1>Dive Sites</h1>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder="Search dive sites..." 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
                <select name="depth" onChange={handleFilterChange}>
                    <option value="">Any Depth</option>
                    <option value="20m">Up to 20m</option>
                    <option value="40m">Up to 40m</option>
                    {/* More options */}
                </select>
                <select name="difficulty" onChange={handleFilterChange}>
                    <option value="">Any Difficulty</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    {/* More options */}
                </select>
            </div>
            <div className="search-results">
                {filteredSites.map(site => (
                    <div key={site.name} className="dive-site">
                        <h2>{site.name}</h2>
                        <p><strong>Location:</strong> {site.location}</p>
                        <p><strong>Depth:</strong> {site.depth}</p>
                        <p><strong>Difficulty:</strong> {site.difficulty}</p>
                        <img src={site.image} alt={site.name} style={{ width: '100%', height: 'auto' }} />
                        <p>{site.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiveSitesPage;
