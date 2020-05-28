import React from 'react';
import useTimeout from './useTimeout';

function App() {
    const [startTimeout, stopTimeout] = useTimeout(() =>
        console.log('timeout')
    );

    function handleAnswer() {
        stopTimeout();
        console.log('correct or wrong');
        startTimeout(3000);
    }

    return (
        <>
            <h1>ALPHABET GAME</h1>
            <button onClick={() => startTimeout(3000)}>start game</button>
            <button onClick={handleAnswer}>answer</button>
            <button onClick={stopTimeout}>stopGame</button>
        </>
    );
}

export default App;
