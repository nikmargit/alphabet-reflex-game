import React, { useEffect, useRef } from 'react';

function InputSection({ randomLetter, handleAnswer }) {
    const inputRef = useRef(null);

    useEffect(() => {
        // focus on input when starting game
        if (randomLetter) {
            inputRef.current.focus();
        }
    }, [randomLetter]);

    if (!randomLetter) {
        return <h3>Start game</h3>;
    }

    return (
        <>
            <h1>{randomLetter.ordinal}</h1>
            <label htmlFor="letter">Input letter</label>
            <input
                type="text"
                name="letter"
                onKeyPress={({ target, which }) => {
                    handleAnswer(String.fromCharCode(which));
                    target.select();
                }}
                maxLength={1}
                ref={inputRef}
            />
        </>
    );
}

export default InputSection;
