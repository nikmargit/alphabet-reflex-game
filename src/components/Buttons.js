import React from 'react';

function Buttons({ randomLetter, startNewGame, stopGame }) {
    return (
        <div>
            {randomLetter ? (
                <button className="button is-danger" onClick={stopGame}>
                    Stop Game
                </button>
            ) : (
                <button onClick={startNewGame} className="button is-info">
                    Start Game
                </button>
            )}
        </div>
    );
}

export default Buttons;
