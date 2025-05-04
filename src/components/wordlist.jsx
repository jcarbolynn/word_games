import React, { useState } from 'react';
// import RandomWord from './components/randomword'; 

const RelatedWords = () => {
  const [word, setWord] = useState('');
  const [relatedWords, setRelatedWords] = useState([]);

  const fetchRelatedWords = async () => {
    try {
      // console.log(word);
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
      const data = await response.json();
      setRelatedWords(data.map(item => item.word));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getRandomWord = async () => {
    try {
      const response = await fetch(`https://random-word-api.herokuapp.com/word`);
      const data = await response.json();
      setWord(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setWord(event.target.value);
    console.log(word);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setWord(event.target.elements.playerWord.value);
    // console.log(event.target.elements.playerWord.value);
    console.log(word);
    fetchRelatedWords();
  };


  const numWords = relatedWords.length;
  const gridSize = Math.ceil(Math.sqrt(numWords));

  return (
    <div>
      <div className="input-word">
        <form onSubmit={handleSubmit}>
          <input name="playerWord" placeholder="word" onChange={handleInputChange} value={word} />
          <button type="submit">Submit</button>
          {/* <RandomWord/> */}
        </form>

        <button type="e-flat" onClick={getRandomWord}>Random</button>
      </div>

      <div
        className="word-list-container"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`, // Set columns dynamically
          gap: '1rem' // for spacing
      }}
        >
        {relatedWords.map((word, index) => (
            <div key={index} className="word-list-item">
                {word}
            </div>
      ))}
      </div>
    </div>
  );
};

export default RelatedWords;