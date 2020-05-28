import React, { useState } from 'react';
import useTimeout from './hooks/useTimeout';
import useLetters from './hooks/useLetters';
import DifficultySelection from './components/DifficultySelection';
import DisplayResults from './components/DisplayResults';
import InputSection from './components/InputSection';

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
            return stopGame();
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

    function stopGame() {
        stopTimeout();
        setRandomLetter(null);
    }

    return (
        <>
            <DifficultySelection
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                randomLetter={randomLetter}
            />
            <InputSection
                randomLetter={randomLetter}
                handleAnswer={handleAnswer}
            />
            {randomLetter ? (
                <button onClick={stopGame}>stopGame</button>
            ) : (
                <button onClick={startNewGame}>start game</button>
            )}
            <DisplayResults letters={letters} />
        </>
    );
}

export default App;
