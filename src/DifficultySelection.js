import React from 'react';

function DifficultySelection({ difficulty, setDifficulty, randomLetter }) {
    return (
        <>
            <p>Select difficulty:</p>
            <input
                type="radio"
                id="easy"
                name="difficulty"
                value={5000}
                onChange={({ target }) => setDifficulty(Number(target.value))}
                checked={difficulty === 5000}
                disabled={randomLetter}
            />
            <label htmlFor="easy">Easy</label>
            <input
                type="radio"
                id="normal"
                name="difficulty"
                value={3500}
                onChange={({ target }) => setDifficulty(Number(target.value))}
                checked={difficulty === 3500}
                disabled={randomLetter}
            />
            <label htmlFor="normal">Normal</label>
            <input
                type="radio"
                id="hard"
                name="difficulty"
                value={2500}
                onChange={({ target }) => setDifficulty(Number(target.value))}
                checked={difficulty === 2500}
                disabled={randomLetter}
            />
            <label htmlFor="hard">Hard</label>
        </>
    );
}

export default DifficultySelection;
