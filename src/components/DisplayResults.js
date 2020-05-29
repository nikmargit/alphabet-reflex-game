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
        <div className="DisplayResults">
            <div className="letters">
                {letters.map(({ character, ordinal, status }) => {
                    const colorClass = status
                        ? status === 'HIT'
                            ? 'has-text-success'
                            : 'has-text-danger'
                        : '';
                    return (
                        <h3
                            key={character}
                            className={`subtitle is-3 is-inline-block ${colorClass}`}
                        >
                            {ordinal}|{character.toUpperCase()}
                        </h3>
                    );
                })}
            </div>
            <div className="count has-background-light">
                <p>
                    Hit: <span className="has-text-success">{hits}</span>
                </p>
                <p>
                    Miss: <span className="has-text-danger">{misses}</span>
                </p>
                <p>Remaining: {remaining}</p>
            </div>
        </div>
    );
}

export default DisplayResults;
