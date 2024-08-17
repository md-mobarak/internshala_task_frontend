// src/components/CardGrid.js
import React from 'react';
import Card from './Card';
import './CardGrid.css';

const CardGrid = ({ cards }) => {
    return (
        <div className="card-grid">
            {cards.map((card) => (
                <Card key={card.id} title={card.title} description={card.description} />
            ))}
        </div>
    );
};

export default CardGrid;
