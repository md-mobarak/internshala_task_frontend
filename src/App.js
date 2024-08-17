// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import CardGrid from './components/CardGrid';
import './App.css';
import SearchBar from './comonents/SearchBar';
import CardGrid from './comonents/CardGrid';

const App = () => {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3001/api/v1/cards')
            .then(response => setCards(response.data))
            .catch(error => console.error('Error fetching cards:', error));
    }, []);

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Help Center</h1>
                <button className="submit-request">Submit a request</button>
            </header>
            <main>
                <section className="hero-section">
                    <h2>How can we help?</h2>
                    <SearchBar setSearchTerm={setSearchTerm} />
                </section>
                <section className='grid-container'>
                <CardGrid cards={filteredCards} />
                </section>
            </main>
            <footer className="app-footer">
                <p>© 2024 Company Name. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </footer>
        </div>
    );
}

export default App;
