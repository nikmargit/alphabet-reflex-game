import { useState, useEffect, useRef } from 'react';

const useTimeout = (endRound) => {
    const [timeoutID, setTimeoutID] = useState();
    // we need to use ref to make sure we are handling the right random letter
    const updatedFn = useRef();

    useEffect(() => {
        updatedFn.current = endRound;
    }, [endRound]);
    // clear timeout on unmout to prevent memory leak
    useEffect(() => () => clearTimeout(timeoutID), [timeoutID]);
    // create timeout
    const startTimeout = (delay) => {
        let id = setTimeout(() => {
            updatedFn.current();
        }, delay);
        setTimeoutID(id);
    };
    // clear timeout
    const stopTimeout = () => clearTimeout(timeoutID);
    return [startTimeout, stopTimeout];
};

export default useTimeout;
