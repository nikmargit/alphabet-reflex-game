import { useState, useEffect, useRef } from 'react';

const useTimeout = (fn) => {
    const [timeoutID, setTimeoutID] = useState();

    const updatedFn = useRef();

    useEffect(() => {
        updatedFn.current = fn;
    }, [fn]);
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
