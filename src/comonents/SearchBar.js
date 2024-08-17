// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">→</button>
        </div>
    );
};

export default SearchBar;
