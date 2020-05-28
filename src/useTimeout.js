import { useState, useEffect } from 'react';

const useTimeout = (fn) => {
    const [timeoutID, setTimeoutID] = useState();
    // clear timeout on unmout to prevent memory leak
    useEffect(() => () => clearTimeout(timeoutID), [timeoutID]);
    // create timeout
    const startTimeout = (delay) => {
        let id = setTimeout(() => {
            fn();
        }, delay);
        setTimeoutID(id);
    };
    // clear timeout
    const stopTimeout = () => clearTimeout(timeoutID);
    return [startTimeout, stopTimeout];
};

export default useTimeout;
