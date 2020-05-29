import React from 'react';

function DifficultySelection({ difficulty, setDifficulty, randomLetter }) {
    return (
        <div className="DifficultySelection">
            <h5 class="subtitle is-6 is-marginless">Select difficulty:</h5>
            <div className="control">
                <label htmlFor="easy" className="radio" disabled={randomLetter}>
                    <input
                        type="radio"
                        id="easy"
                        name="difficulty"
                        value={5000}
                        onChange={({ target }) =>
                            setDifficulty(Number(target.value))
                        }
                        checked={difficulty === 5000}
                        disabled={randomLetter}
                    />{' '}
                    Easy
                </label>
                <label
                    htmlFor="normal"
                    className="radio"
                    disabled={randomLetter}
                >
                    <input
                        type="radio"
                        id="normal"
                        name="difficulty"
                        value={3500}
                        onChange={({ target }) =>
                            setDifficulty(Number(target.value))
                        }
                        checked={difficulty === 3500}
                        disabled={randomLetter}
                    />{' '}
                    Normal
                </label>
                <label htmlFor="hard" className="radio" disabled={randomLetter}>
                    <input
                        type="radio"
                        id="hard"
                        name="difficulty"
                        value={2500}
                        onChange={({ target }) =>
                            setDifficulty(Number(target.value))
                        }
                        checked={difficulty === 2500}
                        disabled={randomLetter}
                    />{' '}
                    Hard
                </label>
            </div>
        </div>
    );
}

export default DifficultySelection;
