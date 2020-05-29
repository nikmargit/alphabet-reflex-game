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

    const percentage = (count * 100) / difficulty;

    return (
        <div className="Countdown">
            <div className="background has-background-grey-light">
                <div
                    className="line has-background-primary"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

export default Countdown;
