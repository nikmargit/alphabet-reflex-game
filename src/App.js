import React, { useState } from 'react';
import useTimeout from './useTimeout';
import DifficultySelection from './DifficultySelection';
import useLetters from './useLetters';
import DisplayResults from './DisplayResults';

function App() {
    const [letters, setLetters, initialLetterState] = useLetters();
    const [randomLetter, setRandomLetter] = useState(null);
    const [difficulty, setDifficulty] = useState(3500);
    const [startTimeout, stopTimeout] = useTimeout(handleAnswer);

    const startNewGame = () => {
        setLetters(initialLetterState);
        startNewRound(initialLetterState);
    };

    const startNewRound = (updatedLetters) => {
        const remaining = updatedLetters.filter((letter) => !letter.status);
        if (remaining.length === 0) {
            return setRandomLetter(null);
        }
        const random = remaining[Math.floor(Math.random() * remaining.length)];
        setRandomLetter(random);
        startTimeout(difficulty);
    };

    function handleAnswer(pressedKey = '') {
        stopTimeout();
        const isCorrect = pressedKey.toLowerCase() === randomLetter.character;
        const lettersCopy = [...letters].map((letter) => {
            if (letter.character === randomLetter.character) {
                return {
                    ...letter,
                    status: isCorrect ? 'HIT' : 'MISS',
                };
            }
            return letter;
        });
        setLetters(lettersCopy);
        startNewRound(lettersCopy);
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
                        onKeyPress={(event) => {
                            handleAnswer(String.fromCharCode(event.which));
                            event.target.select();
                        }}
                        maxLength={1}
                    />
                </>
            )}
            {randomLetter ? (
                <button onClick={stopTimeout}>stopGame</button>
            ) : (
                <button onClick={startNewGame}>start game</button>
            )}
            <DisplayResults letters={letters} />
        </>
    );
}

export default App;
