// src/LetterGrid.js
// import React from 'react';
import './board.css'; // Create this CSS file for styling
import PropTypes from 'prop-types';

const Board = ({ letters }) => {

    const numLetters = letters.length;
    const gridSize = Math.ceil(Math.sqrt(numLetters));

    return (
    <div
        className="grid-container"
        style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Set columns dynamically
      }}
    >
        {letters.map((letter, index) => (
            <div key={index} className="grid-item">
                {letter}
            </div>
        ))}
    </div>
    );
};

Board.propTypes = {
    letters: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Board;