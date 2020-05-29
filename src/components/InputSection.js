import React, { useEffect, useRef } from 'react';

function InputSection({ randomLetter, handleAnswer }) {
    const inputRef = useRef(null);

    useEffect(() => {
        // focus on input when starting game
        if (randomLetter) {
            inputRef.current.focus();
        }
    }, [randomLetter]);

    return (
        <div className="InputSection">
            <input
                type="text"
                name="letter"
                onKeyPress={({ target, which }) => {
                    handleAnswer(String.fromCharCode(which));
                    target.select();
                }}
                maxLength={1}
                ref={inputRef}
                className="input is-primary is-large"
                disabled={!randomLetter}
            />
            <h2 className="title is-2">
                {randomLetter && randomLetter.ordinal}
            </h2>
        </div>
    );
}

export default InputSection;
