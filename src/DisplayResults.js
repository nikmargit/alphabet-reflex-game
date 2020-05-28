import React from 'react';

const initialCount = { hits: 0, misses: 0, remaining: 0 };

function DisplayResults({ letters }) {
    const correctCount = letters.reduce((obj, { status }) => {
        const objCopy = { ...obj };
        if (!status) {
            objCopy.remaining++;
        } else if (status === 'HIT') {
            objCopy.hits++;
        } else {
            objCopy.misses++;
        }
        return objCopy;
    }, initialCount);

    const { hits, misses, remaining } = correctCount;
    return (
        <>
            <p>Hit: {hits}</p>
            <p>Miss: {misses}</p>
            <p>Remaining:{remaining}</p>
            {letters.map(({ character, ordinal, status }) => {
                const color = status && (status === 'HIT' ? 'green' : 'red');
                return (
                    <p
                        style={{
                            display: 'inline-block',
                            marginRight: 16,
                            color,
                        }}
                        key={character}
                    >
                        {ordinal}|{character.toUpperCase()}
                    </p>
                );
            })}
        </>
    );
}

export default DisplayResults;
