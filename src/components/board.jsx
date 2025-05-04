

// import { useState, useEffect } from 'react';
// import { Card } from '@/components/ui/card';




// type Coordinate = {
//   row: number;
//   col: number;
// };

// type Direction = {
//   rowOffset: number;
//   colOffset: number;
//   name: string;
// };

// interface WordSearchProps {
//   /** List of words to place in the grid */
//   words?: string[];
//   /** Size of the grid (number of rows/columns) */
//   gridSize?: number;
// }




// const DEFAULT_WORDS = ['REACT', 'TYPESCRIPT', 'CODE', 'DEVELOPMENT'];
// const DEFAULT_GRID_SIZE = 12;

// const WordSearchGrid = ({
//   words = DEFAULT_WORDS,
//   gridSize = DEFAULT_GRID_SIZE,
// }: WordSearchProps) => {
  

  
//   const [grid, setGrid] = useState<string[][]>([]);
//   const [placedWords, setPlacedWords] = useState<string[]>([]);
//   const [skippedWords, setSkippedWords] = useState<string[]>([]);

  


//   const DIRECTIONS: Direction[] = [
//     { rowOffset: 0, colOffset: 1, name: 'horizontal' },
//     { rowOffset: 1, colOffset: 0, name: 'vertical' },
//     { rowOffset: 1, colOffset: 1, name: 'diagonal-down' },
//     { rowOffset: 1, colOffset: -1, name: 'diagonal-up' }
//   ];

  


//   const getRandomLetter = (): string => {
//     return String.fromCharCode(65 + Math.floor(Math.random() * 26));
//   };

  


//   const initializeGrid = (): string[][] => {
//     return Array(gridSize)
//       .fill(null)
//       .map(() =>
//         Array(gridSize)
//           .fill(null)
//           .map(() => '')
//       );
//   };

  


//   const placeWordAtPosition = (
//     word: string,
//     startPos: Coordinate,
//     direction: Direction
//   ): boolean => {
//     let currentRow = startPos.row;
//     let currentCol = startPos.col;
    
//     // Check if word fits in grid boundaries
//     if (
//       currentRow + word.length * direction.rowOffset > gridSize - 1 ||
//       currentRow + word.length * direction.rowOffset < 0 ||
//       currentCol + word.length * direction.colOffset > gridSize - 1 ||
//       currentCol + word.length * direction.colOffset < 0
//     ) {
//       return false;
//     }

//     // Check if space is available
//     for (let i = 0; i < word.length; i++) {
//       const checkRow = currentRow + i * direction.rowOffset;
//       const checkCol = currentCol + i * direction.colOffset;
      
//       if (grid[checkRow][checkCol] && grid[checkRow][checkCol] !== word[i]) {
//         return false;
//       }
//     }

//     // Place the word
//     for (let i = 0; i < word.length; i++) {
//       const newRow = currentRow + i * direction.rowOffset;
//       const newCol = currentCol + i * direction.colOffset;
//       grid[newRow][newCol] = word[i];
//     }

//     return true;
//   };

  


//   const tryPlaceWord = (word: string): boolean => {
//     // Shuffle directions to randomize placement order
//     const shuffledDirections = [...DIRECTIONS].sort(() => Math.random() - 0.5);
    
//     for (const direction of shuffledDirections) {
//       // Try multiple random positions
//       for (let attempts = 0; attempts < 50; attempts++) {
//         const startPos: Coordinate = {
//           row: Math.floor(Math.random() * gridSize),
//           col: Math.floor(Math.random() * gridSize)
//         };
        
//         if (placeWordAtPosition(word, startPos, direction)) {
//           return true;
//         }
//       }
//     }
    
//     return false;
//   };

  


//   useEffect(() => {
//     const newGrid = initializeGrid();
//     const placedWordsList: string[] = [];
//     const skippedWordsList: string[] = [];

//     // Sort words by length (longest first) for better packing
//     const sortedWords = [...words].sort((a, b) => b.length - a.length);

//     for (const word of sortedWords) {
//       if (tryPlaceWord(word.toUpperCase())) {
//         placedWordsList.push(word);
//       } else {
//         skippedWordsList.push(word);
//       }
//     }

//     // Fill remaining spaces with random letters
//     for (let i = 0; i < gridSize; i++) {
//       for (let j = 0; j < gridSize; j++) {
//         if (!newGrid[i][j]) {
//           newGrid[i][j] = getRandomLetter();
//         }
//       }
//     }

//     setGrid(newGrid);
//     setPlacedWords(placedWordsList);
//     setSkippedWords(skippedWordsList);
//   }, [words, gridSize]);

  


//   return (
//     <Card className="w-fit mx-auto">
//       <div className="grid gap-[2px] bg-muted p-4 rounded-lg">
//         {grid.map((row, rowIndex) =>
//           row.map((cell, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               className="w-8 h-8 flex items-center justify-center font-bold text-lg border bg-background"
//             >
//               {cell}
//             </div>
//           ))
//         )}
//       </div>

//       <div className="mt-4 p-4 space-y-2">
//         <h3 className="font-semibold">Hidden Words:</h3>
//         <ul className="list-disc pl-5 space-y-1">
//           {placedWords.map((word, index) => (
//             <li key={index}>{word}</li>
//           ))}
//         </ul>

//         {skippedWords.length > 0 && (
//           <>
//             <h3 className="font-semibold mt-2">Words that couldn't fit:</h3>
//             <ul className="list-disc pl-5 space-y-1">
//               {skippedWords.map((word, index) => (
//                 <li key={index}>{word}</li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>
//     </Card>
//   );
// };

// export default WordSearchGrid;

// src/LetterGrid.js
// import React from 'react';
import './board.css'; // Create this CSS file for styling
import PropTypes from 'prop-types';

const Board = ({ words }) => {

    const numLetters = words.length;
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