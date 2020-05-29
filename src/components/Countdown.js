import React, { useEffect, useState } from 'react';

function Countdown({ randomLetter, difficulty }) {
    const [count, setCount] = useState();

    useEffect(() => {
        if (randomLetter) {
            const id = setInterval(() => {
                setCount((prevCount) => prevCount - 100);
            }, 100);
            return () => {
                clearInterval(id);
                setCount(difficulty);
            };
        }
    }, [difficulty, randomLetter]);

    useEffect(() => {
        setCount(difficulty);
    }, [difficulty]);

    return <h4>countdown: {count}</h4>;
}

export default Countdown;
