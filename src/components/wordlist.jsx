import React, { useState } from 'react';

const DatamuseExample = () => {
  const [word, setWord] = useState('');
  const [relatedWords, setRelatedWords] = useState([]);

  const fetchRelatedWords = async () => {
    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
      const data = await response.json();
      setRelatedWords(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRelatedWords();
  };

  return (
    <div>
      <h1>Datamuse API Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
        <button type="submit">Get Related Words</button>
      </form>
      <ul>
        {relatedWords.map((relatedWord, index) => (
          <li key={index}>{relatedWord.word}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatamuseExample;