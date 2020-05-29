import React, { useState } from 'react';
import useTimeout from './hooks/useTimeout';
import useLetters from './hooks/useLetters';
import DifficultySelection from './components/DifficultySelection';
import DisplayResults from './components/DisplayResults';
import InputSection from './components/InputSection';
import Countdown from './components/Countdown';

function App() {
    const [randomLetter, setRandomLetter] = useState(null);
    const [difficulty, setDifficulty] = useState(3500);
    const [letters, setLetters, initialLetterState] = useLetters();
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
            <Countdown randomLetter={randomLetter} difficulty={difficulty} />
            {randomLetter ? (
                <button onClick={stopGame}>Stop Game</button>
            ) : (
                <button onClick={startNewGame}>Start Game</button>
            )}
            <DisplayResults letters={letters} />
        </>
    );
}

export default App;
