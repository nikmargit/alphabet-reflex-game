import React, { useState } from 'react';
import useTimeout from './useTimeout';
import DifficultySelection from './DifficultySelection';
import useLetters from './useLetters';

function App() {
    const [letters, setLetters] = useLetters();
    const [randomLetter, setRandomLetter] = useState(null);
    const [difficulty, setDifficulty] = useState(3500);

    const [startTimeout, stopTimeout] = useTimeout(() =>
        console.log('timeout')
    );

    const startNewGame = (lett) => {
        const unnansweredLetters = lett.filter((letter) => !letter.status);
        const random =
            unnansweredLetters[
                Math.floor(Math.random() * unnansweredLetters.length)
            ];
        setRandomLetter(random);
        startTimeout(difficulty);
    };

    function handleAnswer({ target }) {
        stopTimeout();
        const correctAnswer =
            target.value.toLowerCase() === randomLetter.character;
        const lettersCopy = [...letters].map((letter) => {
            if (letter.character === randomLetter.character) {
                return {
                    ...letter,
                    status: correctAnswer ? 'correct' : 'wrong',
                };
            }
            return letter;
        });
        setLetters(lettersCopy);
        startNewGame(lettersCopy);
        target.select();
    }

    return (
        <>
            <DifficultySelection
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                randomLetter={randomLetter}
            />
            {randomLetter && (
                <>
                    <h1>{randomLetter.ordinal}</h1>
                    <label htmlFor="letter">Input letter</label>
                    <input
                        type="text"
                        name="letter"
                        onChange={handleAnswer}
                        maxLength={1}
                    />
                </>
            )}
            <button onClick={() => startNewGame(letters)}>start game</button>
            <button onClick={stopTimeout}>stopGame</button>
        </>
    );
}

export default App;
