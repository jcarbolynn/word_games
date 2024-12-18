import './App.css'

// src/App.js
// import React from 'react';
import Board from './components/board';

function App() {
  const letters = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  const fetchRelatedWords = async (word) => {
    try {
      const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word}`);
      const data = await response.json();
      debugger
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const playerWord = event.target.elements.playerWord.value;
    console.log('Form submitted with input:', playerWord);

    fetchRelatedWords(playerWord);
  };

  // function using playerWord to make word list

  return (
    <div className="App">


      <form onSubmit={handleSubmit}>
        <input name="playerWord" placeholder='word'/>
        <button type="submit">Submit</button>
      </form>

      <h1>Board</h1>
      <Board letters={letters} />
    </div>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Word Games</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
