import React, { useState } from 'react';

const RandomWord = () => {
    const getRandomWord = async () => {
        try {
            const response = await fetch(`https://random-word-api.herokuapp.com/word`);
            const data = await response.json();
            console.log(data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
    };

    return (
        <div className="random-word">
            <input name="playerWord" placeholder='word'/>
            <button type="e-flat">Random</button>
        </div>
    );
};

export default RandomWord;