import React from "react";
import { useState } from "react";

function Counter() {
    let [counter, setCounter] = useState(5);
    // let counter = 5;

    const increaseValue = () => {
        if (counter == 20) return;
        setCounter(++counter);
        console.log(counter);
    };

    const decreaseValue = () => {
        if (counter == 0) return;
        setCounter(--counter);
        console.log(counter);
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2>The counter value is : {counter}</h2>
            <button onClick={increaseValue}>Increase value {counter}</button>
            <button onClick={decreaseValue}>Decrease value {counter}</button>
        </>
    );
}

export default Counter;
