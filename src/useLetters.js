import { useEffect, useState } from 'react';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function useLetters() {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        const initialLetters = ALPHABET.map((character, index) => ({
            character,
            ordinal: index + 1,
            status: null,
        }));
        setLetters(initialLetters);
    }, []);

    return [letters, setLetters];
}

export default useLetters;
