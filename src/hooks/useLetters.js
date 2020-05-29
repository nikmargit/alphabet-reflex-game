import { useEffect, useState } from 'react';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function useLetters() {
    const [letters, setLetters] = useState([]);
    const [innitialLetterState, setInnitialLetterState] = useState([]);

    useEffect(() => {
        const initialLetters = ALPHABET.map((character, index) => ({
            character,
            ordinal: index + 1,
            status: null,
        }));
        setInnitialLetterState(initialLetters);
        setLetters(initialLetters);
    }, []);

    return [letters, setLetters, innitialLetterState];
}

export default useLetters;
